import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style/main.less'

class Main extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div id="Main">
				Main
			</div>
		)
	}
}

export default Main

