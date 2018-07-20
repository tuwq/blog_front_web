import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import rightSvg from 'static/svg/right.svg'
import pointSvg from 'static/svg/point.svg'

import './ModelShortItem.less'
import './MModelShortItem.less'

class ModelShortItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelShortItem">
         		<h2 className="ModelShortItemTitle">
	     			<span>短代码</span>
	     			<a>更多<i><img width="12" height="12" alt="" src={rightSvg} /></i></a>
	     		</h2>
	     		<div className="ModelShortItemLinkList">
	     			<div className="LinkItem">
	     				<h3><i><img width="5" height="5" alt="" src={pointSvg}/></i>
	     					<a>[短代码]禁止纯英文与日语评论，防垃圾</a>
	     				</h3>
	     			</div>
	     			<div className="LinkItem">
	     				<h3><i><img width="5" height="5" alt="" src={pointSvg}/></i>
	     					<a>[短代码]禁止纯英文与日语评论，防垃圾</a>
	     				</h3>
	     			</div>
	     			<div className="LinkItem">
	     				<h3><i><img width="5" height="5" alt="" src={pointSvg}/></i>
	     					<a>[短代码]禁止纯英文与日语评论，防垃圾</a>
	     				</h3>
	     			</div>
	     			<div className="LinkItem">
	     				<h3><i><img width="5" height="5" alt="" src={pointSvg}/></i>
	     					<a>[短代码]禁止纯英文与日语评论，防垃圾</a>
	     				</h3>
	     			</div>
	     		</div>
         	</div>
        )
	}
}

export default ModelShortItem

