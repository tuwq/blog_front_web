import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumTitle from 'base/general/ModelMediumTitle/ModelMediumTitle'
import ModelCrowdList from '../ModelCrowdList/ModelCrowdList'

import { tutorialCategoryApi } from 'api/Category/category'

import './ModelCrowdCollection.less'
import './MModelCrowdCollection.less'

class ModelCrowdCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			tutorialList: [],
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
		tutorialCategoryApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					category: res.data.result.category,
					tutorialList: res.data.result.articaleList
				})
			}
		})
	}

	render() {
		return (
         	<div className="ModelCrowdCollection">
         		{
         			this.state.tutorialList.length>0&&
         			(
         			<React.Fragment>
         				<ModelMediumTitle category={this.state.category}/>
		         		<div className="ModelCrowdWarrper">
			         		<ModelCrowdList tutorialList={this.state.tutorialList}/>
		         		</div>
		         	</React.Fragment>
	         		)
         		}
         	</div>
        )
	}
}

export default ModelCrowdCollection

