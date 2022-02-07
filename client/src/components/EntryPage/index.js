import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import './index.css';

function EntryPage() {
    const {id} = useParams();
    const [entry, setEntry] = useState([])

    useEffect(() => {
        fetch(`/journal_entries/${id}`)
        .then((r) => r.json())
        .then((entryData) => setEntry(entryData))
    }, [id])

    return (
        <div>
            <p>{entry.image_url}</p>
            <p>{entry.date}</p>
            <Link to={`/editentry/${entry.id}`}>Edit Entry</Link>
        </div>
    )
}

export default EntryPage;