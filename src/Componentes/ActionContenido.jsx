import React from 'react'

const ActionContenido = () => {
  return (
    <div className='grid md:grid-cols-2 justify-center items-center bg-black text-white'>
      <img src='../../imagenes/Notorius-4.jpg' alt='Imagen del producto' className='w-full' />
      <div className='lg:px-28 p-6 flex flex-col justify-center items-center'>
        <h2 className='text-[3rem] leading-[1] font-semibold mb-12'>Productos elavorados exclusivamente para hombres</h2>
        <p className='mb-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque deleniti
          cum aut, sapiente adipisci reiciendis numquam dolores earum.
        </p>
        <p className='mb-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur eligendi
          corporis quam cupiditate. Laboriosam, ipsa fugiat labore eum non exercitationem,
          repudiandae eligendi similique hic, eos provident ullam tenetur dolore.
        </p>
        <button className='boton'>Ver productos</button>
      </div>
    </div>
  )
}

export default ActionContenido
