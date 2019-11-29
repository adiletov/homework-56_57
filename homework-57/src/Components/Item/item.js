import React from 'react';
import style from './item.module.css';
const AddTaskForm = (props) => {
    return (
        <div className={style.block} >

            <input className={style.input} type="text"   placeholder="Item Name" onChange={props.onChange}/>
            <input className={style.price} type="number" placeholder="Cost" onChange={props.onChangeNumber}/>
            <button className={style.btn}  onClick={props.onClick}>Add
            </button>
        </div>
    )
};

export default AddTaskForm;