import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Player.less'
import './MPlayer.less'

class Player extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.$audio = React.createRef()
		
	}

	componentDidMount() {
	  this.$audio.current.play()
	}

	render() {
		return (
			<div className="Player">
				<div className="full-player" style={{display: 'none'}}>
					<div className="background"></div>
					<div className="full-wrap">
						<div className="top">
							<div className="top-wrap">
								<div className="quit"><i className="fa fa-close"></i></div>
								<div className="info">
									<h3>遇见(日语填词翻唱版本)</h3>
									<p>言叶之庭</p>
								</div>
								<div className="back"><i className="fa fa-angle-down"></i></div>
							</div>
						</div>
						<div className="middle">
							<div className="cd-wrap">
								<div className="cd"><img alt="" src="http://img.twenq.com/upload/temp/-1665673591.jpg"/></div>
							</div>
						</div>
						<div className="bottom">
							<div className="icon-wrap">
								<div><i className="fa fa-exchange"></i></div>
								
								<div><i className="fa fa-step-backward"></i></div>
								<div><i className="fa fa-play"></i></div>
								<div><i className="fa fa-step-forward"></i></div>
								<div><i className="fa fa-outdent"></i></div>
							</div>
						</div>
					</div>
				</div>
				<div className="mini-player">
					<div className="mini-wrap">
						<div className="left">
							<div className="cover">
								<img alt="" src="http://img.twenq.com/upload/temp/-1665673591.jpg"/>
							</div>
							<div className="info">
								<h3>遇见(日语填词翻唱版本)</h3>
								<p>言叶之庭</p>
							</div>
						</div>
						<div className="right">
							<div><i className="fa fa-play"></i></div>
							<div><i className="fa fa-outdent"></i></div>
						</div>
					</div>
				</div>
				<audio ref={this.$audio} src="http://img.twenq.com/upload/music/resource/7AF750DB6D06820AD12EA8602298793A.mp3" />
        	</div>
        )
	}
}

export default withRouter(Player)


/*
<div><i className="fa fa-refresh"></i></div>
								<div><i className="fa fa-random"></i></div>
								<div><i className="fa fa-pause"></i></div>

*/