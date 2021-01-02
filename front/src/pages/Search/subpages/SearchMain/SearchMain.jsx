import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import queryString from 'query-string'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { pageSearchByKeyWordApi,pageArticleAllApi} from 'api/Search/search'

import SearchTitle from '../SearchTitle/SearchTitle'
import SearchCollection from '../SearchCollection/SearchCollection'
import LoadMore from 'base/general/LoadMore/LoadMore'

import './SearchMain.less'
import './MSearchMain.less'

class SearchMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.searchByKeyWord = this.searchByKeyWord.bind(this)
		this.searchData = this.searchData.bind(this)
		this.allData = this.allData.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.categroyPageSize,
			data: [],
			pageModel: {},
			pend: false,
			keyword: '',
			isSearch: false,
			noResult: false
		}
	}

	componentDidMount() {
		let query = queryString.parse(this.props.location.search)
		this.setState({
			keyword: query.keyword
		})
		this.searchByKeyWord(query.keyword)
	}

	componentWillUnmount() {
	    // 防止异步调用数据
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	componentWillReceiveProps(nextProps) {
		let query = queryString.parse(this.props.location.search)
		let newquery = queryString.parse(nextProps.location.search)
		if (query.keyword != newquery.keyword ) {
			this.setState({
				keyword: newquery.keyword,
				currentPage: 1,
				pageSize: global.categroyPageSize,
				data: [],
				pageModel: {},
				pend: false,
				isSearch: false,
				noResult: false
			},()=>{
				this.searchByKeyWord(newquery.keyword)
			})		
		}
	}

	searchByKeyWord(keyword) {
		if (keyword == undefined || keyword.trim() == '') {
			this.setState({
				isSearch: false
			})
			this.allData(1)
		} else {
			this.setState({
				isSearch: true
			})
			this.searchData(1,keyword)
		}
	}

	searchData(currentPage,keyword) {
		this.setState({
			pend: true
		})
		pageSearchByKeyWordApi(currentPage,this.state.pageSize,keyword,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: this.state.data.concat(res.data.data),
					pageModel: res.data.pageModel,
					pend: false,
					currentPage: this.state.currentPage+1
				})
			} else if(res.data.code == RESULT_CODE.SEARCH_KEYWORD_NOT_RESULT) {
				this.setState({
					noResult: true,
					pageModel: {total: 0}
				})
			}
		})
	}


	allData(currentPage) {
		this.setState({
			pend: true
		})
		pageArticleAllApi(currentPage,this.state.pageSize,(res)=>{
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
		if (this.state.isSearch) {
			let query = queryString.parse(this.props.location.search)
			this.searchData(this.state.currentPage,query.keyword)
		} else {
			this.allData(this.state.currentPage)
		}
	}

	render() {
		let imgStyle = {
		  backgroundImage: 'url(' + this.props.imgConfig.searchImg + ')',
		};
		return (
			<div className="SearchMain">
			  	<div className="Content-Wrapper" style={imgStyle}>
			  		<div className="content">
			  			{
			  				this.state.data.length>0
			  				?(<React.Fragment>
					  			<SearchTitle keyword={this.state.keyword} noResult={this.state.noResult} pageModel={this.state.pageModel}/>
					  			<SearchCollection data={this.state.data}/>	
						  	 </React.Fragment>)
				  	 		:(<SearchTitle keyword={this.state.keyword} noResult={this.state.noResult} pageModel={this.state.pageModel}/>)
			  			}
			  			{
				  	 		this.state.pageModel.currentTotal
				  	 		?(<LoadMore pend={this.state.pend} loadMoreFn={this.loadMoreData.bind(this)}/>)
				  	 		:(<div style={{textAlign: 'center',color: '#fff'}}>没有更多</div>)
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
	connect(mapStateToProps, mapDispatchToProps)(SearchMain)
)


