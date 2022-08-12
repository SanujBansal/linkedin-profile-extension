import React, { useState } from 'react';
import Feedback from '../Feedback';
import Info from '../Info';
import styles from './Main.module.css'
import clsx from 'clsx';

const Main = ({visible}) => {
  

  return (
    <div className={clsx(styles.main , visible ? styles.visible : '')}>
      <Info />
      <Feedback />
    </div>
  );
};

export default Main;
