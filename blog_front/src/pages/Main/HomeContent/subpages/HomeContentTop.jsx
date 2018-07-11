import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../style/HomeContentTop.less'
import '../media/HomeContentTop.less'

class HomeContentTop extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div className="HomeContent-Wrapper">
          	 
          </div>
        )
	}
}

export default HomeContentTop

