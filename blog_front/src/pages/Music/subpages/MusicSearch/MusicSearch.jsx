import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'

import './MusicSearch.less'
import './MMusicSearch.less'

class MusicSearch extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.clearMusicKeywordSubscribe = this.clearMusicKeywordSubscribe.bind(this)
		PubSub.subscribe(global.clearMusicKeywordSubscribe,this.clearMusicKeywordSubscribe)
		this.$search = React.createRef()
		this.state = {
			keyword: ''
		}	
	}

	componentDidMount() {
	  
	}

	componentWillUnmount() {
	   PubSub.unsubscribe(this.clearMusicKeywordSubscribe);
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	startSearch() {
		PubSub.publish(global.MusicSearchSubscribe,this.state.keyword);
	}

	inputChange(e) {
		const name = e.target.name
		this.setState({
			[name]: e.target.value
		})
	}

	siderOpen() {
		PubSub.publish(global.MusicSiderSubscribe,false);
	}

	clearMusicKeywordSubscribe(msg,data) {
		this.$search.current.value = ''
	}

	render() {
		return (
			<div className="MusicSearch">
				<div className="search-warp">
					<div className="search-group">
						<div className="search-control">
							<input ref={this.$search} type="text" name="keyword" onChange={this.inputChange.bind(this)} placeholder="歌曲关键字:歌名,歌手,分类"/>
						</div>
						<div className="search-control">
							<button onClick={this.startSearch.bind(this)}>搜索</button>
						</div>
						<div className="search-control siderOpen" onClick={this.siderOpen.bind(this)}>
							<i className="fa fa-tag" style={{lineHeight: '40px'}}></i>
						</div>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(MusicSearch)


