import React from 'react';

import './styles/App.scss';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import CSwitch from './components/CSwitch.js';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* Sidebar */}
        <Sidebar></Sidebar>

        {/* Content Switch */}
        <div className='content expand'>
          <CSwitch />
        </div>
      </Router>
    </div>
  );
}

export default App;
