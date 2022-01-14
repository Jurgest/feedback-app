import React from 'react'

const Card = ({children, reverse}) => {
    return (
        <div className={`card ${reverse && 'reverse'}`}>
           {children}
        </div>//conditional class css
    );
}

export default Card;
