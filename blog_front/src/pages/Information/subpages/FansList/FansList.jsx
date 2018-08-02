import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import * as showInfoActions from 'store/actions/showInfo' 
import PubSub from 'pubsub-js'

import FollowItem from '../FollowItem/FollowItem'

import { userFansApi } from 'api/Informartion/informartion'

import './FansList.less'
import './MFansList.less'

class FansList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.fansListrefreshSubscribe = this.fansListrefreshSubscribe.bind(this)
		PubSub.subscribe(global.fansListrefreshSubscribe,this.fansListrefreshSubscribe)
		this.state = {
			fansList: []
		}
		
	}

	componentDidMount() {
		this.initData();
	}

	componentWillUnmount() {
	   PubSub.unsubscribe(this.fansListrefreshSubscribe);
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	initData() {
		userFansApi(this.props.match.params.id,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					fansList: res.data.result
				})
			}
		})
	}

	fansListrefreshSubscribe() {
		this.initData()
	}

	followChangeFn(index,followStatus) {
		var fansList = this.state.fansList.slice()
		// 注意setState中数组比较更新时引用,所有需要拷贝一个新数组
		if(!fansList[index]){return}
		fansList[index].followStatus = followStatus
		this.setState({
			fansList: fansList
		})
	}

	render() {
		var items = null
		if (this.state.fansList.length) {
			items = this.state.fansList.map((item,index)=>{
				return (<FollowItem key={index} index={index} data={item} followChangeFn={this.followChangeFn.bind(this)}/>)
			})
		}
		return (
			<div className="FansList">
				{
					this.state.fansList.length>0 && 
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

export default withRouter(FansList)



