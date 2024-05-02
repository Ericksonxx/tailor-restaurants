import Image from 'next/image'
import DetailsPhoto from '../../public/details-photo.jpg'
import { Details }from './page'

export default function HeroImage({details}: {details: Details}) {
    return(
        <div className='hero-wrapper bg-black w-[96vw] my-6 rounded-[20px]'>
                <Image className='opacity-70 w-full m-auto h-[60vh] object-cover object-middle rounded-[20px]' src={DetailsPhoto} alt="details-image" width={300} height={300} />
                <div className='absolute top-[25vh] w-full text-center text-white'>
                    <p className='font-["roobert-bold"] text-[2.5rem]'>{details.name}</p>
                    <p className='font-["roobert-regular"] text-[1.5rem]'>{details.address}</p>
                </div>
            </div>
    )
}