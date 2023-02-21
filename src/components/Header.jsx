import React from 'react'
import {Typography} from '@mui/material'
import '../styles/header.css'

function Header() {
    return (
        <div className="header">
            <div className="inner-header flex">
            <Typography
                sx={{
                    marginTop:5
                }}
                textAlign={'center'}
                variant={'h2'}
                component={'h2'}
                
            >
                Noticias
                
                <h1>El chusmita</h1>
                
            </Typography>
            
            
            </div>

            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
            </div>

            <div className="content flex">
                <p></p>
            </div>
        </div> 
    )
}

export default Header
