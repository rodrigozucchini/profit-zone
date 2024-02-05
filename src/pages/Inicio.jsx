import React from 'react'
import NavbarInicio from '../component-inicio/NavbarInicio'
import HeaderInicio from '../component-inicio/HeaderInicio'
import ButtonHeader from '../component-inicio/ButtonHeader'
import Telegram from '../component-inicio/Telegram'
import Testimonio from '../component-inicio/Testimonio'

import Wave from '../component-global/Wave'
import Broke from '../component-inicio/Broke'

const Inicio = () => {
  return (
    <div>
      <NavbarInicio />
      <HeaderInicio />
      <ButtonHeader />
      <Wave />

      <Testimonio />

      <Telegram />
      <Broke />
    </div>
  )
}

export default Inicio
