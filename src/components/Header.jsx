import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="row">
      <div className="col-sm-12 header" style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <img src={logo} alt="logo"  width="100"/>
      </div>
    </div>
  )
}