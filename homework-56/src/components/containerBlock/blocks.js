import React from 'react';
const Blocks = (props) => {
    return (
        <div id={props.id} className={props.class} onClick={props.click}>
        </div>
    );
};

export default Blocks;