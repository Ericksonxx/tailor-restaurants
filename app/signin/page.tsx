'use client'
import { useEffect } from 'react';
import IntroImage from '../components/introImage/introImage';
import Form from '../components/form/form'
import { useRouter } from 'next/navigation';

export default function IntroScreen() {

    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem('authToken')) {
            router.push('/map')
        }
    },[])

    return (
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
        
    )
}
