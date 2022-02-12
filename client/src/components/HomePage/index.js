import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';
import dotdaybeigegridgraphic from '../../images/dotdaybeigegridgraphic.png';

function HomePage({setCurrentAuthor, currentAuthor, logInForm, setLogInForm, dropDown, setDropDown}) {
    const [pen_name, setPenName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pen_name, password}),
      }).then((r) => {
        if (r.ok) {
          r.json().then((author) => setCurrentAuthor(author))
          navigate('/', {replace: true})
          setDropDown(false)
        } else {
          setErrorMessage('Incorrect pen name or password.')
        }
      });
    }

    function handleLogInForm() {
        setLogInForm(true);
        setErrorMessage('');
    }

    if (currentAuthor) {
        return (
            <div className='homepagedivloggedin'>
                <div className='homepagecontainerloggedin'>
                <img className='homepagegrid' src={dotdaybeigegridgraphic}></img>
                    <div className='homepageloggedinleft'>
                        <h2 className='homepageh2loggedin'>Welcome back, {currentAuthor.first_name}.</h2>
                        <p className='homepageploggedin'>Publish daily journal entries and unlock rewards.</p>
                        <h3 className='homepageh3loggedin'>Ready to start today's journal entry?</h3>
                        <div className='homepageoptionsdivloggedin'>
                            <Link className='homepagelinkloggedin' to='/newentry'>Write down your thoughts {">"}</Link>
                        </div>
                        <div className='homepageoptionsdivloggedin'>
                            <Link className='homepagelinkloggedin' to='/account'>Update your account details {">"}</Link>
                        </div>
                        <div className='homepageoptionsdivloggedin'>
                            <Link className='homepagelinkloggedin' to='/profile'>View your profile {">"}</Link>
                        </div>
                    </div>
                </div>
                <div className='homepagefooter'>
                    <h3 className='footerheader'>About .DAY</h3>
                    <ul className='footerul'>
                        <div className='footerp'>.DAY is a project concept created by @madisonsorah, who recently kicked off her career as a front-end developer.</div>
                        <div className='footerp'>Created with a clean interface and minimalist design, .DAY is your digital solution to bullet journaling on a daily basis.</div>
                        <div className='footerp2'>Feature updates will continuously be made to .DAY to improve your journaling experience.</div>
                    </ul>
                </div>
            </div>
        )
    } else {
        if (logInForm === true) {
            return (
                <div className='homepagediv'>
                    <div className='homepagecontainer'>
                        <div className='loginformcontainer'>
                            <form onSubmit={handleSubmit}>
                                <span>
                                    <h2 className='loginh2'>Welcome back</h2>
                                    <p className='loginp'>Please log in.</p>
                                </span>
                                <p className='logintitle'>PEN NAME</p>
                                <div className='logininputdiv'>
                                    <input className='logininput'
                                        type='text'
                                        placeholder='Enter Pen Name_'
                                        autoComplete='off'
                                        value={pen_name}
                                        onChange={(e) => setPenName(e.target.value)}
                                    />
                                </div>
                                <p className='logintitle'>PASSWORD</p>
                                <div className='logininputdiv'>
                                    <input className='logininput'
                                        type='password'
                                        placeholder='Enter Password_'
                                        autoComplete='off'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button className='loginbutton'>LOG IN</button>
                                {errorMessage ? (<p className='loginerror'>{errorMessage}</p>) : null}
                            </form>
                            <span>
                                <p className='loginbottomp'>Don't have an account?</p>
                                <Link className='loginlink' to='/signup'>Sign Up</Link><p className='logindivider'>|</p><button className='loginlink' onClick={() => setLogInForm(false)}>Back</button>
                            </span>
                        </div>
                        <div className='homepageblur'>
                        <h2 className='homepageh2'>Welcome to .DAY</h2>
                            <p className='homepagep'>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                            <button onClick={handleLogInForm} className='homepagelink' to='/login'>Log In</button><p className='homepagedivider'>|</p><Link className='homepagelink' to='/signup'>Sign Up</Link>
                            <div className='homepageaboutcontainer'>
                                <h3 className='homepageh3'>How .DAY works</h3>
                                <div className='homepageaboutleft'>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Create an account with your author details.</h4>
                                        <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Choose a journal theme.</h4>
                                        <p className='homepagep'>Select one of our six custom themes based on your habit tracking preferences, or build your own.</p>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Publish a journal entry every day and unlock author rewards.</h4>
                                        <p className='homepagep'>Rewards include new stickers, bullets and theme designs for your journal.</p>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Edit and delete entries whenever you want.</h4>
                                        <p className='homepagep'>Get full access to your account and update the appearance of your profile.</p>
                                    </div>
                                </div>
                                <div className='homepageaboutright'>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='author details preview'></img>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='theme preview'></img>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='rewards preview'></img>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='profile preview'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepagefooter'>
                        <h3 className='footerheader'>About .DAY</h3>
                        <ul className='footerul'>
                            <div className='footerp'>.DAY is a project concept created by @madisonsorah, who recently kicked off her career as a front-end developer.</div>
                            <div className='footerp'>Created with a clean interface and minimalist design, .DAY is your digital solution to bullet journaling on a daily basis.</div>
                            <div className='footerp2'>Feature updates will continuously be made to .DAY to improve your journaling experience.</div>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='homepagediv'>
                    <div className='homepagecontainer'>
                        <h2 className='homepageh2'>Welcome to .DAY</h2>
                        <p className='homepagep'>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                        <button onClick={handleLogInForm} className='homepagelink'>Log In</button><p className='homepagedivider'>|</p><Link className='homepagelink' to='/signup'>Sign Up</Link>
                        <div className='homepageaboutcontainer'>
                            <h3 className='homepageh3'>How .DAY works</h3>
                            <div className='homepageaboutleft'>
                                <div className='homepageaboutleftsection'>
                                    <h4 className='homepageh4'>Create an account with your author details.</h4>
                                    <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                                </div>
                                <div className='homepageaboutleftsection'>
                                    <h4 className='homepageh4'>Choose a journal theme.</h4>
                                    <p className='homepagep'>Select one of our six custom themes based on your habit tracking preferences, or build your own.</p>
                                </div>
                                <div className='homepageaboutleftsection'>
                                    <h4 className='homepageh4'>Publish a journal entry every day and unlock author rewards.</h4>
                                    <p className='homepagep'>Rewards include new stickers, bullets and theme designs for your journal.</p>
                                </div>
                                <div className='homepageaboutleftsection'>
                                    <h4 className='homepageh4'>Edit and delete entries whenever you want.</h4>
                                    <p className='homepagep'>Get full access to your account and update the appearance of your profile.</p>
                                </div>
                            </div>
                            <div className='homepageaboutright'>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='author details preview'></img>
                                </div>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='theme preview'></img>
                                </div>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='rewards preview'></img>
                                </div>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='profile preview'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepagefooter'>
                        <h3 className='footerheader'>About .DAY</h3>
                        <ul className='footerul'>
                            <div className='footerp'>.DAY is a project concept created by @madisonsorah, who recently kicked off her career as a front-end developer.</div>
                            <div className='footerp'>Created with a clean interface and minimalist design, .DAY is your digital solution to bullet journaling on a daily basis.</div>
                            <div className='footerp2'>Feature updates will continuously be made to .DAY to improve your journaling experience.</div>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}


export default HomePage;