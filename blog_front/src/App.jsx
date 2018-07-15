import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import 'base/style/import.css'
import 'base/style/webkit.css'
import 'base/style/input.css'
import 'base/style/short.css'
import 'base/style/base.css'

class App extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
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