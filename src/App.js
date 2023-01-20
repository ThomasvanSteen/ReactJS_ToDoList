import React, { useState } from 'react';
import './style.css';
import Counter from './Counter'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTrash)

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: 'banaan', done: false},
    { id: 2, description: 'peer', done: false },
    { id: 3, description: 'apple', done: false },
  ]);


  const [Amount, setAmount] = useState(0);
   
  //increase counter
  const increase = () => {
    setAmount(Amount => Amount + 1);
  };   
  //decrease counter
  const decrease = () => {
  if (counter > 0) {
    setAmount(Amount => Amount - 1);
  }
};




  const [counter, setCounter] = useState(6);
  let textInput = React.createRef();
  let doItem = (id) => {
    let itemsCopy = [...items];
    itemsCopy.map((item) => {
      if (item.id == id) {
        item.done = !item.done;
      }
    });
    itemsCopy = sortItems(itemsCopy);
    setItems(itemsCopy);
  };
  let deleteItem = (id) => {
    setItems([...items].filter((item) => item.id != id));
  };
  let addItem = () => {
    if (textInput.current.value != '') {
      let itemsCopy = [...items];
      itemsCopy.push({
        id: counter,
        description: textInput.current.value,
        done: false,
      });
      setCounter(counter + 1);
      itemsCopy = sortItems(itemsCopy);
      setItems(itemsCopy);
      textInput.current.value = '';
    }
  };
  let sortItems = (items) => {
    items.sort(function (x, y) {
      return x.done - y.done;
    });
    return items;
  };
  return (
    
    <div>
      <h1>boodschappen lijst</h1>
      <hr />
      {items.map((item) => (
        <ToDoItem
          id={item.id}
          key={item.id}
          description={item.description}

          done={item.done}
          doItem={doItem}
          deleteItem={deleteItem}
        />
      ))}
      <hr />
      <input ref={textInput} type="text" />
      <button onClick={addItem}>+</button>
    </div>
  );


}


function ToDoItem(props) {
  let doItem = () => {
    props.doItem(props.id);
  };
  let deleteItem = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className={props.done ? 'do' : 'done'}>
      <div className='padding'> <input type="checkbox" onClick={doItem} checked={props.done ? 'checked' : ''}></input></div>
      <div className='padding'> {props.description}</div>
      <div className='padding'> <Counter count={10} /> </div>
      <div className='padding'> <button onClick={deleteItem}><FontAwesomeIcon icon="trash" /></button></div>
    </div>
  );
}