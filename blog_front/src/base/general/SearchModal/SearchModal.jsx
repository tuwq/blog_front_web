import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

import './SearchModal.less'
import './MSearchModal.less'

class SearchModal extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.searchModalShowSubscribe = this.searchModalShowSubscribe.bind(this)
		PubSub.subscribe(global.searchModalShow,this.searchModalShowSubscribe)
		this.state = {
			searchModalShow: false,
			value: ''
		}
	}

	componentDidMount() {

	}
	
	componentWillUnmount() {
		PubSub.unsubscribe(this.searchModalShowSubscribe);
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	searchModalShowSubscribe() {
		this.setState({
			searchModalShow: true
		})
	}

	closeSearchShow() {
		this.setState({
			searchModalShow: false
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
			
		}
	}

	render() {
		return (
			<React.Fragment>
			   {
			   this.state.searchModalShow && (
			   <div id="SearchModal" className="SearchModal">
	           <div className="ModelBack" onClick={this.closeSearchShow.bind(this)}></div>
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


export default withRouter(SearchModal)