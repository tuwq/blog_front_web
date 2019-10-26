import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarSwitchList from '../SiderBarSwitchList/SiderBarSwitchList'
import SiderBarSwitchTitle from '../SiderBarSwitchTitle/SiderBarSwitchTitle'

import { artNewTimeApi,artWeightApi,randomArticleApi } from 'api/Category/category'

import './SiderBarSwitchCollection.less'
import './MSiderBarSwitchCollection.less'

class SiderBarSwitchCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.switchChangeFn = this.switchChangeFn.bind(this)
		this.apicallback = this.apicallback.bind(this)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.initData(1)
	}

	componentWillUnmount() {
		this.setState = (state,callback)=>{
		  return
		}
	 }

	initData(typeId) {
		const quantity = 10
		switch(typeId) {
			case 1:
				artNewTimeApi(this.apicallback, quantity)
				break
			case 2:
				artWeightApi(this.apicallback, quantity)
				break;
			case 3:
				randomArticleApi(this.apicallback, quantity)
				break
			default:
				artNewTimeApi(this.apicallback, quantity)
				break
		}
	}

	apicallback(res) {
		if (res.data.code == 200) {
			this.setState({
				data: res.data.result
			})
		}
	}

	switchChangeFn(id, e) {
	  this.initData(id)
	}

	render() {
		return (
         	<div id="SiderBarSwitchCollection" className="SiderBarSwitchCollection">
                <SiderBarSwitchTitle switchChangeFn={this.switchChangeFn}/>
				{
					this.state.data.length&&
					(<SiderBarSwitchList data={this.state.data}/>)
				}
         	</div>
        )
	}
}

export default SiderBarSwitchCollection
