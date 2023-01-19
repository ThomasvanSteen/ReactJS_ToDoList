import React, { useState } from 'react';
import './style.css';



export default function Counter() {
    const [amount, setCounter] = useState(0);
   
    //increase counter
    const increase = () => {
      setCounter(amount => amount + 1);
    };   
    //reset counter 
    const reset = () =>{
      setCounter(0)
    }
    //decrease counter
const decrease = () => {
    if (amount > 0) {
      setCounter(amount => amount - 1);
    }
  };
   
    return (
      <div className="amount">
        <div className="btn__container">
          <button className="control__btn" onClick={decrease}>-</button>
          <span className="counter__output">{amount}</span>
          <button className="control__btn" onClick={increase}>+</button>
        </div>
      </div>
    );
  }
  