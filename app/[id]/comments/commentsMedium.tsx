import React from 'react';
import { Comment } from '../page';
import FullStar from '../../components/stars/fullStar';
import EmptyBlackStar from '../../components/stars/emptyBlackStar';


export default function Comments ({comment: comment}: {comment: Comment}) {

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
            {comment ? (
                <div>
                    <div className='flex justify-between'>
                        <p className='font-["roobert-medium"] text-[2.5rem]'>{comment.owner.name}</p>
                        <div className='flex h-fit'>
                            {renderStars()}
                        </div>
                    </div>
                    <p className='font-["roobert-light"] text-[1rem] my-8'>{comment.comment}</p>
                    <hr className='border-[1px] border-[#264BEB] mt-2 mb-16' />
                </div>
            ) : (
                <div>No details available</div>
            )}
        </div>
    );
};


