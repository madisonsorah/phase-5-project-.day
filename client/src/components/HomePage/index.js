import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

function HomePage({currentAuthor}) {
    return (
        <div>
            {currentAuthor ? (
                <div>
                    <h1 className='homepageh1'>Welcome back, Madison.</h1>
                    <p className='homepagep'>Publish daily journal entries and unlock rewards.</p>
                    <h3 className='homepageh3'>Ready to publish today's journal entry?</h3>
                    <Link className='homepagelink' to='/publish'>Write down your thoughts.</Link>
                    <Link className='homepagelink' to='/account'>Update your account details.</Link>
                    <div className='homepagefooter'></div>
                </div>
            ) : (
                <div>
                    <h1 className='homepageh1'>Welcome to Pixelpad.</h1>
                    <p className='homepagep'>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                    <Link className='homepagelink' to='/login'>Log In</Link><p className='homepagedivider'>|</p><Link className='homepagelink' to='/signup'>Sign Up</Link>
                    <h3 className='homepageh3'>How Pixelpad works</h3>
                    <h6 className='homepageh6'>Create an account with your author details.</h6>
                    <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                    <img alt='author details preview'></img>
                    <h6 className='homepageh6'>Choose a journal theme.</h6>
                    <p className='homepagep'>Select one of our six custom themes based on your habit tracking preferences, or build your own.</p>
                    <img alt='theme preview'></img>
                    <h6 className='homepageh6'>Publish a journal entry every day and unlock author rewards.</h6>
                    <p className='homepagep'>Rewards include new stickers, bullets and theme designs for your journal.</p>
                    <img alt='rewards preview'></img>
                    <h6 className='homepageh6'>Edit and delete entries whenever you want.</h6>
                    <p className='homepagep'>Get full access to your account and update the appearance of your profile.</p>
                    <img alt='profile preview'></img>
                    <div className='homepagefooter'></div>
                </div>
            )}
        </div>
    )
}

export default HomePage;