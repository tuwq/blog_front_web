import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarSwitchItem from '../SiderBarSwitchItem/SiderBarSwitchItem'

import './SiderBarSwitchList.less'
import './MSiderBarSwitchList.less'

class SiderBarSwitchList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarSwitchList" className="SiderBarSwitchList">
				{
					this.props.data.map((item, index)=>{
						return (<SiderBarSwitchItem key={index} item={item}/>)
					})
				}
         	</div>
        )
	}
}

export default SiderBarSwitchList
