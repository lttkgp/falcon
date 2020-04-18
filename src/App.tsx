import React from 'react';

import './styles/App.scss';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <div className='content'>This is the content</div>
    </div>
  );
}

export default App;
