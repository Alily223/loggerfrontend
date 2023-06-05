import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./Styles/main.scss";

import Home from './Components/Home/Home.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Authentication from './Components/Pages/Authentication';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';

function App() {
  const [userLoginStatus, setUserLoginStatus] = useState("NOT_LOGGED_IN");
  const [username, setUsername] = useState("");
  const [adminLoginStatus, setAdminLoginStatus] = useState("NOT_LOGGED_IN");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/auth" element={<Authentication userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>}/>
          <Route path="/auth/signup" element={<Signup userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;