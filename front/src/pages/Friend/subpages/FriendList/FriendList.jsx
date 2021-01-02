import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import FriendItem from '../FriendItem/FriendItem'

import './FriendList.less'
import './MFriendList.less'

class FriendList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<div className="FriendList">
				{
					this.props.data.map((item,index)=>{
						return (<FriendItem key={index} item={item} index={index}/>)
					})
				}
        	</div>
        )
	}
}

export default withRouter(FriendList)


