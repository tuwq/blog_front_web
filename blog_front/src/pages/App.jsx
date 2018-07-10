import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }


  render() {
    return (
      <div>
      {
      	this.props.children
      }  
      </div>
    );
  }
  componentDidMount() {
    
  }
}

export default App