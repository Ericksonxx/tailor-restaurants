'use client'
import { Restaurant } from '../page'
import EmptyStar from '../../components/stars/emptyStar'
import FullStar from '../../components/stars/fullStar'
import { useRouter } from 'next/navigation'

export default function ReelCard({restaurant}: {restaurant: Restaurant}) {

    const router = useRouter()

    const totalStars = 5
    const fullStars = restaurant.avgRating

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<FullStar key={i} />);
            } else {
                stars.push(<EmptyStar key={i} />);
            }
        }
        return stars;
    };


    const handleDetailsClick = (restaurant : Restaurant) => {
        router.push(`/${restaurant._id}`);
      };


    return(
        <div 
            className="bg-cover w-full h-full p-2 text-[#ffffff] mx-4 shadow-2xl rounded-[10px] bg-center bg-no-repeat cursor-pointer "
            style={{ backgroundImage: `url(${restaurant.image})` }}
            id='card'
        >
            <div className='flex justify-end'>
                <div className='w-fit h-fit bg-blue-500 px-4 rounded-full font-["roobert-light"] text-xs shadow-xl'>
                    <button onClick={() => handleDetailsClick(restaurant)}>See details</button>
                </div>
            </div>
            <div className='flex flex-col justify-end h-full p-4'>
                <p>{restaurant.name}</p>
                <p>{restaurant.address}</p>
                <div className='flex items-center '>
                    {renderStars()}
                </div>
            </div>
        </div>
    )
}