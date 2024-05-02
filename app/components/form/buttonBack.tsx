import { useState } from 'react'

interface ButtonBackProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function ButtonBack({step, setStep}: ButtonBackProps) {

    function stepBack(){
        if(step === 1) {
            setStep(2)
        } else if (step === 2) {
            setStep(1)
    }}

    return (
                <div>
                    <button onClick={stepBack} className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.56982 18.0698L3.49983 11.9998L9.56983 5.92982" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5 12L3.67 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    
                </div>
    )

}