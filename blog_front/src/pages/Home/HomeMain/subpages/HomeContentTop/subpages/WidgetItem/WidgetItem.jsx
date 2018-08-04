import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

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
     				<Link to={'/article/'+this.props.item.id}><img width="128" height="64" alt="" src={global.artImgPrefix+this.props.item.faceCover}></img></Link>
     			</div>
     			<div className="detail">
     				<Link to={'/article/'+this.props.item.id} className="detail-title">ueh2及历史决定论23哈圣诞节23ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2ueh2及历史决定论23哈圣诞节23就拉省的23就2就拉省的23就23</Link>
                    <time className="detail-meta">{this.props.item.updateTimeString}</time>&nbsp;
     			</div>
         	</div>
        )
	}
}

export default withRouter(WidgetItem)

