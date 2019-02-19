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
          	 <h4 className="monthAndDay">{this.props.item.monthString}月{this.props.item.dayString}日</h4>
          	 <div className="content">
          	 	<div className="cover">
          	 		<Link to={'/article/' + this.props.item.id}><img alt="" src={global.artImgPrefix+this.props.item.faceCover}></img></Link>
          	 	</div>
          	 	<div className="detail">
          	 		<div className="detail-title-wrapper">
          	 			<Link to={'/article/' + this.props.item.id} className="detail-title">{this.props.item.title}</Link>
          	 		</div>
          	 		<div className="detail-control">
                              {
                                   this.props.item.articleCategoryList.map((item, index)=>{
                                        return (<Link to={'category/' + item.id} key={index} className="detail-category">{item.name}</Link>)
                                   })
                              }
          	 		</div>
          	 		<div className="detail-control">
                              {
                                   this.props.item.articleTagList.map((item, index)=>{
                                        return (<Link to={'archiveTag/' + item.id} key={index} className="detail-tag">{item.name}</Link>)
                                   })
                              }
          	 		</div>
          	 	</div>
          	 </div>
          </div>
        )
	}
}

export default withRouter(ArchiveTimeYearItem)

