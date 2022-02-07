import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

function AuthorProfile({currentAuthor}) {
    const [entries, setEntries] = useState([])
    
    useEffect(() => {
        fetch('/journal_entries')
        .then((r) => r.json())
        .then((entryData) => setEntries(entryData))
    }, [])

    const authorEntries = entries.map((entry) => {
        return (<div className='journalentrydiv'>
            <p>{entry.image_url}</p>
            <p>{entry.date}</p>
            <Link to={`/entries/${entry.id}`}>View Entry</Link>
        </div>)
    })

    return (
        <div>
            <div>
                <div>
                    <img src={currentAuthor.avatar_url}></img>
                    <h3>{currentAuthor.first_name} {currentAuthor.last_name}</h3>
                    <p>{currentAuthor.pen_name}</p>
                    <p>{currentAuthor.email}</p>
                    <p>{currentAuthor.bio}</p>
                </div>
                <div>
                    <h3>Journal Entries</h3>
                    <div className='journalentrycontainer'>
                        {authorEntries}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile;