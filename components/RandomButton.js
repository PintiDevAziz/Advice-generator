import React from 'react'
import { BsFillDice5Fill } from 'react-icons/bs'
const RandomButton = () => {
  return (
    <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#51FDA8] transition-colors hover:bg-[#47d48e]">
      <BsFillDice5Fill className="text-2xl" />
    </div>
  )
}

export default RandomButton
