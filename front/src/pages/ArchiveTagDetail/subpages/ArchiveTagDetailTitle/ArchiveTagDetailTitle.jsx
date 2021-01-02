import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './ArchiveTagDetailTitle.less'
import './MArchiveTagDetailTitle.less'

class ArchiveTagDetailTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}
	render() {
		return (
          <div className="ArchiveTagDetailTitle">
          	<h1 className="title">{this.props.articleTag.name}</h1>	
          </div>
        )
	}
}

export default withRouter(ArchiveTagDetailTitle)

