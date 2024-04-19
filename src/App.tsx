import React from 'react'
import {FaFacebook, FaGoogle} from 'react-icons/fa'

const App = () => {
  return (
      <main>
        <div className='flex flex-row border border-black justify-between h-screen'>
        <div className='px-8 py-4 w-[50%]'> 
        <img src="favicon.ico" alt="Logo " className="w-[20px]" />
        <form className='flex flex-col justify-center items-center w-full h-full space-y-3'>
        <span className='w-[50%]'>
          <h1 className='font-bold'> Sign In </h1>
         
         <text className='text-gray-500 text-[12px]'>Enter your account details to enter our platform.</text>
          </span>  
          <div className='flex flex-col items-center w-full '>
          <button className='flex flex-row justify-evenly bg-white border border-gray-400 rounded-md  gap-x-2 mb-2 w-[50%]'><FaGoogle className='mt-1'/>Sign In With Google</button>
          <button className='flex flex-row justify-evenly bg-white border border-gray-400 rounded-md gap-x-2 w-[50%] '><FaFacebook className='mt-1' />Sign In With Facebook</button>
          </div>
          <p className='text-gray-400 flex justify-center'>OR</p>
          <input type="email" placeholder="Enter your email" className="border border-gray-400 rounded-md p-2 mb-4 w-[50%]" />
            <input type="Password" placeholder="Enter your Password" className="border border-gray-400 rounded-md p-2 mb-4 w-[50%]" />
            <button className="bg-blue-500 flex justify-center items-center space-x-2 w-[50%] rounded-md h-[35px] text-white">Login</button>
            <a href="#" className="text-blue-500">Forgot Password?</a>
             <p>Don't Have An Account? <a href="#" className="text-blue-500">Create One</a>
</p>



          
        </form>
        </div>
        <div className='w-[50%] relative'>
          <img src="Doctor.jpg" alt="Doctor " className=" h-full" />
          
          <div className="bg-blue-500 text-white p-4 rounded-md absolute w-[70%] right-0 bottom-0 border-2xl border-white  ">
          A foundation GPT model built from the ground up on medical events specifically for all the encoded data in healthcare.
          </div>
        
        </div>
        </div>
      </main>
  )
}

export default App
