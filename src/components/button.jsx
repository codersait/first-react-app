import React, { Component } from 'react';
class Button extends Component {
  state = {
    value: this.props.children,
    classes: this.props.className
  };
  render() {
    console.log(this.props);
    return <button className={this.state.classes}>{this.state.value}</button>;
  }
}

export default Button;
