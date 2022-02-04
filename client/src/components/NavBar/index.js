import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dotdaylogo from '../images/dotdaylogo.png'
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

    function handleRevertHome() {
        navigate('/', {replace: true});
        setLogInForm(false);
    }

    return (
        <div className='navbarcontainer'>
            {currentAuthor ? (
                <ul className='navbarul'>
                    <Link to='/' className='navbarlink'>Home</Link>
                    <Link className='navbarlink' to='/entries'>Browse Entries</Link>
                    <Link className='navbarlink' to='/profile'>My Profile</Link>
                    <img className='navbarlogologgedin' alt='.Day logo' src={dotdaylogo}></img>
                    <img className='navbaravatar' alt='author avatar'></img>
                    <Link className='navbarlink' to='/account'>Hi, {currentAuthor.first_name}.</Link>
                    <button className='navbarlink' onClick={handleLogOut}>Log Out</button>
                </ul>
            ) : (
                <div>
                    <button onClick={handleRevertHome} className='navbarlink'>Home</button>
                    <button className='navbarlink' onClick={handleLogInForm}>Log In</button>
                    <Link className='navbarlink' to='/signup'>Sign Up</Link>
                    <img onClick={handleRevertHome} className='navbarlogo' alt='.Day logo' src={dotdaylogo}></img>
                </div>
            )}
        </div>
    )
}

export default NavBar;