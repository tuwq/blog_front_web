import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import weixinQrCode from 'static/image/weixin_qrcode.png'

import './SiderContactMe.less'
import './MSiderContactMe.less'

class SiderContactMe extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {

		return (
         	<div id="SiderContactMe" className="SiderContactMe">
         		<div className="contact-list">
                     <a className="contact-icon" target="_blank">
						 <i className="fa fa-weixin">
						 <div className="weixin_menu">
							<img className="weixin_qrcode" src={weixinQrCode}></img>
						</div>	 
						</i>
					</a>
                     <a className="contact-icon" target="_blank" href="tencent://message/?uin=1246361002&Site=&Menu=yes"><i className="fa fa-qq"></i></a>
                     <a className="contact-icon" target="_blank" href="https://github.com/tuwq"><i className="fa fa-github"></i></a>
                 </div>
         	</div>
        )
	}
}

export default SiderContactMe
