import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetItem from '../WidgetItem/WidgetItem'

import './WidgetList.less'
import './MWidgetList.less'

class WidgetList extends React.Component {

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
			<div id="WidgetList" className="WidgetList">         	
     			{
     				this.props.praiseList.map((item,index)=>{
     					return (<WidgetItem key={index} item={item} index={index}/>)
     				})
     			}
     		</div>
        )
	}
}

export default WidgetList

