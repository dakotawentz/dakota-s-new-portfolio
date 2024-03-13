import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1553615730-76985f2a7be3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>A portfolio for Dakota Wentz</h1>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='https://www.facebook.com/profile.php?id=100055054327522' target='_blank' rel='noopener noreferrer'>
                            <FaFacebookF className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.instagram.com/dakotawentz/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.linkedin.com/in/dakota-wentz-570911276/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main;