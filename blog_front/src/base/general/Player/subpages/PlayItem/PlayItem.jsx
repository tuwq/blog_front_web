import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

class PlayItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<li className="PlayItem">
				<i className="fa fa-angle-right"></i>
				<span className="index">1</span>
				EastNewSound - 绯色月下、狂咲ノ絶　-1st Anniversary Remix- - remix
        	</li>
        )
	}
}

export default withRouter(PlayItem)


