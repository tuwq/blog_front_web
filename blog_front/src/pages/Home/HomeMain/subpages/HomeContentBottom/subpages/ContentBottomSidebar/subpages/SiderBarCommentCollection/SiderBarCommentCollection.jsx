import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarCommentList from '../SiderBarCommentList/SiderBarCommentList'

import { newCommentApi } from 'api/Comment/comment'

import './SiderBarCommentCollection.less'
import './MSiderBarCommentCollection.less'

class SiderBarCommentCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.initData()
	}

	componentWillUnmount() {
      this.setState = (state,callback)=>{
        return
      }
   	}

	initData() {
		newCommentApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}

	render() {
		return (
         	<div id="SiderBarCommentCollection" className="SiderBarCommentCollection">
         		<h3><span>最新评论</span></h3>
         		{
         			this.state.data.length>0&&
         			<SiderBarCommentList data={this.state.data}/>
         		}
         	</div>
        )
	}
}

export default SiderBarCommentCollection

