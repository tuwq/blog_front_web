import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

class AlbumItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<li className="AlbumItem">
				<i className="fa fa-angle-right"></i>
				<span className="index">1</span>
				绚丽彩虹博客 - 绚丽彩虹
        	</li>
        )
	}
}

export default withRouter(AlbumItem)


