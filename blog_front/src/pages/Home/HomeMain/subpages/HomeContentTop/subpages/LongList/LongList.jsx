import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import LongItem from '../LongItem/LongItem'

import './LongList.less'
import './MLongList.less'

class LongList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}
	
	render() {
		return (
			<div id="LongList" className="LongList">         	
     			{
     				this.props.data.map((item,index)=>{
     					return (<LongItem key={index} item={item} index={index}/>)
     				})
     			}
     		</div>
        )
	}
}

export default LongList

