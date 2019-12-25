import React from 'react';

const withId = (WrappedComponent, id) => {
  return props => (
    <div id={id}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withId;
