import React, {useState} from 'react';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import {Route} from "react-router-dom";

//contexts
import {UserContext} from './Contexts/UserContext';

//imports
import Header from './components/Header/Header';
import FormikRegistration from './components/Signup/Signup';
import Profile from './components/Profile/Profile';


//styles
import './App.css';

function App() {
  const [user, setUser]= useState({
    username: '',
    password: '',
    phoneNumber: ''
  });

  return (
      <div className="App">
        <UserContext.Provider value= {user}>
          <Header/>

        <Route exact path="/">
        <h1 className="mainHeading"> Replate </h1>
          <Login/>
        </Route>

        <Route exact path="/profile">
        <h1 className="mainHeading"> Profile </h1>
          <Profile/>
        </Route>

        <Route exact path="/signup">
        <h2 className="mainHeading"> Register Below </h2>
          <FormikRegistration user= {user} setUser= {setUser} />
        </Route>
        </UserContext.Provider>

      </div>
  );
}//end App

export default App;
