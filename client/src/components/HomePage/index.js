import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './index.css';

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
            <div className='homepagediv'>
                <div className='homepagecontainer'>
                    <h1 className='homepageh1'>Welcome back, {currentAuthor.first_name}.</h1>
                    <p className='homepagep'>Publish daily journal entries and unlock rewards.</p>
                    <h2 className='homepageh2'>Ready to publish today's journal entry?</h2>
                    <Link className='homepagelink' to='/publish'>Write down your thoughts.</Link>
                    <Link className='homepagelink' to='/account'>Update your account details.</Link>
                </div>
                <div className='homepagefooter'></div>
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
                                    <h1 className='homepageh1'>Welcome back</h1>
                                    <p className='loginp'>Please log in.</p>
                                </span>
                                <div className='logininputdiv'>
                                    <input className='logininput'
                                        type='text'
                                        placeholder='Enter Pen Name'
                                        autoComplete='off'
                                        value={pen_name}
                                        onChange={(e) => setPenName(e.target.value)}
                                    />
                                </div>
                                <div className='logininputdiv'>
                                    <input className='logininput'
                                        type='password'
                                        placeholder='Enter Password'
                                        autoComplete='off'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button className='loginbutton'>Log In</button>
                                {errorMessage ? (<p>{errorMessage}</p>) : null}
                            </form>
                            <span>
                                <p className='loginbottomp'>Don't have an account?</p>
                                <Link className='loginlink' to='/signup'>Sign Up</Link><p className='homepagedivider'>|</p><button className='loginlink' onClick={() => setLogInForm(false)}>Back</button>
                            </span>
                        </div>
                        <div className='homepageblur'>
                        <h1 className='homepageh1'>Welcome to .DAY</h1>
                            <p className='homepagep'>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                            <button onClick={handleLogInForm} className='homepagelink' to='/login'>Log In</button><p className='homepagedivider'>|</p><button className='homepagelink' to='/signup'>Sign Up</button>
                            <h2 className='homepageh2'>How .DAY works</h2>
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
                    <div className='homepagefooter'></div>
                </div>
            )
        } else {
            return (
                <div className='homepagediv'>
                    <div className='homepagecontainer'>
                        <h1 className='homepageh1'>Welcome to .DAY</h1>
                        <p className='homepagep'>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                        <button onClick={handleLogInForm} className='homepagelink' to='/login'>Log In</button><p className='homepagedivider'>|</p><button className='homepagelink' to='/signup'>Sign Up</button>
                        <h2 className='homepageh2'>How .DAY works</h2>
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
                    <div className='homepagefooter'></div>
                </div>
            )
        }
    }
}


export default HomePage;