import React from 'react'
import './Telegram.css';
import TelegramImg from '../assets/telegram.png'

const Telegram = () => {
  return (
    <div title="Quiero unirme">
        <a href="https://t.me/+NW9H7JmyRIhiMGMx">
        <img className="btn-telegram" target="_blank" src={TelegramImg} width="94" height="94" alt="Telegram" />
        </a>
    </div>
  )
}

export default Telegram;