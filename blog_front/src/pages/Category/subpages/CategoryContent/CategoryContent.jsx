import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CategoryTitle from '../CategoryTitle/CategoryTitle'
import CategoryCollection from '../CategoryCollection/CategoryCollection'
import LoadMore from 'base/general/LoadMore/LoadMore'

import { categoryPageByIdApi } from 'api/Category/category'
import { isNumber } from 'base/js/check'

import './CategoryContent.less'
import './MCategoryContent.less'

class CategoryContent extends React.Component {

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
		if(!isNumber(this.props.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		this.pageData(1,this.props.match.params.id)
	}

	componentWillUnmount() {
	    // 防止异步调用数据
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	componentWillReceiveProps(nextProps) {
		if(!isNumber(nextProps.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
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
		categoryPageByIdApi(currentPage,this.state.pageSize,nowId,(res)=>{
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
		if(!isNumber(this.props.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		this.pageData(this.state.currentPage,this.props.match.params.id)
	}

	render() {
		let imgStyle = {
		  backgroundImage: 'url(' + this.props.imgConfig.categoryImg + ')',
		};
		return (
			<div className="CategoryContent">
			  	<div className="Content-Wrapper" style={imgStyle}>
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

function mapStateToProps(state) {
    return {
        imgConfig: state.imgConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CategoryContent)
)


