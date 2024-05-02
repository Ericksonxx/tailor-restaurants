
import './introScreen.css';
import Textbox from '../../textbox/textbox';
import IntroImage from '@/app/components/introImage/introImage';

export default function IntroScreen() {

    return (
        <div>
        {/* dektop */}
        <div className='hidden lg:grid lg:grid-cols-2 lg:gap-6 font-["roobert-regular"]'>
            <div className='relative'>
                <Textbox />
            </div>
            <div className='m-auto w-[90%]'>
                <IntroImage />
            </div>
        </div>

        {/* mobile */}
        <div className='block lg:hidden font-["roobert-regular"]'>
            <div className="relative">
                <IntroImage />
                <Textbox />
            </div>
        </div>

        </div>
        
    )
}
