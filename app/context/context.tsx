'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string | undefined;
}

interface UserType {
  user: User | null;
  signupUser: (name: string, email: string, password: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<User>;
}

const UserContext = createContext<UserType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);;

  const signupUser = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post('https://main--stellular-fenglisu-e2b691.netlify.app/api/auth/signup', {
        name,
        email,
        password
      });
    } catch (error) {
      console.error('Error signing up user:', error);
      throw error; 
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post<User>('https://main--stellular-fenglisu-e2b691.netlify.app/api/auth/login', {
        email,
        password,
      })

      const userData = response.data
      setUser(userData)

     localStorage.setItem('user_name', JSON.stringify(response.data.name));
     localStorage.setItem('user_id', JSON.stringify(response.data._id));
      
    axios.interceptors.response.use((config) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('user_id')}`;
      }
      localStorage.setItem('authToken', config.headers.authorization);
      return config;
    });

      return userData;
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error; 
    }
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
  }, [user]);

  return (
    <UserContext.Provider value={{ user, signupUser, loginUser  }}>
      {children}
    </UserContext.Provider>
  );
};
