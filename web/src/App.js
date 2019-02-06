import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"
import Res from "./Res"

class App extends Component {

  state = {
    msg: "",
    dices: [],
    socket: null
  }

  componentDidMount = e => {
    const socket = io(this.props.io)
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
      <div className="main">
      <div className="field">
      <div className="control has-icons-left">
        <input 
          className="input"
          type="text"
          placeholder="xdy"
          value={this.state.msg}
          onChange={this.onMsg}
        />
        <span className="icon is-small is-left">
          <i class="fas fa-dice-two"></i>
        </span>
        </div>
      </div>

      <div className="field">
        <div className="control">
        <button 
        className="button is-link is-right"
        onClick={this.onSubmit}
        >submit</button>
        </div>
      </div>
      <p>Type in a path to enter a room, all players in the same room well share the same results.</p>
      <p>Example: http://dice.yinyan.fr/12345 for room 12345</p>

        <div>
          {
            this.state.dices.reverse().map((e, i) => (
              <Res key={i}>{JSON.parse(e)}</Res>
            ))
          }
        </div>

      </div>
    )
  }
}

export default App;
