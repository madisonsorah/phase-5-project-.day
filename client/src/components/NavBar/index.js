import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dotdaylogo from '../../images/dotdaylogo.png'
import './index.css';

function NavBar({currentAuthor, setCurrentAuthor, setLogInForm, setErrorMessage, dropDown, setDropDown}) {
    const navigate = useNavigate();

    function handleLogOut() {
        fetch('/logout', {method: 'DELETE'}).then((r) => {
          if (r.ok) {
            setCurrentAuthor(null)
            setDropDown(!dropDown)
          }
        });
        navigate('/', {replace: true});
        setLogInForm(false);
    }

    function handleLogInForm() {
        navigate('/', {replace: true});
        setLogInForm(true);
        setErrorMessage('');
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
                    <Link className='navbarlink' to='/profile'>Profile</Link>
                    <Link className='navbarlink' to='/entries'>View Entries</Link>
                    <img className='navbarlogologgedin' alt='.Day logo' src={dotdaylogo}></img>
                    <button onClick={() => setDropDown(!dropDown)} className='navbarlink'>Hello, {currentAuthor.first_name}.</button>
                    {/* <p className='navbardivider'>|</p>
                    <button className='navbarlink' onClick={handleLogOut}>Log Out</button> */}
                    {dropDown === true ? (
                        <div className='navbardropdown'>
                            <div className='dropdowndiv'>
                                <Link className='navbarlink' onClick={() => setDropDown(!dropDown)} to={`/account`}>Account</Link>
                            </div>
                            <div className='dropdowndiv'>
                                <button className='navbarlink' onClick={handleLogOut}>Log Out</button>
                            </div>
                            <div className='dropdownclosediv'>
                                <button className='navbarlink' onClick={() => setDropDown(!dropDown)}>Close</button>
                            </div>
                        </div>) : null}
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