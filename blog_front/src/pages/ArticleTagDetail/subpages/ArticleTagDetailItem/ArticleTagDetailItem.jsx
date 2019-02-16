import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './ArticleTagDetailItem.less'
import './MArticleTagDetailItem.less'

class ArticleTagDetailItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	
	render() {
		return (
          <div className="ArticleTagDetailItem">
          	 <div className="cover">
     				<Link to={'/article/1'}><img width="128" height="64" alt="" src='http://img.twenq.com/upload/artimg/2019/1/1547211260_49656023_p0_master1200.jpg'></img></Link>
 			 </div>
 			 <div className="detail">
 				<Link to={'/article/1'} className="detail-title">Web常见安全漏洞</Link>
                <time className="detail-meta">1月前 &nbsp;2019-01-12</time>&nbsp;
 			 </div>
          </div>
        )
	}
}

export default withRouter(ArticleTagDetailItem)

