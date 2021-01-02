import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SectionItem from '../SectionItem/SectionItem'

import './SectionList.less'
import './MSectionList.less'

class SectionList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SectionList" className="SectionList">
         		<SectionItem />
         	</div>
        )
	}
}

export default SectionList

