import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './HomeFooter.less'
import './MHomeFooter.less'

import qqSvg from 'static/svg/qq.svg'
import githubSvg from 'static/svg/github.svg'

class HomeFooter extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <footer id="HomeFooter" className="HomeFooter">
          	<div className="HomeFooter-wapper">
          		<div className="contact">
          			<ul className="itemList fontLink">
          				<li className="item "><Link to="/firend">友情链接</Link></li>
          				<li className="item"><a>联系我</a></li>
          			</ul>
          		</div>
	          	<div className="contact">
	          		<ul className="itemList">
	          			<li className="item"><a href="tencent://message/?uin=1246361002&Site=&Menu=yes"><span><img width="20" height="20" alt="" src={qqSvg}/></span></a></li>
	          		</ul>
	          	</div>
	          	<div className="contact">
	          		<ul className="itemList fontLink">
	          			<li className="item "><a>@2018 赣ICP备18010202号</a></li>
	          			<li className="item "><a></a></li>
	          		</ul>
	          	</div>
          	</div>
          </footer>
        )
	}
}

export default withRouter(HomeFooter)

