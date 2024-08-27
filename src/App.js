import React, { useState } from 'react'; 
import './App.css';
import Sidebar from './components/Sidebar';

function App() {



  return (
    <div className="App">
      <Sidebar />
      
      <div className="content">
        Add speaker
      </div>
    </div>
  );
}

export default App;
