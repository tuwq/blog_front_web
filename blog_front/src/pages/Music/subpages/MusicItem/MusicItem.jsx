import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './MusicItem.less'
import './MMusicItem.less'

class MusicItem extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="MusicItem">
				<div className="wrap">
					<img className="coverImg" alt="" src="http://p1.music.126.net/5gNt0nW6l-2hSAtJAnaNCw==/4450823069239492.jpg?param=130y130"/>
					<div className="info">
						<h4 className="songName">Back to You</h4>
						<p className="singer">美剧 十三个原因第二季插曲</p>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(MusicItem)


