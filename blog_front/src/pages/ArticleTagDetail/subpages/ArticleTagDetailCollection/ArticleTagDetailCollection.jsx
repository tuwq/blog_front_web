import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

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
          	ArticleTagDetailCollection
          </div>
        )
	}
}

export default withRouter(ArticleTagDetailCollection)

