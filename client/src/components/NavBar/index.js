import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';

function NavBar({currentAuthor, setCurrentAuthor}) {
    const navigate = useNavigate();

    function handleLogOut() {
        fetch('/authorlogout', {method: 'DELETE'}).then((r) => {
          if (r.ok) {
            setCurrentAuthor(null)
          }
        });

        navigate('/', {replace: true});
    }

    return (
        <div>
            {currentAuthor ? (
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/entries'>Browse Entries</Link>
                    <Link to='/profile'>My Profile</Link>
                    <img alt='pixelpad logo'></img>
                    <img alt='author avatar'></img>
                    <Link to='/account'>Hi, Madison.</Link>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            ) : (
                <div>
                    <img alt='pixelpad logo'></img>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <img alt='pixelpad graphic'></img>
                </div>
            )}
        </div>
    )
}

export default NavBar;