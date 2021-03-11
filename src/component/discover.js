import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
import { motion } from "framer-motion"

function App() {
    return (
        <div className="discoverContainer">
            <text className="discoverText">
                Discover
            <motion.text className="discoverText arrow"
            animate={{ x: 25 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            
            >
                →
            </motion.text>
            </text>
        </div>
    )
}

export default App;