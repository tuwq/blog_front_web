import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import { shuffle } from 'base/js/util'
import ArticleTagItem from '../ArticleTagItem/ArticleTagItem'

import './ArticleTagList.less'
import './MArticleTagList.less'

class ArticleTagList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.data = [{
			name: "JavaScript"
		},{
			name: "Java"
		},{
			name: "分布式"
		},{
			name: "网络安全"
		},{
			name: "Nginx"
		},{
			name: "Spring"
		},{
			name: "手写"
		},{
			name: "分布式"
		},{
			name: "网络安全"
		},{
			name: "Nginx"
		},{
			name: "Spring"
		},{
			name: "手写"
		},{
			name: "分布式"
		},{
			name: "网络安全"
		},{
			name: "Nginx"
		},{
			name: "Spring"
		},{
			name: "手写"
		}]
	}

	componentDidMount() {
		
	}

	render() {
		this.data = shuffle(this.data)
		return (
          <div className="ArticleTagList">
          {
          	this.data.map((item, index)=>{
          		return (<ArticleTagItem tagName={item.name} key={index}/>)
          	})
          }
          </div>
        )
	}
}

export default withRouter(ArticleTagList)

