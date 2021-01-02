import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveCategoryContent from './subpages/ArchiveCategoryContent/ArchiveCategoryContent'

import './ArchiveCategory.less'
import './MArchiveCategory.less'

class ArchiveCategory extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategory">
          	<DocumentTitle title="分类归档">
          		<div className="ArchiveCategory-Padding">
          			<div className="ArchiveCategory-Warpper">
          				<div className="ArchiveCategory-Inner">
          					<ArchiveCategoryContent />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArchiveCategory)

