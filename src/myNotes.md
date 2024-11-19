### First session notes

- function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  }

- const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
  }

- class Welcome extens React.Component {
  render() {
  return <h1>Hello, {this.props.name}</h1>
  }
  }

The new React doesn't use the React.Component, it's simply Component now:

class Welcome extens Component {
render() {
return <h1>Hello, {this.props.name}</h1>
}
}

### Second session notes

Components should be always written with a capital letter

A component creates an HTML element

Props allow you to pass data with attributes from the parent to a child element/to the component.

### Named exports

//call the export in front of the function

// in Box.js
export function Box() {
return <div>I'm a Box!</div>
}

export function Circle() {
return <div>I'm a Circle!</div>
}

// in App.js
// to import, the names of the functions need to be an exact match:

- import { Box, Circle } from './Box';
