import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './WidgetItem.less'
import './MWidgetItem.less'

class WidgetItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div className="WidgetItem">
     			<div className="thumb">
     				<a>
     					<img width="128" height="64" alt="" src="http://pcij2jrr4.bkt.clouddn.com//upload/temptopside.png"></img>
     				</a>
     			</div>
     			<div className="detail">
     				<h2 className="detail-title"><a>如何解除B站的视频地区限制？</a></h2>
     				<div className="detail-meta"><span><time>2017-04-05</time></span></div>
     			</div>
         	</div>
        )
	}
}

export default WidgetItem

