import { Details }from './page'
import FullStar from '../components/stars/fullStar';
import EmptyBlackStar from '../components/stars/emptyBlackStar';

interface DescriptionProps {
    details: Details,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Description({details, setModalOpen}: DescriptionProps) {


    const totalStars = 5
    const fullStars = details.avgRating

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


    return(
        <div className='w-[96vw] mx-[2vw] my-12 font-["roobert-regular"]'>
            <div className='lg:grid lg:grid-cols-6 lg:gap-12'>
                <p className='text-[1.2rem] col-span-4'>
                    Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.
                </p>
                <div className='hidden lg:block col-span-2 border-[1px] border-black px-10 py-4 rounded-[20px] w-fit'>
                    <div className='flex'>
                        {renderStars()}
                    </div>
                    <p className='my-6 max-w-[250px] text-[1.2rem]'>Escribe tu comentario sobre el restaurante</p>
                    <div className="mt-6">
                        <button onClick={() => setModalOpen(true)} className="border-black border-[1px] px-[30px] py-[10px] rounded-[20px] font-['roobert-medium'] font-[1.5rem]">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}