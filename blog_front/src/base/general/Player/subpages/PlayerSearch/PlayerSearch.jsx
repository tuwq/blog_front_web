import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import PlayerSearchItem from '../PlayerSearchItem/PlayerSearchItem'

import './PlayerSearch.less'

class PlayerSearch extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="PlayerSearch">
				<input type="text" placeholder="输入歌名,歌手名"/>
				<i title="清空本地搜索记录" className="delSearchList fa fa-trash"></i>
				<div className="searchlist-box">
					<div className="searchlist-wrap">
						<div className="container">
							<ul>
								<PlayerSearchItem />
							</ul>
						</div>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(PlayerSearch)


