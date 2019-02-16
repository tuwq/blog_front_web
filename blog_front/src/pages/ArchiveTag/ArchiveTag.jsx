import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTagCollection from './subpages/ArchiveTagCollection/ArchiveTagCollection'

import './ArchiveTag.less'
import './MArchiveTag.less'

class ArchiveTag extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTag">
          	<DocumentTitle title="标签归档">
          		<div className="ArchiveTag-Padding">
          			<div className="ArchiveTag-Warpper">
          				<div className="ArchiveTag-Inner">
          					<ArchiveTagCollection />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArchiveTag)

