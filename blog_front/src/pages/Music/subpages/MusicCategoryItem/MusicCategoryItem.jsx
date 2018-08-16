import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,NavLink } from 'react-router-dom'

import './MusicCategoryItem.less'
import './MMusicCategoryItem.less'

class MusicCategoryItem extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicCategoryItem">
				<NavLink exact to="/music/category/1" activeStyle={{ backgroundColor: '#fff', color: '#000' }} 
				className="name">全部</NavLink>
        	</div>
        )
	}
}

export default withRouter(MusicCategoryItem)


