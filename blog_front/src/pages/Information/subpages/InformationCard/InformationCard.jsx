import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as showInfoActions from 'store/actions/showInfo' 

import { followUserApi } from 'api/Follow/follow'

import './InformationCard.less'
import './MInformationCard.less'

class InformationCard extends React.Component {

        constructor(props,context) {
            super(props,context)
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);  
            this.fansChange = this.fansChange.bind(this)        
        }

        componentDidMount() {
            
        }

        componentWillUnmount() {
           this.setState = (state,callback)=>{
             return
           }
        }

        componentWillReceiveProps(nextProps) {
            
        }

        follow(followId,followAction,e) {
            followUserApi(followId,followAction,(res)=>{
                if (res.data.code == 200) {
                    this.props.showInfoActions.save({
                        followStatus: followAction
                    })
                    this.fansChange(followAction) 
                }
            })
        }

        fansChange(followAction) {
            if (followAction == 1) {
                this.props.showInfoActions.incrFans(1)
            } else {
                this.props.showInfoActions.incrFans(-1)
            } 
            PubSub.publish(global.fansListrefreshSubscribe,true);
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
            if (this.props.showInfo.identity == 2) {
                if (this.props.showInfo.followStatus == 1) {
                    button = (<button onClick={this.follow.bind(this,this.props.showInfo.userDto.id,2)} className="followed" onMouseEnter={this.mouseenterFn.bind(this)} onMouseLeave={this.mouseLeaveFn.bind(this)}>已关注</button>)
                } else {
                    button = (<button onClick={this.follow.bind(this,this.props.showInfo.userDto.id,1)} className="unfollowed">关注</button>)
                }
            }
            let imgStyle = {
              backgroundImage: 'url(' + this.props.imgConfig.userImg + ')',
            };
            return (
                <div className="InformationCard" style={imgStyle}>
                    <div className="container">
                        <div className="avatar-wrap">
                            <img alt="" src={global.userAvatarPrefix+this.props.showInfo.userDto.avatar+'?v='+new Date().getTime()}/>
                        </div>
                        <h2>{this.props.showInfo.userDto.nickname}<a><i></i></a></h2>
                        <p className="bio">{this.props.showInfo.userDto.desc}</p>
                        { button }
                    </div>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        showInfo: state.showInfo,
        imgConfig: state.imgConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showInfoActions: bindActionCreators(showInfoActions, dispatch)
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InformationCard)
)


