import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style/HomeHeader.less'
import './media/HomeHeader.less'

import searchSvg from 'static/svg/search.svg'

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
          			<img src="https://ikmoe.com/logo.png" alt="logo"></img>
          		</a>
          		<ul className="HomeHeaderItemList">
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">我</a>
          			</li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">值得看</a>
          			</li>
          			<li className="HomeHeaderItem">
          				<a className="ItemLink">收藏</a>
          			</li>
          		</ul>
          		<ul className="HomeHeaderItemListRight">
          			<li className="HomeHeaderItemRight">
          				<a className="ItemSearch">
          					<span><img width="16" height="16" alt="" src={searchSvg}/></span>
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

