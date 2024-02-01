import React from 'react'
import Navbar from '../component-global/Navbar'
import Header from '../component-global/Header'
import Button from '../component-global/Button'
import Wave from '../component-global/Wave'
import Copy from '../component-global/Copy'
import { Back } from '../component-global/Back'

const Global = () => {
  return (
    <div>
      <Back />
      <Navbar />
      <Header />
      <Button />
      <Wave />
      <Copy />
    </div>
  )
}

export default Global
