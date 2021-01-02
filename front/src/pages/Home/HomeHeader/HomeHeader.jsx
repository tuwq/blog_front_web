import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user' 

import { _removeToken,_getToken } from 'base/js/cookie'
import { logoutApi } from 'api/Login/login'

import './HomeHeader.less'
import './MHomeHeader.less'

class HomeHeader extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.searchModal = this.searchModal.bind(this)
    this.subscribeMenu = this.subscribeMenu.bind(this)
	  this.$MenuIcon = React.createRef()
    this.$ItemList = React.createRef()
    this.$userMenu = React.createRef()
    this.$userLink = React.createRef()
    PubSub.subscribe(global.userMenuSubscribe,this.subscribeMenu)
  }

	componentDidMount() {
    
	}

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.subscribeMenu);
    // 防止异步调用数据
    this.setState = (state,callback)=>{
      return
    };
  }

  goCategory(categoryId) {
    this.props.history.replace('/category/'+categoryId)
  }

  subscribeMenu(msg,data) {
     $(this.$userMenu.current).removeClass('show')
  }

  searchModal() {
     PubSub.publish(global.searchModalShowSubscribe,true);
  }

  dropMenu() {
    $(this.$MenuIcon.current).toggleClass('cross')
    // show()默认时是block,会导致pc端排版变乱
    if($(this.$ItemList.current).css('display')==='none') {
      $(this.$ItemList.current).css('display','flex')
    } else {
      $(this.$ItemList.current).css('display','none')
    }
  }

  userMenu(e) {
    e.stopPropagation()
    $(this.$userMenu.current).toggleClass('show')
    let newremind = $(this.$userLink.current).find('.newremind')
    if (newremind) {newremind.hide()}
  }

  logout(e) {
    logoutApi((res)=>{
      // 删除token和用户信息
      _removeToken()
      this.props.userActions.save({})
      this.props.history.replace('/extra/login')
    })
  }

  undone() {
    alert('功能未完成')
  }

	render() {
      let newDynamic = null
      if (this.props.user.newDynamicReceiveSum>0) {
        newDynamic = (<span className="newDynamic">{this.props.user.newDynamicReceiveSum}</span>)
      }
      let newremind = null
      if (this.props.user.newDynamicReceiveSum>0) {
        newremind = (<span className="newremind"></span>)
      }

		return (
          <header id="HomeHeader" className="HomeHeader">
          	<nav className="HomeHeaderNav">
              <div className="HomeHeaderMenu" onClick={this.dropMenu.bind(this)} ref={this.$MenuIcon}>
                <span className="leftIcon">—</span>
                <span className="rightIcon">—</span>
              </div>
          		<Link to="/" className="HomeHeaderLogo">
          			<img src={this.props.imgConfig.logoImg} alt="logo" title="大Logo"></img>
          		</Link>
          		<ul className="HomeHeaderItemList" ref={this.$ItemList}>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">我</a>
                    <ul className="ItemMenu">
                         <li><Link to="/article/1">给我留言</Link></li>
                         <li><Link to="/extra/secretLetter">联系我</Link></li>
                    </ul>
          			</li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">分类</a> 
                  <ul className="ItemMenu">
                       <li><a onClick={this.goCategory.bind(this,1)}>手记</a></li>
                       <li><a onClick={this.goCategory.bind(this,2)}>学习笔记</a></li>
                       <li><a onClick={this.goCategory.bind(this,3)}>短代码</a></li>
                       <li><a onClick={this.goCategory.bind(this,4)}>个人闲谈</a></li>
                  </ul>
          			</li>
                <li className="HomeHeaderItem">
                  <a className="ItemLink">归档</a> 
                  <ul className="ItemMenu">
                       <li><Link to="/archiveTag">标签归档</Link></li>
                       <li><Link to="/archiveTime">时间归档</Link></li>
                        <li><Link to="/archiveCategory">分类归档</Link></li>
                  </ul> 
                </li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">收藏</a> 
                  <ul className="ItemMenu">
                      <li><Link to="/music">歌单</Link></li>
                  </ul>
          			</li>
                <li className="HomeHeaderItem">
                  <a className="ItemLink">友链</a> 
                   <ul className="ItemMenu">
                      <li><Link to="/friend">友情链接</Link></li>
                      <li><Link to="/article/16">申请友链</Link></li>
                  </ul>
                </li>
          		</ul>
          		<ul className="HomeHeaderItemListRight">
          			<li className="HomeHeaderItemRight">
          				<a className="SearchIcon" onClick={this.searchModal}>
          				   <span><svg viewBox="0 0 1024 1024" width="14" height="14"><path d="M992.262 871.396 749.71 665.102c-25.074-22.566-51.89-32.926-73.552-31.926C733.414 566.108 768 479.098 768 384 768 171.922 596.078 0 384 0 171.924 0 0 171.922 0 384c0 212.078 171.922 384 384 384 95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356S1031.508 906.718 992.262 871.396zM384 640c-141.384 0-256-114.616-256-256S242.616 128 384 128s256 114.616 256 256S525.386 640 384 640z" fill="#2c2c2c"></path></svg></span>
          				</a>
          			</li>
                {
                  JSON.stringify(this.props.user)!="{}"
                  ? (<li className="HomeHeaderItemRight UserLink" ref={this.$userLink}>
                      <a className="ItemLinkRight"><img width="32" height="32" onClick={this.userMenu.bind(this)} alt="" 
                      src={global.userAvatarPrefix+this.props.user.avatar}/>
                        {newremind}
                      </a>
                      <ul className="user-menu" ref={this.$userMenu}>
                        <li><Link to={'/user/'+this.props.user.id}><span><svg fill="#33495e" viewBox="0 0 1069 1024" width="15.6591796875" height="15"><path d="M859.358609 837.698783C977.786435 752.350609 1053.495652 622.191304 1053.495652 476.40487 1053.495652 219.269565 818.198261 10.841043 527.961043 10.841043 237.723826 10.841043 2.448696 219.269565 2.448696 476.40487 2.448696 733.517913 237.723826 941.968696 527.961043 941.968696 568.876522 941.968696 608.701217 937.805913 646.92313 929.992348 724.680348 959.577043 840.592696 998.199652 936.047304 1007.215304 854.817391 924.872348 854.171826 863.944348 859.358609 837.698783L859.358609 837.698783ZM263.702261 573.529043C219.202783 573.529043 183.140174 537.444174 183.140174 492.966957 183.140174 448.467478 219.202783 412.40487 263.702261 412.40487 308.179478 412.40487 344.242087 448.467478 344.242087 492.966957 344.242087 537.444174 308.179478 573.529043 263.702261 573.529043L263.702261 573.529043ZM526.447304 573.529043C481.947826 573.529043 445.885217 537.444174 445.885217 492.966957 445.885217 448.467478 481.947826 412.40487 526.447304 412.40487 570.946783 412.40487 607.009391 448.467478 607.009391 492.966957 607.031652 537.444174 570.946783 573.529043 526.447304 573.529043L526.447304 573.529043ZM789.214609 573.529043C744.737391 573.529043 708.674783 537.444174 708.674783 492.966957 708.674783 448.467478 744.737391 412.40487 789.214609 412.40487 833.714087 412.40487 869.776696 448.467478 869.776696 492.966957 869.776696 537.444174 833.714087 573.529043 789.214609 573.529043L789.214609 573.529043Z"></path></svg>
                          </span>消息</Link>
                          {newDynamic}
                        </li>
                        <li><Link to="/user/setting"><span><svg fill="#33495e" viewBox="0 0 1024 1024" width="15" height="15"><path d="M152.365633 555.145394a154.587346 154.587346 0 0 0 39.497121 66.761107C221.21131 651.245914 260.251289 667.428762 301.759838 667.428762c41.508549 0 80.548528-16.164563 109.897084-45.531404A154.660489 154.660489 0 0 0 450.40433 557.714536H978.330904c25.206844 0 45.714261-20.470846 45.714262-45.714262 0-25.197701-20.470846-45.714261-45.714262-45.714261H450.395187a154.669631 154.669631 0 0 0-38.729122-64.182823A154.413632 154.413632 0 0 0 301.759838 356.571786c-41.508549 0-80.548528 16.164563-109.897084 45.531404a154.587346 154.587346 0 0 0-39.497121 66.761107A45.48569 45.48569 0 0 0 137.234212 466.286013H45.714261a45.723404 45.723404 0 0 0 0 91.428523h91.519951c5.302854 0 10.395423-0.905142 15.131421-2.569142z m719.359614 270.280998a154.596489 154.596489 0 0 0-39.497121-66.761107A154.413632 154.413632 0 0 0 722.331042 713.143024c-41.508549 0-80.548528 16.164563-109.897084 45.531404A154.660489 154.660489 0 0 0 573.68655 822.857251H45.759976c-25.206844 0-45.714261 20.470846-45.714262 45.714261 0 25.197701 20.470846 45.714261 45.714262 45.714261h527.935717a154.660489 154.660489 0 0 0 38.729122 64.182823C641.782513 1007.84458 680.822492 1024 722.331042 1024c41.508549 0 80.548528-16.164563 109.897084-45.531404a154.587346 154.587346 0 0 0 39.497121-66.761107 45.48569 45.48569 0 0 0 15.131421 2.578284h91.519951a45.723404 45.723404 0 0 0 0-91.428522h-91.519951c-5.302854 0-10.395423 0.905142-15.131421 2.569141z m0-713.142475a154.596489 154.596489 0 0 0-39.497121-66.761107A154.413632 154.413632 0 0 0 722.331042 0.000549c-41.508549 0-80.548528 16.164563-109.897084 45.531404A154.660489 154.660489 0 0 0 573.68655 109.714776H45.759976c-25.206844 0-45.714261 20.470846-45.714262 45.714261 0 25.197701 20.470846 45.714261 45.714262 45.714261h527.935717a154.660489 154.660489 0 0 0 38.729122 64.182823C641.782513 294.702105 680.822492 310.857525 722.331042 310.857525c41.508549 0 80.548528-16.164563 109.897084-45.531404a154.587346 154.587346 0 0 0 39.497121-66.761107 45.48569 45.48569 0 0 0 15.131421 2.578284h91.519951a45.723404 45.723404 0 0 0 0-91.428522h-91.519951c-5.302854 0-10.395423 0.905142-15.131421 2.569141zM347.016957 557.257393A63.579395 63.579395 0 0 1 301.759838 576.00024a63.579395 63.579395 0 0 1-45.257118-18.742847A63.579395 63.579395 0 0 1 237.759873 512.000274c0-17.097134 6.655996-33.170268 18.742847-45.257118A63.579395 63.579395 0 0 1 301.759838 448.000309c17.097134 0 33.170268 6.655996 45.257119 18.742847A63.579395 63.579395 0 0 1 365.759804 512.000274c0 17.097134-6.655996 33.170268-18.742847 45.257119z m420.571203 356.571237A63.579395 63.579395 0 0 1 722.331042 932.571478a63.579395 63.579395 0 0 1-45.257119-18.742848A63.579395 63.579395 0 0 1 658.331076 868.571512c0-17.097134 6.655996-33.170268 18.742847-45.257119A63.579395 63.579395 0 0 1 722.331042 804.571546c17.097134 0 33.170268 6.655996 45.257118 18.742847A63.579395 63.579395 0 0 1 786.331007 868.571512c0 17.097134-6.655996 33.170268-18.742847 45.257118z m0-713.142475A63.579395 63.579395 0 0 1 722.331042 219.429002a63.579395 63.579395 0 0 1-45.257119-18.742847A63.579395 63.579395 0 0 1 658.331076 155.429037c0-17.097134 6.655996-33.170268 18.742847-45.257119A63.579395 63.579395 0 0 1 722.331042 91.429071c17.097134 0 33.170268 6.655996 45.257118 18.742847A63.579395 63.579395 0 0 1 786.331007 155.429037c0 17.097134-6.655996 33.170268-18.742847 45.257118z"></path></svg>
                        </span>个人设置</Link></li>
                        <li><a className="line"></a></li>
                        <li><Link onClick={this.logout.bind(this)} to="/extra/login"><span><svg fill="#33495e" viewBox="0 0 1024 1024" width="15" height="15"><path d="M426.666667 736V597.333333H128v-170.666666h298.666667V288L650.666667 512 426.666667 736M341.333333 85.333333h384a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H341.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-170.666666h85.333333v170.666666h384V170.666667H341.333333v170.666666H256V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z"></path></svg>
                        </span>注销</Link></li>
                      </ul>
                    </li>)
                  : (
                    <React.Fragment>
                    <li className="HomeHeaderItemRight">
                      <Link className="LoginIcon" to="/extra/login">
                         <span><svg viewBox="0 0 1024 1024" width="14" height="14"><path d="M426.666667 736V597.333333H128v-170.666666h298.666667V288L650.666667 512 426.666667 736M341.333333 85.333333h384a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H341.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-170.666666h85.333333v170.666666h384V170.666667H341.333333v170.666666H256V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z" fill="#2c2c2c"></path></svg></span>
                      </Link>
                    </li>
                    <li className="HomeHeaderItemRight LoginLink">
                      <Link className="ItemLinkRight" to="/extra/login">登录/注册</Link>
                    </li>
                   </React.Fragment>)
                }
          		</ul>
          	</nav>
          </header>
        )
	}
}

function mapStateToProps(state) {
    return {
        user: state.user,
        imgConfig: state.imgConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default withRouter(
     connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
)


