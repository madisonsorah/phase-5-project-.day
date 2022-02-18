import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';

function EditEntry() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [updatedAnswers, setUpdatedAnswers] = useState({});
    const navigate = useNavigate();
    
   useEffect(() => {
       fetch(`/journal_entries/${id}`)
       .then((r) => r.json())
       .then((entryData) => {
            setEntry(entryData)
       })
    }, [id]);

    function handleUpdatedAnswers(e) {
        e.preventDefault();
        fetch(`/journal_entries/${id}/answers`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({updatedAnswers}),
        })
        .then(() => navigate(`/editchecklist/${id}`))
    };
    
    if (entry === null) {
        return (
            'Loading...'
        )
    };

    return (
        <div className='entrydraftcontainer'>
            <div className='entrydraftformcontainer'>
                <form className='entrydraftform' onSubmit={handleUpdatedAnswers}>
                    <span>
                        <h4 className='entrydraftformheader'>Entry Prompts</h4>
                    </span>
                    <div>
                    {entry.questions.map((question) => {
                        const answer = entry.answers.find((answer) => answer.question_id === question.id);
                        return (<div className='entrydraftinputdiv' key={question.id}>
                                    <p className='entrydraftformp'>{question.question}</p>
                                    <textarea 
                                        className='entrydraftinput' 
                                        placeholder={answer.answer}
                                        onChange={(e) => setUpdatedAnswers((updatedAnswers) => {
                                            updatedAnswers[answer.id] = e.target.value;
                                            return updatedAnswers;
                                    })}></textarea>
                                </div>)
                            })
                    }
                    </div>
                    <button className='entrydraftbutton'>NEXT</button>
                </form>
            </div>
        </div>
    )
}

export default EditEntry;