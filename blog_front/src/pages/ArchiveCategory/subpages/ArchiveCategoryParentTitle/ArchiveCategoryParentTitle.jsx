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
          	 <Link to="" className="title">学习笔记</Link>
          	 <span className="count">9</span>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryParentTitle)

