import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import BrowseEntries from './components/BrowseEntries';
import EntryPage from './components/EntryPage';
import EditEntry from './components/EditEntry';
import AuthorProfile from './components/AuthorProfile';
import AuthorAccount from './components/AuthorAccount';
import PublishEntry from './components/PublishEntry';
import AuthorThemes from './components/AuthorThemes';
import AuthorRewards from './components/AuthorRewards';

function App() {
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [logInForm, setLogInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/currentauthor')
    .then((r) => {
      if (r.ok) {
        r.json().then((author) => setCurrentAuthor(author))
      }
    })
  }, []);

  return (
    <div>
      <BrowserRouter>
      <NavBar currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
        <Routes>
          <Route path='/' element={<HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/signup' element={<SignUpPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/profile' element={currentAuthor ? <AuthorProfile currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/account' element={currentAuthor ? <AuthorAccount currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/entries' element={currentAuthor ? <BrowseEntries currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/editentry/:id' element={currentAuthor ? <EditEntry currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/entries/:id' element={currentAuthor ? <EntryPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/publish' element={currentAuthor ? <PublishEntry currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/themes' element={currentAuthor ? <AuthorThemes currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
          <Route path='/rewards' element={currentAuthor ? <AuthorRewards currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/> : <HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} logInForm={logInForm} setLogInForm={setLogInForm}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;