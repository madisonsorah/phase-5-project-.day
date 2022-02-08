import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './index.css';

function EditEntry() {
    const {id} = useParams();
    const [answers, setAnswers] = useState([]);
    
   useEffect(() => {
       fetch(`/journal_entries/${id}/answers`)
       .then((r) => r.json())
       .then((answerData) => setAnswers(answerData))
    }, [id])

    return (
        <div className='editentrycontainer'>
            <div className='editentryformcontainer'>
                <form>
                    <span>
                        <h4>Update your journal entry</h4>
                    </span>
                    <div>
                        {
                            answers.map((answer) => {
                                return (<div className='editentryinputdiv' key={answer.id}>
                                    <p className='editentryformp'>{answer.question.question}</p>
                                    <input className='editentryinput' value={answer.answer}></input>
                                </div>)
                            })
                        }
                    </div>
                    <button className='editentrybutton'>UPDATE</button>
                </form>
            </div>
        </div>
    )
}

export default EditEntry;