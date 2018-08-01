import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import './InformationCard.less'
import './MInformationCard.less'

class InformationCard extends React.Component {

        constructor(props,context) {
            super(props,context)
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
                
        }

        componentDidMount() {
            
        }

        componentwillreceiveprops(nextProps) {
            
        }

        render() {
            return (
                <div className="InformationCard">
                    <div className="container">
                        <div className="avatar-wrap">
                            <img alt="" src={global.userAvatarPrefix+this.props.showInfo.userDto.avatar}/>
                        </div>
                        <h2>{this.props.showInfo.userDto.nickname}<a><i></i></a></h2>
                        <p className="bio">{this.props.showInfo.userDto.desc}</p>
                    </div>
                </div>
            )
        }
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        showInfo: state.showInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InformationCard)
)


