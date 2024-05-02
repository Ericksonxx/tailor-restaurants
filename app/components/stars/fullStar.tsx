import fullStar from '../../../public/star-full.png' 
import Image from 'next/image'

export default function FullStar () {
    return(
        <Image src={fullStar} alt='Full star' width={22} height={22} />
    )
}