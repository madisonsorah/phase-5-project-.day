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
    const [bio, setBio] = useState('')
    const [avatar_url, setAvatarUrl] = ('')
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
    setIndex((index + 1)); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex > 0) {
        setIndex(nextIndex);
    } 
  };


    if (index === 0) {
        return (
            <div>
                <form>
                <h3>Enter your name</h3>
                <p>FIRST NAME</p>
                <input 
                    placeholder='First Name_'
                    type='text'
                    autoComplete='off'
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}>
                </input>
                <p>LAST NAME</p>
                <input 
                    placeholder='Last Name_'
                    type='text'
                    autoComplete='off'
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}>
                </input>
                <p>PEN NAME</p>
                <input 
                placeholder='Pen Name_'
                type='text'
                autoComplete='off'
                value={pen_name}
                onChange={(e) => setPenName(e.target.value)}>
                </input>
                </form>
                <button onClick={slideLeft}>{"<"}</button>
                <button onClick={slideRight}>{">"}</button>
            </div>
        )
    } else if (index === 1) {
        return (
            <div>
                <form>
                <h3>Enter your details</h3>
                <p>EMAIL</p>
                <input 
                    placeholder='Email_'
                    type='text'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <p>PASSWORD</p>
                <input 
                    placeholder='Password_'
                    type='text'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <input 
                    placeholder='Password Confirmation_'
                    type='text'
                    autoComplete='off'
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}>
                </input>
                </form>
                <button onClick={slideLeft}>{"<"}</button>
                <button onClick={slideRight}>{">"}</button>
            </div>
        )
    } else if (index === 2) {
        <div>
            <form>
                <h3>Profile Information</h3>
                <p>BIO</p>
                <input 
                    placeholder='Bio_'
                    type='text'
                    autoComplete='off'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}>
                </input>
                <p>PASSWORD</p>
                <input 
                    placeholder='Avatar URL_'
                    type='text'
                    autoComplete='off'
                    value={avatar_url}
                    onChange={(e) => setAvatarUrl(e.target.value)}>
                </input>
                <button onClick={slideLeft}>{"<"}</button>
                <button onClick={slideRight}>{">"}</button>
                <button type='submit' onSubmit={handleSubmit}>CREATE ACCOUNT</button>
                </form>
            </div>
    }
}

export default SignUpPage;