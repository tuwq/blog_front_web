import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './BasisSetting.less'
import './MBasisSetting.less'

class BasisSetting extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<React.Fragment>
				<section className="basis">
					<div><h2>基本信息</h2></div>
					<div className="form-group">
						<label className="control-label">头像</label>
						<div className="radio">
							<label>
								<img width="40" height="40" alt="" src="https://ikmoe.com/wp-content/uploads/avatars/190.jpg" />
								<span><svg width="40" height="40" viewBox="-8 -8 80 80"><g>
									<path d="M10.61 44.486V23.418c0-2.798 2.198-4.757 5.052-4.757h6.405c1.142-1.915 2.123-5.161 3.055-5.138L40.28 13.5c.79 0 1.971 3.4 3.073 5.14 0 .2 6.51 0 6.51 0 2.856 0 5.136 1.965 5.136 4.757V44.47c-.006 2.803-2.28 4.997-5.137 4.997h-34.2c-2.854.018-5.052-2.184-5.052-4.981zm5.674-23.261c-1.635 0-3.063 1.406-3.063 3.016v19.764c0 1.607 1.428 2.947 3.063 2.947H49.4c1.632 0 2.987-1.355 2.987-2.957v-19.76c0-1.609-1.357-3.016-2.987-3.016h-7.898c-.627-1.625-1.909-4.937-2.28-5.148 0 0-13.19.018-13.055 0-.554.276-2.272 5.143-2.272 5.143l-7.611.01z"/>
									<path d="M32.653 41.727c-5.06 0-9.108-3.986-9.108-8.975 0-4.98 4.047-8.966 9.108-8.966 5.057 0 9.107 3.985 9.107 8.969 0 4.988-4.047 8.974-9.107 8.974v-.002zm0-15.635c-3.674 0-6.763 3.042-6.763 6.66 0 3.62 3.089 6.668 6.763 6.668 3.673 0 6.762-3.047 6.762-6.665 0-3.616-3.088-6.665-6.762-6.665v.002z"/>
								</g></svg></span>
								<input type="radio" name="avatar" value="custom"/>自定义头像
							</label>
							<label>
								<img width="40" height="40" alt="" src="https://ikmoe.com/wp-content/themes/Tint/assets/img/avatar/letters/T/medium.png"/>
								<input type="radio" name="avatar" value="letter" defaultChecked/>默认头像
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label">昵称</label>
						<p>
							<input type="text" />
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">网站</label>
						<p>
							<input type="text" />
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">个人描述</label>
						<p>
							<textarea placeholder="添加你的个人简介"></textarea>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label"></label>
						<p>
							<button>保存资料</button>
						</p>
					</div>
				</section>
        	</React.Fragment>
        )
	}
}

export default withRouter(BasisSetting)


