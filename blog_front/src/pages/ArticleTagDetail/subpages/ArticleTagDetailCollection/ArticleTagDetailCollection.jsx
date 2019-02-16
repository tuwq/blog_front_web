import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArticleTagDetailList from '../ArticleTagDetailList/ArticleTagDetailList'
import ArticleTagDetailTitle from '../ArticleTagDetailTitle/ArticleTagDetailTitle'
import Pagination from 'base/general/Pagination/Pagination'

import './ArticleTagDetailCollection.less'
import './MArticleTagDetailCollection.less'

class ArticleTagDetailCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArticleTagDetailCollection">
          	<React.Fragment>
          		<ArticleTagDetailTitle tagName="Java" />
          		<ArticleTagDetailList />
          	</React.Fragment>
          </div>
        )
	}
}

export default withRouter(ArticleTagDetailCollection)

