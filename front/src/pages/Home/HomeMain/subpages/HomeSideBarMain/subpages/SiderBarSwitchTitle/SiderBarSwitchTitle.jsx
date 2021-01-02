import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './SiderBarSwitchTitle.less'
import './MSiderBarSwitchTitle.less'

class SiderBarSwitchTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

    changeSwitch(id, e) {
        $(e.target).parent().addClass('active').siblings().removeClass('active')
        this.props.switchChangeFn(id, e)
	}

	render() {
        let textArr = [{
            id: 1,
            text: '近期文章'
        }, {
            id: 2,
            text: '推荐文章'
        }, {
            id: 3,
            text: '随机文章'
        }]

		return (
         	<div id="SiderBarSwitchTitle" className="SiderBarSwitchTitle">
                <div className="title-container">
                    {
                        textArr.map((obj)=>{
                            return (<div key={obj.id} className={obj.id==1?'title-name active':'title-name'} 
                            onClick={this.changeSwitch.bind(this, obj.id)}><a>{obj.text}</a></div>)
                        })
                    }
                </div>
         	</div>
        )
	}
}

export default SiderBarSwitchTitle
