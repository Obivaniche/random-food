import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import AppContainer from '../AppContainer/AppContainer';
import Popup from '../Popup/Popup';

function App() {

  const [isOpen, setIsOpen] = useState(true);
 
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <AppContainer />
      <Popup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
