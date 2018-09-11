import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import './ContentTitle.less'
import './MContentTitle.less'

class ContentTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	goCommentList() {
		PubSub.publish(global.artGoCommentListSubscribe,true);
	}

	render() {
		var categoryName = null
		categoryName = this.props.data.categoryList.map((item,index)=>{
			return (<Link key={index} to={'/category/'+item.id}>{item.name}&nbsp;</Link>)
		})
		return (
			<DocumentTitle title={this.props.data.title}>
				<div className="ContentTitle">
					<h1>{this.props.data.title}</h1>
					<ul className="widgets">
						<li><i><svg viewBox="0 0 1024 1024" width="13" height="13"><path fill="" d="M164.655 68.977l0 0 0 0zM866.321 769.149q0 59.804-36.377 94.437t-96.684 34.632l-435.544 0q-60.293 0-96.684-34.632t-36.377-94.437q0-26.414 1.744-51.573t6.977-54.321 13.2-54.069 21.432-48.586 30.892-40.367 42.614-26.665 55.563-9.963q4.479 0 20.931 10.717t37.131 23.916 53.819 23.916 66.531 10.717 66.531-10.717 53.819-23.916 37.131-23.916 20.931-10.717q30.405 0 55.563 9.963t42.614 26.665 30.893 40.367 21.432 48.586 13.2 54.069 6.977 54.321 1.744 51.573zM706.846 324.131q0 79.242-56.065 135.292t-135.293 56.065-135.293-56.065-56.065-135.292 56.065-135.293 135.293-56.065 135.293 56.065 56.065 135.293z"></path></svg></i>
						<Link to={'/user/'+this.props.data.user.id}>{this.props.data.user.nickname}</Link></li>
						<li><i><svg viewBox="0 0 1024 1024" width="13" height="13"><path fill="" d="M507.773234 566.661947c-18.053168 0-32.661887-14.638395-32.661887-32.661887 0-18.052145 14.608719-32.659841 32.661887-32.659841 60.217477 0 120.43393 0 180.590008 0 18.052145 0 32.661887 14.607696 32.661887 32.659841 0 18.023492-14.609743 32.661887-32.661887 32.661887C628.207164 566.661947 567.99071 566.661947 507.773234 566.661947zM477.12112 376.50198c0-18.018376 14.640442-32.660864 32.692586-32.660864 17.987676 0 32.659841 14.642488 32.659841 32.660864L542.473547 533.237697c0 18.052145-14.672164 32.659841-32.659841 32.659841-18.052145 0-32.692586-15.117302-32.692586-33.171494L477.12112 376.50198zM509.813706 109.413945c117.120464 0 223.266993 47.555086 300.06817 124.360356l0.127913 0c76.806293 76.801177 124.32761 182.981475 124.32761 300.225759 0 117.121488-47.521317 223.268016-124.32761 300.069193l-0.127913 0.127913c-76.8022 76.806293-182.947705 124.391055-300.06817 124.391055-117.246331 0-223.423559-47.52234-300.260551-124.391055l0-0.127913C132.749932 757.268076 85.194846 651.121548 85.194846 534.00006c0-117.244284 47.555086-223.424582 124.358309-300.225759C286.390147 156.939355 392.567375 109.413945 509.813706 109.413945L509.813706 109.413945zM763.891426 279.893688c-65.001433-64.967664-154.884556-105.159038-254.077719-105.159038-99.224886 0-189.073216 40.220027-254.076696 105.22146-65.001433 64.97278-105.22146 154.822135-105.22146 254.04395 0 99.258655 40.220027 189.076286 105.156992 254.077719l0.064468-0.061398c65.00348 65.001433 154.850787 105.251136 254.076696 105.251136 99.193163 0 189.076286-40.249703 254.077719-105.189737 64.937988-65.001433 105.124246-154.819065 105.124246-254.077719 0-99.221816-40.186258-189.07117-105.188714-254.04395L763.891426 279.893688zM228.404502 70.533426c13.999852-11.351536 34.541701-9.214872 45.929052 4.783956 11.352559 13.973246 9.249665 34.576493-4.753257 45.961798L142.860197 224.206388c-14.000875 11.384281-34.57547 9.248641-45.959751-4.754281-11.355629-14.002922-8.835226-34.892695 5.16565-46.278L228.404502 70.533426zM791.191188 70.533426c-14.030551-11.351536-34.574447-9.214872-45.929052 4.783956-11.418051 13.973246-9.249665 34.576493 4.722558 45.961798l126.749776 102.927207c13.96813 11.384281 34.576493 9.248641 45.929052-4.754281 11.354606-14.002922 8.865925-34.892695-5.166673-46.278L791.191188 70.533426z"></path></svg></i>
						<span>{this.props.data.createTimeString}</span></li>
						<li><i><svg viewBox="0 0 1024 1024" width="13" height="13"><path fill="" d="M512 192c-223.328 0-416.896 130.048-512 320 95.104 189.952 288.672 320 512 320s416.864-130.048 512-320c-95.104-189.952-288.672-320-512-320zM764.448 361.696c60.16 38.368 111.136 89.76 149.44 150.304-38.304 60.512-89.28 111.936-149.44 150.304-75.584 48.224-162.88 73.696-252.448 73.696s-176.864-25.472-252.448-73.696c-60.16-38.368-111.136-89.76-149.44-150.304 38.304-60.512 89.28-111.936 149.44-150.304 3.904-2.496 7.872-4.928 11.872-7.296-9.952 27.328-15.424 56.832-15.424 87.584 0 141.376 114.624 256 256 256s256-114.624 256-256c0-30.784-5.44-60.256-15.424-87.584 3.968 2.368 7.936 4.8 11.872 7.296l0 0zM512 416c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96z"></path></svg></i>
						<span>{this.props.data.browseSum}次浏览</span></li>
						<li><i><svg viewBox="0 0 1024 1024" width="13" height="13"><path fill="" d="M402.285714 219.428571q-87.405714 0-163.401143 29.696t-120.832 80.603429-44.836571 109.129143q0 46.884571 30.281143 90.258286t85.138286 75.410286l55.442286 32.036571-19.968 47.981714q19.456-11.410286 35.401143-22.308571l25.161143-17.700571 30.281143 5.705143q44.544 7.972571 87.405714 7.972571 87.405714 0 163.401143-29.696t120.832-80.603429 44.836571-109.129143-44.836571-109.129143-120.832-80.603429-163.401143-29.696zM402.285714 146.285714q109.129143 0 202.020571 39.131429t146.578286 106.569143 53.686857 146.870857-53.686857 146.870857-146.578286 106.569143-202.020571 39.131429q-49.152 0-100.571429-9.142857-70.875429 50.322286-158.866286 73.142857-20.553143 5.12-49.152 9.142857l-1.682286 0q-6.290286 0-11.702857-4.534857t-6.582857-11.995429q-0.585143-1.682286-0.585143-3.730286t0.292571-3.730286 1.170286-3.437714l1.462857-2.852571t1.974857-3.145143 2.267429-2.852571 2.56-2.852571 2.267429-2.56q2.852571-3.437714 13.165714-14.262857t14.848-16.822857 12.873143-16.603429 14.262857-22.016 11.702857-25.161143q-70.875429-41.179429-111.396571-101.156571t-40.594286-128q0-79.433143 53.686857-146.870857t146.578286-106.569143 202.020571-39.131429zM872.009143 814.299429q5.705143 13.677714 11.702857 25.161143t14.262857 22.016 12.873143 16.603429 14.848 16.822857 13.165714 14.262857q0.585143 0.585143 2.267429 2.56t2.56 2.852571 2.267429 2.852571 1.974857 3.145143l1.462857 2.852571t1.170286 3.437714 0.292571 3.730286-0.585143 3.730286q-1.682286 7.972571-7.460571 12.580571t-12.580571 4.022857q-28.598857-4.022857-49.152-9.142857-87.990857-22.820571-158.866286-73.142857-51.419429 9.142857-100.571429 9.142857-154.843429 0-269.677714-75.410286 33.133714 2.267429 50.322286 2.267429 92.013714 0 176.566857-25.746286t150.820571-73.728q71.460571-52.589714 109.714286-121.124571t38.253714-145.115429q0-44.032-13.165714-86.820571 73.728 40.594286 116.589714 101.741714t42.861714 131.437714q0 68.534857-40.594286 128.292571t-111.396571 100.864z"></path></svg></i>
						<a onClick={this.goCommentList}>{this.props.data.commentSum}条评论</a></li>
						<li><i><svg viewBox="0 0 1024 1024" width="13" height="13"><path d="M0.002763 173.176631C1.156583 255.164091 102.72775 327.209617 155.654932 337.035326 155.654932 294.769922 155.423157 277.59307 155.383198 277.59307 155.343238 277.59307 58.445402 250.790106 58.01328 176.159267 57.620441 108.133618 69.389894 46.251969 159.102507 46.251969 237.670283 46.251969 264.366025 95.987421 288.07778 156.000856L351.434835 155.98913C318.605288 71.99768 274.333935 0 152.553883 0 33.394067 0-0.352144 91.189169 0.002763 173.176631Z"></path><path d="M537.799182 155.826087 289.394067 155.826087 345.402415 305.413864 333.915807 333.405801C333.915804 350.184548 336.704962 355.073955 333.915807 363.129159 341.39153 389.585099 365.28399 405.101434 391.136717 405.101434 421.463878 405.101434 447.348031 383.015083 447.32839 348.883053 447.316605 333.38626 430.110262 301.372581 403.7822 296.061068L383.71599 243.17655C461.592369 254.690687 496.716093 302.771785 495.682928 350.18455 494.327633 412.328061 456.355827 455.969222 390.264614 455.660457 332.053749 455.386871 289.64564 419.755435 289.39407 356.173913 289.32462 338.621471 288.12258 325.553831 295.064042 304.174901 300.74842 285.348152 266.748216 203.963603 266.748216 203.963603L247.825168 155.826087 200.212002 155.826087 200.212002 482.546321C199.214192 509.881649 237.91777 543.345343 237.91777 543.345343L716.159816 1017.965434 1065.055736 664.959023C1065.051807 664.966841 639.733015 241.359144 592.678772 194.270779 559.354251 160.936061 537.799182 155.826087 537.799182 155.826087Z"></path><path d="M155.82885 489.73913 155.82885 378.434783 89.046241 378.434783 89.046241 575.567934C89.046241 616.961768 133.371561 645.354505 133.371561 645.354505L509.047305 1021.901192 569.94126 960.441649C569.94126 960.43774 245.106722 634.883909 196.092216 586.861434 147.907654 541.432066 155.82885 489.73913 155.82885 489.73913Z"></path></svg></i>
						{categoryName}</li>
					</ul>	
	        	</div>
        	</DocumentTitle>
        )
	}
}

export default withRouter(ContentTitle)


