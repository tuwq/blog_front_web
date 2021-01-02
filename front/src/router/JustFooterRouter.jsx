import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeFooter from '@/pages/Home/HomeFooter/HomeFooter'
import ExtraRouter from './subrouters/ExtraRouter'

class JustFooter extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }


  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route path="/extra" component={ExtraRouter} />
          </Switch> 
        <HomeFooter />
      </React.Fragment>
    );
  }
  componentDidMount() {
     
  }
}

export default withRouter(JustFooter)