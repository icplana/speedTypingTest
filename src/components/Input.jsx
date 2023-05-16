import React from 'react'

export const Input = ({ inputRef, errorCounter, handleInput }) => {
  return (
    <>
        <p className='text-center font-bold mt-11'>Escribe el texto:</p>
        <input 
        type="text" 
        ref={ inputRef }
        className={`block border round bg-gray-50 mx-auto w-3/4 mt-5 ${(errorCounter > 0) ? 'bg-red-200 text-red-500' :'' }`}
        onInput={ handleInput }
        
        />
    </>
  )
}
