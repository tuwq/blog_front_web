import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import ArticleContent from '../ArticleContent/ArticleContent'
import Choose from '../Choose/Choose'
import CommentCollection from '../CommentCollection/CommentCollection'

import './ContentMain.less'
import './MContentMain.less'

class ContentMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	updatePass() {
		
	}

	render() {
		return (
			<div className="ContentMain">
				<ArticleContent data={this.props.data}/>
				<Choose data={this.props.data}/>
				<CommentCollection />
        	</div>
        )
	}
}

export default withRouter(ContentMain)


