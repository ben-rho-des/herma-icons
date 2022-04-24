import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BurgerIcon, PlusOutlineIcon } from './icons';

const componentList = [
  {
    componentName: 'BurgerIcon',
    component: BurgerIcon
  },
  {
    componentName: 'PlusOutlineIcon',
    component: PlusOutlineIcon
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>🗿</h1>
    {componentList.map((c) => (
      <div className='icon'>
        <c.component />
        <p>{c.componentName}</p>
      </div>
    ))}
  </React.StrictMode>
);
