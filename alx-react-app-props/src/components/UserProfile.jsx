import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const userData = useContext(UserContext);
  return (
    <>
      <h2>Name:{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </>
  );
}

export default UserProfile;
