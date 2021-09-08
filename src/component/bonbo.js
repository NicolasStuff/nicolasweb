import React, { useEffect, useRef, Component } from 'react';
import '../App.css';

function  Bonbo() {
  return (
    <div className='portFolioContainer center row whiteBackgroundProjectRight'>
      <div className='titleAndDescRight'>
        <text className="TitleMobile">Bonbo</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">Mobile App of Bonbo </text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">FullStack developpement : ReactJS/Firebase</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Features : Chat App, Activites suggestions, Health Expert suggestions, Agenda kids Friendly and discount.</text>
        </div>
      </div>
      <img src={require('../img/Bonbo.png')} className='consultPic'></img>
    </div>
  )
}
export default Bonbo;
