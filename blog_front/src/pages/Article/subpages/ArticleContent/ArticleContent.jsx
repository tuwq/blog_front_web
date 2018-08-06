import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { _saveStorage,_loadStorage } from 'base/js/cache'
import { artPraiseIncrApi } from 'api/Praise/praise'

import './ArticleContent.less'
import './MArticleContent.less'

class ArticleContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)	
		this.praise = this.praise.bind(this)	
		this.state = {
			praiseSum: 0
		}
	}

	componentDidMount() {
		this.praise()
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	praise() {
		this.setState({
			praiseSum: this.props.data.praise
		})
	}

	praiseIncr() {
		let articleId = this.props.data.id
		if (_loadStorage(global.artPraiseKey+articleId)) {
			return
		}
		artPraiseIncrApi(articleId,(res)=>{
			if (res.data.code == 200) {
				_saveStorage(global.artPraiseKey+articleId,global.artPraiseKey+articleId)
				this.setState({
					praiseSum: this.state.praiseSum+1
				})
			}
		})

	}

	render() {
		let imgStyle = {
		  backgroundImage: 'url(' + global.artImgPrefix+this.props.data.faceCover + ')',
		};

		return (
			<div className="ArticleContent">
				<article className="article">
					<div className="thumbnail" style={imgStyle}></div>
					<div className="content-wrapper">
						<div className="content">
							{this.props.data.content}						
						</div>
						<div className="content-footer">
							<div className="date"><i></i>
							<span>最后修改: {this.props.data.updateTimeString}&nbsp;{this.props.data.timeAgo}</span></div>
							<div className="statement"><span>© 著作权归作者所有</span></div>
						</div>
					</div>
					<div  className="support">
						<button onClick={this.praiseIncr.bind(this)}>
							赞<i>&nbsp;</i>{this.state.praiseSum}
						</button>
						<p>如果觉得我的文章对你有用，请随意赞赏</p>
					</div>
				</article>
        	</div>
        )
	}
}

export default withRouter(ArticleContent)

/*
<h2>前言</h2>
<p>最近实在不知道该写些啥了，由于主题的自带表情还是较为缺少，于是我自己添加了一些表情，所以在此分享一下表情添加方法，</p>
<h2>部分标签预览</h2>
<a><img alt="" src="http://pcij2jrr4.bkt.clouddn.com/upload/tempartimg.png"/></a>
<p>1.尽管表情包我已经全部压缩，但是加起来仍然超过5MB，所以推荐将表情托管至CDN（大带宽土豪忽略2333
<br/>2.当时为了方便添加，大部分表情未进行命名，全部以数字递增，强迫症患者可自行修改（修改好的大佬可以发一份给我，万分感谢！！
<br/>3.由于表情较多，需要修改部分主题CSS文件，下面我会写出来，加入到主题后台自定义CSS设置即可</p>
*/


