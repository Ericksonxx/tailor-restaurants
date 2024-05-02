'use client'
import './navbar.css'
import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown'


interface User {
  name: string | undefined;
  id: string | undefined;
}
function Navbar() {

  const [user, setUser] = useState<User>({ name: '', id: '' });
  const [open, setOpen] = useState<string>('hidden');
  const [isRotated, setIsRotated] = useState(false);

  function handleArrowClick() {
    setIsRotated(!isRotated)
    setOpen(open === 'hidden' ? 'block' : 'hidden')
  }

  let localName: string | null = ''
  let localId: string | null = ''

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localName = localStorage.getItem('user_name')
      localId = localStorage.getItem('user_id')
    }

    if (localName != undefined && localId != undefined) {
      const parsedName = JSON.parse(localName);
      const parsedId = JSON.parse(localId);

    setUser({
      name: parsedName, 
      id: parsedId
    })
    }
  }, [])

  return(
    <div className='font-["roobert-medium"] p-4 z-10'>
        {user.name !== undefined ? 
            <div>
                <div onClick={() => handleArrowClick()} className='flex items-center justify-end'>
                    <p className='mr-2 text-[1.2rem]'>{user.name}</p>
                    <svg
          className={`arrow-icon test ${isRotated ? 'rotate-180' : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.07 14.43L12 20.5l-6.07-6.07" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3.5L12 20.33" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
                </div>
                <Dropdown open={open} />
            </div>
            :
            <p>Loading...</p>
        }
    </div>
  )
}

export default Navbar;
