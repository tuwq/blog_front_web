import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveCategoryParentTitle from '../ArchiveCategoryParentTitle/ArchiveCategoryParentTitle'
import ArchiveCategoryList from '../ArchiveCategoryList/ArchiveCategoryList'

import './ArchiveCategoryParentCollection.less'
import './MArchiveCategoryParentCollection.less'

class ArchiveCategoryParentCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategoryParentCollection">
          	 <ArchiveCategoryParentTitle />
          	 <ArchiveCategoryList />
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryParentCollection)

