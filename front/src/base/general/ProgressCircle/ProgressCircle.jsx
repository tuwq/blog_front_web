import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './ProgressCircle.less'
import './MProgressCircle.less'

class ProgressCircle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			dashArray: Math.PI*100
		}
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUnmount() {
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	render() {
		let dashOffset = (1-this.props.percent) * this.state.dashArray

		return (
			<div className="ProgressCircle">
				<svg width={this.props.radius} height={this.props.radius} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
			      <circle className="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
			      <circle className="progress-bar" r="50" cx="50" cy="50" fill="transparent" 
			      strokeDasharray={this.state.dashArray} strokeDashoffset={dashOffset} />
			    </svg>
			    {
			    	this.props.children
			    }
			</div>
        )
	}
}


export default withRouter(ProgressCircle)