import React from 'react'
import { Link } from 'react-router-dom';
import './Back.css';
import Backs from '../assets/back.png'

export const Back = () => {
  return (
    <div title="Volver">
        <Link to="/">
            <img className="btn-back" target="_blank" src={Backs} width="74" height="74" alt="Telegram" />
        </Link>
    </div>
  )
}
