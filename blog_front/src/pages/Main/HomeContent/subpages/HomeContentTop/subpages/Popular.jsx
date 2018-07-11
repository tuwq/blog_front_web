import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetList from './WidgetList'

import '../style/Popular.less'
import '../media/Popular.less'

class Popular extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div id="Popular" className="Popular">
         		<WidgetList />
         	</div>
        )
	}
}

export default Popular

