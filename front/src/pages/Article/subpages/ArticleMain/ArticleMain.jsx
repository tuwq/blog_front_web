import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentTitle from '../ContentTitle/ContentTitle'
import ContentMain from '../ContentMain/ContentMain'

import { articleDetailApi } from 'api/Article/article'
import { isNumber } from 'base/js/check'

import './ArticleMain.less'
import './MArticleMain.less'

class ArticleMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			data: {}
		}
		
	}

	componentDidMount() {
		if(!isNumber(this.props.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		this.initData(this.props.match.params.id)
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	componentWillReceiveProps(nextProps) {
		if(!isNumber(nextProps.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		if (this.props.match.params.id != nextProps.match.params.id) {
				this.setState({
				data: {}
			},()=>{
				this.initData(nextProps.match.params.id)
			})
		}	
	}

	initData(nowId) {
		articleDetailApi(nowId,(res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}

	render() {

		let imgStyle = {
		  backgroundImage: 'url(' + this.props.imgConfig.artImg + ')',
		};

		return (
			<div className="ArticleMain">
				<div className="Content-Wrapper" style={imgStyle}>
					{
						JSON.stringify(this.state.data)!="{}"&&
						(<div className="content">
							<ContentTitle data={this.state.data}/>
							<ContentMain data={this.state.data}/>
						</div>)
					}
				</div>
        	</div>
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
	connect(mapStateToProps, mapDispatchToProps)(ArticleMain)
)



