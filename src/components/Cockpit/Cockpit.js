import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      console.log('checking useEffect in Cockpit.js')
    }, 1000);
    return () => console.log('cleanup work in useEffect in Cockpit.js')
  }, [props.persons])

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.button;
  }
  if (props.persons.length <= 1) {
    classes.push('red');
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Person manager!</h1>
      <p className={classes.red}>This is working!</p>
      <button className={btnClass} onClick={() => props.click()}>Toggle Persons</button>
    </div>
  );
}

export default Cockpit;
