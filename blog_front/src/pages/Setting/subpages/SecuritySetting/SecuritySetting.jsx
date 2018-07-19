import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SecuritySetting.less'
import './MSecuritySetting.less'

class SecuritySetting extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<React.Fragment>
				<div className="security">
					<div><h2>账户安全</h2><small>谨慎操作</small></div>
					<div className="form-group">
						<label className="control-label">邮箱(必填)</label>
						<p>
							<input type="text" placeholder="这是确认你身份的唯一方式"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">新密码</label>
						<p>
							<input type="text" placeholder="如果您想修改您的密码, 请在此输入新密码, 否则请留空."/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">重复密码</label>
						<p>
							<input type="text" placeholder="再输入一遍新密码. 提示: 您的密码最好至少包含7个字符. 为了保证密码强度"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label"></label>
						<p>
							<button>保存安全信息</button>
						</p>
					</div>
	        	</div>
        	</React.Fragment>
        )
	}
}

export default withRouter(SecuritySetting)


