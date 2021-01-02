import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTimeYearTitle from '../ArchiveTimeYearTitle/ArchiveTimeYearTitle'
import ArchiveTimeYearList from '../ArchiveTimeYearList/ArchiveTimeYearList'

import './ArchiveTimeYearCollection.less'
import './MArchiveTimeYearCollection.less'

class ArchiveTimeYearCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTimeYearCollection">
      		<ArchiveTimeYearTitle yearTime={this.props.yearTime}/>
  	 		<ArchiveTimeYearList data={this.props.data}/>
          </div>
        )
	}
}

export default withRouter(ArchiveTimeYearCollection)

