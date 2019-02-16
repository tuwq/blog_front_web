import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTimeYearCollection from '../ArchiveTimeYearCollection/ArchiveTimeYearCollection'

import './ArchiveTimeContent.less'
import './MArchiveTimeContent.less'

class ArchiveTimeContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div className="ArchiveTimeContent">
          	<ArchiveTimeYearCollection />
          	<ArchiveTimeYearCollection />
          	<ArchiveTimeYearCollection />
          </div>
        )
	}
}

export default withRouter(ArchiveTimeContent)

