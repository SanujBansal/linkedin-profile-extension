import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

const root = document.createElement('div');
root.id = 'crx-root';
document.body.append(root);

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <Root />
    </div>
  </React.StrictMode>,
  root
);
