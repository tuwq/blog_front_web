import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArticleTagCollection from './subpages/ArticleTagCollection/ArticleTagCollection'

import './ArticleTag.less'
import './MArticleTag.less'

class ArticleTag extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div className="ArticleTag">
          	<DocumentTitle title="标签">
          		<div className="ArticleTag-Padding">
          			<div className="ArticleTag-Warpper">
          				<div className="ArticleTag-Inner">
          					<ArticleTagCollection />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArticleTag)

