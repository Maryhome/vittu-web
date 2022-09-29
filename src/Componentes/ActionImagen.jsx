import React from 'react'

const ActionImagen = ({ texto, imagen }) => {
  return (
    <div
      className='flex flex-col justify-center items-center bg-cover object-fill bg-no-repeat
         bg-top h-[200px] md:h-[450px]'
      style={{ backgroundImage: `url("../../imagenes/${imagen}.jpg")` }}
    >
      <h2 className='uppercase md:my-10 mx-10 text-3xl md:text-4xl lg:text-[3.8rem]
      font-semibold text-center text-white tracking-[10px] md:tracking-[22px]'
      >
        {texto}
      </h2>
      <button className='boton border-transparent bg-black/80 mt-4 text-white'>Conoce más</button>
    </div>
  )
}

export default ActionImagen
