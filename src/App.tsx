import React, { useState } from 'react';

import './styles/App.scss';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

import CSwitch from './components/animatedSwitch.js';

function App() {
  let [expand, setExpand] = useState(true);
  return (
    <div className='App'>
      <Router>
        {/* Sidebar */}
        <Sidebar
          changeExpand={() => {
            setExpand(!expand);
          }}
          expand={expand}
        ></Sidebar>

        {/* Content Switch */}
        <div className={'content' + (expand ? ' expand' : ' contract')}>
          <CSwitch />
        </div>
      </Router>
    </div>
  );
}

export default App;
