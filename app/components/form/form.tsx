
import SigninContent from './signinContent'
import LoginContent from './loginContent'
import Logo from './logo'

export default function Textbox() {

    const path = typeof window !== 'undefined' ? window.location.pathname : '/';

    return(
        <div className='text-[#ffffff]'>
            <div className="hidden lg:block">
                <div className='absolute bottom-[5%] bg-[#264BEB] p-[3%] ml-[5%] rounded-[20px] w-full'>
                    <Logo />
                   {path === '/signin' ? <SigninContent /> : <LoginContent />}
                </div>
            </div>


            <div className='block lg:hidden bg-[#264BEB] p-[3%] mx-[5vw] rounded-[20px]'>
                    <Logo />
                    {path === '/signin' ? <SigninContent /> : <LoginContent />}
            </div>
        </div>
    )
}