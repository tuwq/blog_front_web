import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atelier-cave-light.css'

import { _saveStorage,_loadStorage } from 'base/js/localCache'
import { artPraiseIncrApi } from 'api/Praise/praise'
import { isNumber } from 'base/js/check'

import './ArticleContent.less'
import './MArticleContent.less'

class ArticleContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)	
		this.$content = React.createRef()
		this.praise = this.praise.bind(this)	
		this.mountend = this.mountend.bind(this)
		this.state = {
			praiseSum: 0
		}
	}

	componentDidMount() {
		this.praise()
		hljs.initHighlightingOnLoad()
		this.mountend()
	}

	componentWillUnmount() {
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	mountend() {
		$(this.$content.current).html(marked(this.props.data.content))  
        $(this.$content.current).find('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
	}

	praise() {
		this.setState({
			praiseSum: this.props.data.praise
		})
	}

	praiseIncr() {
		if (!isNumber(this.props.data.id)) {
			return
		}
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
						<div className="content" ref={this.$content}>
							{this.props.data.content}						
						</div>
						<div className="content-footer">
							<div className="date"><i></i>
							<span>最后修改: {this.props.data.updateTimeString}&nbsp;{this.props.data.timeAgo}</span></div>
							<div className="statement"><span>© 著作权归作者所有,如需转载请注明出处</span></div>
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


