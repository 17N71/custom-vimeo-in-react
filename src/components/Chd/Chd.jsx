import React from 'react';

function Chd({size=20}) {
    return (
        <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z"
                  ></path>
        </svg>
    );
}

export default Chd;