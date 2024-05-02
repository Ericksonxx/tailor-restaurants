'use client';
import React from 'react';
import { useUserContext, UserProvider } from '../context/context';

function Try() {
  const { user } = useUserContext();

  return (
    <div>
        <div>
        {user ? (
        <p>Name: {user.name}</p> 
      ) : (
        <p>User data not available</p>
      )}
        </div>
    </div>
  );
}

export default Try;
