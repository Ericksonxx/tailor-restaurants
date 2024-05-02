import emptyStar from '../../../public/empty-black-star.png' 
import Image from 'next/image'

export default function EmptyStar () {
    return(
        <Image src={emptyStar} alt='Empty star' width={22} height={22} />
    )
}