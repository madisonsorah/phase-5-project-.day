import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dotdaylogo from '../../images/dotdaylogo.png'
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
                    <p className='navbardivider'>|</p>
                    <Link className='navbarlink' to='/entries'>Browse Entries</Link>
                    <Link className='navbarlink' to='/profile'>My Profile</Link>
                    <img className='navbarlogologgedin' alt='.Day logo' src={dotdaylogo}></img>
                    <img className='navbaravatar' alt='author avatar'></img>
                    <Link className='navbarlink' to='/account'>Hi, {currentAuthor.first_name}.</Link>
                    <p className='navbardivider'>|</p>
                    <button className='navbarlink' onClick={handleLogOut}>Log Out</button>
                </ul>
            ) : (
                <ul className='navbarul'>
                    <button className='navbarlink' onClick={handleRevertHome}>Home</button>
                    <p className='navbardivider'>|</p>
                    <button className='navbarlink' onClick={handleLogInForm}>Log In</button>
                    <Link className='navbarlink' to='/signup'>Sign Up</Link>
                    <img className='navbarlogo' onClick={handleRevertHome} alt='.Day logo' src={dotdaylogo}></img>
                </ul>
            )}
        </div>
    )
}

export default NavBar;