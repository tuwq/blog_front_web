import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTagDetailCollection from './subpages/ArchiveTagDetailCollection/ArchiveTagDetailCollection'

import './ArchiveTagDetail.less'
import './MArchiveTagDetail.less'

class ArchiveTagDetail extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArchiveTagDetail">
          	<DocumentTitle title="标签">
          		<div className="ArchiveTagDetail-Padding">
          			<div className="ArchiveTagDetail-Warpper">
          				<div className="ArchiveTagDetail-Inner">
          					<ArchiveTagDetailCollection />
          				</div>
          			</div>
          		</div>
          	</DocumentTitle>
          </div>
        )
	}
}

export default withRouter(ArchiveTagDetail)

