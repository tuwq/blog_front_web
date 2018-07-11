import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetItem from './WidgetItem'

import '../style/WidgetList.less'
import '../media/WidgetList.less'

class WidgetList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div id="WidgetList" className="WidgetList">
     			<WidgetItem />
     			<WidgetItem />
     			<WidgetItem />
     			<WidgetItem />
         	</div>
        )
	}
}

export default WidgetList

