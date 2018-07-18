import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as searchActions from 'store/actions/search' 


import './SearchModal.less'
import './MSearchModal.less'

class SearchModal extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.listenRedux = this.listenRedux.bind(this)
		this.updateSearchModal = this.updateSearchModal.bind(this)
		this.store = this.context.store
		this.store.subscribe(this.listenRedux)
		this.state = {
			searchModalStatus: false,
			value: ''
		}
	}

	componentDidMount() {

	}
	
	componentWillUnmount() {
		this.updateSearchModal()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	listenRedux() {
		let reduxState = this.store.getState()
		this.setState({
			searchModalStatus: reduxState.search.searchModal
		},()=>{})
	}

	updateSearchModal() {
		this.props.searchActions.update(false)
		this.setState({
			value: ''
		})
	}

	handleChange(e) {
		// 受控
		this.setState({
			value: e.target.value.toLowerCase()
		})
	}

	keypress(e) {
		// 回车搜索
		if (e.which === 13) {
			console.log(e.which)
		}
	}

	render() {
		return (
			<React.Fragment>
			   {
			   this.state.searchModalStatus && (
			   <div id="SearchModal" className="SearchModal">
	           <div className="ModelBack" onClick={this.updateSearchModal}></div>
	           <div className="ModalFull">
	           	  <div className="ModelInner">
	           	  		<div className="searchForm">
	           	  			<div className="input">
	           	  				<input type="text" placeholder="输入关键字" value={this.state.value} onChange={this.handleChange.bind(this)} onKeyPress={this.keypress.bind(this)}/>
	           	  			</div>
	           	  			<div className="resultList"></div>
	           	  		</div>
	           	  </div>
	           </div> </div>)
			   }
        	</React.Fragment>
        )
	}
}


SearchModal.contextTypes = {
  store: PropTypes.object
}
function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        search: state.search
    }
}
function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(searchActions, dispatch)
    }
}
export default withRouter(
     // 将reducer和action关联
     connect(mapStateToProps, mapDispatchToProps)(SearchModal)
)