import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArticleTagDetailItem from '../ArticleTagDetailItem/ArticleTagDetailItem'

import './ArticleTagDetailList.less'
import './MArticleTagDetailList.less'

class ArticleTagDetailList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArticleTagDetailList">
           	<ArticleTagDetailItem />
           	<ArticleTagDetailItem />
           	<ArticleTagDetailItem />
           	<ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
            <ArticleTagDetailItem />
          </div>
        )
	}
}

export default withRouter(ArticleTagDetailList)

