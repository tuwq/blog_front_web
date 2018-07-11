import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeContentTop from './subpages/HomeContentTop'

import './style/HomeContent.less'
import './media/HomeContent.less'

class HomeContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div id="HomeContent" className="HomeContent">
          	<HomeContentTop />
          </div>
        )
	}
}

export default HomeContent

