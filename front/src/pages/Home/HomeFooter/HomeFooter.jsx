import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './HomeFooter.less'
import './MHomeFooter.less'

import qqSvg from 'static/svg/qq.svg'
import githubSvg from 'static/svg/github.svg'
import weixinSvg from 'static/svg/weixin.svg'

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
          				<li className="item "><Link to="/friend">友情链接</Link></li>
          				<li className="item"><Link to="/extra/secretLetter">联系我</Link></li>
          			</ul>
          		</div>
	          	<div className="contact">
	          		<ul className="itemList">
					  	<li className="item"><a target="_blank" href="https://blog.tuwq.cn/static/image/weixin_qrcode.png"><span><img width="20" height="20" alt="" src={weixinSvg}/></span></a></li>
	          			<li className="item"><a target="_blank" href="tencent://message/?uin=1246361002&Site=&Menu=yes"><span><img width="20" height="20" alt="" src={qqSvg}/></span></a></li>
						<li className="item"><a target="_blank" href="https://github.com/tuwq"><span><img width="20" height="20" alt="" src={githubSvg}/></span></a></li>
	          		</ul>
	          	</div>
	          	<div className="contact">
	          		<ul className="itemList fontLink">
	          			<li className="item"><a target="_blank" href="http://beian.miit.gov.cn">@2018-2019 赣ICP备18010202号</a></li>
	          		</ul>
	          	</div>
          	</div>
          </footer>
        )
	}
}

export default withRouter(HomeFooter)

