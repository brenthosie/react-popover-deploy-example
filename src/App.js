import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/rm-react-popover/dist/tooltip.css'
import Popover from './Popover'

class App extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      showPopover: false
    }
  }

  handleClick (e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        showPopover: !prevState.showPopover
      }
    })
  }

  render () {
    return (
      <div id='app' className='App' ref={input => { this.container = input }}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <br />
        <div style={{ width: 100, height: 100, border: '1px solid', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto' }}>
          <button ref={input => { this.triggerElement = input }}onClick={this.handleClick}>trigger for the popover</button>
        </div>
        <Popover
          parent={this.container}
          element={this.triggerElement}
          placement={['bottom', 'element_left']}
          left_cushion={5}
          open={this.state.showPopover}
        >
          <span>I was called with placement left</span>
        </Popover>
      </div>
    )
  }
}

export default App
