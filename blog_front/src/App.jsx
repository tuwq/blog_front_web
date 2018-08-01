import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user' 


import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { userInfoApi } from 'api/User/user'

import 'base/style/import.css'
import 'base/style/webkit.css'
import 'base/style/input.css'
import 'base/style/short.css'
import 'base/style/base.css'


class App extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.userInfo = this.userInfo.bind(this)
    this.userInfoRefreshSubscribe = this.userInfoRefreshSubscribe.bind(this)
    this.rediectLoginSubscribe = this.rediectLoginSubscribe.bind(this)
    PubSub.subscribe(global.userInfoRefreshSubscribe,this.userInfoRefreshSubscribe)
    PubSub.subscribe(global.rediectLoginSubscribe,this.rediectLoginSubscribe)
  }


  render() {
    return (
      <div onClick={this.closeMenu}>
      {
      	this.props.children
      }  
      </div>
    );
  }

  componentDidMount() {
     this.userInfo()
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.userInfoRefreshSubscribe);
    PubSub.unsubscribe(this.rediectLoginSubscribe)
    // 防止异步调用数据
      this.setState = (state,callback)=>{
      return
    };
  }

  userInfo() {
    userInfoApi((res)=>{
        if(res.data.code == 200) {
          this.props.userActions.save(res.data.result)
        }
    })
  }

  closeMenu() {
    PubSub.publish(global.userMenuSubscribe,false);
  }

  userInfoRefreshSubscribe(msg,data) {
    this.userInfo()
  }

  rediectLoginSubscribe(msg,pathname) {
    this.props.history.replace({ pathname:'/extra/login',state:{from : pathname } })
  }
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)