import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CategoryItem from '../CategoryItem/CategoryItem'

import './CategoryList.less'
import './MCategoryList.less'

class CategoryList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="CategoryList">
			  	<div className="CategoryList-Wrapper">
			  		{
			  			this.props.data.map((item,index)=>{
			  				return (<CategoryItem key={index} item={item} index={index}/>)
			  			})
			  		}
			  	</div>
        	</div>
        )
	}
}

export default withRouter(CategoryList)


