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
				<MusicCategoryItem />
				<MusicCategoryItem />
				<MusicCategoryItem />
				<MusicCategoryItem />
        	</div>
        )
	}
}

export default withRouter(MusicCategoryList)


