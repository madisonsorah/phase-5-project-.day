import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './index.css';

function EntryDraft() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [answers, setAnswers] = useState({});
    const [entryUpdatedNote, setEntryUpdatedNote] = useState('');
    
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
        setEntryUpdatedNote('Entry updates saved.')
    }

    console.log(answers);
    
    if (entry === null) {
        return (
            'Loading...'
        )
    }
        return (
            <div className='editentrycontainer'>
                <div className='editentryformcontainer'>
                    <form onSubmit={handleUpdatedAnswers}>
                        <span>
                            <h4>Update your journal entry</h4>
                        </span>
                        <div>
                            {
                                entry.questions.map((question) => {
                                    return (<div className='editentryinputdiv' key={question.id}>
                                        <p className='editentryformp'>{question.question}</p>
                                        <input 
                                        className='editentryinput' 
                                        onChange={(e) => setAnswers((answers) => {
                                            answers[question.id] = e.target.value;
                                            return answers;
                                        })}></input>
                                    </div>)
                                })
                            }
                        </div>
                        <button className='editentrybutton'>UPDATE</button>
                        {entryUpdatedNote ? (<p className='entrysavedp'>{entryUpdatedNote}</p>) : null}
                    </form>
                </div>
            </div>
        )
}

export default EntryDraft;