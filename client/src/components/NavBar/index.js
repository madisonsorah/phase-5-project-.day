import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';

function NavBar({currentAuthor, setCurrentAuthor, setLogInForm}) {
    const navigate = useNavigate();

    function handleLogOut() {
        fetch('/logout', {method: 'DELETE'}).then((r) => {
          if (r.ok) {
            setCurrentAuthor(null)
          }
        });
        navigate('/', {replace: true});
        setLogInForm(false);
    }

    function handleLogInForm() {
        navigate('/', {replace: true});
        setLogInForm(true);
    }

    return (
        <div className='navbarcontainer'>
            {currentAuthor ? (
                <ul className='navbarul'>
                    <Link className='navbarlink' to='/'>Home</Link>
                    <Link className='navbarlink' to='/entries'>Browse Entries</Link>
                    <Link className='navbarlink' to='/profile'>My Profile</Link>
                    <img className='navbarlogo' alt='.Day logo'></img>
                    <img className='navbar avatar' alt='author avatar'></img>
                    <Link className='navbarlink' to='/account'>Hi, {currentAuthor.first_name}.</Link>
                    <button className='navbarbutton' onClick={handleLogOut}>Log Out</button>
                </ul>
            ) : (
                <div>
                    <Link className='navbarlink' to='/'>Home</Link>
                    <button className='navbarlink' onClick={handleLogInForm}>Log In</button>
                    <Link className='navbarlink' to='/signup'>Sign Up</Link>
                    <img className='navbarlogo' alt='.Day logo'></img>
                </div>
            )}
        </div>
    )
}

export default NavBar;