import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function NewEntry({currentAuthor}) {
    const [image_url, setImageUrl] = useState('');
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let navigate = useNavigate();

    function handlePublishEntry(e) {
        e.preventDefault();
        fetch('/journal_entries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            image_url,
            date: today,
            author_id: currentAuthor.id 
            }),
        })
        .then((r) => r.json())
        .then((rData) => navigate(`/entrydraft/${rData.id}`, {replace: true}));
    }

    return (
        <div>
            <div className='newentrycontainer'>
            <div className='newentryformcontainer'>
                <form onSubmit={handlePublishEntry}>
                    <span>
                        <h4>Start a new entry</h4>
                    </span>
                    <div className='newentryinputdiv'>
                        <p className='newentryformp'>HEADER IMAGE</p>
                        <input 
                        className='newentryinput'
                        value={image_url} 
                        onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div>
                    <div>
                        <p className='newentryformp'>ENTRY DATE</p>
                        <p className='newentryformp'>{today}</p>
                    </div>
                    <button className='newentrybutton'>NEW ENTRY</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default NewEntry;