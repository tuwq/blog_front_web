import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveCategoryParentCollection from '../ArchiveCategoryParentCollection/ArchiveCategoryParentCollection'

import './ArchiveCategoryContent.less'
import './MArchiveCategoryContent.less'

class ArchiveCategoryContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategoryContent">
          	   <div className="ArchiveCategoryParentCollections-wrapper">
          	   	   <ArchiveCategoryParentCollection />
	               <ArchiveCategoryParentCollection />
	               <ArchiveCategoryParentCollection />
	               <ArchiveCategoryParentCollection />
          	   </div>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryContent)

