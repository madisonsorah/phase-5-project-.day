import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import './index.css';

function EntryPage() {
    const {id} = useParams();
    const [entry, setEntry] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch(`/journal_entries/${id}`)
        .then((r) => r.json())
        .then((entryData) => setEntry(entryData))

        fetch(`/journal_entries/${id}/answers`)
        .then((r) => r.json())
        .then((answerData) => setAnswers(answerData))
     }, [id])

    return (
        <div>
            <div>
                <img src={entry.image_url}></img>
                <p>{entry.date}</p>
                {
                    answers.map((answer) => {
                        return (<div className='entrydiv' key={answer.id}>
                                    <h5 className='entryh5'>{answer.question.question}</h5>
                                    <p className='entryp'>{answer.answer}</p>
                                </div>)
                        })
                }
                <Link to={`/editentry/${id}`}>Edit Entry</Link>
            </div>
        </div>
    )
}

export default EntryPage;