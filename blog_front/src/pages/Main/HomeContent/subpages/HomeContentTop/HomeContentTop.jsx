import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style/HomeContentTop.less'
import './media/HomeContentTop.less'

import Slider from 'base/general/Slider'
import Popular from './subpages/Popular'

class HomeContentTop extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<section id="HomeContentTop" className="HomeContentTop">
         		<Slider />
         		<Popular />
         	</section>
        )
	}
}

export default HomeContentTop

