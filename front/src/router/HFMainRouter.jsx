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

import BackGround from '@/pages/BackGround/BackGround'
import HomeHeader from '@/pages/Home/HomeHeader/HomeHeader'
import HomeFooter from '@/pages/Home/HomeFooter/HomeFooter'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'
import HomeRouter from './subrouters/HomeRouter'
import UserRouter from './subrouters/UserRouter'
import SearchRouter from './subrouters/SearchRouter'
import CategoryRouter from './subrouters/CategoryRouter'
import ArticleRouter from './subrouters/ArticleRouter'
import MusicRouter from './subrouters/MusicRouter'
import ArchiveTagRouter from './subrouters/ArchiveTagRouter'
import ArchiveTimeRouter from './subrouters/ArchiveTimeRouter'
import ArchiveCategoryRouter from './subrouters/ArchiveCategoryRouter'
import NotFound from '@/pages/NotFound/NotFound'
import Friend from '@/pages/Friend/Friend'


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
            <BackGround>
            <Switch>
              <Route exact path="/" component={HomeRouter} />
              <Route path="/user" component={UserRouter} />
              <Route path="/search" component={SearchRouter} />
              <Route path="/category" component={CategoryRouter} />
              <Route path="/article" component={ArticleRouter} />
              <Route path="/archiveTag" component={ArchiveTagRouter} />
              <Route path="/archiveTime" component={ArchiveTimeRouter} />
              <Route path="/archiveCategory" component={ArchiveCategoryRouter} />
              <Route path="/music" component={MusicRouter} />
              <Route path="/friend" component={Friend} />
              <Route path="*" component={NotFound} />
            </Switch>
            </BackGround>
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