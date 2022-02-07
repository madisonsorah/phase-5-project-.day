import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './index.css';

function EditEntry() {
    const {id} = useParams();
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    
   useEffect(() => {
       fetch(`/journal_entries/${id}/answers`)
       .then((r) => r.json())
       .then((answerData) => setAnswers(answerData))
   }, [id])

   useEffect(() => {
       fetch('/questions')
       .then((r) => r.json())
       .then((questionData) => setQuestions(questionData))
   }, [answers])


    const qAndAs = answers.map((answer) => {
        return {
            question: questions.find((q) => q.id === answer.question_id),
            response: answer.answer
        }
    });

    return (
        <div className='editentrycontainer'>
            <div className='editentryformcontainer'>
                <form>
                    <span>
                        <h4>Update your journal entry</h4>
                    </span>
                    <div>
                        <div className='editentryinputdiv'>
                            <p className='editentryformp'>{qAndAs[0].question.question}</p>
                            <input className='editentryinput' value={qAndAs[0].response}></input>
                        </div>
                        <div className='editentryinputdiv'>
                            <p className='editentryformp'>{qAndAs[1].question.question}</p>
                            <input className='editentryinput' value={qAndAs[1].response}></input>
                        </div>
                        <div className='editentryinputdiv'>
                            <p className='editentryformp'>{qAndAs[2].question.question}</p>
                            <input className='editentryinput' value={qAndAs[2].response}></input>
                        </div>
                    </div>
                    <button className='editentrybutton'>UPDATE</button>
                </form>
            </div>
        </div>
    )
}

export default EditEntry;