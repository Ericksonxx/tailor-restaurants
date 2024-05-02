import { Details } from '../page'
import axios from 'axios'
import emptyBlackStar from '../../../public/empty-black-star.png' 
import fullStar from '../../../public/star-full.png' 
import Image from 'next/image'
import React, { Dispatch, useState, useEffect} from 'react';
import Loader from '../../components/loader/loader';
import { Comment } from '../page'

interface CommentModalProps {
    comment: Comment
    editOpen: boolean
    setEditOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function CommentModal({comment, editOpen, setEditOpen }: CommentModalProps) {

    const [currentRating, setCurrentRating] = useState<number>(0);
    const [commentInput, setCommentInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCurrentRating(comment.rating)
        setCommentInput(comment.comment)
    },[])


    const totalStars = 5
    const fullStars = currentRating
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(
                    <Image onClick={() => setCurrentRating(i+1)} src={fullStar} alt='Empty star' width={22} height={22} />
                );
            } else {
                stars.push(
                    <Image onClick={() => setCurrentRating(i+1)} src={emptyBlackStar} alt='Empty star' width={22} height={22} />
            );
            }
        }
        return stars;
    };

    async function sendComment() {
        setLoading(true)
        const response = axios.post(`https://main--stellular-fenglisu-e2b691.netlify.app/api/restaurant/comment`, {
            comment: commentInput,
            rating: currentRating
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('authToken')}`,
            }
        })
        .then((response) => {
            setLoading(false)
            setCommentInput('')
            setCurrentRating(0)
            setEditOpen(false)
        })
        return response
    }

    return(
        <div id='modal' className="w-screen bg-white absolute top-0 left-0">
            <div>
                {!loading ?
                    <div>
                     <div>
                    <button onClick={() => setEditOpen(false)} className="border-white border-[1px] px-[30px] py-[10px] rounded-[20px]">
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
                    <div className='w-[70px] h-auto m-auto'>
                        <svg className='logo-icon-svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.73 43.52">
                            <path className='logo-icon-path' d="M20.16 0v18.7L9.51 5.96l-5.64 4.67 9.35 11.12H0V29h18.87l-4.68 5.48c-.97 1.13-2.26 1.77-3.39 1.77H0v7.25h11.29c2.9 0 5.81-1.13 7.42-3.06l5.16-6.12 5.16 6.12c1.61 1.77 4.52 3.06 7.42 3.06h11.29v-7.25h-10.8c-1.13 0-2.42-.64-3.39-1.77L28.87 29h18.87v-7.25H34.52l9.35-11.12-5.64-4.67-10.8 12.73V0" fill="#264BEB"/>
                        </svg>
                    </div>
                    <p className='text-center mt-12 font-["roobert-medium"] text-[1.5rem]'>Edita tu comentario</p>
                </div>
                <div className='flex justify-center mt-12'>
                    {renderStars()}
                </div>
                <div>
                    <textarea 
                        className='w-[50%] mx-[25%] h-[200px] mt-16 p-4 rounded-[20px] border border-[#1B1B1B]' 
                        placeholder='Escribe tu comentario...' 
                        onChange={(e) => setCommentInput(e.target.value)}
                        value={commentInput}
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <button 
                        disabled={commentInput.length < 10 ? true : false}
                        onClick={() => sendComment()}
                        className='border border-black p-2 rounded-[20px] font-["roobert-medium"] text-[1.2rem] px-[30px] mt-12'>
                            Enviar
                    </button>
                </div>
                    </div>
                    :
                    <div className='flex justify-center items-center h-screen w-screen'>
                        <Loader />
                    </div>
                }
            </div>
        </div>
    )
}