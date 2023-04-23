import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (

    <button
    type={btnType}
    className={`font-epilogue font-semibold text-[16px] leading-[20px] ${styles}`}
    onClick={handleClick}
    >
        {title}
    </button>
   
  )
}

export default CustomButton