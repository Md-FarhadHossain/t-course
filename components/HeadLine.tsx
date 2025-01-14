import React from 'react'

const HeadLine = ({children}:{ children: React.ReactNode }) => {
  return (
    <h1 className='text-4xl mb-8 font-medium text-center'>{children}</h1>
  )
}

export default HeadLine