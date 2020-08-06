import React, {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      initial: 'Hello from react App'
    }
  }

  render() {
    const{initial} = this.state;
    return(
    <div>{initial}</div>
    )
  }
}