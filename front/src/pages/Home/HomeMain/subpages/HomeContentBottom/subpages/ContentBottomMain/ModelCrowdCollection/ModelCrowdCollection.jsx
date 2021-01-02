import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumTitle from 'base/general/ModelMediumTitle/ModelMediumTitle'
import ModelCrowdList from '../ModelCrowdList/ModelCrowdList'

import { nodeCategoryApi } from 'api/Category/category'

import './ModelCrowdCollection.less'
import './MModelCrowdCollection.less'

class ModelCrowdCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			data: [],
			category: {}
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
		nodeCategoryApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					category: res.data.result.category,
					data: res.data.result.articaleList
				})
			}
		})
	}

	render() {
		return (
         	<div className="ModelCrowdCollection">
         		{
         			this.state.data.length>0&&
         			(
         			<React.Fragment>
         				<ModelMediumTitle category={this.state.category}/>
		         		<div className="ModelCrowdWarrper">
			         		<ModelCrowdList data={this.state.data}/>
		         		</div>
		         	</React.Fragment>
	         		)
         		}
         	</div>
        )
	}
}

export default ModelCrowdCollection

