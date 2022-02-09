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
            <div className='entrypagecontainer'>
                <div className='entrypageleft'>
                    <img className='entrypageimage' src={entry.image_url}></img>
                    <p className='entrypagedate'>{entry.date}</p>
                    <Link className='entrypagelink' to={`/editentry/${id}`}>Edit Entry</Link>
                </div>
                <div className='entrypagemiddle'>
                    {
                        answers.map((answer) => {
                            return (<div key={answer.id}>
                                        <h5 className='entrypagequestion'>{answer.question.question}</h5>
                                        <p className='entrypageanswer'>{answer.answer}</p>
                                    </div>)
                            })
                    }
                </div>
                <div classname='entrypageright'>
                    <p>XX</p>
                    <p>XX</p>
                    <p>XX</p>
                </div>
            </div>
        </div>
    )
}

export default EntryPage;