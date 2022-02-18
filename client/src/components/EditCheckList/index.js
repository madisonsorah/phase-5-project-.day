import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';

function EditCheckList() {
    const {id} = useParams();
    const [entry, setEntry] = useState(null);
    const [existing_checks, setExistingChecks] = useState([]);
    const [checks, setChecks] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/journal_entries/${id}/checks`)
        .then((r) => r.json())
        .then((checksData) => {
            const c = {};
            checksData.forEach((check) => {
                c[check.id] = check.checked;
            });
            setChecks(c);
            setExistingChecks(checksData);
        })
     
        fetch(`/journal_entries/${id}`)
        .then((r) => r.json())
        .then((entryData) => setEntry(entryData))
    }, [id]);
 
     function handleUpdatedChecks(e) {
         e.preventDefault();
         fetch(`/journal_entries/${id}/checks`, {
           method: 'PATCH',
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
                    <div className='editchecklistcontainer'>
                        {entry.check_list_items.map((check_list_item) => {
                        const checked = existing_checks.find((check) => check.check_list_item_id === check_list_item.id)
                        return (<div className='edititemdiv' key={check_list_item.id}>
                        <input
                            className='editchecklistcheck'
                            checked={checked && checks[checked.id]}
                            onChange={(e) => {
                            const value = e.target.checked;
                            // setChecks((checks) => ({...checks, [checked.id]: value}))
                        }}
                        type='checkbox'/>
                        <span className='editchecklistitem'>{check_list_item.item}</span>
                            </div>
                        )
                    })}
                    </div>
                    <button className='entrydraftbutton'>PUBLISH ENTRY</button>
                </form>
            </div>
        </div>
    )
}

export default EditCheckList;
