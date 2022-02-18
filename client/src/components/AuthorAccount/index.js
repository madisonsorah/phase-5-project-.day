import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';

function AuthorAccount({currentAuthor}) {
    const [updatedAccount, setUpdatedAccount] = useState(currentAuthor);
    const [accountUpdatedNote, setAccountUpdatedNote] = useState('');
    const navigate = useNavigate();

    function handleUpdate(e, field) {
        setUpdatedAccount({...updatedAccount, [field]: e.target.value})
    };

    function handleUpdateAccount(e) {
        e.preventDefault();
        fetch(`/authors/${currentAuthor.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedAccount),
        })
        .then(() => {
          navigate('/account', {replace: true})
        })
        setAccountUpdatedNote('Account updates saved.')
    };

    return (
        <div>
            <div className='accountpagecontainer'>
                <div className='accountlinkscontainer'>
                    <h4 className='accountheader'>Account</h4>
                    <div className='accountlinkdiv'>
                        <Link className='accountlink' to='/profile'>Profile</Link>
                    </div>
                    <div className='accountlinkdiv'>
                        <Link className='accountlink' to='/entries'>Entries</Link>
                    </div>
                    <div className='accountlinkdiv'>
                        <Link className='accountlink' to='/newentry'>New Entry</Link>
                    </div>
                    <div className='accountlinkdiv'>
                        <Link className='accountlink' to='/theme'>Theme</Link>
                    </div>
                </div>
                <div className='accountformcontainer'>
                    <form onSubmit={handleUpdateAccount}>
                        <span>
                            <h4 className='accountheader'>Update your account details</h4>
                        </span>
                        <div className='accountinputdiv'>
                            <p className='accountp'>FIRST NAME</p>
                            <input className='accountinput' value={updatedAccount.first_name} onChange={(e) => handleUpdate(e, 'first_name')}></input>
                        </div>
                        <div className='accountinputdiv'>
                            <p className='accountp'>LAST NAME</p>
                            <input className='accountinput' value={updatedAccount.last_name} onChange={(e) => handleUpdate(e, 'last_name')}></input>
                        </div>
                        <div className='accountinputdiv'>
                            <p className='accountp'>PEN NAME</p>
                            <input className='accountinput' value={updatedAccount.pen_name} onChange={(e) => handleUpdate(e, 'pen_name')}></input>
                        </div>
                        <div className='accountinputdiv'>
                            <p className='accountp'>EMAIL</p>
                            <input className='accountinput' value={updatedAccount.email} onChange={(e) => handleUpdate(e, 'email')}></input>
                        </div>
                        <div className='accountinputdiv'>
                            <p className='accountp'>PASSWORD</p>
                            <input className='accountinput' value={updatedAccount.password} onChange={(e) => handleUpdate(e, 'password')}></input>
                        </div>
                        <div className='accountinputdiv'>
                            <p className='accountp'>BIO</p>
                            <textarea className='accountinput' value={updatedAccount.bio} onChange={(e) => handleUpdate(e, 'bio')}></textarea>
                        </div>
                        <button className='accountbutton'>UPDATE</button>
                        {accountUpdatedNote ? (<p className='accountsavedp'>{accountUpdatedNote}</p>) : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthorAccount;