import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Slider from 'base/general/Slider/Slider'
import WidgetCollection from './subpages/WidgetCollection/WidgetCollection'

import './HomeContentTop.less'
import './MHomeContentTop.less'

class HomeContentTop extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	    // 防止异步调用数据
	    this.setState = (state,callback)=>{
	      return
	    };
	}
	
	render() {
		return (
         	<section id="HomeContentTop" className="HomeContentTop">
         	 	{
         	 		this.props.imgConfig.sliderImgList.length>0
         	 		?(<React.Fragment>
         	 			<Slider data={this.props.imgConfig.sliderImgList}/>
         				<WidgetCollection />
         	 		  </React.Fragment>)
         	 		:(<div></div>)
         	 	}
         	</section>
        )
	}
}

function mapStateToProps(state) {
    return {
        imgConfig: state.imgConfig
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(HomeContentTop)
)

