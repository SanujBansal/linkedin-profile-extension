import React from 'react';
import Feedback from './Components/Feedback';
import Info from './Components/Info';

import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <Info />
      <Feedback />
    </div>
  );
};

export default Popup;
