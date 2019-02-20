import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './BackGround.less'
import './MBackGround.less'

class BackGround extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	render() {
		return (
			<div className="BackGround">
				{
		          this.props.children
		        }
        	</div>
        )
	}
}

export default withRouter(BackGround)


