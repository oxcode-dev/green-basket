import React from 'react'
import { Logo } from './Logo'

const Loading = () => {
  return (
    <div className="py-24 min-h-48 flex w-full justify-center">
        <div className="animate animate-bounce">
            <Logo />
        </div>
    </div>
  )
}

export default Loading