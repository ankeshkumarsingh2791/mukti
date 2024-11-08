import React from 'react'

const TrendingCard = ({image, heading}) => {
  return (
    <div className='w-full rounded-md shadow-xl mb-5 bg-slate-50  '>
       <div className=' py-5 flex flex-col items-center justify-center '>
          <img src={image} alt='/' className='w-28 h-28' />
          <h3 className='text-xl font-medium mt-2'>{heading}</h3>
       </div>
    </div>
  )
}

export default TrendingCard
