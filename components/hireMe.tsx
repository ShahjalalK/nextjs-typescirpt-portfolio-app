import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

type Props = {}

const HireMe = (props: Props) => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
        <div className="w-48 flex items-center justify-center relative">
            <CircularText className={`fill-dark animate-spin-slow`} />
            <Link className="flex items-center absolute left-1/2 top-1/2 justify-center -translate-x-1/2 -translate-y-1/2 bg-dark shadow-md text-light border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark font-semibold" href="/">Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe