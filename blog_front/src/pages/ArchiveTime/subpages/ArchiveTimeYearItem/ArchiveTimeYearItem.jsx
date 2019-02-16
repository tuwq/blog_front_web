import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './ArchiveTimeYearItem.less'
import './MArchiveTimeYearItem.less'

class ArchiveTimeYearItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTimeYearItem">
          	 <h4 className="monthAndDay">8月31日</h4>
          	 <div className="content">
          	 	<div className="cover">
          	 		<Link to={'/article/1'}><img alt="" src='http://img.twenq.com/upload/artimg/2019/1/1547211260_49656023_p0_master1200.jpg'></img></Link>
          	 	</div>
          	 	<div className="detail">
          	 		<div className="detail-control">
          	 			<Link to={'/article/1'} className="detail-title">Web常见安全漏洞</Link>
          	 		</div>
          	 		<div className="detail-control">
          	 			
          	 			<a className="detail-category">文章</a>
          	 			<a className="detail-category">短代码</a>
          	 		</div>
          	 		<div className="detail-control">
          	 			<a className="detail-tag">Java</a>
          	 			<a className="detail-tag">分布式</a>
          	 			<a className="detail-tag">分布式</a>
          	 		</div>
          	 	</div>
          	 </div>
          </div>
        )
	}
}

export default withRouter(ArchiveTimeYearItem)

