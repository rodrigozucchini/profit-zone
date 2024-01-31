import React from 'react'
import NavbarInicio from '../component-inicio/NavbarInicio'
import HeaderInicio from '../component-inicio/HeaderInicio'
import ButtonHeader from '../component-inicio/ButtonHeader'
import Telegram from '../component-inicio/Telegram'
import Testimonio from '../component-inicio/Testimonio'
import Hotmart from '../component-inicio/Hotmart'
import Wave from '../component-global/Wave'

const Inicio = () => {
  return (
    <div>
      <NavbarInicio />
      <HeaderInicio />
      <ButtonHeader />
      <Wave />
      <Hotmart />
      <Testimonio />
      <Telegram />
    </div>
  )
}

export default Inicio
