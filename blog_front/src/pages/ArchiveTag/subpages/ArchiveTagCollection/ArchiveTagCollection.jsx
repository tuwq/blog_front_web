import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTagList from '../ArchiveTagList/ArchiveTagList'

import './ArchiveTagCollection.less'
import './MArchiveTagCollection.less'

class ArchiveTagCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div className="ArchiveTagCollection">
          	<ArchiveTagList />
          </div>
        )
	}
}

export default withRouter(ArchiveTagCollection)

