import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function SignUpPage({currentAuthor, setCurrentAuthor}) {
    const [index, setIndex] = useState(0); 
    const [pen_name, setPenName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [bio, setBio] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        pen_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        bio,
        avatar_url
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((author) => setCurrentAuthor(author));
        navigate(`/theme/${currentAuthor.id}`, {replace: true})
      } else {
        setErrorMessage('An account with these credentials already exists.')
      }
    });
  }

  const slideRight = () => {
    const nextIndex = index + 1
    if (nextIndex <= 2) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <h3 style={{display: index === 0 ? "block" : "none" }}>Enter your name</h3>
        <p style={{display: index === 0 ? "block" : "none" }}>FIRST NAME</p>
        <input style={{display: index === 0 ? "block" : "none" }}
            placeholder='First Name_'
            type='text'
            autoComplete='off'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}>
        </input>
        <p style={{display: index === 0 ? "block" : "none" }}>LAST NAME</p>
        <input 
            style={{display: index === 0 ? "block" : "none" }}
            placeholder='Last Name_'
            type='text'
            autoComplete='off'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}>
        </input>
        <p style={{display: index === 0 ? "block" : "none" }}>PEN NAME</p>
        <input 
            style={{display: index === 0 ? "block" : "none" }}
            placeholder='Pen Name_'
            type='text'
            autoComplete='off'
            value={pen_name}
            onChange={(e) => setPenName(e.target.value)}>
        </input>
        <h3 style={{display: index === 1 ? "block" : "none" }}>Enter your details</h3>
        <p style={{display: index === 1 ? "block" : "none" }}>EMAIL</p>
        <input 
            style={{display: index === 1 ? "block" : "none" }}
            placeholder='Email_'
            type='text'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
        </input>
        <p style={{display: index === 1 ? "block" : "none" }}>PASSWORD</p>
        <input 
            style={{display: index === 1 ? "block" : "none" }}
            placeholder='Password_'
            type='text'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
        </input>
        <p style={{display: index === 1 ? "block" : "none" }}>CONFIRM PASSWORD</p>
        <input 
            style={{display: index === 1 ? "block" : "none" }}
            placeholder='Password Confirmation_'
            type='text'
            autoComplete='off'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}>
        </input>
        <h3 style={{display: index === 2 ? "block" : "none" }}>Profile Information</h3>
        <p style={{display: index === 2 ? "block" : "none" }}>BIO</p>
        <input 
            style={{display: index === 2 ? "block" : "none" }}
            placeholder='Bio_'
            type='text'
            autoComplete='off'
            value={bio}
            onChange={(e) => setBio(e.target.value)}>
        </input>
        <p style={{display: index === 2 ? "block" : "none" }}>AVATAR URL</p>
        <input 
            style={{display: index === 2 ? "block" : "none" }}
            placeholder='Avatar URL_'
            type='text'
            autoComplete='off'
            value={avatar_url}
            onChange={(e) => setAvatar(e.target.value)}>
        </input>
        <button style={{display: index === 2 ? "block" : "none" }} type='submit'>CREATE ACCOUNT</button>
        {errorMessage ? (<p className='signuperror'>{errorMessage}</p>) : null}
      </form>
      <button onClick={slideLeft}>{"<"}</button>
      <button onClick={slideRight}>{">"}</button>
    </div>
  )
}

export default SignUpPage;