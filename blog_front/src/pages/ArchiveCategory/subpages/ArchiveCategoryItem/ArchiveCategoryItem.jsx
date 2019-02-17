import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import './ArchiveCategoryItem.less'
import './MArchiveCategoryItem.less'

class ArchiveCategoryItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategoryItem">
          	 <Link to={'/category/' + this.props.item.id} className="title">{this.props.item.name}</Link>
          	 <span className="count">{this.props.item.articleCount}</span>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryItem)

