import { useEffect, useState } from 'react';
import './App.css';
import Like from './components/Like';
import Message from './Message';

function App() {
  //state objects are imutable we need to return the
  // new object
  // const [drink, setDrink] = useState({
  //   title: 'Coke',
  //   price: 5,
  // });
  const [isVisible, setVisible] = useState(false);

  //React update the state async
  const handleClick = () => {
    setVisible(true);
    console.log(isVisible);
    // setDrink({ ...drink, price: 6 });
  };

  console.log(isVisible);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me!</button>
      {isVisible ? 'visible' : null}
    </div>
  );
}

export default App;
