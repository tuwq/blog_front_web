import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { withRouter } from 'react-router-dom'

import './ChildCommentListModal.less'
import './MChildCommentListModal.less'

import { pageChildCommentApi,childCommentApi } from 'api/Comment/comment'
import { checkCommentForm } from 'base/js/check'

import CommentItem from '@/pages/Article/subpages/CommentItem/CommentItem'
import CommentEditor from 'base/general/CommentEditor/CommentEditor'
import Pagination from 'base/general/Pagination/Pagination'

class ChildCommentListModal extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.childCommentSubscribe = this.childCommentSubscribe.bind(this)
		this.initData = this.initData.bind(this)
		this.reInit = this.reInit.bind(this)
		PubSub.subscribe(global.childCommentSubscribe,this.childCommentSubscribe)
		this.state = {
			modalDisplay: false,
			rootItem: {},
			replyComment: {},
			currentPage: 1,
			pageSize: global.childCommentPageSize ,
			data: [],
			pageModel: {},
			replyUser: {}
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		PubSub.unsubscribe(this.childCommentSubscribe);
		this.closeModal()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id != nextProps.match.params.id) {
			this.closeModal()
		}
	}

	childCommentSubscribe(msg,rootItem) {
		console.log(rootItem)
		this.setState({
			rootItem: rootItem,
			modalDisplay: true,
			replyComment: rootItem
		},()=>{
			this.initData(1,rootItem.id)
		})
	}

	initData(currentPage,rootId) {
		pageChildCommentApi(currentPage,this.state.pageSize,rootId,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.data,
					pageModel: res.data.pageModel
				})
			}
		})
	}

	loadPage(page) {
		this.initData(page,this.state.rootItem.id)
	}

	replyFn(item) {
		this.setState({
			replyComment: item
		})
	}

	commentFn(content,call) {
		let nowArticleId = this.props.match.params.id
		let flag = checkCommentForm(content)
		if (flag == true) {
			let rootId = this.state.rootItem.id
			let parentId = this.state.replyComment.id
			childCommentApi(nowArticleId,content,parentId,rootId,(res)=>{
				if (res.data.code == 200) {
					call(true)
					this.reInit()
				} else if(res.data.code == RESULT_CODE.COMMENT_REPLY_MYSELF) {
					call(res.data.msg)
				}
			})
		} else {
			call(flag)
		}
	}

	reInit() {
		this.setState({
			currentPage: 1,
			pageModel: {}
		},()=>{
			this.initData(1,this.state.rootItem.id)
		})
	}

	closeModal() {
		this.setState({
			modalDisplay: false,
			currentPage: 1,
			pageSize: global.artCommentPageSize,
			data: [],
			pageModel: {}
		})
	}

	render() {
		return (
			<React.Fragment>
				{
					this.state.modalDisplay && (
						<div className="ChildCommentListModal">
							<div className="ModelBack" onClick={this.closeModal}></div>
							<div className="ModalFull">
								<div className="ModelInner">
									<button className="close" onClick={this.closeModal}>x</button>
									<div className="rootComment">
										<CommentItem replyFn={this.replyFn.bind(this)} item={this.state.rootItem}/>
									</div>
									{
										this.state.data.length>0
										?(<React.Fragment>
											<div className="ChildCommentList">
												{
													this.state.data.map((item,index)=>{
														return (<CommentItem replyFn={this.replyFn.bind(this)} key={index} item={item} index={index}/>)
													})
												}	
											</div>
											<Pagination pageModel={this.state.pageModel} loadPageFn={this.loadPage.bind(this)}/>
										</React.Fragment>)
										:(<div style={{textAlign: 'center',color: '#e74c3c'}}>还没有人回复</div>)
									}
									<div style={{fontSize: '18px',color: '#7266ba'}}>回复{this.state.replyComment.user.nickname}</div>
									<CommentEditor commentFn={this.commentFn.bind(this)}/>
								</div>
							</div>
						</div>
					)
	        	}
        	</React.Fragment>
        )
	}
}

export default withRouter(ChildCommentListModal)

