import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SearchTitle.less'
import './MSearchTitle.less'

class SearchTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		var title = null
		if (this.props.keyword == undefined || this.props.keyword == '') {
			title = (<h2>未输入搜索关键字 默认搜索全部内容</h2>)
		} else {
			title = (<h2>包含关键字 {this.props.keyword} 的内容</h2>)
		}
		if (this.props.noResult) {
			title = (<h2>没有找到包含关键字 {this.props.keyword} 的内容</h2>)
		}

		return (
			<div className="SearchTitle">
				{ title }
			  	<h2>找到{this.props.pageModel.total}条匹配结果</h2>
        	</div>
        )
	}
}

export default withRouter(SearchTitle)


