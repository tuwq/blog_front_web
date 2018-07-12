import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './ContentBottomSidebar.less'
import './MContentBottomSidebar.less'

class ContentBottomSidebar extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<aside id="ContentBottomSidebar" className="ContentBottomSidebar">
         		aside
         	</aside>
        )
	}
}

export default ContentBottomSidebar

