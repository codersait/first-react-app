import React, { Component } from 'react';
class Counter extends Component {
  state = {
    tags: ['tag1', 'tag2', 'tag3']
  };
  test = () => {
    console.log('arrow', this);
  };
  // test = () => {
  //   console.log('arrow', this);
  // };
  render() {
    return <div>{this.test()}</div>;
  }
}

export default Counter;
