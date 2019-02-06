import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"

class App extends Component {

  state = {
    msg: "",
    dices: [],
    socket: null
  }

  componentDidMount = e => {
    const socket = io("http://localhost:2019")
    this.setState(() => ({socket}))
    socket.on("res", msg => {
      console.log(msg)
      this.setState(prev => ({
        dices: prev.dices.concat(msg)
      }))
    })
  }

  onMsg = e => {
    let msg = e.target.value
    this.setState(() => ({msg}))
  }

  onSubmit = e => {
    this.state.socket.emit("dice", this.state.msg)
  }
  
  render = () => {

    return (
      <div>
      <div>
        <input 
          type="text"
          value={this.state.msg}
          onChange={this.onMsg}
        />
        <button onClick={this.onSubmit}>submit</button>
        </div>

        <div>
          {
            this.state.dices.map((e, i) => (
              <div key={i}>{e}</div>
            ))
          }
        </div>

      </div>
    )
  }
}

export default App;
