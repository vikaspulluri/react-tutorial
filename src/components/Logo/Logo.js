import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height ? props.height : null}}>
    <img src={burgerLogo} alt="Burger Builder"/>
  </div>
);

export default logo;
