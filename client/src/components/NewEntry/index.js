import React from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function NewEntry({currentAuthor}) {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    const fmt_today = mm + '/' + dd + '/' + yyyy;
    let navigate = useNavigate();

    function handlePublishEntry(e) {
        e.preventDefault();
        fetch('/journal_entries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            date: today.toString(),
            author_id: currentAuthor.id 
            }),
        })
        .then((r) => r.json())
        .then((rData) => navigate(`/entrydraft/${rData.id}`, {replace: true}));
    };

    console.log(today)

    return (
        <div>
            <div className='newentrycontainer'>
            <div className='newentryformcontainer'>
                <form className='newentryform' onSubmit={handlePublishEntry}>
                    <span>
                        <h4 className='newentryformheader'>New Entry</h4>
                    </span>
                    <div className='newentrydatediv'>
                        <p className='newentryformp'>ENTRY DATE</p>
                        <p className='newentrydatep'>{fmt_today}</p>
                    </div>
                    <button className='newentrybutton'>START ENTRY</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default NewEntry;