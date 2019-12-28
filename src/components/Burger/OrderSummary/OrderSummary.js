import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}</li>)
  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout:</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Fragment>
  );
}

export default orderSummary
