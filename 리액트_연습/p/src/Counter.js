<<<<<<< HEAD
import React, {useReducer} from 'react';

function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state +1;
    case "DECREMENT":
      return state -1;
    default:
      return state;
  }
}
function Counter() {
  const [number, dispatch] = useReducer(reducer,0);
  const onIncrease = () => {
    dispatch({type:'INCREMENT'});
  }
  const onDecrease = () => {
    if(number > 0){
      dispatch({type:'DECREMENT'});
    }
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
=======
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
>>>>>>> 43c0b4c1d860e7a34751be057a213ca2cd94acc9
}

export default Counter;
