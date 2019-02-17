import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import './ArchiveTimeYearTitle.less'
import './MArchiveTimeYearTitle.less'

class ArchiveTimeYearTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTimeYearTitle">
          	 <h1 className="yearTime">{this.props.yearTime}</h1>
          </div>
        )
	}
}

export default withRouter(ArchiveTimeYearTitle)

