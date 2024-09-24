import React from 'react'
import { TfiArrowTopRight } from "react-icons/tfi";

const Button = ({text}) => {
  return (
    <button className="px-10 py-4 rounded-[6rem] bg-[#A2BC6B] shadow-inset shadow-[rgba(255, 255, 255, 0.28)] text-black">
    <TfiArrowTopRight />
    </button>
  )
}

export default Button