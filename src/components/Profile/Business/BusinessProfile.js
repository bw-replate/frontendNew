import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

import {userContext, UserContext} from '../../../Contexts/UserContext';

function BusinessProfile() {
  const {profiles}= useContext(UserContext);
  
  return (
    <div>
      <Link to='/addplate'>Add A Plate</Link>
      <h2>Current Plates</h2>
      This is business profiles information
            {profiles.map(profile => (
        <div>
          <h3>{profile.name}</h3>
          <h3>{profile.address}</h3>
          <h3>{profile.phoneNumber}</h3>
          <h3>{profile.username}</h3>
        </div>
      ))}
    </div>
  )
}

export default withRouter(BusinessProfile);