import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTagDetailTitle from '../ArchiveTagDetailTitle/ArchiveTagDetailTitle'
import ArchiveTagDetailList from '../ArchiveTagDetailList/ArchiveTagDetailList'
import Pagination from 'base/general/Pagination/Pagination'

import './ArchiveTagDetailCollection.less'
import './MArchiveTagDetailCollection.less'

class ArchiveTagDetailCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArchiveTagDetailCollection">
          	<React.Fragment>
          		<ArchiveTagDetailTitle tagName="Java" />
          		<ArchiveTagDetailList />
          	</React.Fragment>
          </div>
        )
	}
}

export default withRouter(ArchiveTagDetailCollection)

