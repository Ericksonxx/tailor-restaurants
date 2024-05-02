import emptyStar from '../../../public/star-empty.png' 
import Image from 'next/image'

export default function EmptyStar () {
    return(
        <Image src={emptyStar} alt='Empty star' width={22} height={22} />
    )
}