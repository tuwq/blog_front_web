import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumTitle from 'base/general/ModelMediumTitle/ModelMediumTitle'
import ModelMediumList from '../ModelMediumList/ModelMediumList'
import ModelBigItem from '../ModelBigItem/ModelBigItem'

import { articaleCategoryApi } from 'api/Category/category'

import rightSvg from 'static/svg/right.svg'

import './ModelMediumCollection.less'
import './MModelMediumCollection.less'

class ModelMediumCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			articleBigItem: {},
			category: {},
			articleList: [],
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
		articaleCategoryApi((res)=>{
			if (res.data.code == 200) {
				let category = res.data.result.category
				let result = res.data.result.articaleList
				this.setState({
					category: category,
					articleBigItem: result[0],
					articleList: result.slice(1)
				})
			}
		})
	}

	

	render() {
		return (
         	<div className="ModelMediumCollection">
         		{
         			JSON.stringify(this.state.articleBigItem)!="{}"&&
         			(
         				<React.Fragment>
         					<ModelMediumTitle category={this.state.category}/>
         					<ModelBigItem item={this.state.articleBigItem}/>
         					<ModelMediumList articleList={this.state.articleList}/>
         				</React.Fragment>
     				)
         		}
         	</div>
        )
	}
}

export default ModelMediumCollection

