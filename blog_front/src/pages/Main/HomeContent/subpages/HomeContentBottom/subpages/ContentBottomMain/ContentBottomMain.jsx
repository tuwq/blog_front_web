import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SectionList from './SectionList/SectionList'

import './ContentBottomMain.less'
import './MContentBottomMain.less'

class ContentBottomMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="ContentBottomMain" className="ContentBottomMain">
         		<div className="main-wrapper">
         			<SectionList />
         		</div>
         	</div>
        )
	}
}

export default ContentBottomMain

