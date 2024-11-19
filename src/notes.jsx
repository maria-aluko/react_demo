// Class component with a state

//React is default and Component is a named import
import React, { Component } from 'react'; 

class Counter extends Component {
  // declare the state the class component has in the beginning
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
// this component props and the object attribute (name)
// this component state and the object attribute (count)
// this will display a div that has the object attribute as a p and the count (which is 0)

export default Counter;


// useState

import { useState } from 'react';
function Person() {
  // declare an object (or array) (person and age)
  // for the person object, use state of 1 for id attribute and Margit as name
  const [person, setPerson] = useState({ id:1, name: 'Margit'});
  //use state 29, first is the variable name (age)
  // second is the method name which will change the state (setAge)
  const [age, setAge] = useState(29);

  // declare a const always with []

  return (
    <div>
      <h2>Person Details</h2>
      <p>ID: {person.id}</p>
      <p>Name: {person.name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;