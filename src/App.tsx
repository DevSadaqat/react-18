import { useState } from 'react';
import './App.css';
import Like from './components/Like';

function App() {
  const handle = () => console.log('clicked');

  return (
    <div className="App">
      <Like></Like>
    </div>
  );
}

export default App;
