import React from 'react'
import {HiOutlineLightningBolt} from 'react-icons/hi';
import {BiBrain} from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai';
const Second = () => {
  return (
    <div className="flex flex-col w-auto px-7 py-8 rounded-3xl">
      <h2 className=" text-black text-lg font-bold">
        Summary
      </h2>
      <div className='flex justify-between bg-red-50 items-center w-aut0 gap-14 px-3 py-2 mt-[1rem] rounded-lg'>
        <div className='flex gap-2 items-center'>
            <HiOutlineLightningBolt className='text-red-400 font-bold' />
            <h3 className='text-red-400 font-bold'>Reaction</h3>
        </div>
        <div><small className='font-bold text-base'>80</small> / <small className='text-base text-gray-500'>100</small></div>
      </div>


      <div className='flex justify-between bg-yellow-50 items-center w-aut gap-14 px-3 py-2 mt-[1rem] rounded-lg'>
        <div className='flex gap-2 items-center'>
            <BiBrain className='text-yellow-400 font-bold' />
            <h3 className='text-yellow-400 font-bold'>Memory</h3>
        </div>
        <div><small className='font-bold text-base'>92</small> / <small className='text-base text-gray-500'>100</small></div>
      </div>

      <div className='flex justify-between bg-green-100 items-center w-auto gap-14 px-3 py-2 mt-[1rem] rounded-lg'>
        <div className='flex gap-2 items-center'>
            <AiOutlineMessage className='text-green-400 font-bold' />
            <h3 className='text-green-400 font-bold'>Reaction</h3>
        </div>
        <div><small className='font-bold text-base'>61</small> / <small className='text-base text-gray-500'>100</small></div>
      </div>

      <div className='flex justify-between bg-violet-100 items-center w-auto gap-14 px-3 py-2 mt-[1rem] rounded-lg'>
        <div className='flex gap-2 items-center'>
            <AiOutlineEye className='text-violet-950 font-bold' />
            <h3 className='text-violet-950 font-bold'>Reaction</h3>
        </div>
        <div><small className='font-bold text-base'>72</small> / <small className='text-base text-gray-500'>100</small></div>
      </div>

      <button className='w-[100%] mt-[1.5rem] bg-gray-900 py-2 rounded-3xl text-white font-bold text-lg'>
        Continue
      </button>
    </div>
  )
}

export default Second
