import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from 'store/actions/comment' 

import './ChildCommentListModal.less'
import './MChildCommentListModal.less'

import CommentItem from '@/pages/Article/subpages/CommentItem/CommentItem'
import CommentEditor from 'base/general/CommentEditor/CommentEditor'
import Pagination from 'base/general/Pagination/Pagination'

class ChildCommentListModal extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.close = this.close.bind(this)
		this.listenRedux = this.listenRedux.bind(this)
		this.store = this.context.store
		this.store.subscribe(this.listenRedux)
		this.state = {
			commentModalStatus: false
		}
	}

	componentDidMount() {
		
	}


	componentWillUnmount() {
		this.close()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	listenRedux() {
		let reduxState = this.store.getState()
		this.setState({
			commentModalStatus: reduxState.comment.modalStatus
		},()=>{})
	}

	close() {
		this.props.commentActions.load({
			modalStatus: false
		})
	}

	render() {
		return (
			<React.Fragment>
				{
					this.state.commentModalStatus && (
						<div className="ChildCommentListModal">
							<div className="ModelBack" onClick={this.close}></div>
							<div className="ModalFull">
								<div className="ModelInner">
									<button className="close" onClick={this.close}>x</button>
									<div className="rootComment">
										<CommentItem isModal={true}/>
									</div>
									<div className="ChildCommentList">
										<CommentItem isModal={true}/>
										<CommentItem isModal={true}/>
										<CommentItem isModal={true}/>
										<CommentItem isModal={true}/>
									</div>
									<Pagination />
									<CommentEditor />
								</div>
							</div>
						</div>
					)
	        	}
        	</React.Fragment>
        )
	}
}


ChildCommentListModal.contextTypes = {
  store: PropTypes.object
}
function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        comment: state.comment
    }
}
function mapDispatchToProps(dispatch) {
    return {
        commentActions: bindActionCreators(commentActions, dispatch)
    }
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ChildCommentListModal)
)


