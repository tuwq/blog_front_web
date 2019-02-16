import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './ArticleTagDetailTitle.less'
import './MArticleTagDetailTitle.less'

class ArticleTagDetailTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArticleTagDetailTitle">
          	<h1 className="tagName">{this.props.tagName}</h1>	
          </div>
        )
	}
}

export default withRouter(ArticleTagDetailTitle)

