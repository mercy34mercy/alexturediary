import React from 'react'
import './stylesheets/Header.css';
import img from './user_icon.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="inner">
        <div className="header__title ">
        <a ><span className='title__logo__diary'>ALEXTURE</span>DIARY</a>
        </div>

        <button className="header__hamburger hamburger">ボタン
        </button>
        <img src={img}></img>
      </div>
    </div>
  )
}

export default Header