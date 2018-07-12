import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './ModelMediumItem.less'
import './ModelMediumItem.less'

class ModelMediumItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelMediumItem">
         		<div className="image">
         			<a><img width="150" height="175" alt="" src="https://ikmoe.com/wp-content/uploads/wp-img/uploads/2017/06/ikmoe_2017-06-24_17-13-18.jpg?imageView2/1/w/375/h/250/q/100"/></a>
         		</div>
         		<div className="description">
         			<div className="section-title">
         				<h3>鱼塘 使用8K分辨率逛博客是一种什么样的体验？</h3>
         			</div>
         			<div className="section-content">
         				<p>首先来说一下4K的分辨率，4K的分辨率为4096×2160，那么8K的分辨率呢？8K分辨率当然是翻一倍！7680x4320。然后翻一倍应该8192才对？怎么只有7680？其实这个问题很玄学，主要还是看</p>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default ModelMediumItem

