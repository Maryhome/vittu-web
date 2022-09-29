import React from 'react'

const InfoProducto = () => {
  return (
    <div className='flex flex-1 justify-start items-center font-[Open_sans] object-fill md:h-[700px] bg-no-repeat bg-cover bg-center bg-[url(../../imagenes/1.2.Barbudo.jpg)]'>
      <div className='lg:w-1/2 md:w-[60%] md:py-10 md:px-10 px-6 py-6 md:ml-10 my-12 text-white'>
        <div className='flex flex-1 items-center justify-start gap-2 mr-auto'>
          <p className=' bg-slate-50 text-black px-1 font-bold uppercase text-[0.5rem] md:text-[11px] tracking-[2px]'>Barbudo®</p>
          <p className='border-solid border-[1px] px-2 uppercase text-[0.4rem] md:text-[11px] text-zinc-400 tracking-[2px]'>Premium hair & beard Growth Formula</p>
        </div>
        <h1 className='md:text-5xl text-3xl mt-2 mb-12'>Crecimiento de barba acelerado desde tus Genes</h1>
        <p className='text-justify mb-10 text-[12px] md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ex blanditiis
          ea delectus repellendus neque beatae officia nostrum ut laborum aut, eveniet veroluptateo
          molestias iure cumque in architecto vero voluptatem exercitationem iure cumque in architecto  vm exercitationem.
        </p>
        <button className='boton text-[10px] md:text-base'>Más información</button>
      </div>
    </div>
  )
}

export default InfoProducto
