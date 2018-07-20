import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetList from '../WidgetList/WidgetList'

import './ContentTopPopular.less'
import './MContentTopPopular.less'

class ContentTopPopular extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div id="ContentTopPopular" className="ContentTopPopular">
         		<WidgetList />
         	</div>
        )
	}
}

export default ContentTopPopular

