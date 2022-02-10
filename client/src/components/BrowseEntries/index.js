import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import dotdaygraphic from '../../images/dotdaygraphic.png';
import './index.css';

function BrowseEntries() {
    const [entries, setEntries] = useState([])
    
    useEffect(() => {
        fetch('/journal_entries')
        .then((r) => r.json())
        .then((entryData) => setEntries(entryData))
    }, [])

    const authorEntries = entries.map((entry) => {
        return (<div className='browseentriesentry'>
            <img className='browseentriesgraphic' src={dotdaygraphic}></img>
            <p className='browseentriesdate'>{entry.date}</p>
            <Link className='browseentriesviewlink' to={`/entries/${entry.id}`}>VIEW ENTRY</Link>
        </div>)
    })

    return (
        <div>
            <div className='browseentriesdiv'>
                <div className='browseentriesdetailsdiv'>
                    <h3 className='browseentriesheader'>Journal Entries</h3>
                    <p className='browseentriesp'>View all published entries below.</p>
                    <Link className='browseentriesnewlink' to={'/newentry'}>NEW ENTRY</Link>
                </div>
                <div className='browseentriescontainer'>
                    {authorEntries}
                </div>
            </div>
        </div>
    )
}

export default BrowseEntries;