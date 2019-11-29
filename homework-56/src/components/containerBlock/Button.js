import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.click}>{props.reset}</button>
    );
};

export default Button;