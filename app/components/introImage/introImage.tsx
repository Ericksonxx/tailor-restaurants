import Image from 'next/image';
import introImage from '../../../public/intro-image.jpeg'; 

export default function IntroImage() {
    return (

        <div>
        {/* dektop */}
        <div className='hidden lg:block font-["roobert-regular"]'>
            <div className='m-auto w-[90%]'>
                <Image className='object-cover h-[90vh] w-[100%] my-[5vh] bg-[#F1F1F0] rounded-[20px]' height={300} width={300}  alt="intro-image" src={introImage} />
            </div>
        </div>

        {/* mobile */}
        <div className='block lg:hidden font-["roobert-regular"]'>
            <div className="relative">
                <Image className='object-cover md:h-[60vh] h-[30vh] w-[90vw] mx-[5vw] my-[2vh] bg-[#F1F1F0] rounded-[20px]' height={300} width={300} alt="intro-image" src={introImage} />
            </div>
        </div>

        </div>
    );
}