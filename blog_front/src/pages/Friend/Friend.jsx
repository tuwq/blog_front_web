import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import FriendList from './subpages/FriendList/FriendList'
import FriendTitle from './subpages/FriendTitle/FriendTitle'

import { getFriendsApi } from 'api/Friend/friend'

import './Friend.less'
import './MFriend.less'

class Friend extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			data: []
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
		getFriendsApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}



	render() {
		return (
			<div className="Friend">
				<DocumentTitle title="友链">
					<div className="Friend-Wrapper">
						<div className="Friend-Inner">
							<FriendTitle />
							{
								this.state.data.length>0&&
								(<FriendList data={this.state.data}/>)
							}		
						</div>
					</div>
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(Friend)


