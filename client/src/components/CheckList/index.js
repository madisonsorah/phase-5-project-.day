import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';

function CheckList() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [checks, setChecks] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/journal_entries/${id}`)
        .then((r) => r.json())
        .then((entryData) => setEntry(entryData))
     }, [id]);
 
     function handleUpdatedChecks(e) {
         e.preventDefault();
         fetch(`/journal_entries/${id}/checks`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({checks}),
         })
         .then(() => navigate(`/entries/${id}`))
     };
     
     if (entry === null) {
         return (
             'Loading...'
         )
     };

    return (
        <div className='entrydraftcontainer'>
            <div className='entrydraftformcontainer'>
                <form className='entrydraftform' onSubmit={handleUpdatedChecks}>
                    <span>
                        <h4 className='entrydraftformheader'>Entry Check List</h4>
                    </span>
                <div>
                    {entry.check_list_items.map((check_list_item) => (
                    <div key={check_list_item.id}>
                        <input
                        onChange={() => setChecks((checks) => {
                        checks[check_list_item.id] = true;
                        return checks
                        })}
                        type="checkbox"/>
                        <span>{check_list_item.item}</span>
                    </div>))}
                </div>
                <button className='entrydraftbutton'>PUBLISH ENTRY</button>
            </form>
        </div>
    </div>
    )
}

export default CheckList;