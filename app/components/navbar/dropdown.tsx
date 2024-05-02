import './dropdown.css'
import Logout from './logout'

export default function Dropdown({open}: {open: string}) {

    return(
        <div className={`${open} dropdown flex justify-end py-2 fixed top-0 right-0 w-full h-fit z-50 h-fit mt-[50px]`}>
            <div className="md:px-8 md:py-6 bg-[#264BEB] p-4 rounded-[20px] text-[#ffffff] font-['roobert-regular']">
                <div className="mb-2">
                    <button>Panel de control</button>
                </div>
                <div className="my-2">
                    <button>Añadir restaurante</button>
                </div>
                <hr className="mt-6" />
                <div className="mt-6 mb-2">
                   <Logout />
                </div>
            </div>
        </div>
    )
}