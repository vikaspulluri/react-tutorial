import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   console.log('checking useEffect in Cockpit.js')
    // }, 1000);
    toggleBtnRef.current.click()
    return () => {
      // clearTimeout(timer);
      console.log('cleanup work in useEffect in Cockpit.js');
    }
  }, [props.persons])

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.button;
  }
  if (props.personsLength <= 1) {
    classes.push('red');
  }
  return (
    <Aux>
      <div className={classes.Cockpit}>
        <h1>Person manager!</h1>
        <p className={classes.red}>This is working!</p>
        <button
          className={btnClass}
          onClick={() => props.click()}
          ref={toggleBtnRef}>Toggle Persons</button>
      </div>
    </Aux>
  );
}

export default React.memo(Cockpit);
