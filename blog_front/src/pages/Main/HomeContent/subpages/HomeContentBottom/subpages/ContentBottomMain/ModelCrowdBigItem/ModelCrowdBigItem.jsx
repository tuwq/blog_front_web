import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import clockSvg from 'static/svg/clock.svg'
import eyeSvg from 'static/svg/eye.svg'
import commentSvg from 'static/svg/comment.svg'

import './ModelCrowdBigItem.less'
import './MModelCrowdBigItem.less'

class ModelCrowdBigItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelCrowdBigItem">
         		<div className="image">
         			<a><img width="" height="" alt="" src="https://ikmoe.com/wp-content/uploads/wp-img/uploads/2017/11/ikmoe_2017-11-08_14-58-18.png?imageView2/1/w/375/h/250/q/100"/></a>
         		</div>
               <div className="description">
                  <div className="title">
                     <h3><a>软件_心之印画每个人都可以用它做动画</a></h3>
                  </div>
                  <div className="meta">
                     <span><i><img width="" height="" alt="" src={clockSvg}/></i>2018-7-13</span>
                     <span><i><img width="" height="" alt="" src={eyeSvg}/></i>67499阅读</span>
                     <span><i><img width="" height="" alt="" src={commentSvg}/></i>8(评论)</span>
                  </div>
                  <div className="content">
                     <p>介绍 好久没有推荐过软件了，今天月宅要给大家带来的是一款软件是可以让任何人都可以制作属于自己的动画软件。 演示地址 哔哩哔哩官方投稿：https://www.bilibili.com/video</p>
                  </div>                  
               </div>
         	</div>
        )
	}
}

export default ModelCrowdBigItem

