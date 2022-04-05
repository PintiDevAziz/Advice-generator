import Head from 'next/head'
import React, { useState } from 'react'
import { BsPauseFill } from 'react-icons/bs'
import RandomButton from '../components/RandomButton'
const AdviceBox = ({ advice }) => {
  const [loading, setLoading] = useState(false)
  const { slip } = advice
  const [ad, setAd] = useState(slip)
  const [randomNumber, setRandomNumber] = useState(1)
  const newFetch = async () => {
    await setLoading(true)
    const req = await fetch('https://api.adviceslip.com/advice')
    const res = await req.json()
    await setAd(res.slip)
    await setRandomNumber(Math.round(Math.random() * 5))
    await setLoading(false)
  }
  return (
    <div className="relative flex h-auto w-[32rem] flex-col  items-center justify-center  gap-y-8 rounded-md bg-[#313A49] py-14 px-8">
      <Head>
        <title> {`Advice #${ad?.id}`}</title>
      </Head>
      <div className=" animate-pulse text-xl font-semibold tracking-widest text-[#51FDA8]">
        {`Advice # ${ad?.id}`}
      </div>
      <div className=" text-center text-2xl text-white ">
        {loading ? (
          <div className="h-14  w-14 animate-spin rounded-full border-4 border-l-[#51FDA8]"></div>
        ) : (
          <p>" {ad.advice} "</p>
        )}
      </div>
      <div className="relative mt-4 h-[2px] w-full  rounded-full bg-[#3A4352]">
        <BsPauseFill
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-gray-400 ${
            loading ? 'text-gray-600' : null
          }`}
        />
      </div>
      <div
        className={`absolute -bottom-8 ${
          loading
            ? ' pointer-events-none cursor-not-allowed'
            : 'pointer-events-auto'
        }`}
        onClick={newFetch}
      >
        <RandomButton randomNumber={randomNumber} />
      </div>
    </div>
  )
}

export default AdviceBox
