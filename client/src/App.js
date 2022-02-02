import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './Components/SignupPage';
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/login' element={<LoginPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
          <Route path='/signup' element={<SignupPage currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor}/>}/>
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