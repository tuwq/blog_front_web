import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './ArticleContent.less'
import './MArticleContent.less'

class ArticleContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)		
	}

	componentDidMount() {
		
	}

	render() {

		return (
			<div className="ArticleContent">
				<article className="article">
					<div className="thumbnail"></div>
					<div className="content-wrapper">
						<div className="content">
							<h2>前言</h2>
							<p>最近实在不知道该写些啥了，由于主题的自带表情还是较为缺少，于是我自己添加了一些表情，所以在此分享一下表情添加方法，</p>
							<h2>部分标签预览</h2>
							<a><img alt="" src="https://mikuac.com/usr/uploads/2018/06/2474281428.png"/></a>
							<p>1.尽管表情包我已经全部压缩，但是加起来仍然超过5MB，所以推荐将表情托管至CDN（大带宽土豪忽略2333
							<br/>2.当时为了方便添加，大部分表情未进行命名，全部以数字递增，强迫症患者可自行修改（修改好的大佬可以发一份给我，万分感谢！！
							<br/>3.由于表情较多，需要修改部分主题CSS文件，下面我会写出来，加入到主题后台自定义CSS设置即可</p>
							
						</div>
						<div className="content-footer">
							<div className="date"><i></i>
							<span>最后修改: 2018年6月20日07:06PM</span></div>
							<div className="statement"><span>© 著作权归作者所有</span></div>
						</div>
					</div>
					<div  className="support">
						<button>
							<i></i>赞赏支持
						</button>
						<p>如果觉得我的文章对你有用，请随意赞赏</p>
					</div>
				</article>
        	</div>
        )
	}
}

export default withRouter(ArticleContent)


