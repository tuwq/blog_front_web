import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style/HomeContentBottom.less'
import './media/HomeContentBottom.less'

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
         		
         	</section>
        )
	}
}

export default HomeContentBottom

