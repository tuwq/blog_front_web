import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './DynamicInitiateItem.less'
import './MDynamicInitiateItem.less'

class DynamicInitiateItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {

		let dynamic = null
		if (this.props.item.userInitiateDynamic.type == 1 && this.props.item.userInitiateDynamic.action == 1) {
			dynamic = (<React.Fragment>
							<div className="meta">
					  			<label className="titleSize">
					  				回复了文章&nbsp;&nbsp;&nbsp;<Link to={'/article/'+this.props.item.articaleDto.id}>{this.props.item.articaleDto.title}</Link>
					  			</label>
					  			<span>{this.props.item.commentDto.timeAgo}&nbsp;{this.props.item.commentDto.createTimeString}</span>
				  			</div>
					  		<div className="content">
					  			{this.props.item.commentDto.content}
					  		</div>
				  		</React.Fragment>)
		}
		if (this.props.item.userInitiateDynamic.type == 1 && this.props.item.userInitiateDynamic.action == 2) {
			dynamic = (<React.Fragment>
							<div className="meta">
					  			<label className="titleSize">
					  				回复了&nbsp;<Link to={'/user/'+this.props.item.commentDto.parentUser.id}>{this.props.item.commentDto.parentUser.nickname}</Link>的评论&nbsp;&nbsp;&nbsp;
					  			</label>
					  			<span>{this.props.item.commentDto.timeAgo}&nbsp;{this.props.item.commentDto.createTimeString}</span>
				  			</div>
				  			<label className="titleSize">在&nbsp;<Link to={'/article/'+this.props.item.articaleDto.id}>{this.props.item.articaleDto.title}</Link>&nbsp;中</label>
					  		<div className="content">
					  			{this.props.item.commentDto.content}
					  		</div>
				  		</React.Fragment>)
		}


		return (
			<div className="DynamicInitiateItem">
		  		{dynamic}
        	</div>
        )
	}
}

export default withRouter(DynamicInitiateItem)


