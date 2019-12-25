import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      desc: '',
      age: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
  }

  handleInput(event) {
    return this.setState({
      name: event.target.value
    })
  }

  handleInput2(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checkbox : target.value;
    return this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

          {/* APLICAÇÃO 1 */}
          <div>
            <input type="text" name="name" onChange={this.handleInput}></input>
            {this.state.name}
          </div>

          {/* APLICAÇÃO 2 */}
          <div>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInput2}></input>
            {this.state.name}
            <br></br>
            <input type="text" name="desc" value={this.state.desc} onChange={this.handleInput2}></input>
            {this.state.desc}
            <br></br>
            <input type="number" name="age" value={this.state.age} onChange={this.handleInput2}></input>
            {this.state.age}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
