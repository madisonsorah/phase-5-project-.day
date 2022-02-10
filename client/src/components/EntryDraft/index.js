import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './index.css';

function EntryDraft() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [answers, setAnswers] = useState({});
    const [entryPublishedNote, setEntryPublishedNote] = useState('');
    
   useEffect(() => {
       fetch(`/journal_entries/${id}`)
       .then((r) => r.json())
       .then((entryData) => setEntry(entryData))
    }, [id])

    function handleUpdatedAnswers(e) {
        e.preventDefault();
        fetch(`/journal_entries/${id}/answers`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers }),
        })
        setEntryPublishedNote('Entry published.')
    }

    console.log(answers);
    
    if (entry === null) {
        return (
            'Loading...'
        )
    }
        return (
            <div className='entrydraftcontainer'>
                <div className='entrydraftformcontainer'>
                    <form onSubmit={handleUpdatedAnswers}>
                        <span>
                            <h4 className='entrydraftformheader'>Entry prompts</h4>
                        </span>
                        <div>
                            {
                                entry.questions.map((question) => {
                                    return (<div className='entrydraftinputdiv' key={question.id}>
                                        <p className='entrydraftformp'>{question.question}</p>
                                        <input 
                                        className='entrydraftinput' 
                                        onChange={(e) => setAnswers((answers) => {
                                            answers[question.id] = e.target.value;
                                            return answers;
                                        })}></input>
                                    </div>)
                                })
                            }
                        </div>
                        <button className='entrydraftbutton'>PUBLISH ENTRY</button>
                        {entryPublishedNote ? (<p className='entrydraftpublishedp'>{entryPublishedNote}</p>) : null}
                    </form>
                </div>
            </div>
        )
}

export default EntryDraft;