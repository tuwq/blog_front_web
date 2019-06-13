import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user' 
import * as imgConfigActions from 'store/actions/imgConfig'
import * as songsActions from 'store/actions/songs' 
import * as playerActions from 'store/actions/player' 
import Player from 'base/general/Player/Player'
import Live2DModel from 'base/general/Live2DModel/Live2DModel'

import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { _saveCacheConfig,_loadCacheConfig } from 'base/js/localCache'

import { userInfoApi } from 'api/User/user'
import { getImgConfigApi } from 'api/Config/config'
import { pageSongByCategoryApi } from 'api/Music/music'

import 'base/style/import.css'
import 'base/style/webkit.css'
import 'base/style/input.css'
import 'base/style/short.css'
import 'base/style/base.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {

  constructor(props,context) {
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.userInfo = this.userInfo.bind(this)
    this.loadConfig = this.loadConfig.bind(this)
    this.userInfoRefreshSubscribe = this.userInfoRefreshSubscribe.bind(this)
    this.rediectLoginSubscribe = this.rediectLoginSubscribe.bind(this)
    this.isPC = this.isPC.bind(this)
    PubSub.subscribe(global.userInfoRefreshSubscribe,this.userInfoRefreshSubscribe)
    PubSub.subscribe(global.rediectLoginSubscribe,this.rediectLoginSubscribe)
    this.PCFlag = false
  }

  render() {
   
    return (
      <div onClick={this.closeMenu}>
          {
            this.props.children
          }
          {
            (this.props.player.palyStatus&&this.props.songs.songList.length>0)&&
            (<Player />)
          }         
          {
            this.PCFlag&&
            (<Live2DModel modelUrl="https://blog.tuwq.cn/static/live2d/xuexiaoban/model.json" 
              goHomeFn={this.goHomeFn.bind(this)}
              openMusicFn={this.openMusicFn.bind(this)}/>)
          }
      </div>
    );
  }

  componentDidMount() {
     this.userInfo()
     this.loadConfig()
     this.PCFlag = this.isPC()
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

  loadConfig() {
    // 每五天重新读取配置
    if (_loadCacheConfig()) {
      let config = _loadCacheConfig()
      this.props.imgConfigActions.save(config)
      return
    }
    getImgConfigApi((res)=>{
      if (res.data.code == 200) {
        _saveCacheConfig(res.data.result)
        this.props.imgConfigActions.save(res.data.result)
      }
    })
  }

  userInfo() {
    userInfoApi((res)=>{
        if(res.data.code == 200) {
          this.props.userActions.save(res.data.result)
        }
    })
  }

  closeMenu() {
    PubSub.publish(global.userMenuSubscribe);
  }

  isPC() {
    var userAgentInfo = navigator.userAgent
    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            return false
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    //根据屏幕分辨率判断是否是手机
    if(screen_width < 800 && screen_height < 800){
       return false
    }   
    return true
  }

  userInfoRefreshSubscribe(msg,data) {
    this.userInfo()
  }

  rediectLoginSubscribe(msg,pathname) {
    this.props.history.replace({ pathname:'/extra/login',state:{from : pathname } })
  }

  goHomeFn() {
    this.props.history.replace('/')
  }

  openMusicFn() {
    if (this.props.player.palyStatus&&this.props.songs.songList.length>0) {
      return
    }
    pageSongByCategoryApi(1,20,1,(res)=>{
        if (res.data.code == 200) {
          let result = res.data.data
          this.props.songsActions.saveSongs({
            songList: result,
            defaultList: result,
            currentIndex: 1,
            currentSong: result[0],
            listType: 1
          })
          this.props.playerActions.savePlayData({
            palyStatus: true,
            palyering: true,
            fullScreen: true
          })
        }
      })
  }
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        user: state.user,
        player: state.player,
        songs: state.songs
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        imgConfigActions: bindActionCreators(imgConfigActions,dispatch),
        songsActions: bindActionCreators(songsActions, dispatch),
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
/*
  {
    this.props.children
  }
  {
    (this.props.player.palyStatus&&this.props.songs.songList.length>0)&&
    (<Player />)
  }
  /*{
      this.PCFlag&&
      (<Live2DModel modelUrl="https://twenq.com/static/live2d/xuexiaoban/model.json" 
        goHomeFn={this.goHomeFn.bind(this)}
        openMusicFn={this.openMusicFn.bind(this)}/>)
    }*/