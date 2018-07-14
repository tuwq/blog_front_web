import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './HomeHeader.less'
import './MHomeHeader.less'

class HomeHeader extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <header id="HomeHeader" className="HomeHeader">
          	<nav className="HomeHeaderNav">
          		<a className="HomeHeaderLogo">
          			<img src="https://ikmoe.com/logo.png" alt="logo" title="大Logo"></img>
          		</a>
          		<ul className="HomeHeaderItemList">
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">我</a>
                              <ul className="ItemMenu">
                                   <li><a>关于</a></li>
                                   <li><a>给我留言</a></li>
                                   <li><a>广告投放</a></li>
                              </ul>
          			</li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">值得看</a> 
                              <ul className="ItemMenu">
                                   <li><a>关于</a></li>
                                   <li><a>给我留言</a></li>
                                   <li><a>广告投放</a></li>
                              </ul> 
          			</li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">收藏</a> 
                              <ul className="ItemMenu">
                                   <li><a>关于</a></li>
                                   <li><a>给我留言</a></li>
                                   <li><a>广告投放</a></li>
                              </ul>
          			</li>
          		</ul>
          		<ul className="HomeHeaderItemListRight">
          			<li className="HomeHeaderItemRight">
          				<a className="ItemSearch">
          				   <span><svg viewBox="0 0 1024 1024" width="14" height="14"><path d="M992.262 871.396 749.71 665.102c-25.074-22.566-51.89-32.926-73.552-31.926C733.414 566.108 768 479.098 768 384 768 171.922 596.078 0 384 0 171.924 0 0 171.922 0 384c0 212.078 171.922 384 384 384 95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356S1031.508 906.718 992.262 871.396zM384 640c-141.384 0-256-114.616-256-256S242.616 128 384 128s256 114.616 256 256S525.386 640 384 640z" fill="#2c2c2c"></path></svg></span>
          				</a>
          			</li>
          			<li className="HomeHeaderItemRight">
          				<a className="ItemLinkRight">登录/注册</a>
          			</li>
          		</ul>
          	</nav>
          </header>
        )
	}
}

export default HomeHeader

