import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './UpdatePass.less'
import './MUpdatePass.less'

class UpdatePass extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.updatePass = this.updatePass.bind(this)
	}

	componentDidMount() {
		
	}

	updatePass() {
		
	}

	render() {
		return (
			<div id="UpdatePass" className="UpdatePass">
				<div className="UpdatePass-wrapper">
					<div className="content">
						<h2>修改密码</h2>
						<p>别又把密码忘了</p>
						<p>两次不一致</p>
						<form className="form">
							<div className="form-control">
								<input type="text" placeholder="新密码" />
							</div>
							<div className="form-control">
								<input type="text" placeholder="确认一遍" />
							</div>
							<div className="form-control">
								<button onClick={this.updatePass}>确定</button>
							</div>
						</form>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(UpdatePass)


