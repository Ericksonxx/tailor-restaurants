'use client'
import { useState } from 'react'
import './page.css'
import { useEffect } from 'react'

export default function AddRestaurant() {

    const [fileUploaded, setFileUploaded] = useState<File | null>()
    const [name, setName] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    if (typeof window !== 'undefined') {
        if(localStorage.getItem('user_name') === null || localStorage.getItem('user_id') === null) {
            return(
                <p>Please Login</p>
            )
        }
      }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileUploaded(file)
        }
    };




    return (
        <div>
             <div>
                    <button onClick={() => window.history.back()} className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px]">
                        <div className='flex items-center'>
                        <svg className='rotate-90 mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.07 14.43L12 20.5l-6.07-6.07" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 3.5L12 20.33" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Volver
                        </div>
                    </button>
                </div>
                <div className='mt-12'>
                    <div className='w-[50px] h-auto m-auto'>
                        <svg className='logo-icon-svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.73 43.52">
                            <path className='logo-icon-path' d="M20.16 0v18.7L9.51 5.96l-5.64 4.67 9.35 11.12H0V29h18.87l-4.68 5.48c-.97 1.13-2.26 1.77-3.39 1.77H0v7.25h11.29c2.9 0 5.81-1.13 7.42-3.06l5.16-6.12 5.16 6.12c1.61 1.77 4.52 3.06 7.42 3.06h11.29v-7.25h-10.8c-1.13 0-2.42-.64-3.39-1.77L28.87 29h18.87v-7.25H34.52l9.35-11.12-5.64-4.67-10.8 12.73V0" fill="#264BEB"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-12 w-[80vw] lg:w-[60vw] m-auto">
                    <div className='flex flex-col items-center m-12 lg:my-0'>
                    {fileUploaded ? (
                        <input 
                            id='custom-file-input' 
                            style={{ backgroundImage: `url(${URL.createObjectURL(fileUploaded)})` }}
                            type='file' 
                            className="h-[40vh] w-[70vw] lg:w-[300px] border-[1px] border-black rounded-[20px] bg-cover bg-center" 
                            onChange={handleFileChange}
                        />  
                    ) : (
                        <input 
                            id='custom-file-input' 
                            type='file' 
                            className="h-[40vh] w-[70vw] lg:w-[300px] border-[1px] border-black rounded-[20px]" 
                            onChange={handleFileChange}
                        />  
                    )}

                    </div>
                    <div className='flex flex-col items-center lg:items-start lg:block'>
                        <div>
                            <p className='font-["roobert-regular"]'>Nombre del restaurante</p>
                            <input 
                                type='text' 
                                className='w-[70vw] lg:w-[300px] border-[1px] border-black rounded-[20px]' 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='my-4'>
                            <p className='font-["roobert-regular"]'>Dirección del restaurante</p>
                            <input 
                                type='text' 
                                className='w-[70vw] lg:w-[300px] border-[1px] border-black rounded-[20px]' 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <p className='font-["roobert-regular"]'>Descripción del restaurante</p>
                            <textarea 
                                className='w-[70vw] lg:w-[300px] border-[1px] border-black rounded-[20px] h-[100px]'
                                onChange={(e) => setDescription(e.target.value)} 
                            />
                        </div>
                        <div className='w-[100%] mt-4'>
                        <button className='py-2 px-4 rounded-[20px] font-["roobert-regular"] border border-black'>Guardar</button>
                    </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='w-[50px] h-auto m-auto'>
                        <svg className='logo-icon-svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.73 43.52">
                            <path className='logo-icon-path' d="M20.16 0v18.7L9.51 5.96l-5.64 4.67 9.35 11.12H0V29h18.87l-4.68 5.48c-.97 1.13-2.26 1.77-3.39 1.77H0v7.25h11.29c2.9 0 5.81-1.13 7.42-3.06l5.16-6.12 5.16 6.12c1.61 1.77 4.52 3.06 7.42 3.06h11.29v-7.25h-10.8c-1.13 0-2.42-.64-3.39-1.77L28.87 29h18.87v-7.25H34.52l9.35-11.12-5.64-4.67-10.8 12.73V0" fill="#264BEB"/>
                        </svg>
                    </div>
                </div>
        </div>
    )
}