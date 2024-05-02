import { useEffect, useState } from 'react'
import { useUserContext } from '../../context/context';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Logout() {

    const router = useRouter()
    let authToken = ''

    if (typeof window !== 'undefined') {
        authToken = localStorage.getItem("authToken") || '';
      }

    const [loading, setLoading] = useState(false)
     async function logOut() {
        setLoading(true)
        const response = axios.get('https://main--stellular-fenglisu-e2b691.netlify.app/api/auth/logout',
         {
            headers: { 
                'authorization': authToken,
            }
        })
        .then((response) => {
            setLoading(false)
            localStorage.clear()
            console.log(response)
            router.push('/login')
        })
        return response
    }
    

    return(
        <button 
            onClick={() => logOut()}
            className="border-[1px] border-[#ffffff] px-4 py-2 text-center rounded-[10px]"
        >
            Cerrar sesión
        </button>
    )
}