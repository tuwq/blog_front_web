import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTimeContent from './subpages/ArchiveTimeContent/ArchiveTimeContent'

import './ArchiveTime.less'
import './MArchiveTime.less'

class ArchiveTime extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveTime">
          	<DocumentTitle title="时间归档">
          		<div className="ArchiveTime-Padding">
          			<div className="ArchiveTime-Warpper">
          				<div className="ArchiveTime-Inner">
          					<ArchiveTimeContent />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArchiveTime)

