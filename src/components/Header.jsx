import React from 'react'

const Header =()=> {
    return (
        <header>
            <div className="container">
                <h2>Feedback UI</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)'
}

export default Header;
