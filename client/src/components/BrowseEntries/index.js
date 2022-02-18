import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Calendar from 'react-calendar';
import dotdayjournalgraphic from '../../images/dotdayjournalgraphic.png';
import dotdaydot from '../../images/dotdaydot.png';
import './index.css';

function BrowseEntries() {
    const [entries, setEntries] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('/journal_entries')
        .then((r) => r.json())
        .then((entryData) => setEntries(entryData))
    }, []);

    entries.map((entry) => {
        return (<div className='browseentriesentry'>
            <img className='browseentriesgraphic' src={dotdayjournalgraphic}></img>
            <p className='browseentriesdate'>{entry.date}</p>
            <Link className='browseentriesviewlink' to={`/entries/${entry.id}`}>VIEW ENTRY</Link>
        </div>)
    });

    function formatDate(date) {
        const today = new Date(date);
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };

    function journalEntryDot(date) {
        const formattedDate = formatDate(date);
        const entry = entries.find((entry) => entry.date === formattedDate)
        if (entry) {
            navigate(`/entries/${entry.id}`);
        }
    };

    return (
        <div>
            <div className='browseentriesdiv'>
                <div className='browseentriesdetailsdiv'>
                    <h3 className='browseentriesheader'>Journal Entries</h3>
                    <p className='browseentriesp'>Fill up your dates with dots and view all published entries below.</p>
                    <Link className='browseentriesnewlink' to={'/newentry'}>NEW ENTRY</Link>
                </div>
                <div className='browseentriescontainer'>
                    <Calendar 
                    onClickDay={journalEntryDot}
                    tileContent={({ _, date, view }) => {
                        const formattedDate = formatDate(date);
                        const entry = entries.find((entry) => entry.date === formattedDate)
                        return view === 'month' && entry ? <div className='dotdiv'><img className='dotdaydot' src={dotdaydot}/></div> : null
                    }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BrowseEntries;