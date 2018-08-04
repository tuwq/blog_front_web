import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'

import './SiderBarHotItem.less'
import './MSiderBarHotItem.less'

class SiderBarHotItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="SiderBarHotItem">
               <div className="image">
                  <a><img width="200" height="136" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></a>
               </div>
         		<div className="description">
         			<Link to="/article/1" className="hot-title">123jlasjdlajlklj大数据来看23123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312123jlasjdlajlklj大数据来看23口类23就来3了好412312口类23就来3了好41231231</Link>
         			<div className="hot-meta">
         				<span><i><img width="13" height="13" alt="" src={eyeSvg} /></i>{this.props.item.browseSum}</span>
         				<span><i><img width="13" height="13" alt="" src={clockSvg} /></i>{this.props.item.createTimeString}</span>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default withRouter(SiderBarHotItem)

