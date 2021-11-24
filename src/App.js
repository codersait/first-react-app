
import React, { Component } from 'react';
import Button from './components/button'
class App extends Component {
  state = {
    name: ["btn-primary m-2", 'btn-warning m-2', 'btn-danger m-2']
  }

  render() {
    return <ul>
      {this.state.name.map(title => {
        return <Button key={title} className={title}>{title}</Button>
      })}
    </ul>
  }
}

export default App;