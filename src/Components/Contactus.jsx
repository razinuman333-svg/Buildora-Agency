import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { useState } from 'react';
import toast from 'react-hot-toast';

function Contactus() {
   

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "618f1236-377d-4283-b26d-3abdee5331e4");
 try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success){
        toast.success('Thank you for your submission!')
        event.target.reset()

    }
    else{
        toast.error(data.message)

    }
} catch(error){
    toast.error(error.message)

}

    };


  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white' id='contact-us'>
        <Title title='Reach out to us' desc='From strategy to execution,we craft digital solutions that move your business forward' />

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2  gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon}/>
                    <input name='name' required className='w-full p-3 text-sm outline-none ' type='text' placeholder='Enter your name'/>
                </div>
            </div>

             <div>
                <p className='mb-2 text-sm font-medium'>Your Email</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon}/>
                    <input name='email' required className='w-full p-3 text-sm outline-none' type='email' placeholder='Enter your email'/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                 <p className='mb-2 text-sm font-medium'>Message</p>
                 <textarea name='message' required className='focus-within:border-blue-500 w-full p-3 text-sm outline-none  rounded-lg border-gray-300 dark:border-gray-600' rows={8} placeholder='Enter your message'/>
            </div>
            <button className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103
            transition-all' type='submit'>
                Submit
                <img className='w-4' src={assets.arrow_icon}/>
            </button>
            

        </form>
      
    </div>
  )
}

export default Contactus
