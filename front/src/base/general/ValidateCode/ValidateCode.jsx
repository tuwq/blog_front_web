import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

class ValidateCode extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.clickChange = this.clickChange.bind(this)
		this.lineX = this.lineX.bind(this)
		this.lineY = this.lineY.bind(this)
		this.rand = this.rand.bind(this)
		this.$validateCode = React.createRef()
		this.state = {
			code: ''
		}
	}

	componentDidMount() {
		this.clickChange()
	}

	changeImage() {
		this.clickChange()
	}

	clickChange() {
		var codCanvas = this.$validateCode.current
		var cxt = codCanvas.getContext('2d')
		cxt.fillStyle = '#000'
		cxt.fillRect(0,0,90,40)
		 /* 生成干扰线20条 */
        for(var j=0;j<20;j++){
            cxt.strokeStyle = '#fff'
            // 若省略beginPath，则每点击一次验证码会累积干扰线的条数
            cxt.beginPath()    
            cxt.moveTo(this.lineX(),this.lineY())
            cxt.lineTo(this.lineX(),this.lineY())
            cxt.lineWidth = 0.5
            cxt.closePath()
            cxt.stroke()
        }
       	cxt.fillStyle='red'
        cxt.font='bold 20px Arial'
        // 把rand()生成的随机数文本填充到canvas中    
        cxt.fillText(this.rand(),25,25);   
	}

	lineX() {
		var ranLineX = Math.floor(Math.random() * 90)
		return ranLineX
	}

	lineY() {
		var ranLineY = Math.floor(Math.random()*40);
		return ranLineY
	}

	rand() {
		var str="abcdefghijklmnpqrstuvwxyz0123456789";
        var arr=str.split("")
        var validate = ""
        var ranNum
        // 生成4位随机数
        for(var i=0;i<4;i++){
        	//随机数在[0,35]之间
            ranNum = Math.floor(Math.random()*35);  
            // 获得随机数 
            validate+=arr[ranNum];
        }
        this.setState({
        	code: validate
        },(state)=>{
        	this.props.validateCodeChange(this.state.code)
        })
        return validate;
	}

	render() {
		return (
			<div className="ValidateCode">
				<canvas id="validateCode" ref={this.$validateCode} width='90' height='40' onClick={this.changeImage.bind(this)}>
				    您的浏览器不支持canvas，请换个浏览器试试~
				</canvas>
        	</div>
        )
	}
}

export default withRouter(ValidateCode)


