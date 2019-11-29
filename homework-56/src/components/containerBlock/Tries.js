import React from 'react';
import S from './block.module.css';
import Button from "./Button";

const Tries = (props) => {
    return (
        <div className={S.tries}>
            Tries: {props.tries}
            <div>{props.win}</div>
            <br/>
            <Button click={props.reset} reset={'Reset'}/>
        </div>
    );
};

export default Tries;