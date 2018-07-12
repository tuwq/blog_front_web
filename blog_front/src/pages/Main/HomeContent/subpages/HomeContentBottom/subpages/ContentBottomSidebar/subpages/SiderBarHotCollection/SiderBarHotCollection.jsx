import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarHotList from '../SiderBarHotList/SiderBarHotList'

import './SiderBarHotCollection.less'
import './MSiderBarHotCollection.less'

class SiderBarHotCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarHotCollection" className="SiderBarHotCollection">
         		<h3><span>热评文章</span></h3>
         		<SiderBarHotList />
         	</div>
        )
	}
}

export default SiderBarHotCollection

