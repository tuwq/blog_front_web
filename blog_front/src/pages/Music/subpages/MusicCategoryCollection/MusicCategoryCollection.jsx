import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicCategoryList from '../MusicCategoryList/MusicCategoryList'

import './MusicCategoryCollection.less'
import './MMusicCategoryCollection.less'

class MusicCategoryCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicCategoryCollection">
				<MusicCategoryList />
        	</div>
        )
	}
}

export default withRouter(MusicCategoryCollection)


