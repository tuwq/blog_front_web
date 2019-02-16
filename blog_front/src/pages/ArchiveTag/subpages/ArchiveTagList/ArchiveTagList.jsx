import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import { shuffle } from 'base/js/util'
import ArchiveTagItem from '../ArchiveTagItem/ArchiveTagItem'

import './ArchiveTagList.less'
import './MArchiveTagList.less'

class ArchiveTagList extends React.Component {

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
          <div className="ArchiveTagList">
          {
          	this.data.map((item, index)=>{
          		return (<ArchiveTagItem tagName={item.name} key={index}/>)
          	})
          }
          </div>
        )
	}
}

export default withRouter(ArchiveTagList)

