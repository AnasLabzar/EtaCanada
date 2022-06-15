import React from 'react'
import icon from "../../assets/Icons/iconCanada.png"

function StepSection() {
    return (
        <div className='relative pb-[2em] top-[35em] md:container md:mx-auto'>
            <div className="headerTitle flex">
                <img className='w-10 h-10 relative left-4' src={icon} alt="" />
                <h1 className='text-2xl font-medium mb-8 ml-6 mt-2'>
                4 steps to share your story and travel experience in Canada :</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className='pl-6 pr-10  py-2 flex flex-col'>
                    <div className='bg-red flex'>
                        <h1 className='text-white text-8xl font-bold opacity-50	'>1</h1>
                    </div>
                    <div className='flex-row bg-white relative bottom-4 rounded-sm opacity-90 px-4 py-3'>
                        <h1 className='text-black font-bold'>Create Your Account</h1>
                        <p className='capitalize text-sm opacity-80 font-medium text-[#2A303C]'>Log in with your account, if you do not have an account, create an account</p>
                    </div>
                </div>

                <div className='pl-6 pr-10  py-2 flex flex-col'>
                    <div className='bg-red flex'>
                        <h1 className='text-white text-8xl font-bold opacity-50'>2</h1>
                    </div>
                    <div className='flex-row bg-white relative bottom-4 rounded-sm opacity-90 px-4 py-3'>
                        <h1 className='text-black font-bold'>START APPLICATION</h1>
                        <p className='capitalize text-sm opacity-80 font-medium text-[#2A303C] '>Fill out our Online Application From by providing some basic details</p>
                    </div>
                </div>

                <div className='pl-6 pr-10  py-2 flex flex-col'>
                    <div className='bg-red flex'>
                        <h1 className='text-white text-8xl font-bold opacity-50'>3</h1>
                    </div>
                    <div className='flex-row bg-white relative bottom-4 rounded-sm opacity-90 px-4 py-3'>
                        <h1 className='text-black font-bold'>VERIFY INFORMATION</h1>
                        <p className='capitalize text-[13px] opacity-80 font-medium text-[#2A303C]'>Verify your application information so we’re sure we have the correct details</p>
                    </div>
                </div>

                <div className='pl-6 pr-10  py-2 flex flex-col'>
                    <div className='bg-red flex'>
                        <h1 className='text-white text-8xl font-bold opacity-50	'>4</h1>
                    </div>
                    <div className='flex-row bg-white relative bottom-4 rounded-sm opacity-90 px-4 py-3'>
                        <h1 className='text-black font-bold'>PUBLISH AN ARTICLE</h1>
                        <p className='capitalize text-sm opacity-80 font-medium text-[#2A303C]'>After completing the previous steps, you can now publish</p>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default StepSection