import React from 'react';
import './index.css';

function HomePage({currentAuthor}) {
    return (
        <div>
            {currentAuthor ? (
                <div>
                    <h1>Welcome back, Madison.</h1>
                    <p>Publish daily journal entries and unlock rewards.</p>
                    <h3>Ready to publish today's journal entry?</h3>
                    <Link to='/publish'>Write down your thoughts.</Link>
                    <Link to='/account'>Update your account details.</Link>
                    <div className='footer'></div>
                </div>
            ) : (
                <div>
                    <h1>Welcome to Pixelpad.</h1>
                    <p>Customize and track your daily habits in your very own private, digital bullet journal.</p>
                    <Link to='/login'>Log In</Link><p>|</p><Link to='/signup'>Sign Up</Link>
                    <h3>How Pixelpad works</h3>
                    <h6>Create an account with your author details.</h6>
                    <p>Sign up with your name, a pen name of your choice and email.</p>
                    <img alt='author details preview'></img>
                    <h6>Choose a journal theme.</h6>
                    <p>Select one of our six custom themes based on your habit tracking preferences, or build your own.</p>
                    <img alt='theme preview'></img>
                    <h6>Publish a journal entry every day and unlock author rewards.</h6>
                    <p>Rewards include new stickers, bullets and theme designs for your journal.</p>
                    <img alt='rewards preview'></img>
                    <h6>Edit and delete entries whenever you want.</h6>
                    <p>Get full access to your account and update the appearance of your profile.</p>
                    <img alt='profile preview'></img>
                    <div className='footer'></div>
                </div>
            )}
        </div>
    )
}

export default HomePage;