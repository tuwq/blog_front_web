import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CommentEditor from 'base/general/CommentEditor/CommentEditor'
import CommentList from '../CommentList/CommentList'
import Pagination from 'base/general/Pagination/Pagination'

import { pageCommentAllApi } from 'api/Comment/comment'

import './CommentCollection.less'
import './MCommentCollection.less'

class CommentCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.artCommentPageSize,
			data: [],
			pageModel: {}
		}
	}

	componentDidMount() {
		this.initData(1,this.props.match.params.id)
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	initData(currentPage,nowId) {
		pageCommentAllApi(currentPage,this.state.pageSize,nowId,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.data,
					pageModel: res.data.pageModel
				})
			}
		})
	}

	loadPage(page) {
		this.initData(page,this.props.match.params.id)
	}

	reInit() {
		this.setState({
			currentPage: 1,
			pageModel: {}
		},()=>{
			this.initData(1,this.props.match.params.id)
		})
	}

	render() {
		return (
			<div className="CommentCollection">
				<CommentEditor reInit={this.reInit.bind(this)}/>
				{
					this.state.data.length>0
					?(
					<React.Fragment>
						<CommentList data={this.state.data} pageModel={this.state.pageModel}/>
						<Pagination pageModel={this.state.pageModel} loadPageFn={this.loadPage.bind(this)}/>
					</React.Fragment>
					):(<div style={{textAlign: 'center',color: '#e74c3c'}}>还没有人评论呢</div>)
				}
        	</div>
        )
	}
}

export default withRouter(CommentCollection)


