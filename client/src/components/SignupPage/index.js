import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function SignUpPage({setCurrentAuthor}) {
    const [index, setIndex] = useState(0); 
    const [pen_name, setPenName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [bio, setBio] = useState('');
    const [avatar_url, setAvatarUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [theme_id, setThemeId] = useState();
    const [themes, setThemes] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>
    fetch('/themes')
    .then((r) => r.json())
    .then((themeData) => setThemes(themeData)), [])

    const displayThemes = themes.map((theme) => (
      <option style={{display: index === 3 ? "block" : "none" }} value={theme.id}>{theme.category}</option>
    ));

    console.log(themes)
  
    function handleSubmit(e) {
      e.preventDefault();
      const author = {
          first_name,
          last_name,
          pen_name,
          email,
          password,
          password_confirmation: passwordConfirmation,
          bio,
          avatar_url,
          theme_id
      }
      fetch('/authors', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(author)
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((author) => setCurrentAuthor(author))
          .then(navigate('/account'))
        } else {
          setErrorMessage('Cannot sign up with these credentials.')
        }
      })
  }

  const slideRight = () => {
    const nextIndex = index + 1
    if (nextIndex <= 3) {
      setIndex(nextIndex);
    }
  };

  const slideLeft = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
        setIndex(prevIndex);
    } 
  };

  return (
    <div className='signupcontainer'>
      <div className='signupformcontainer'>
        <form className='signupform' onSubmit={handleSubmit}>
          <h3 className='signupformheader' style={{display: index === 0 ? "block" : "none" }}>Name</h3>
          <p className='signupformp' style={{display: index === 0 ? "block" : "none" }}>FIRST NAME</p>
          <input className='signupinput' 
              style={{display: index === 0 ? "block" : "none" }}
              placeholder='First Name_'
              type='text'
              autoComplete='off'
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 0 ? "block" : "none" }}>LAST NAME</p>
          <input className='signupinput'
              style={{display: index === 0 ? "block" : "none" }}
              placeholder='Last Name_'
              type='text'
              autoComplete='off'
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 0 ? "block" : "none" }}>PEN NAME</p>
          <input className='signupinput'
              style={{display: index === 0 ? "block" : "none" }}
              placeholder='Pen Name_'
              type='text'
              autoComplete='off'
              value={pen_name}
              onChange={(e) => setPenName(e.target.value)}>
          </input>
          <h3 className='signupformheader' style={{display: index === 1 ? "block" : "none" }}>Details</h3>
          <p className='signupformp' style={{display: index === 1 ? "block" : "none" }}>EMAIL</p>
          <input className='signupinput'
              style={{display: index === 1 ? "block" : "none" }}
              placeholder='Email_'
              type='text'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 1 ? "block" : "none" }}>PASSWORD</p>
          <input className='signupinput'
              style={{display: index === 1 ? "block" : "none" }}
              placeholder='Password_'
              type='text'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 1 ? "block" : "none" }}>CONFIRM PASSWORD</p>
          <input className='signupinput'
              style={{display: index === 1 ? "block" : "none" }}
              placeholder='Password Confirmation_'
              type='text'
              autoComplete='off'
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}>
          </input>
          <h3 className='signupformheader' style={{display: index === 2 ? "block" : "none" }}>Profile</h3>
          <p className='signupformp' style={{display: index === 2 ? "block" : "none" }}>BIO</p>
          <input className='signupinput'
              style={{display: index === 2 ? "block" : "none" }}
              placeholder='Bio_'
              type='text'
              autoComplete='off'
              value={bio}
              onChange={(e) => setBio(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 2 ? "block" : "none" }}>AVATAR URL</p>
          <input className='signupinput'
              style={{display: index === 2 ? "block" : "none" }}
              placeholder='Avatar URL_'
              type='text'
              autoComplete='off'
              value={avatar_url}
              onChange={(e) => setAvatarUrl(e.target.value)}>
          </input>
          <p className='signupformp' style={{display: index === 3 ? "block" : "none" }}>THEME</p>
            <select className='signupinput' style={{display: index === 3 ? "block" : "none" }} onChange={(e) => setThemeId(e.target.value)}>
                {displayThemes}
            </select>
          <button className='signupbutton' style={{display: index === 3 ? "block" : "none" }} type='submit'>CREATE ACCOUNT</button>
          {errorMessage ? (<p className='signuperror'>{errorMessage}</p>) : null}
        </form>
        <div className='arrowcontainer'>
          <button className='signuparrow' onClick={slideLeft}>{"<"}</button>
          <button className='signuparrow' onClick={slideRight}>{">"}</button>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;