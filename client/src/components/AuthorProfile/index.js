import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import dotdayjournalgraphic from '../../images/dotdayjournalgraphic.png';
import dotdayavatargraphic from '../../images/dotdayavatargraphic.png';
import './index.css';

function AuthorProfile({currentAuthor}) {
    const [entries, setEntries] = useState([])
    
    useEffect(() => {
        fetch('/journal_entries')
        .then((r) => r.json())
        .then((entryData) => setEntries(entryData))
    }, [])

    const authorEntries = entries.map((entry) => {
        return (<div className='profileentry'>
            <img className='entrygraphic' src={dotdayjournalgraphic}></img>
            <p className='entrydate'>{entry.date}</p>
            <Link className='entrylink' to={`/entries/${entry.id}`}>VIEW ENTRY</Link>
        </div>)
    })

    return (
        <div className='profilemaindiv'>
            <div>
                <div className='profiledetailsdiv'>
                    <div className='profileleft'>
                        <img className='profileavatar' src={dotdayavatargraphic}></img>
                    </div>
                    <div className='profileright'>
                        <h3 className='profilename'>{currentAuthor.first_name} {currentAuthor.last_name}</h3>
                        <p className='profilepenname'>@{currentAuthor.pen_name}</p>
                        <p className='profileemail'>{currentAuthor.email}</p>
                        <p className='profilebio'>{currentAuthor.bio}</p>
                        <Link className='profileeditlink' to='/account'>EDIT PROFILE</Link>
                    </div>
                </div>
                <div className='profileentrydiv'>
                    <div className='profileentryheaderdiv'>
                        <h3 className='profileentryheader'>Journal Entries</h3>
                        <Link className='profilenewentrylink' to={'/newentry'}>NEW ENTRY</Link>
                    </div>
                    <div className='profileentrycontainer'>
                        {authorEntries}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile;