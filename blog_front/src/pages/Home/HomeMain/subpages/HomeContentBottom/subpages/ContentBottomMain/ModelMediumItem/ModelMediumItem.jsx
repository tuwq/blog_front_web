import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import marked from 'marked'

import './ModelMediumItem.less'
import './MModelMediumItem.less'

class ModelMediumItem extends React.Component {

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
         	<div className="ModelMediumItem">
         		<div className="image">
         			<Link to={'/article/'+this.props.item.id}><img width="140" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></Link>
         		</div>
         		<div className="description">
         			<Link to={'/article/'+this.props.item.id} className="section-title">
         				{this.props.item.title}
         			</Link>
         			<div className="section-content" ref={this.$content}></div>
         		</div>
         	</div>
        )
	}
}

export default withRouter(ModelMediumItem)

