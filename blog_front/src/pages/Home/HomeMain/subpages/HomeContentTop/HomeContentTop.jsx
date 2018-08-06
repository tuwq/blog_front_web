import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import Slider from 'base/general/Slider/Slider'
import WidgetCollection from './subpages/WidgetCollection/WidgetCollection'

import './HomeContentTop.less'
import './MHomeContentTop.less'

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
         		<WidgetCollection />
         	</section>
        )
	}
}

export default HomeContentTop

