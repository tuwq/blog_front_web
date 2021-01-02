import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import ArticleMain from '@/pages/Article/subpages/ArticleMain/ArticleMain'
import ChildCommentListModal from 'base/general/ChildCommentListModal/ChildCommentListModal'

import './Article.less'
import './MArticle.less'

class Article extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	render() {
		return (
			<div className="Article">
				<ArticleMain />
				<ChildCommentListModal />
        	</div>
        )
	}
}

export default withRouter(Article)


