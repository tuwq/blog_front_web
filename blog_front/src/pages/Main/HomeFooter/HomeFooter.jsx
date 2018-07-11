import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style/HomeFooter.less'
import './media/HomeFooter.less'

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
          <footer id="HomeFooter">
          	<div className="HomeFooter-wapper">
          		<div className="contact">
          			<ul className="itemList">
          				<li className="item"><a>友情链接</a></li>
          				<li className="item"><a>联系我</a></li>
          			</ul>
          		</div>
	          	<div className="contact">
	          		<ul className="itemList">
	          			<li className="item"><a><span><img width="20" height="20" alt="" src={qqSvg}/></span></a></li>
	          			<li className="item"><a href="https://github.com/tuwq"><span><img width="20" height="20" alt="" src={githubSvg}/></span></a></li>
	          		</ul>
	          	</div>
	          	<div className="contact">
	          		<ul className="itemList">
	          			<li className="item"><a>@2018</a></li>
	          			<li className="item"><a>tuwq</a></li>
	          		</ul>
	          	</div>
          	</div>
          </footer>
        )
	}
}

export default HomeFooter

