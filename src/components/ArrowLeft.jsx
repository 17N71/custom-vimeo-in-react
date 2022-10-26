import React from 'react';

function ArrowLeft({color,size}) {
    return (
        <svg width={`${size}px`} height={`${size}px`}>
            <path d="M12.88 16 .44 3.56a1.498 1.498 0 0 1 0-2.12l1-1a1.496 1.496 0 0 1 2.12 0l13.854 14.145c.78.782.78 2.048 0 2.83L3.56 31.56a1.496 1.496 0 0 1-2.12 0l-1-1a1.498 1.498 0 0 1 0-2.12L12.88 16z" fill={color}/></svg>
    );
}

export default ArrowLeft;