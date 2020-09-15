import React from 'react';
import './Button.css';

const Button = (props) => {
    return <div className="scroll-link" onClick={props.scroll}>
        <i className="fas fa-chevron-up fa-2x"></i>
    </div>
}

export default Button;