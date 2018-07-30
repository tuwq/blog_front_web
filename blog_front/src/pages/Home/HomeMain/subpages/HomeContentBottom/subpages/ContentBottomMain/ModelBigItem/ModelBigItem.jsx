import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'
import commentSvg from 'static/svg/comment.svg'

import './ModelBigItem.less'
import './MModelBigItem.less'

class ModelBigItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelBigItem">
         		<div className="image">
         			<a><img width="" height="" alt="" src="http://pcij2jrr4.bkt.clouddn.com/upload/tempitem1.png"/></a>
         		</div>
         		<div className="description">
         			<div className="title"><a>#教程# nginx.1.12.2编译云锁安全模块/宝塔小白版本/一键！</a></div>
         			<div className="meta">
         				<span><i><img width="14" height="14" alt="" src={clockSvg}/></i>2018-7-13</span>
         				<span><i><img width="14" height="14" alt="" src={eyeSvg}/></i>31377(阅读)</span>
         				<span><i><img width="14" height="14" alt="" src={commentSvg}/></i>5(评论)</span>
         			</div>
         			<div className="content">
         				<p>最近把Apache换成了nginx，变快了那么一丁点，被CC攻击起来，也不会直接死透，还是可以让后端正常运行的。然后做了一下简单的防护，nginx装了云锁需要防护 HTTPS就要自编译模块，官方教程少的可怜</p>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default ModelBigItem

