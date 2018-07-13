import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './Slider.less'
import './MSlider.less'

class Slider extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div id="Slider">
         		Slider
         	</div>
        )
	}
}

export default Slider

