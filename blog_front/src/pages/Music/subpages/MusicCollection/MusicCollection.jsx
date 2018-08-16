import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicList from '../MusicList/MusicList'

import './MusicCollection.less'
import './MMusicCollection.less'

class MusicCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicCollection">
				<MusicList />
        	</div>
        )
	}
}

export default withRouter(MusicCollection)


