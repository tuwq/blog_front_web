import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicSearch from '../MusicSearch/MusicSearch'
import MusicCollection from '../MusicCollection/MusicCollection'
import Pagination from 'base/general/Pagination/Pagination'

import './MusicContent.less'
import './MMusicContent.less'

class MusicContent extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicContent">
				<MusicSearch />
				<MusicCollection />
        	</div>
        )
	}
}

export default withRouter(MusicContent)


