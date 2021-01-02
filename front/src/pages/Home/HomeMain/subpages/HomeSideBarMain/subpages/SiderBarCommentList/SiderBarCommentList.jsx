import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarCommentItem from '../SiderBarCommentItem/SiderBarCommentItem'

import './SiderBarCommentList.less'
import './MSiderBarCommentList.less'

class SiderBarCommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarCommentList" className="SiderBarCommentList">
         	  	{
         	  		this.props.data.map((item,index)=>{
         	  			return (<SiderBarCommentItem key={index} item={item} index={index}/>)
         	  		})
         	  	}
         	</div>
        )
	}
}

export default SiderBarCommentList

