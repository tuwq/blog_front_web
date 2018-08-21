import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './AlbumItem.less'

class AlbumItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<li className="AlbumItem" onClick={this.props.chooseFn.bind(this,this.props.index)}>
				<i className="fa fa-angle-right"></i>
				<span className="index">{this.props.index+1}</span>
				{this.props.item.txt+"("+this.props.item.sum+")"}
        	</li>
        )
	}
}

export default withRouter(AlbumItem)


