import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import AlbumItem from '../AlbumItem/AlbumItem'
import PlayItem from '../PlayItem/PlayItem'

class PlayerList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="PlayerList">
				<div className="playerlist-d">
					<div className="album-list">
						<div className="musicHeader">绚丽彩虹博客(19)</div>
						<div className="list-wrap">
							<div className="list">
								<ul>
									<AlbumItem />
									<AlbumItem />
								</ul>
							</div>
						</div>
					</div>
					<div className="song-list">
						<div className="musicHeader">
							<i className="fa fa-angle-right"></i>
							<span>绚丽彩虹博客(19)</span>
						</div>
						<div className="list-wrap">
							<div className="list">
								<ul>
									<PlayItem />
									<PlayItem />
								</ul>
							</div>
						</div>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(PlayerList)


