import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArticleTagList from '../ArticleTagList/ArticleTagList'

import './ArticleTagCollection.less'
import './MArticleTagCollection.less'

class ArticleTagCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div className="ArticleTagCollection">
          	<ArticleTagList />
          </div>
        )
	}
}

export default withRouter(ArticleTagCollection)

