import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'
import commentSvg from 'static/svg/comment.svg'

import './ModelCrowdBigItem.less'
import './MModelCrowdBigItem.less'

class ModelCrowdBigItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelCrowdBigItem">
         		<div className="image">
         			<Link to={'/article/'+this.props.item.id}><img width="" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></Link>
         		</div>
               <div className="description">
                  <Link to={'/article/'+this.props.item.id} className="title">标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23标题了23</Link>
                  <div className="meta">
                     <span><i><img width="" height="" alt="" src={clockSvg}/></i>{this.props.item.createTimeString}</span>
                     <span><i><img width="" height="" alt="" src={eyeSvg}/></i>{this.props.item.browseSum}阅读</span>
                     <span><i><img width="" height="" alt="" src={commentSvg}/></i>{this.props.item.commentSum}(评论)</span>
                  </div>
                  <div className="content">内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23内容考虑进来撒23</div>                  
               </div>
         	</div>
        )
	}
}

export default withRouter(ModelCrowdBigItem)

