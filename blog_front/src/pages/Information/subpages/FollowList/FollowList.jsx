import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import FollowItem from '../FollowItem/FollowItem'

import { userFollowsApi } from 'api/Informartion/informartion'

import './FollowList.less'
import './MFollowList.less'

class FollowList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.state = {
			followList: []
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
		userFollowsApi(this.props.match.params.id,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					followList: res.data.result
				})
			}
		})
	}

	followChangeFn(index,followStatus) {
		var followList = this.state.followList.slice()
		// 注意setState中数组比较更新时引用,所有需要拷贝一个新数组
		followList[index].followStatus = followStatus
		this.setState({
			followList: followList
		})
	}

	render() {
		var items = null
		if (this.state.followList.length) {
			items = this.state.followList.map((item,index)=>{
				return (<FollowItem key={index} index={index} data={item} followChangeFn={this.followChangeFn.bind(this)}/>)
			})
		}
		return (
			<div className="FollowList">
				{
					this.state.followList.length>0 && 
					(
						<div className="group-list">
							{items}
					 	</div>
					)
				}
        	</div>
        )
	}
}

export default withRouter(FollowList)


