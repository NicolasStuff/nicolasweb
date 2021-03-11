import React, { useEffect, useRef, Component } from 'react';
import './App.css';
import CodeDesign from './component/codeDesign'
import Discover from './component/discover'

function App() {
  return (
    <div>
      <div className= "sectionSize">
        <CodeDesign></CodeDesign>
      </div>
      <div>
        <Discover></Discover>
      </div>
    </div>
  )
}

export default App;
