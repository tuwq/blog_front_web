import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../style/WidgetItem.less'
import '../media/WidgetItem.less'

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
     					<img width="128" height="64" alt="" src="https://ikmoe.com/wp-content/uploads/2017/04/ikmoe_2017-04-05_06-54-15-400x200.png?imageView2/1/w/200/h/150/q/100"></img>
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

