import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as showInfoActions from 'store/actions/showInfo' 

import { followUserApi } from 'api/Follow/follow'

import './FollowItem.less'

class FollowItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.followsChange = this.followsChange.bind(this)
	}

	componentDidMount() {
		
	}

	follow(followId,followAction,e) {
		followUserApi(followId,followAction,(res)=>{
            if (res.data.code == 200) {
                this.props.followChangeFn(this.props.index,followAction)
                this.followsChange(followAction)
            }
        })
	}

	followsChange(followAction) {
		if (this.props.showInfo.identity == 1) {
			if (followAction == 1) {
				this.props.showInfoActions.incrFollow(1)
			} else {
				this.props.showInfoActions.incrFollow(-1)
			}
		}
	}

	mouseenterFn(e) {
       $(e.target).addClass('unfollow')
       $(e.target).text('取消关注')
    }

    mouseLeaveFn(e) {
        $(e.target).removeClass('unfollow')
        $(e.target).text('已关注')
    }

	render() {
		var button = null
		if (this.props.user.id != this.props.data.userDto.id) {
			if (this.props.data.followStatus == 1) {
                button = (<button onClick={this.follow.bind(this,this.props.data.userDto.id,2)} className="followed" onMouseEnter={this.mouseenterFn.bind(this)} onMouseLeave={this.mouseLeaveFn.bind(this)}>已关注</button>)
            } else {
                button = (<button onClick={this.follow.bind(this,this.props.data.userDto.id,1)} className="unfollowed">关注</button>)
            }
		}

		return (
			<div className="follow-group">
			 	<div className="avatar">
			 		<img width="50" height="50" alt="" src={global.userAvatarPrefix+this.props.data.userDto.avatar+'?v='+new Date().getTime()}/>
			 	</div>
			 	<div className="meta">
			 		<h2 className="name"><Link to={'/user/'+this.props.data.userDto.id}>
			 		{this.props.data.userDto.nickname}</Link></h2>
			 		<p className="descrtipion">{this.props.data.userDto.desc}</p>
			 	</div>
			 	<div className="followbutton">
			 		{button}
			 	</div>
		 	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
    	showInfo: state.showInfo,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showInfoActions: bindActionCreators(showInfoActions, dispatch)
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowItem)
)



