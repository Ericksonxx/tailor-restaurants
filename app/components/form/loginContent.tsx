'use client'
import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/context';

function LoginContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loginUser, user } = useUserContext()

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const localName = localStorage.getItem('user_name')
  const localId = localStorage.getItem('user_id')

  return (
    <div className="mt-12">
      <div>
        <div className="w-[100%]">
          <div className="mt-6 mb-4 text-[1.2rem]">
            <p className="pb-2 font-['roobert-medium']">Email: {user?.name}</p>
            <input
              placeholder="Escribe tu email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-[70%] border border-white px-6 py-[5px] rounded-[20px] placeholder-white max-w-[400px]"
            />
          </div>
          <div className="mt-6 mb-4 text-[1.2rem]">
            <p className="pb-2 font-['roobert-medium']">Contraseña:</p>
            <input
              placeholder="Escribe tu contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-[70%] border border-white px-6 py-[5px] rounded-[20px] placeholder-white max-w-[400px]"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleLogin}
            className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px] font-['roobert-medium'] font-[1.5rem]"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
