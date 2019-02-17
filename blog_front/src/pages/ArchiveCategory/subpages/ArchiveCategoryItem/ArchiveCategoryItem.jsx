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
          	 <Link to="" className="title">JavaScript</Link>
          	 <span className="count">11</span>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryItem)

