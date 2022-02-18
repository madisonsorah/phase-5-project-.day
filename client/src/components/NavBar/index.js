import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dotdaylogo from '../../images/dotdaylogo.png';
import dotdaydot from '../../images/dotdaydot.png';
import './index.css';

function NavBar({currentAuthor, setCurrentAuthor, setLogInForm, setErrorMessage}) {
    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState(false);

    function handleLogOut() {
        fetch('/logout', {method: 'DELETE'}).then((r) => {
          if (r.ok) {
            setCurrentAuthor(null)
          }
        });
        navigate('/', {replace: true});
        setLogInForm(false);
    };

    function handleLogInForm() {
        navigate('/', {replace: true});
        setLogInForm(true);
        setErrorMessage('');
    };

    function handleRevertHome() {
        navigate('/', {replace: true});
        setLogInForm(false);
    };

    return (
        <div className='navbarcontainer'>
            {currentAuthor ? (
                <ul className='navbarul'>
                    <Link to='/' className='navbarlink'>Home</Link>
                    <p className='navbardivider'>|</p>
                    <Link className='navbarlink' to='/profile'>Profile</Link>
                    <Link className='navbarlink' to='/entries'>Entries</Link>
                    <Link className='navbarlink' to='/themes'>Themes</Link>
                    <img className='navbarlogologgedin' alt='.Day logo' src={dotdaylogo}></img>
                    <span className='navbardropdownspan'>
                        <img className='navbardotdaydot' src={dotdaydot}/>
                        <button className='navbarnamelink'>Hello, {currentAuthor.first_name}.</button>
                        <div className='navbardropdown'>
                            <div className='dropdowndiv'>
                                <Link className='dropdownlink' to={`/account`}>Account</Link>
                            </div>
                            <div className='dropdowndiv'>
                                <button className='dropdownlink' onClick={handleLogOut}>Log Out</button>
                            </div>
                            <div className='dropdownclosediv'>
                                <button className='dropdownlink' onClick={() => setDropDown(!dropDown)}>Close</button>
                            </div>
                        </div>
                    </span>
                </ul>
            ) : (
                <ul className='navbarul'>
                    <button className='navbarlink' onClick={handleRevertHome}>Home</button>
                    <p className='navbardivider'>|</p>
                    <Link className='navbarlink' to='/about'>About</Link>
                    <Link className='navbarlink' to='/themes'>Themes</Link>
                    <img className='navbarlogo' onClick={handleRevertHome} alt='.Day logo' src={dotdaylogo}></img>
                    <button className='navbarlink' onClick={handleLogInForm}>Log In</button>
                    <p className='navbardivider'>|</p>
                    <Link className='navbarlink' to='/signup'>Sign Up</Link>
                </ul>
            )}
        </div>
    )
}

export default NavBar;