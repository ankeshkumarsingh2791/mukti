import React from 'react'

const CardHome2 = ({heading,heading0,a1,a2,a3,a4,icon}) => {
  return (
    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center "
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
       {icon}
      </div>
    </div>

    <div>
      <strong
        className=" text-blue-700 font-medium py-1.5 text-lg  "
      >
        {heading0}<br />
       {heading}
      </strong>

    

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          
           

          <p className="text-lg font-medium">{a1} <br /> {a2}</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="mt-2  font-medium text-gray-500 text-lg sm:mt-0">
         {a3} <br />
         <h3>{a4}</h3>
        </p>
      </div>
    </div>
  </div>
</article>
  )
}

export default CardHome2
