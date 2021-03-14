import React, { useEffect, useRef, Component } from 'react';
import '../App.css';

function Profile() {
  return (
    <div className='discoverContainer center row whiteBackgroundProfile'>
      {/* <div className='whiteBackgroundProfile'> */}
      <img src={require('../img/profilePic.png')} className='profilePic'></img>
      {/* </div> */}
      <div className='titleAndDescRight'>
        <text className="Title">About me :</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">Hi! My name is Nicolas Ivorra, I’m a
          tech entrepreneur and a web and mobile
fullstack developer based in Paris ! 🥖 </text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">My main stack is React and React Native
as a frontend developer ⚛</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">For the backend, I’m used to work with NodeJS
or Firebase 🔥</text>
        </div>
      </div>
    </div>
  )
}
export default Profile;
