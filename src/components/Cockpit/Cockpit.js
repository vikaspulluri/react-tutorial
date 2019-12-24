import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.button;
    }
    if (props.persons.length <= 1) {
      classes.push('red');
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hello world!</h1>
            <p className={classes.red}>This is working!</p>
            <button className={btnClass} onClick={() => props.click()}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;