import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ContentBottomMain from './subpages/ContentBottomMain/ContentBottomMain'

import './HomeContentBottom.less'
import './MHomeContentBottom.less'

class HomeContentBottom extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<section id="HomeContentBottom" className="HomeContentBottom">
         		<ContentBottomMain />
         	</section>
        )
	}
}

export default HomeContentBottom

