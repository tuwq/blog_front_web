import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './ModelMediumItem.less'
import './MModelMediumItem.less'

class ModelMediumItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelMediumItem">
         		<div className="image">
         			<Link to={'/article/'+this.props.item.id}><img width="140" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></Link>
         		</div>
         		<div className="description">
         			<Link to={'/article/'+this.props.item.id} className="section-title">
         				记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的记录23杰拉德离开23了静安寺的
         			</Link>
         			<div className="section-content">
         				123似的经历23123啊大苏打2312312312aj内容垃圾啊类似的经历23123啊大苏打2312312312aj内容垃圾啊类似的经历23123啊大苏打2312312312aj内容垃圾啊类似的经历23123啊大苏打2312312312ajsd
         			</div>
         		</div>
         	</div>
        )
	}
}

export default withRouter(ModelMediumItem)

