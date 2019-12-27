import React, { fragment } from 'react';

const layout = (props) => (
  <fragment>
    <div>Toolbar, sidedrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </fragment>
);

export default layout;
