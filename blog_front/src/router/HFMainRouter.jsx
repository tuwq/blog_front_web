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

import HomeHeader from '@/pages/Home/HomeHeader/HomeHeader'
import HomeFooter from '@/pages/Home/HomeFooter/HomeFooter'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'
import HomeRouter from './subrouters/HomeRouter'
import UserRouter from './subrouters/UserRouter'
import SearchRouter from './subrouters/SearchRouter'
import CategoryRouter from './subrouters/CategoryRouter'
import ArticleRouter from './subrouters/ArticleRouter'
import NotFound from '@/pages/NotFound/NotFound'
import Firend from '@/pages/Firend/Firend'

class Main extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  // Switch 一下路由只匹配一个
  // exact 必须是这个path,包含以下的不进入

  render() {
    return (
        <React.Fragment>
          <HomeHeader />
          <Switch>
            <Route exact path="/" component={HomeRouter} />
            <Route path="/user" component={UserRouter} />
            <Route path="/search" component={SearchRouter} />
            <Route path="/category" component={CategoryRouter} />
            <Route path="/article" component={ArticleRouter} />
            <Route path="/firend" component={Firend} />
            <Route path="*" component={NotFound} />
          </Switch>
          <HomeFooter />
          <FixControl />
          <SearchModal />
        </React.Fragment>
    )
  }
  componentDidMount() {
     
  }
}

export default withRouter(Main)