import React from 'react'

const ImagenInfo = ({ texto, imagen }) => {
  return (
    <div
      className='flex flex-col justify-center items-center ajuste-imagen h-[280px] md:h-[400px] '
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0, .5), rgba(0,0,0, .5)), 
        url("../../imagenes/${imagen}.jpg")`
      }}
    >
      <h2 className='uppercase md:mt-16 mx-4 md:mx-16 text-xl md:text-3xl lg:text-4xl font-semibold text-center text-white tracking-[10px]'>
        {texto}
      </h2>
    </div>
  )
}

export default ImagenInfo
