import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicItem from '../MusicItem/MusicItem'

import './MusicList.less'
import './MMusicList.less'

class MusicList extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicList">
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
				<MusicItem />
        	</div>
        )
	}
}

export default withRouter(MusicList)


