import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'

import MusicCategoryCollection from '../MusicCategoryCollection/MusicCategoryCollection'
import RecommendCollection from '../RecommendCollection/RecommendCollection'

import './MusicSide.less'
import './MMusicSide.less'

class MusicSide extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.$MusicSide = React.createRef()
		this.MusicSiderSubscribe = this.MusicSiderSubscribe.bind(this)
		PubSub.subscribe(global.MusicSiderSubscribe,this.MusicSiderSubscribe)
	}

	componentDidMount() {
	  
	}

	componentWillUnmount() {
	    // 取消订阅
	    PubSub.unsubscribe(this.MusicSiderSubscribe)
	    // 防止异步调用数据
	      this.setState = (state,callback)=>{
	      return
	    };
	}

	MusicSiderSubscribe() {
		if (this.$MusicSide.current) {
			$(this.$MusicSide.current).toggleClass('extra')
		}
	}

	render() {
		return (
			<div className="MusicSide" ref={this.$MusicSide}>
				<MusicCategoryCollection />
        	</div>
        )
	}
}

export default withRouter(MusicSide)


