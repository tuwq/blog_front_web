import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'

import './SiderBarHotItem.less'
import './MSiderBarHotItem.less'

class SiderBarHotItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="SiderBarHotItem">
               <div className="image">
                  <a><img width="200" height="136" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></a>
               </div>
         		<div className="description">
         			<div className="hot-title"><a>{this.props.item.title}</a></div>
         			<div className="hot-content">
         				<span><i><img width="13" height="13" alt="" src={eyeSvg} /></i>{this.props.item.browseSum}</span>
         				<span><i><img width="13" height="13" alt="" src={clockSvg} /></i>{this.props.item.createTimeString}</span>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default SiderBarHotItem

