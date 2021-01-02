import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './live2d.less'
import './live2d.js'

class Live2DModel extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initLive2DSetting  = this.initLive2DSetting.bind(this)
		this.renderLive2d = this.renderLive2d.bind(this)
		this.showLive2d = this.showLive2d.bind(this)
		this.initLive2d = this.initLive2d.bind(this)
		this.renderTip = this.renderTip.bind(this)
		this.initTips = this.initTips.bind(this)
		this.showMessage = this.showMessage.bind(this)
		this.talkValTimer = this.talkValTimer.bind(this)
		this.showHitokoto = this.showHitokoto.bind(this)
		this.checkSleep = this.checkSleep.bind(this)
		this.hideMessage = this.hideMessage.bind(this)
		this.initRequestContent = this.initRequestContent.bind(this)
		this.initShowHitokoto = this.initShowHitokoto.bind(this)
		this.initDrop = this.initDrop.bind(this)
		this.home_Path = document.location.protocol +`//${window.document.location.hostname}/`;
		this.modelUrl = this.props.modelUrl
		this.userAgent = window.navigator.userAgent.toLowerCase();
		this.norunAI = [ "android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser" ,"msie","trident/7.0"];
		this.norunFlag = false;
		this.settingData = {}
	}

	componentDidMount() {
		this.initLive2DSetting()
		this.initTips()
		this.initRequestContent()
		this.initShowHitokoto()
		this.renderLive2d()
	}

	initLive2DSetting() {
		var self = this
		for(var i = 0; i < self.norunAI.length; i++){
			if(self.userAgent.indexOf(self.norunAI[i]) > -1){
				self.norunFlag = true;
				break;
			}
		}
		if(!window.WebGLRenderingContext){
			self.norunFlag = true;
		}
		if (!self.norunFlag) {
			self.settingData = {
				hitFlag: false,
				AIFadeFlag: false,
				liveTlakTimer: false,
				sleepTimer_: false,
				AITalkFlag: false
			}
		}
		String.prototype.renderTip = function (context) {
			return self.renderTip(this, context)
		}
		$(document).on('copy', function (){
			self.showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
		});
	}

	renderLive2d() {
		var self = this
		loadlive2d("live2d", this.modelUrl)
		setTimeout(function(){
			self.showLive2d();	
		}, 3000)
	}

	showLive2d() {
		var live2dhidden = localStorage.getItem("live2dhidden");
		if (live2dhidden === '0') {
			setTimeout(function(){
                $('.Live2DModel #open_live2d').fadeIn(200);
            },1300);
		} else {
			setTimeout(function(){
                $('.Live2DModel #landlord').fadeIn(200);
            },1300);
		}
		this.initLive2d()
		this.initDrop()
	}

	initLive2d() {
		var self = this
		var $live_ico_box = $('.Live2DModel .live_ico_box')
		$('.Live2DModel #landlord').hover(function(){
			$live_ico_box.fadeIn(200)
		},function(){
			$live_ico_box.fadeOut(200)
		})
		$('#live2d-hideButton').on('click', function(){
			if (self.settingData.AIFadeFlag) {
				return false
			} else {
				self.settingData.AIFadeFlag = true
				localStorage.setItem("live2dhidden", "0");
				$('.Live2DModel #landlord').fadeOut(200);
				$('.Live2DModel #open_live2d').delay(200).fadeIn(200);
				setTimeout(function(){
					self.settingData.AIFadeFlag = false;
				},300);
			}
		})
		$('.Live2DModel #open_live2d').on('click', function(){
			if(self.settingData.AIFadeFlag){
				return false;
			}else{
				self.settingData.AIFadeFlag = true;
				localStorage.setItem("live2dhidden", "1");
				$('#open_live2d').fadeOut(200);
				$('#landlord').delay(200).fadeIn(200);
				setTimeout(function(){
					self.settingData.AIFadeFlag = false;
				},300);
			}
		});
		$('.Live2DModel #live2d-goHomeBtn').on('click', function(){
			self.props.goHomeFn()
		})
		$('.Live2DModel #live2d-musicBtn').on('click', function(){
			self.props.openMusicFn()
		})
		$('.Live2DModel #live2d-chatBtn').on('click', function(){
			self.showMessage('我还不是图灵机器人昵')
		})
	}

	renderTip(template, context) {
		var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
		return template.replace(tokenReg, function (word, slash1, token, slash2) {
			if (slash1 || slash2) {
				return word.replace('\\', '');
			}
			var variables = token.replace(/\s/g, '').split('.');
			var currentObject = context;
			var i, length, variable;
			for (i = 0, length = variables.length; i < length; ++i) {
				variable = variables[i];
				currentObject = currentObject[variable];
				if (currentObject === undefined || currentObject === null) return '';
			}
			return currentObject;
		});
	}

	initTips() {
		var self = this
		var result = {
		    "mouseover": [
		        {
		            "selector": ".Live2DModel #live2d-goHomeBtn",
		            "text": ["回到首页吗?"]
		        },
				{
		            "selector": ".Live2DModel #live2d-musicBtn",
		            "text": ["给页面加点音乐吗？"]
		        },
				{
		            "selector": ".Live2DModel #live2d-chatBtn",
		            "text": ["我们来聊天吗?"]
		        },
				{
		            "selector": ".Live2DModel #live2d-hideButton",
		            "text": ["再见,希望我们能再见"]
		        }
		    ],
		    "click": [
		        {
		            "selector": ".Live2DModel #landlord #live2d",
		            "text": ["不要动手动脚的！快把手拿开~~", "真…真的是不知羞耻！","Hentai！", "再摸的话我可要报警了！", "110吗，这里有个变态！"]
		        }
		    ]
		}
		$.each(result.mouseover, function(index, tips){
			$(tips.selector).mouseover(function(){
				var text = tips.text
				if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
				text = text.renderTip({text: $(this).text()});
				self.showMessage(text, 3000);
				self.talkValTimer()
				clearInterval(self.settingData.liveTlakTimer)
				self.settingData.liveTlakTimer = null
			})
			$(tips.selector).mouseout(function (){
				self.showHitokoto();
				if(self.settingData.liveTlakTimer == null){
					self.settingData.liveTlakTimer = window.setInterval(function(){
						self.showHitokoto();
					},15000);
				};
			});
		})
		$.each(result.click, function(index, tips){
			$(tips.selector).click(function (){
				if(self.settingData.hitFlag){
					return false
				}
				self.settingData.hitFlag = true;
				setTimeout(function(){
					self.settingData.hitFlag = false;
				},8000);
				var text = tips.text;
				if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
				text = text.renderTip({text: $(this).text()});
				self.showMessage(text, 3000);
			});
			clearInterval(self.settingData.liveTlakTimer);
			self.settingData.liveTlakTimer = null;
			if(self.settingData.liveTlakTimer == null){
				self.settingData.liveTlakTimer = window.setInterval(function(){
					self.showHitokoto();
				},15000);
			};
		})
	}

	showMessage(text, timeout) {
		if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
		$('.live2d-message-hook').stop();
		$('.live2d-message-hook').html(text);
		$('.live2d-message-hook').fadeTo(200, 1);
	}

	talkValTimer() {
		$('#live_talk').val('我还不是图灵机器人昵');
	}

	showHitokoto() {
		var self = this
		if(sessionStorage.getItem("Sleepy")!=="1"){
			if(!self.settingData.AITalkFlag){
				$.getJSON(`https://sslapi.hitokoto.cn/`,function(result){
					self.talkValTimer();
					self.showMessage(result.hitokoto, 0);
				});
			}
		}else{
			self.hideMessage(0);
			if(self.settingData.sleepTimer_==null){
				self.settingData.sleepTimer_ = setInterval(function(){
					self.checkSleep();
				},200);
			}
		}
	}

	hideMessage(timeout) {
		if (timeout === null) timeout = 5000;
		$('.live2d-message-hook').delay(timeout).fadeTo(200, 0);
	}

	checkSleep() {
		var self = this
		var sleepStatu = sessionStorage.getItem("Sleepy");
		if(sleepStatu!=='1'){
			self.talkValTimer();
			self.showMessage('你回来啦~', 0);
			clearInterval(self.settingData.sleepTimer_);
			self.settingData.sleepTimer_= null;
		}
	}

	initDrop() {
		var landL = sessionStorage.getItem("historywidth");
		var landB = sessionStorage.getItem("historyheight");
		if(landL == null || landB ==null){
			landL = '5px'
			landB = '0px'
		}
		$('.Live2DModel #landlord').css('left',landL+'px');
		$('.Live2DModel #landlord').css('bottom',landB + 'px');

		var smcc = $('.Live2DModel #landlord')[0];
		var moveX = 0;
		var moveY = 0;
		var moveBottom = 0;
		var moveLeft = 0;
		var moveable = false;
		var docMouseMoveEvent = document.onmousemove;
		var docMouseUpEvent = document.onmouseup;
		smcc.onmousedown = function(event){
			var ent = event || window.event;
			moveable = true;
			moveX = ent.clientX;
			moveY = ent.clientY;
			var obj = smcc;
			moveBottom = parseInt(obj.style.bottom);
			moveLeft = parseInt(obj.style.left);
			if(navigator.userAgent.indexOf("Firefox")>0){
				window.getSelection().removeAllRanges();
			}			
			document.onmousemove = function(event){
				if(moveable){
					var ent = event || window.event;
					var x = moveLeft + ent.clientX - moveX;
					var y = moveBottom +  (moveY - ent.clientY);
					obj.style.left = x + "px";
					obj.style.bottom = y + "px";
				}
			};
			document.onmouseup = function(){
				if(moveable){
					var historywidth = obj.style.left;
					var historyheight = obj.style.bottom;
					historywidth = historywidth.replace('px', '');
					historyheight = historyheight.replace('px', '');
					sessionStorage.setItem("historywidth", historywidth);
					sessionStorage.setItem("historyheight", historyheight);
					document.onmousemove = docMouseMoveEvent;
					document.onmouseup = docMouseUpEvent;
					moveable = false; 
					moveX = 0;
					moveY = 0;
					moveBottom = 0;
					moveLeft = 0;
				}
			};
		};
	}

	initRequestContent() {
		var self = this
		var text
		var now = (new Date()).getHours();
		if (now > 23 || now <= 5) {
			text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
		} else if (now > 5 && now <= 7) {
			text = '早上好！一日之计在于晨，美好的一天就要开始了！';
		} else if (now > 7 && now <= 11) {
			text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
		} else if (now > 11 && now <= 14) {
			text = '中午了，工作了一个上午，现在是午餐时间！';
		} else if (now > 14 && now <= 17) {
			text = '午后很容易犯困呢，今天的运动目标完成了吗？';
		} else if (now > 17 && now <= 19) {
			text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
		} else if (now > 19 && now <= 21) {
			text = '晚上好，今天过得怎么样？';
		} else if (now > 21 && now <= 23) {
			text = '已经这么晚了呀，早点休息吧，晚安~~';
		} else {
			text = '嗨~ 快来逗我玩吧！';
		}
		/*
		var text
		if(document.referrer !== ''){ 
			var referrer = document.createElement('a');
			referrer.href = document.referrer;
			text = `你好,我是Live2d模型机器人`;
			var domain = referrer.hostname.split('.')[1];
			if (domain == 'baidu') {
				text = `嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「${document.title.split(' - ')[0]}」</span>`;
			} else if (domain == 'so') {
				text = `嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「${document.title.split(' - ')[0]}」</span>`;
			}else if (domain == 'google') {
				text = `嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「${document.title.split(' - ')[0]}」</span>`;
			}
		} else {
			if (window.location.href == this.home_Path) { //主页URL判断，需要斜杠结尾
				
			}else {
				text = `你好,我是Live2d模型机器人`;
			}
		}*/
		self.showMessage(text, 12000)
	}

	initShowHitokoto() {
		var self = this
		self.settingData.liveTlakTimer = setInterval(function(){
			self.showHitokoto();
		},15000);
	}

	render() {
		return (
			<div className="Live2DModel">
				<div id="landlord" style={{left: '5px', bottom: '0px'}}>
			        <div className="message live2d-message-hook" ></div>
			        <canvas id="live2d" width="500" height="560" className="live2d"></canvas>
			        <div className="live_talk_input_body">
			        	<div className="live_talk_input_name_body">
			            	<input name="name" type="text" className="live_talk_name white_input" id="AIuserName" autoComplete="new-password" placeholder="你的名字" />
			            </div>
			            <div className="live_talk_input_text_body">
			            	<input name="talk" type="text" className="live_talk_talk white_input" id="AIuserText" autoComplete="new-password" placeholder="要和我聊什么呀？"/>
			                <button type="button" className="live_talk_send_btn" id="talk_send">发送</button>
			            </div>
			        </div>
			        <input name="live_talk" id="live_talk" value="1" type="hidden" autoComplete="new-password"/>
			        <div className="live_ico_box">
			        	<div className="live_ico_item-control-group">
			        		<span className="live_ico_item-control">
				        		<i className="live_ico_item" id="live2d-goHomeBtn">
				        			<svg fill="#fff" viewBox="0 0 1024 1024" width="20" height="20"><path d="M880.702 563.34c-2.501 3.002-6.503 5.004-10.506 5.504-0.5 0-1 0-1.501 0-4.002 0-7.504-1-10.505-3.502L512 276.683 165.81 565.342c-3.502 2.502-7.504 4.002-12.007 3.502-4.002-0.5-8.004-2.502-10.506-5.504l-31.017-37.02c-5.503-6.504-4.502-17.009 2.001-22.512l359.697-299.665c21.012-17.51 55.03-17.51 76.042 0L672.088 306.2l0-97.554c0-9.005 7.004-16.009 16.009-16.009l96.053 0c9.005 0 16.009 7.004 16.009 16.009l0 204.112 109.561 91.05c6.503 5.503 7.504 16.008 2.001 22.512L880.702 563.34zM800.158 800.971c0 17.51-14.508 32.018-32.018 32.018L576.035 832.989 576.035 640.883l-128.07 0 0 192.105L255.859 832.988c-17.51 0-32.018-14.508-32.018-32.018L223.841 560.84c0-1.002 0.5-2.002 0.5-3.002L512 320.708l287.658 237.13c0.5 1 0.5 2 0.5 3.002L800.158 800.971z"></path></svg>
				        		</i>
				        	</span>
				        	<span className="live_ico_item-control">
				        		<i className="live_ico_item" id="live2d-musicBtn">
				        			<svg fill="#fff" viewBox="0 0 1024 1024" width="20" height="20"><path d="M795.749506 128.198777l0 212.610282-260.09783-54.281277L535.651676 842.910619c0 31.662117-18.0941 59.183937-54.281277 82.556251-36.187177 23.411199-79.158874 35.049261-128.915092 35.049261-37.693484 0-68.988234-10.923794-93.865831-32.790824-24.877597-21.818935-37.316907-50.083675-37.316907-84.814688 0-30.156834 12.43931-56.163137 37.316907-78.030168 24.877597-21.818935 56.17337-35.05847 93.865831-39.584554l65.591881 0c16.588817 0 31.28554-6.783497 44.100404-20.351514 12.814864-13.568017 19.222807-28.602432 19.222807-45.230134L481.370399 64.875566 795.749506 128.198777z"></path></svg>
				        		</i>
				        	</span>
				        	<span className="live_ico_item-control">
				        		<i className="live_ico_item" id="live2d-chatBtn">
				        			<svg fill="#fff" viewBox="0 0 1024 1024" width="20" height="20"><path d="M299.74528 936.91904l-167.211008 81.824768c-27.931648 13.668352-47.811584-0.212992-43.78112-31.3088l24.534016-189.258752C42.42432 714.029056 0 606.990336 0 490.459136 0 219.58656 229.230592 0 512 0s512 219.58656 512 490.459136c0 270.8736-229.230592 490.459136-512 490.459136-75.71456 0-147.590144-15.742976-212.25472-43.998208zM173.038592 779.761664l-21.567488 166.381568 147.757056-72.30464c63.449088 32.032768 135.840768 50.192384 212.77184 50.192384 251.884544 0 455.110656-194.676736 455.110656-433.570816S763.884544 56.889344 512 56.889344c-251.884544 0-455.110656 194.675712-455.110656 433.569792 0 111.015936 43.886592 212.483072 116.149248 289.301504z"></path><path d="M284.217344 516.08576c-31.419392 0-56.889344-25.469952-56.889344-56.88832 0-31.419392 25.469952-56.889344 56.889344-56.889344 31.418368 0 56.88832 25.469952 56.88832 56.889344 0 31.418368-25.469952 56.88832-56.88832 56.88832z m257.292288-3.972096c-31.418368 0-56.88832-25.469952-56.88832-56.88832 0-31.419392 25.469952-56.889344 56.88832-56.889344 31.419392 0 56.889344 25.469952 56.889344 56.889344 0 31.418368-25.469952 56.88832-56.889344 56.88832z m239.192064 3.97312c-31.418368 0-56.889344-25.470976-56.889344-56.889344 0-31.419392 25.470976-56.889344 56.889344-56.889344 31.419392 0 56.889344 25.469952 56.889344 56.889344 0 31.418368-25.469952 56.88832-56.889344 56.88832z"></path></svg>
				        		</i>
				        	</span>
				        	<span className="live_ico_item-control">
				        		<i className="live_ico_item" id="live2d-hideButton">
				        			<svg fill="#fff" viewBox="0 0 1024 1024" width="20" height="20"><path d="M545.653983 541.969569l-70.219271 0c-16.179494 0-29.29521-13.111622-29.29521-29.291117L446.139501 91.660606c0-16.180518 13.116739-29.296233 29.29521-29.296233l70.219271 0c16.180518 0 29.296233 13.115716 29.296233 29.296233L574.950216 512.679475C574.949192 528.85897 561.833477 541.969569 545.653983 541.969569L545.653983 541.969569zM545.653983 541.969569"></path><path d="M635.661949 171.316807l0 119.92023c0 0.271176 0.157589 0.517793 0.405229 0.636496 93.009324 44.518936 158.711721 136.957255 165.098175 245.353011 10.171664 172.682921-133.101437 317.036633-305.857013 308.129776-153.704684-7.92346-275.891538-135.062092-275.891538-290.737664 0-115.842355 67.658959-215.864396 165.605735-262.745123 0.24764-0.11768 0.405229-0.364297 0.405229-0.636496L385.427768 171.316807c0-0.487094-0.478907-0.832971-0.941442-0.680499C202.621279 230.309386 77.672522 415.535995 112.234689 623.841228c27.140127 163.564239 152.755056 294.265 315.373761 326.58715 259.479753 51.579749 487.002676-145.545864 487.002676-395.810744 0-179.136913-116.588345-331.021136-278.013875-383.981325C636.13881 170.483836 635.661949 170.829713 635.661949 171.316807L635.661949 171.316807zM635.661949 171.316807"></path></svg>
				        		</i>
				        	</span>
			        	</div>
			            <input name="live_statu_val" id="live_statu_val" value="0" type="hidden" autoComplete="new-password"/>
			            <audio src="" style={{display: 'none'}} id="live2d_bgm" data-bgm="0" preload="none"></audio>
			            <input name="live2dBGM" value="https://t1.aixinxi.net/o_1c52p4qbp15idv6bl55h381moha.mp3" type="hidden" autoComplete="new-password"/>
			            <input name="live2dBGM" value="https://t1.aixinxi.net/o_1c52p8frrlmf1aled1e14m56una.mp3" type="hidden" autoComplete="new-password"/>
			            <input id="duType" value="douqilai,l2d_caihong" type="hidden" autoComplete="new-password"/>
			        </div>
			    </div>
			    <div id="open_live2d">召唤血小板</div>
        	</div>
        )
	}
}

export default withRouter(Live2DModel)


