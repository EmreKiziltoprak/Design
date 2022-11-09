import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReklamToplantiPage from './pages/ReklamToplantiPage/ReklamToplantiPage';
import ReklamToplantiMecraPage from './pages/ReklamToplantiMecraPage/ReklamToplantiMecraPage';

function App() {
  return (
    <div className="App">
     <ReklamToplantiMecraPage 
       meetingDate="13/08/2024"
       meetingNumber={423}/>
    </div>
  );
}

export default App;
