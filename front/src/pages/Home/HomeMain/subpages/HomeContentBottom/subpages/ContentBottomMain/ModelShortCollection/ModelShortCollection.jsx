import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelShortList from '../ModelShortList/ModelShortList'

import { findListByArticleAndQuantityApi } from 'api/Category/category'

import './ModelShortCollection.less'
import './ModelShortCollection.less'

class ModelShortCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			shortCodeList: [],
			chatList: [],
			shortCodeCategory: {},
			chatCategory: {}
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
		findListByArticleAndQuantityApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					shortCodeList: res.data.result.articaleList,
					shortCodeCategory: res.data.result.category
				})
			}
		}, global.codedemoCategoryId, codedemoCategoryQuantity)
		findListByArticleAndQuantityApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					chatList: res.data.result.articaleList,
					chatCategory: res.data.result.category
				})
			}
		}, global.chatCategoryId, global.chatCategoryQuantity)
	}

	render() {
		let shortList = null
		if (this.state.shortCodeList.length>0 && this.state.chatList.length>0) {
			shortList = (<ModelShortList 
							shortCodeList={this.state.shortCodeList} 
							chatList={this.state.chatList}
							shortCodeCategory={this.state.shortCodeCategory}
							chatCategory={this.state.chatCategory}/>)
		}

		return (
         	<div className="ModelShortCollection">
         		{shortList}	
         	</div>
        )
	}
}

export default ModelShortCollection

