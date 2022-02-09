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
                <div className='profiledetailsdiv'>
                    <div className='profileleft'>
                        <img className='profileavatar' src={currentAuthor.avatar_url}></img>
                    </div>
                    <div className='profileright'>
                        <h3 className='profilename'>{currentAuthor.first_name} {currentAuthor.last_name}</h3>
                        <p className='profilepenname'>{currentAuthor.pen_name}</p>
                        <p className='profileemail'>{currentAuthor.email}</p>
                        <p className='profilebio'>{currentAuthor.bio}</p>
                        <Link className='profileeditlink' to='/account'>Edit Profile</Link>
                    </div>
                </div>
                <div className='profileentrydiv'>
                    <h3 className='profileentries'>Journal Entries</h3>
                    <Link className='profilenewentrylink' to={'/publish'}>New Entry</Link>
                    <div className='profileentrycontainer'>
                        {authorEntries}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile;