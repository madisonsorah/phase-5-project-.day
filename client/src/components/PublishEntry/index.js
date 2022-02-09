import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function PublishEntry({currentAuthor}) {
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
        });
        navigate('/profile', {replace: true});
    }

    return (
        <div>
            <div className='editentrycontainer'>
            <div className='editentryformcontainer'>
                <form onSubmit={handlePublishEntry}>
                    <span>
                        <h4>Create a new entry</h4>
                    </span>
                    <div>
                        <p>Entry Image</p>
                        <input value={image_url} onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Today's Date</p>
                        <p>{today}</p>
                    </div>
                    <button className='editentrybutton'>CREATE ENTRY</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default PublishEntry;