import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import marked from 'marked'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'
import commentSvg from 'static/svg/comment.svg'

import './ModelCrowdBigItem.less'
import './MModelCrowdBigItem.less'

class ModelCrowdBigItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
      this.$content = React.createRef()
	}

	componentDidMount() {
		let ht = marked(this.props.item.content)
      let text = $(ht).text()
      $(this.$content.current).text(text)
   }

	render() {
		return (
         	<div className="ModelCrowdBigItem">
         		<div className="image">
         			<Link to={'/article/'+this.props.item.id}><img width="" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></Link>
         		</div>
               <div className="description">
                  <Link to={'/article/'+this.props.item.id} className="title">{this.props.item.title}</Link>
                  <div className="meta">
                     <span><i><img width="" height="" alt="" src={clockSvg}/></i>{this.props.item.createTimeString}</span>
                     <span><i><img width="" height="" alt="" src={eyeSvg}/></i>{this.props.item.browseSum}阅读</span>
                     <span><i><img width="" height="" alt="" src={commentSvg}/></i>{this.props.item.commentSum}(评论)</span>
                  </div>
                  <div className="content" ref={this.$content}>{this.props.item.content}</div>                  
               </div>
         	</div>
        )
	}
}

export default withRouter(ModelCrowdBigItem)

