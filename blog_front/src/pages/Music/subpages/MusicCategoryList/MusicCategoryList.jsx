import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicCategoryItem from '../MusicCategoryItem/MusicCategoryItem'

import './MusicCategoryList.less'
import './MMusicCategoryList.less'

class MusicCategoryList extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicCategoryList">
			  	{
			  		this.props.data.map((item,index)=>{
			  			return (<MusicCategoryItem item={item} index={index} key={index}/>)
			  		})
			  	}
        	</div>
        )
	}
}

export default withRouter(MusicCategoryList)


