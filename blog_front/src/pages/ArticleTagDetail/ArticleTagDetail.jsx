import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArticleTagDetailCollection from './subpages/ArticleTagDetailCollection/ArticleTagDetailCollection'

import './ArticleTagDetail.less'
import './MArticleTagDetail.less'

class ArticleTagDetail extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArticleTagDetail">
          	<DocumentTitle title="标签">
          		<div className="ArticleTagDetail-Padding">
          			<div className="ArticleTagDetail-Warpper">
          				<div className="ArticleTagDetail-Inner">
          					<ArticleTagDetailCollection />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArticleTagDetail)

