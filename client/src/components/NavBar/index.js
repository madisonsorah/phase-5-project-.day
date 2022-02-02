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
        <div className='navbarcontainer'>
            {currentAuthor ? (
                <ul className='navbarul'>
                    <Link className='navbarlink' to='/'>Home</Link>
                    <Link className='navbarlink' to='/entries'>Browse Entries</Link>
                    <Link className='navbarlink' to='/profile'>My Profile</Link>
                    <img className='navbarlogo' alt='pixelpad logo'></img>
                    <img className='navbar avatar' alt='author avatar'></img>
                    <Link className='navbarlink' to='/account'>Hi, Madison.</Link>
                    <button className='navbarbutton' onClick={handleLogOut}>Log Out</button>
                </ul>
            ) : (
                <div>
                    <img className='navbarlogo' alt='pixelpad logo'></img>
                    <Link className='navbarlink' to='/'>Home</Link>
                    <Link className='navbarlink' to='/login'>Log In</Link>
                    <Link className='navbarlink' to='/signup'>Sign Up</Link>
                    <img className='navbargraphic' alt='pixelpad graphic'></img>
                </div>
            )}
        </div>
    )
}

export default NavBar;