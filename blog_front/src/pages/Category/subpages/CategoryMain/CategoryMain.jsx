import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CategoryTitle from '../CategoryTitle/CategoryTitle'
import CategoryCollection from '../CategoryCollection/CategoryCollection'
import LoadMore from 'base/general/LoadMore/LoadMore'

import { categoryPageApi } from 'api/Category/category'

import './CategoryMain.less'
import './MCategoryMain.less'

class CategoryMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.pageData = this.pageData.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.categroyPageSize,
			data: [],
			pageModel: {},
			category: {},
			pend: false,
		}
	}

	componentDidMount() {
		this.pageData(1,this.props.match.params.id)
	}

	componentWillUnmount() {
	    // 防止异步调用数据
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id != this.props.match.params.id) {
			this.setState({
				currentPage: 1,
				pageSize: global.categroyPageSize,
				data: [],
				pageModel: {},
				category: {},
				pend: false,
			},()=>{
				this.pageData(1,nextProps.match.params.id)
			})
		}
	}

	pageData(currentPage,nowId) {
		this.setState({
			pend: true
		})
		categoryPageApi(currentPage,this.state.pageSize,nowId,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: this.state.data.concat(res.data.data),
					pageModel: res.data.pageModel,
					category: res.data.category,
					pend: false,
					currentPage: this.state.currentPage+1
				})
			}
		})
	}

	loadMoreData() {
		this.pageData(this.state.currentPage,this.props.match.params.id)
	}

	render() {
		return (
			<div className="CategoryMain">
			  	<div className="Content-Wrapper">
			  		<div className="content">
			  	 	{
			  	 		this.state.data.length>0
			  	 		?(<React.Fragment>
				  			<CategoryTitle category={this.state.category} pageModel={this.state.pageModel}/>
				  			<CategoryCollection data={this.state.data}/>	
					  	</React.Fragment>)
			  	 		:(<div style={{textAlign: 'center',color: '#fff'}}>加载中</div>)
			  	 	}	
			  	 	{
			  	 		this.state.pageModel.currentTotal
			  	 		?(<LoadMore pend={this.state.pend} loadMoreFn={this.loadMoreData.bind(this)}/>)
			  	 		:(<div style={{textAlign: 'center',color: '#fff'}}></div>)
			  	 	}
			  	 	</div>
			  	</div>
        	</div>
        )
	}
}

export default withRouter(CategoryMain)


