import React from 'react';
import './index.css';

function HomePage({currentAuthor}) {
    return (
        <div>
            {currentAuthor ? (
                <div>
                    <h1>Welcome back, Madison.</h1>
                    <p>Ready to publish today's journal entry?</p>
                    <Link to='/publish'>Write down your thoughts.</Link>
                    <Link to='/account'>Update your account.</Link>
                </div>
            ) : (
                <div>
                    <h1>Welcome to Pixelpad.</h1>
                </div>
            )}
        </div>
    )
}

export default HomePage;