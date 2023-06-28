import { useState } from 'react';
import './App.css';
import Form from './components/form';
import './index.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
