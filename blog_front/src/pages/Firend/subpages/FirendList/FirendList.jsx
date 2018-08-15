import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import FirendItem from '../FirendItem/FirendItem'

import './FirendList.less'
import './MFirendList.less'

class FirendList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<div className="FirendList">
				{
					this.props.data.map((item,index)=>{
						return (<FirendItem key={index} item={item} index={index}/>)
					})
				}
        	</div>
        )
	}
}

export default withRouter(FirendList)


