import React from 'react';
import style from './InputFields.module.css';
const InputFields  = ({id,txt, price,click}) => {
    return(
        <div className={style.card} key={id}>
            <span>{txt}</span>
            <span className={style.price}>{price}</span>
            <span>KGZ</span>

            <button className={style.btn} onClick={click}>Remove
                </button>
        </div>
    )
};
export default InputFields;