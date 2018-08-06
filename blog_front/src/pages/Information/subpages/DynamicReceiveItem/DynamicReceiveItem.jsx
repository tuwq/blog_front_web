import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './DynamicReceiveItem.less'
import './MDynamicReceiveItem.less'

class DynamicReceiveItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {

		let dynamic = null
		if (this.props.item.userInitiateDynamic.type == 1 && this.props.item.userInitiateDynamic.action == 1) {
			dynamic = (<React.Fragment>
							<div className="user">
								<label className="titleSize">
									<Link to={'/user/'+this.props.item.commentDto.user.id}>{this.props.item.commentDto.user.nickname}</Link>&nbsp;回复了你的文章
								</label>
								<span>{this.props.item.commentDto.timeAgo}&nbsp;{this.props.item.commentDto.createTimeString}</span>
							</div>
						  	<Link className="title" to={'/article/'+this.props.item.articaleDto.id}>{this.props.item.articaleDto.title}</Link>
					  		<div className="meta">
					  			<div className="avatar">
					  				<img width="40" height="40" alt="" src={global.userAvatarPrefix+this.props.item.commentDto.user.avatar+'?v='+new Date().getTime()}/>
					  			</div>
				  				<div className="name">
				  					<Link to={'/user/'+this.props.item.commentDto.user.id}>{this.props.item.commentDto.user.nickname}</Link>
				  					<span>{this.props.item.commentDto.user.desc}</span>
				  				</div>
					  		</div>
					  		<div className="content">
					  			{this.props.item.commentDto.content}
							</div>
					    </React.Fragment>)
		}

		if (this.props.item.userInitiateDynamic.type == 1 && this.props.item.userInitiateDynamic.action == 2) {
			dynamic = (<React.Fragment>
							<div className="user">
								<label className="titleSize">
									<Link to={'/user/'+this.props.item.commentDto.user.id}>{this.props.item.commentDto.user.nickname}</Link>&nbsp;评论了回复
								</label>
								<span>{this.props.item.commentDto.timeAgo}&nbsp;{this.props.item.commentDto.createTimeString}</span>
							</div>
						  	<Link className="title" to={'/article/'+this.props.item.articaleDto.id}>{this.props.item.articaleDto.title}</Link>
					  		<div className="meta">
					  			<div className="avatar">
					  				<img width="40" height="40" alt="" src={global.userAvatarPrefix+this.props.item.commentDto.user.avatar+'?v='+new Date().getTime()}/>
					  			</div>
				  				<div className="name">
				  					<Link to={'/user/'+this.props.item.commentDto.user.id}>{this.props.item.commentDto.user.nickname}</Link>
				  					<span>{this.props.item.commentDto.user.desc}</span>
				  				</div>
					  		</div>
					  		<div className="content">
					  			{this.props.item.commentDto.content}
							</div>
					    </React.Fragment>)
		}

		return (
			<div className="DynamicReceiveItem">
			  	{dynamic}
        	</div>
        )
	}
}

export default withRouter(DynamicReceiveItem)


