import React, { useEffect } from 'react';

import './styles/App.scss';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import CSwitch from './components/animatedSwitch.js';

function useHighlight() {
  useEffect(() => {
    console.log('hello');
  }, []);
}
function App() {
  useHighlight();
  return (
    <div className='App'>
      <Router>
        <Sidebar></Sidebar>
        <div className='content'>
          <CSwitch />
        </div>
      </Router>
    </div>
  );
}

export default App;
