import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './index.css';

function AuthorThemes() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [theme_id, setThemeId] = useState();
    const [themes, setThemes] = useState([]);
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        fetch('/themes')
        .then((r) => r.json())
        .then((themeData) => setThemes(themeData))
    }, [id])

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/authors/${id}/theme`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              theme_id 
            }),
        })
        .then(() => {
          navigate('/account', {replace: true})
        })
      }

    const renderedThemes = themes.map((theme) => (
        <div>
          <input 
                    className='themecheckbox' 
                    type='checkbox'
                    value={theme.id}
                    checked={setChecked(true)}
                    onChange={(e) => setThemeId(e.target.value)}>
                </input>
                <label className='themecategory'>{theme.category}</label>
        </div>
      ))
    
    return (
        <div>
            <div className='browseentriesdiv'>
                <div className='browseentriesdetailsdiv'>
                    <h3 className='browseentriesheader'>Journal Themes</h3>
                    <p className='browseentriesp'>Select a theme for your journal below.</p>
                </div>
                <div className='browseentriescontainer'>
                    <form onSubmit={handleSubmit}>
                        {renderedThemes}
                        <button className='signupbutton' type='submit'>SELECT THEME</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthorThemes;