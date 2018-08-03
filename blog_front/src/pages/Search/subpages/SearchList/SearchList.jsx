import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SearchItem from '../SearchItem/SearchItem'

import './SearchList.less'
import './MSearchList.less'

class SearchList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SearchList">
			  	<div className="SearchList-Wrapper">
			  		{
			  			this.props.data.map((item,index)=>{
			  				return (<SearchItem key={index} item={item} index={index}/>)
			  			})
			  		}
			  	</div>
        	</div>
        )
	}
}

export default withRouter(SearchList)


