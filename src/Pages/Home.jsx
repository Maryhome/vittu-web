import React from 'react'
import ActionContenido from '../Componentes/ActionContenido'
import ActionImagen from '../Componentes/ActionImagen'
import BarraLogo from '../Componentes/BarraLogo'
import ImagenInfo from '../Componentes/ImagenInfo'
import InfoProducto from '../Componentes/InfoProducto'
import SectionComprobado from '../Componentes/SectionComprobado'

const Home = () => {
  return (
    <div>
      <BarraLogo />
      <InfoProducto />
      <ActionImagen texto='Define tu estilo' imagen='hair-facial' />
      <ActionContenido />
      <ImagenInfo texto='Es el momento de superarte, no te quedes atrás' imagen='Playboy-Photo' />
      <SectionComprobado />
    </div>
  )
}

export default Home
