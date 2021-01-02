import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import './ArchiveCategoryParentTitle.less'
import './MArchiveCategoryParentTitle.less'

class ArchiveCategoryParentTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategoryParentTitle">
          	 <Link to={'/category/' + this.props.parentItem.id} className="title">{this.props.parentItem.name}</Link>
          	 <span className="count">{this.props.parentItem.articleCount}</span>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryParentTitle)

