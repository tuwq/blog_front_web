import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SelfMessageList.less'
import './MSelfMessageList.less'

class SelfMessageList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SelfMessageList">
				<div className="wrap">
				  <div className="noMessage">
				  	<h2></h2>
				  	<svg viewBox="0 0 1024 1024" width="60" height="60"><path fill="#77C9FF" d="M364.088889 56.888889L48.355556 284.444444 199.111111 392.533333l312.888889-227.555555z" ></path><path fill="#77C9FF" d="M659.911111 56.888889l315.733333 227.555555-150.755555 108.088889-312.888889-227.555555zM659.911111 728.177778l315.733333-227.555556-150.755555-108.088889-312.888889 227.555556z"></path><path fill="#77C9FF" d="M364.088889 728.177778l-315.733333-227.555556L199.111111 392.533333l312.888889 227.555556z"></path><path fill="#77C9FF" d="M694.044444 773.688889l-34.133333 25.6-31.288889-25.6-116.622222-82.488889-116.622222 82.488889-31.288889 25.6-34.133333-25.6L199.111111 679.822222V768l312.888889 227.555556 312.888889-227.555556v-88.177778z"></path></svg>
				  </div>
				  <div className="group-list">
					  <div className="comment-group">
					  	<label>回复了你</label>
					  	<div className="title">写出来的东西没人懂，还有意义吗？写出来的东西没人懂，还有意义吗？</div>
				  		<div className="meta">
				  			<div className="avatar">
				  				<img width="40" height="40" alt="" src="https://q.qlogo.cn/g?b=qq&nk=1537060553&s=40"/>
				  			</div>
			  				<div className="name">
			  					<a>卢溪</a>
			  					<span>公众号: 卢溪 / 心理学、性学、哲学</span>
			  				</div>
				  		</div>
				  		<div className="content">
				  			<p>没人懂则独善其身，有人懂则兼济天下。 只要你想写，你懂你写出来的东西，你写出来后感到心情愉悦。那就说明，你的身体里有某个东西被压抑了，憋着难受，释放出来就好了。这时候，写作就是挺私人化的一个事情，是自己给自己治疗，别人懂不懂没关系。 如果你想写，并且写出来的东西还得到了很多人的共鸣和认可，那说明你不仅可以愉悦自己，还可以愉
				  			那说明你不仅可以愉悦自己，还可以愉
				  			那说明你不仅可以愉悦自己，还可以愉那说明你不仅可以愉悦自己，还可以愉那说明你不仅可以愉悦自己，还可以愉那说明你不仅可以愉悦自己，还可以愉
				  			</p>
				  		</div>
					  </div>
				  </div>
			  	</div>
        	</div>
        )
	}
}

export default withRouter(SelfMessageList)


