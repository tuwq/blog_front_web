import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeHeader from '@/pages/Main/HomeHeader/HomeHeader'
import HomeFooter from '@/pages/Main/HomeFooter/HomeFooter'
import ArticleMain from '@/pages/Article/subpages/ArticleMain/ArticleMain'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'

import './Article.less'
import './MArticle.less'

class Article extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	updatePass() {
		
	}

	render() {
		return (
			<div className="Article">
				<HomeHeader />
				<ArticleMain />
				<HomeFooter />
				<FixControl />
				<SearchModal />
        	</div>
        )
	}
}

export default withRouter(Article)


