import React from 'react'
import {
  BsFillDice5Fill,
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice6Fill,
} from 'react-icons/bs'
const RandomButton = ({ randomNumber }) => {
  const icons = [
    {
      id: 1,
      icon: <BsFillDice1Fill />,
    },
    {
      id: 2,
      icon: <BsFillDice2Fill />,
    },
    {
      id: 3,
      icon: <BsFillDice3Fill />,
    },
    {
      id: 4,
      icon: <BsFillDice4Fill />,
    },
    {
      id: 5,
      icon: <BsFillDice5Fill />,
    },
    {
      id: 6,
      icon: <BsFillDice6Fill />,
    },
  ]

  return (
    <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#51FDA8] transition-colors hover:bg-[#47d48e]">
      {icons.map((item, key) => (
        <>{item.id === randomNumber + 1 ? item.icon : null}</>
      ))}
    </div>
  )
}

export default RandomButton
