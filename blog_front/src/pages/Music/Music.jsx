import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicSide from './subpages/MusicSide/MusicSide'
import MusicContent from './subpages/MusicContent/MusicContent'

import './Music.less'
import './MMusic.less'

class Music extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="Music">
				<div className="Music-Padding">
					<div className="Music-Wrapper">
						<div className="Music-Inner">
							<MusicSide />
							<MusicContent />
						</div>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(Music)


