import { useEffect, useState } from 'react';
import './App.css';
import Like from './components/Like';
import Message from './Message';

function App() {
  //state objects are imutable we need to return the
  // new object
  const [drink, setDrink] = useState({
    title: 'Coke',
    price: 5,
  });
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  // course exercise update the game player name to Ali
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  //always return new array and object when updating
  const handleClick = () => {
    //update the game object
    setGame({ ...game, player: { name: 'Ali' } });

    /*
    //update the nested obj
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))

    //add new prop to obj
    setDrink({ ...drink, price: 6 });

    //add new prop to array
    setTags([...tags, 'exciting']);

    //remove 
    setTags(tags.filter(tag => tag != 'happy'));

    //update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
    **/
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
