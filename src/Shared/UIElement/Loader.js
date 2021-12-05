import React from 'react'
import './Loader.css'

function Loader(props){
    const circles = document.querySelectorAll('.loading__circle');

circles.forEach((circle, idx) =>{
    circle.style.borderWidth = (idx + 1) * 3 + 'px';
    circle.style.zIndex = -idx;
    circle.style.animationName = `rotate-${idx}`;

    const deg = (idx + 1) * 360;

    const style = document.createElement('style');

    style.innerHTML =  `
        @keyframes rotate-${idx} {
            to{
                transform: translate(-50%, -50%) rotate(${deg}deg);
            }
        }
    `;

    document.body.appendChild(style);
})
    return (
          
            <div className={`loading__container ${props.asOverlay && 'loading-spinner__overlay'}`}>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            <div className="loading__circle"></div>
            
        </div>
        
    )
}

export default Loader