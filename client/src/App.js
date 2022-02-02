import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import BrowseEntries from './Components/BrowseEntries';
import EntryPage from './Components/EntryPage';
import AuthorPage from './Components/AuthorPage';
import AuthorAccount from './Components/AuthorAccount';
import EntryHistory from './Components/EntryHistory';
import PublishEntry from './Components/PublishEntry';
import AuthorThemes from './components/AuthorThemes';
import AuthorRewards from './Components/AuthorRewards';

function App() {
  const [currentAuthor, setCurrentAuthor] = useState(null);

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((author) => setCurrentAuthor(author))
      }
    })
  }, []);

  return (
    <div>
      <NavBar currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/login' element={<LogInPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/signup' element={<SignUpPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/profile/:id' element={<AuthorPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/account/:id' element={<AuthorAccount currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/entries' element={<BrowseEntries currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/entries/:id' element={<EntryPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/history' element={<EntryHistory currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/publish' element={<PublishEntry currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/themes' element={<AuthorThemes currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/rewards' element={<AuthorRewards currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;