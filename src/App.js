import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AskQuestionPage from './pages/AskQuestionPage'
import ProfilePage from './pages/ProfilePage'
import EditProfilePage from './pages/EditProfilePage'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/view-profile" element={<ProfilePage />}/>
          <Route path="/profile" element={<EditProfilePage />}/>
          <Route path="/" element={<AskQuestionPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
