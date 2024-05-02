'use client'
import IntroImage from '../components/introImage/introImage';
import Form from '../components/form/form'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../components/loader/loader';
export default function LoginPage() {

    const router = useRouter()
 
    let authToken = undefined
    const [loading, setLoading] = useState(false);

    if (typeof window !== 'undefined') {
        authToken = localStorage.getItem('authToken');
      }

    useEffect(() => {
        setLoading(true)
        if(authToken) {
            setLoading(false)
            router.push('/map')
        }
    },[])

    return (
        <div>
            {loading ?
            <div>
                <Loader />
            </div>
            :
            <div>
            <div>
            {/* dektop */}
            <div className='hidden lg:grid lg:grid-cols-2 lg:gap-6 font-["roobert-regular"]'>
                <div className='relative'>
                    <Form />
                </div>
                <div className='m-auto w-[90%]'>
                    <IntroImage />
                </div>
            </div>
    
            {/* mobile */}
            <div className='block lg:hidden font-["roobert-regular"]'>
                <div className="relative">
                    <IntroImage />
                    <Form />
                </div>
            </div>
    
            </div>
            </div>
            }
        </div>
        
    )
}