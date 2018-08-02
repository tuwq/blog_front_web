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
         			<a><img width="" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></a>
         		</div>
         		<div className="description">
         			<div className="title"><a>{this.props.item.title}</a></div>
         			<div className="meta">
         				<span><i><img width="14" height="14" alt="" src={clockSvg}/></i>{this.props.item.createTimeString}</span>
         				<span><i><img width="14" height="14" alt="" src={eyeSvg}/></i>{this.props.item.browseSum}(阅读)</span>
         				<span><i><img width="14" height="14" alt="" src={commentSvg}/></i>{this.props.item.commentSum}(评论)</span>
         			</div>
         			<div className="content">
         				<p>{this.props.item.content}</p>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default ModelBigItem

