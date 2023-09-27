import React from 'react'

export const TextToSpeech = () => {
  return (
    <div>
      <form className= 'p-1 w-[510px] rounded-full absolute top-[800px] left-[30%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
        <input
          type='text'
          className='p-3 w-full rounded-full outline-none bg-black'
          placeholder='Wingardium Patronum...'
        />
        <button></button>
      </form>
    </div>
  )
}
