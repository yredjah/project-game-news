import React from 'react';

import './BackDrop.scss';

const BackDrop = props => (
  <div className="backdrop" onClick={props.click} />
);

export default BackDrop;
