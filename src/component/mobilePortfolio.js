import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
import { motion } from "framer-motion"

function MobileDev() {
    return (
        <div className="portFolioContainer">
            <motion.text className="discoverText"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}>
                Mobile Portfolio
            <motion.text className="discoverText arrow"
                    animate={{ x: 25 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    
                    >→
            </motion.text>
            </motion.text>
        </div>
    )
}

export default MobileDev;