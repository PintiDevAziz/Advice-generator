import React from 'react'
import AdviceBox from '../components/AdviceBox'
const Index = ({ advice }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#202632]">
      <AdviceBox advice={advice} />
    </div>
  )
}
export const getStaticProps = async () => {
  const req = await fetch(`https://api.adviceslip.com/advice`)
  const res = await req.json()
  return {
    props: {
      advice: res,
    },
  }
}
export default Index
