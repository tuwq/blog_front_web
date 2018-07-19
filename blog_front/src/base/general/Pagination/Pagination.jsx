import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './Pagination.less'
import './MPagination.less'

class Pagination extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="Pagination">
			 	<ul className="pages">
			 		<li><a><i><svg fill="#FFF" viewBox="0 0 1024 1024" width="12" height="12"><path d="M684.29 799.276L393.929 513.019 684.29 226.762c37.685-37.153 38.003-97.625 0.707-134.384-37.297-36.758-98.646-36.435-136.331 0.718l-357.43 352.378c-0.155 0.153-0.297 0.314-0.451 0.468-0.084 0.082-0.172 0.157-0.256 0.239-18.357 18.092-27.581 41.929-27.743 65.902-0.004 0.311-0.017 0.623-0.018 0.934 0.001 0.316 0.014 0.632 0.018 0.948 0.165 23.97 9.389 47.803 27.743 65.892 0.083 0.082 0.171 0.157 0.255 0.239 0.154 0.154 0.296 0.315 0.452 0.468l357.43 352.378c37.685 37.153 99.034 37.476 136.331 0.718 37.297-36.758 36.979-97.231-0.707-134.384z"></path></svg></i></a></li>
					<li className="current"><a>1</a></li>
					<li><a>...</a></li>
					<li><a>3</a></li>
					<li><a>4</a></li>
					<li><a>5</a></li>
					<li><a>...</a></li>
					<li><a>9</a></li>
			 		<li><a><i><svg fill="#FFF" viewBox="0 0 1024 1024" width="12" height="12"><path d="M803.758 514.017c-0.001-0.311-0.013-0.622-0.018-0.933-0.162-23.974-9.386-47.811-27.743-65.903-0.084-0.082-0.172-0.157-0.256-0.239-0.154-0.154-0.296-0.315-0.451-0.468L417.861 94.096c-37.685-37.153-99.034-37.476-136.331-0.718-37.297 36.758-36.979 97.231 0.707 134.384l290.361 286.257-290.362 286.257c-37.685 37.153-38.004 97.625-0.707 134.383 37.297 36.758 98.646 36.435 136.331-0.718l357.43-352.378c0.155-0.153 0.297-0.314 0.451-0.468 0.084-0.082 0.172-0.157 0.256-0.239 18.354-18.089 27.578-41.922 27.743-65.892 0.004-0.315 0.017-0.631 0.018-0.947z"></path></svg></i></a></li>
			 	</ul>
        	</div>
        )
	}
}

export default withRouter(Pagination)

/**
{
				 		// 少于 4 页 1 2 3 4  
				 		// pageSum <= 4
			 		}
			 		<div className="mod">
						<button className="pageButton"></button>
					</div>
					<div className="mod">
						{
					 		// 三种情况 1
							// 1 2 3 4 ... 17
							// currentPage < 4
				 		}
						<div className="p1">
							<button  className="pageButton">
						 	</button>
							<span className="omit">...</span>
							<button  className="pageButton"></button>
						</div>
						{
					 		// 1 ... 3 4 5 ... 17
							// 1.... 13 14 15 ... 17
							// currentPage < 4 and currentPage<=pageSum-3
				 		}
						<div className="p2">
							<button className="pageButton">1</button>
							<span className="omit">...</span>
							<button  className="pageButton"></button>
							<span className="omit">...</span>
						 	<button className="pageButton"></button>
						</div>
						{
					 		// 1 ... 14 15 16 17
				 		}
						<div className="p3">
							<button className="pageButton">1</button>
							<span className="omit">...</span>
							<button className="pageButton"></button>
						</div>	
					</div>

**/


