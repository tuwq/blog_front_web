import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './ArticleContent.less'
import './MArticleContent.less'

class ArticleContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)		
	}

	componentDidMount() {
		
	}

	render() {

		return (
			<div className="ArticleContent">
				<article className="article">
					<div className="thumbnail"></div>
					<div className="content">
						<div className="content-footer">
							<div className="date"><i></i>
							<span>最后修改: 2018年6月20日07:06PM</span></div>
							<div className="statement"><span>© 著作权归作者所有</span></div>
						</div>
					</div>
					<div  className="support">
						<button>
							<i></i>赞赏支持
						</button>
						<p>如果觉得我的文章对你有用，请随意赞赏</p>
					</div>
				</article>
        	</div>
        )
	}
}

export default withRouter(ArticleContent)


