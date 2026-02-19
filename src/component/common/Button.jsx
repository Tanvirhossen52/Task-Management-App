import React from 'react'

function Button({
    text,onClick,type="button",varinr='primary',fullWidth=false
}) {
  return (
    <>
    <button className='bg-yellow-400' onClick={onClick} type={type}>
        {text}

    </button>
      
    </>
  )
}

export default Button




