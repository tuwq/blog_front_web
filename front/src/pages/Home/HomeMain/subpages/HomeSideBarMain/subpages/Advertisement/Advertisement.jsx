import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import cooperationSvg from 'static/svg/cooperation.svg'

import './Advertisement.less'
import './MAdvertisement.less'

class Advertisement extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="Advertisement">
         		{/* <a target="_blank" href="https://blog.tuwq.cn/static/image/weixin_qrcode.png"><i className="fa fa-handshake-o fa-fw icon"></i>广告位投放,点击添加微信</a> */}
         	</div>
        )
	}
}

export default Advertisement
