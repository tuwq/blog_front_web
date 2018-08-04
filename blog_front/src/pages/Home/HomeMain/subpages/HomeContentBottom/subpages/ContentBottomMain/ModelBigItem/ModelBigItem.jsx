import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

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
         			<Link to={'/article/'+this.props.item.id}><img width="" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></Link>
         		</div>
         		<div className="description">
         			<Link to={'/article/'+this.props.item.id} className="title">如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123</Link>
         			<div className="meta">
         				<span><i><img width="14" height="14" alt="" src={clockSvg}/></i>{this.props.item.createTimeString}</span>
         				<span><i><img width="14" height="14" alt="" src={eyeSvg}/></i>{this.props.item.browseSum}(阅读)</span>
         				<span><i><img width="14" height="14" alt="" src={commentSvg}/></i>{this.props.item.commentSum}(评论)</span>
         			</div>
         			<div className="content">
         				如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j21233123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123如何偈偈asdas??/dajl1j23123vv
         			</div>
         		</div>
         	</div>
        )
	}
}

export default withRouter(ModelBigItem)

