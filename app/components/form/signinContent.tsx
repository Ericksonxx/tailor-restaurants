'use client'
import ButtonBack from './buttonBack'
import { useState } from 'react'
import axios from 'axios'

export default function SigninContent() {

const [step, setStep] = useState<number>(1);
const [showPassword, setShowPassword] = useState(false);

const [mailInput, setMailInput] = useState<String>('');
const [passwordInput, setPasswordInput] = useState<String>('');
const [nameInput, setNameInput] = useState<String>('');

    async function submitForm(){
        axios.post('https://main--stellular-fenglisu-e2b691.netlify.app/api/auth/signup', {
            email: mailInput,
            password: passwordInput,
            name: nameInput
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //TODO: add password validation and redirect

    return (
       <div className="mt-12">
            <ButtonBack step={step} setStep={setStep} />
            <div>
            {step === 1 &&
                        <div>
                            <div className="w-[100%]">
                                <div className="mt-6 mb-4 text-[1.2rem]">
                                    <p className="pb-2 font-['roobert-medium']">Email:</p>
                                    <input placeholder="Añade tu email" type="text" onChange={(e) => setMailInput(e.target.value)} className="bg-transparent w-[70%] border border-white px-6 py-[5px] rounded-[20px] placeholder-white max-w-[400px]" />
                                </div>
                                <div className="mt-6 mb-4 text-[1.2rem]">
                                    <p className="pb-2 font-['roobert-medium']">Nombre de usuario:</p>
                                    <input placeholder="Añade tu nombre" type='text' onChange={(e) => setNameInput(e.target.value)} className="bg-transparent w-[70%] border border-white px-6 py-[5px] rounded-[20px] placeholder-white max-w-[400px]" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={() => setStep(step + 1)} className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px] font-['roobert-medium'] font-[1.5rem]">Siguiente</button>
                            </div>
                        </div>
                    }
                    {step === 2 &&
                        <div>
                            <div className="w-[100%]">
                                <div className="mt-6 mb-4 text-[1.2rem]">
                                    <p className="pb-2 font-['roobert-medium']">Crea una contraseña nueva:</p>
                                    <input placeholder="Añade una contraseña" type="password" onChange={(e) => setPasswordInput(e.target.value)} className="bg-transparent w-[70%] border border-white px-6 py-[5px] rounded-[20px] placeholder-white max-w-[400px]" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={() => submitForm()} className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px] font-['roobert-medium'] font-[1.5rem]">Finalizar</button>
                            </div>
                        </div>
                    }
            </div>
        </div>
    )
}