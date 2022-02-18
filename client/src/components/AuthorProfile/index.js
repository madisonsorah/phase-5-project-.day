import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import dotdayjournalgraphic from '../../images/dotdayjournalgraphic.png';
import dotdayavatargraphic from '../../images/dotdayavatargraphic.png';
import './index.css';

function AuthorProfile({currentAuthor}) {
    const [entries, setEntries] = useState([]);
    const [postedToday, setPostedToday] = useState(false);
    
    useEffect(() => {
        fetch('/journal_entries')
        .then((r) => r.json())
        .then((entryData) => {
            const today = formatDate(new Date());

            const authorEntries = entryData.map((entry) => {
                if (formatDate(entry.date.replace('-', '/')) === today) {
                    setPostedToday(true)
                }
                return (<div className='profileentry'>
                    <img className='entrygraphic' src={dotdayjournalgraphic}></img>
                    <p className='entrydate'>{formatDate(entry.date.replace('-', '/'))}</p>
                    <Link className='entrylink' to={`/entries/${entry.id}`}>VIEW ENTRY</Link>
                </div>)
            })
            setEntries(authorEntries);
        })
    }, []);

    function formatDate(date) {
        const today = new Date(date);   
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    };

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
                        {postedToday ? null : <Link className='profilenewentrylink' to={'/newentry'}>NEW ENTRY</Link>}
                    </div>
                    <div className='profileentrycontainer'>
                        {entries}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile;