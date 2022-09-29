import React from 'react'
import { FaShippingFast, FaCheckSquare, FaRegCheckCircle } from 'react-icons/fa'
const SectionComprobado = () => {
  const listaContenido = [
    { id: 1, icon: <FaShippingFast />, texto: 'Envios a toda Venezuela' },
    { id: 2, icon: <FaCheckSquare />, texto: 'Hecho en Estados Unidos' },
    { id: 3, icon: <FaRegCheckCircle />, texto: 'Producto Certificado' }
  ]

  const contenidoPrueba = listaContenido.map(el =>
    <div key={el.id} className='flex justify-center items-center gap-4 p-4'>
      <h3>{el.icon}</h3>
      <h3>{el.texto}</h3>
    </div>
  )
  return (
    <div className='flex flex-col md:flex-row justify-around items-center py-8 '>
      {contenidoPrueba}
    </div>
  )
}

export default SectionComprobado
