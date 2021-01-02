import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './LoadMore.less'

class LoadMore extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.wrapper = React.createRef()
		this.scrollLoad = this.scrollLoad.bind(this)
		this.loadMore = this.loadMore.bind(this)
	}

	render() {
		return (
			<div className="LoadMore" ref={this.wrapper} >
				{
					this.props.pend
					? <span>加载中...</span>
					: <span onClick={this.props.loadMoreFn}>加载更多</span>
				}
			</div>
		)
	}

	scrollLoad() {
		if ( this.props.pend ) {
			return
		}
		if (this.timeoutID) {
			clearTimeout(this.timeoutID)
		}
		this.timeoutID = setTimeout( this.loadMore , 50 )
	}

	loadMore() {
		const top = this.wrapper.current.getBoundingClientRect().top
		const windowHeight = window.screen.height
		if ( top && top < windowHeight ) {
			// 当wrapper已经被滚动到暴露在页面的可视范围之内的时候。刷新
			this.props.loadMoreFn()
		}
	}

	componentDidMount() {
		window.addEventListener('scroll',this.scrollLoad)
	}

	componentWillUnmount() {
	  clearInterval(this.timeoutID);
	  window.removeEventListener('scroll',this.scrollLoad)
	}
}

export default LoadMore