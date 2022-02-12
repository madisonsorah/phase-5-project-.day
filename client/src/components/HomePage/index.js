import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';
import dotdaybeigegridgraphic from '../../images/dotdaybeigegridgraphic.png';
import dotdayblackgridgraphic from '../../images/dotdayblackgridgraphic.png';
import dotdaythemegraphic from '../../images/dotdaythemegraphic.png';
import dotdayprofilegraphic from '../../images/dotdayprofilegraphic.png';
import dotdaygridgraphic from '../../images/dotdaygridgraphic.png';

function HomePage({setCurrentAuthor, currentAuthor, logInForm, setLogInForm}) {
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
                        <h3 className='homepageh3loggedin'>Ready to start a new entry?</h3>
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
                                    <h3 className='loginh3'>Welcome back</h3>
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
                            <p className='homepagep'>Track your daily habits and thoughts in a digital, customizable journal format.</p>
                            <button onClick={handleLogInForm} className='homepagelink' to='/login'>Log In</button><p className='homepagedivider'>|</p><Link className='homepagelink' to='/signup'>Sign Up</Link>
                            <div className='homepageaboutcontainer'>
                                <h3 className='homepageh3'>How .DAY works</h3>
                                <div className='homepageaboutleft'>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Create an account with your author details.</h4>
                                        <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='theme preview'></img>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Publish a journal entry every day and unlock author rewards.</h4>
                                        <p className='homepagep'>Rewards include new stickers, bullets and theme designs for your journal.</p>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='profile preview'></img>
                                    </div>
                                </div>
                                <div className='homepageaboutright'>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='author details preview'></img>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Choose a journal theme.</h4>
                                        <p className='homepagep'>Select one of four pre-built themes based on your journaling preferences, or build your own from scratch.</p>
                                    </div>
                                    <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='rewards preview'></img>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Freely edit your journal entries and profile at any time.</h4>
                                        <p className='homepagep'>Get full access to your account, author profile and entry history.</p>
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
                    <div className='homepagecontainersignedout'>
                        <img className='homepagesignedoutgrid' src={dotdayblackgridgraphic}></img>
                        <div className='homepagesignedoutleft'>
                            <h2 className='homepageh2signedout'>Welcome to .DAY</h2>
                            <p className='homepagepsignedout'>Track your daily habits and thoughts in a digital, customizable journal format.</p>
                            <button onClick={handleLogInForm} className='homepagebuttonsignedout'>Log In</button><p className='homepagedividersignedout'>|</p><Link className='homepagelinksignedout' to='/signup'>Sign Up</Link>
                        </div>
                    </div>
                    <div className='homepageaboutcontainer'>
                            <h3 className='homepageh3'>How .DAY works</h3>
                            <div className='homepageaboutleft'>
                                    <div className='homepageaboutleftsection1'>
                                        <h4 className='homepageh4'>Create an account with your author details.</h4>
                                        <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Choose a journal theme.</h4>
                                        <p className='homepagep'>Select one of four pre-built themes based on your journaling preferences, or build your own.</p>
                                    </div>
                                    <div className='homepageaboutleftsection'>
                                        <h4 className='homepageh4'>Track your habits on a grid each day.</h4>
                                        <p className='homepagep'>View your tracked habits over the course of the current month to identify trends.</p>
                                    </div>
                                </div>
                            <div className='homepageaboutright'>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='profile preview' src={dotdayprofilegraphic}></img>
                                </div>
                                <div className='homepageaboutrightsection'>
                                        <img className='homepageaboutpreview' alt='theme preview' src={dotdaythemegraphic}></img>
                                    </div>
                                <div className='homepageaboutrightsection'>
                                    <img className='homepageaboutpreview' alt='grid preview' src={dotdaygridgraphic}></img>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }
    }
}


export default HomePage;