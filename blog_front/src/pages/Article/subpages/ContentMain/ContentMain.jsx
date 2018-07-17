import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import ArticleContent from '../ArticleContent/ArticleContent'
import Choose from '../Choose/Choose'
import CommentList from '../CommentList/CommentList'

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
				<ArticleContent />
				<Choose />
				<CommentList />
        	</div>
        )
	}
}

export default withRouter(ContentMain)


