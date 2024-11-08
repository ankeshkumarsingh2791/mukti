import React from 'react'

const CardHome1 = ({link,text, description}) => {
  return (
    <div className='w-full h-full bg-sky-300'>
        <a href="#" className="group relative  block bg-black">
  <img
    alt=""
    src={link}
    className=" inset-0 absolute  w-full h-full object-fill  opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 mt-8 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">Ankesh Kumar
    <h3>{description}</h3>
    </p>
    

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
         {text}
        </p>
      </div>
    </div>
  </div>
</a>
      
    </div>
  )
}

export default CardHome1
