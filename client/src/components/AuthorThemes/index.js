import React from 'react';
import './index.css';

function AuthorThemes() {
    
    return (
        <div>
            <div className='browseentriesdiv'>
                <div className='browseentriesdetailsdiv'>
                    <h3 className='browseentriesheader'>Journal Themes</h3>
                    <p className='browseentriesp'>Select a theme for your journal below.</p>
                </div>
                <div className='browseentriescontainer'>
                    {/* {themes} */}
                </div>
            </div>
        </div>
    )
}

export default AuthorThemes;