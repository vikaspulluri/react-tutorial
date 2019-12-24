import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;