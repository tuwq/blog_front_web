import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { getInitiateApi } from 'api/Dynamic/dynamic'
import { isNumber } from 'base/js/check'

import DynamicInitiateItem from '../DynamicInitiateItem/DynamicInitiateItem'
import LoadMore from 'base/general/LoadMore/LoadMore'

import './DynamicInitiateList.less'
import './MDynamicInitiateList.less'

class DynamicInitiateList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.dynamicInitiatePageSize,
			data: [],
			pageModel: {},
			pend: false
		}
	}

	componentDidMount() {
		if (!isNumber(this.props.match.params.id)) {
			return
		}
		this.initData(1,this.props.match.params.id);
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	initData(currentPage,userId) {
		this.setState({
			pend: true
		})
		getInitiateApi(currentPage,this.state.pageSize,userId,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: this.state.data.concat(res.data.data),
					pageModel: res.data.pageModel,
					pend: false,
					currentPage: this.state.currentPage+1
				})
			}
		})
	}

	loadMoreData() {
		if (!isNumber(this.props.match.params.id)) {
			return
		}
		this.initData(this.state.currentPage,this.props.match.params.id)
	}

	render() {

		return (
			<div className="DynamicInitiateList">
				<div className="wrap">
				  {
				  	this.state.data.length>0
				  	?(<div className="dynamicInitiate-list">
				  		{
				  			this.state.data.map((item,index)=>{
				  				return (<DynamicInitiateItem key={index} item={item} index={index}/>)
				  			})
				  		}
				  	  </div>)
				  	:(<div className="noMessage"></div>)
				  }
				  {
				  	this.state.pageModel.currentTotal
		  	 		?(<LoadMore pend={this.state.pend} loadMoreFn={this.loadMoreData.bind(this)}/>)
		  	 		:(<div style={{textAlign: 'center',color: '#fff'}}></div>)
				  }
			  	</div>
        	</div>
        )
	}
}

export default withRouter(DynamicInitiateList)
/*

*/

