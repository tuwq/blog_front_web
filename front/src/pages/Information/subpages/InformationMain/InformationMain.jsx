import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as showInfoActions from 'store/actions/showInfo' 

import MeInformation from '../MeInformation/MeInformation'
import OthersInformation from '../OthersInformation/OthersInformation'

import { userInfoApi } from 'api/Informartion/informartion'
import { isNumber } from 'base/js/check'

import './InformationMain.less'
import './MInformationMain.less'

class InformationMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)

	}

	componentDidMount() {
		if(!isNumber(this.props.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		this.initData(this.props.match.params.id);
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	componentWillReceiveProps(nextProps) {
		if(!isNumber(nextProps.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		if (this.props.match.params.id != nextProps.match.params.id) {
			this.initData(nextProps.match.params.id)
		}
	}

	initData(nowId) {
		userInfoApi(nowId,(res)=>{
			if (res.data.code == 200) {
				this.props.showInfoActions
				.save({
					identity: res.data.result.identity,
					userDto: res.data.result.userDto,
					followStatus: res.data.result.followStatus,
					fansSum: res.data.result.fansSum,
					followsSum: res.data.result.followsSum,
					dynamicInitiateSum: res.data.result.dynamicInitiateSum,
					dynamicReceiveSum: res.data.result.dynamicReceiveSum
				})
			}
		})
	}

	render() {
		return (
			<div className="InformationMain">
			  <div className="Information-Warpper">
			     {
			     	this.props.showInfo.identity==1
			     	?(<MeInformation />)
			     	:this.props.showInfo.identity==2
			     	?(<OthersInformation />)
			     	:(<div />)
			     }
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
        showInfoActions: bindActionCreators(showInfoActions, dispatch)
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InformationMain)
)