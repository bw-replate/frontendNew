import React from 'react';
import { useHistory } from 'react-router-dom';

//imports
import "./Logout.css";

export default function Logout({setLoggedInUser}) {
  const history = useHistory();

  //setTimeout, then redirect to login
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('loggedInUser');
  setLoggedInUser('');
  {window.setTimeout(() => {
    history.push('/');
  }, 2000)}

  return (
    <div className="logout">
      <h1>Thanks for using Replate</h1>
      
    </div>
  )
}
