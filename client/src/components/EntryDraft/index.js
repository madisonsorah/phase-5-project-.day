import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';

function EntryDraft() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();
    
   useEffect(() => {
       fetch(`/journal_entries/${id}`)
       .then((r) => r.json())
       .then((entryData) => setEntry(entryData))
    }, [id]);

    function handleUpdatedAnswers(e) {
        e.preventDefault();
        fetch(`/journal_entries/${id}/answers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({answers}),
        })
        .then(() => navigate(`/checklist/${id}`))
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
                            return (<div className='entrydraftinputdiv' key={question.id}>
                                        <p className='entrydraftformp'>{question.question}</p>
                                        <textarea 
                                            className='entrydraftinput' 
                                            onChange={(e) => setAnswers((answers) => {
                                            answers[question.id] = e.target.value;
                                            return answers;
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

export default EntryDraft;