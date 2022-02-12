import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './index.css';

function EditEntry() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [updatedAnswers, setUpdatedAnswers] = useState({});
    const [entryUpdatedNote, setEntryUpdatedNote] = useState('');
    
   useEffect(() => {
       fetch(`/journal_entries/${id}/answers`)
       .then((r) => r.json())
       .then((answerData) => setEntry(answerData))
    }, [id])

    function handleUpdatedAnswers(e) {
        e.preventDefault();
        fetch(`/journal_entries/${id}/answers`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({updatedAnswers}),
        })
        setEntryUpdatedNote('Entry updates saved.')
    }

    console.log(entry);
    
    if (entry === null) {
        return (
            'Loading...'
        )
    }
        return (
            <div className='editentrycontainer'>
                <div className='editentryformcontainer'>
                    <form className='editentryform' onSubmit={handleUpdatedAnswers}>
                        <span>
                            <h4 className='editentryformheader'>Update Journal Entry</h4>
                        </span>
                        <div>
                            {
                                entry.map((answer) => {
                                    return (<div className='editentryinputdiv' key={answer.id}>
                                        <p className='editentryformp'>{answer.question.question}</p>
                                        <input 
                                        className='editentryinput' 
                                        value={answer.answer}
                                        onChange={(e) => setUpdatedAnswers((updatedAnswers) => {
                                            updatedAnswers[answer.id] = e.target.value;
                                            return updatedAnswers;
                                        })}></input>
                                    </div>)
                                })
                            }
                        </div>
                        <button className='editentrybutton'>UPDATE ENTRY</button>
                        {entryUpdatedNote ? (<p className='entrysavedp'>{entryUpdatedNote}</p>) : null}
                    </form>
                </div>
            </div>
        )
}

export default EditEntry;