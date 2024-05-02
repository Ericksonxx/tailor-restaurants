import React, { useEffect, useState } from 'react';
import { Comment } from '../page';
import FullStar from '../../components/stars/fullStar';
import EmptyBlackStar from '../../components/stars/emptyBlackStar';
import EditModal from '../modal/editCommentModal'
import { Details } from '../page'

export default function Comments ({comment: comment}: {comment: Comment}, {details: details}: {details: Details}) {

    const [userComment, setUserComment] = useState<boolean>(false)
    const [editOpen, setEditOpen] = useState(false)
    

    useEffect(() => {
        if(comment.owner.name === JSON.parse(localStorage.getItem("user_name") || '')) {
            setUserComment(true)
           
        }
    },[])

    const totalStars = 5
    const fullStars = comment.rating

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<FullStar key={i} />);
            } else {
                stars.push(<EmptyBlackStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <div className='mx-12 my-24'>
            {editOpen  ?
            <div className='fixed top-0 left-0 w-screen bg-white h-screen'>
                <EditModal comment={comment} editOpen={editOpen} setEditOpen={setEditOpen}/>
            </div>
            :
            <div>
            {comment ? (
                <div>
                    <div className='flex h-fit justify-end'>
                        {renderStars()}
                    </div>
                    <div className='grid grid-cols-12 mt-2 gap-4 align-top'>
                        <p className='col-span-3 font-["roobert-medium"] text-[2.5rem]'>{comment.owner.name}</p>
                        <p className='col-span-9 font-["roobert-light"] text-[1.2rem] mb-8'>{comment.comment}</p>
                    </div>
                    {userComment && 
                        <div className='flex justify-end'>
                            <button 
                                onClick={() => setEditOpen(true)} 
                                className='w-fit border border-black p-2 rounded-[20px] font-["roobert-medium"] text-[1.2rem] px-[30px]'>
                                    Editar
                                </button>
                            <button className='w-fit border border-black p-2 rounded-[20px] font-["roobert-medium"] text-[1.2rem] px-[30px] ml-4'>Eliminar</button> 
                        </div>
                    }
                    <hr className='border-[1px] border-[#264BEB] mt-2 mb-16' />
                </div>
                
            ) : (
                <div>No details available</div>
            )}
            </div>
            }
        </div>
        
    );
};


