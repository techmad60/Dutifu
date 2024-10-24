import { IoIosCheckmark } from "react-icons/io";

export default function Check({ position }: { position: 'left' | 'right' }) {
    const checkPosition = position === 'left' ? 'left-32 lg:left-[9.8rem]' : '-right-1 lg:-right-2';

    return (
        <div className={`w-[30px] h-[30px] rounded-full bg-color-three absolute flex items-center justify-center bottom-10 lg:w-[38px] lg:h-[38px] lg:bottom-16 ${checkPosition} transition duration-300 ease-in-out`}>
            <IoIosCheckmark className="text-white text-2xl "/>
        </div>
    )
 
}
