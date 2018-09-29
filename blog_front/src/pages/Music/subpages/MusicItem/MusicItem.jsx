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

	selectItem() {
		this.props.selectItemFn(this.props.item,this.props.index);
	}

	render() {
		return (
			<div className="MusicItem" onClick={this.selectItem.bind(this)}>
				<div className="wrap">
					<img className="coverImg" alt="" src={global.musicCoverPrefix+this.props.item.cover}/>
					<div className="info">
						<h4 className="songName">{this.props.item.songName}</h4>
						<p className="singer">{this.props.item.singer}</p>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(MusicItem)


