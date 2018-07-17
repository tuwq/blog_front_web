import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import ContentTitle from '../ContentTitle/ContentTitle'
import ContentMain from '../ContentMain/ContentMain'

import './ArticleMain.less'
import './MArticleMain.less'

class ArticleMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="ArticleMain">
				<div className="Content-Wrapper">
					<div className="content">
						<ContentTitle />
						<ContentMain />
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(ArticleMain)


