import React, { useRef } from 'react';
import confetti from 'canvas-confetti';


const ConfettiClick = () => {
    const buttonRef = useRef(null);

    const handleClick = (event) => {
        const cursorPosition = {
            x: event.clientX,
            y: event.clientY
        };
        console.log('Cursor position:', cursorPosition);
        confetti({
            particleCount: 50,
            spread: 300,
            origin: {
                x: cursorPosition.x / window.innerWidth,
                y: cursorPosition.y / window.innerHeight
            }
        })
    };

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>Click me for confetti!</button>
        </div>
    );
};

export default ConfettiClick;