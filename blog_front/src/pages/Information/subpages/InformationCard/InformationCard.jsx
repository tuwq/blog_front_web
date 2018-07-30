import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './InformationCard.less'
import './MInformationCard.less'

class InformationCard extends React.Component {

        constructor(props,context) {
                super(props,context)
                this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
                
        }

        componentDidMount() {
                
        }

        render() {
            return (
                <div className="InformationCard">
                    <div className="container">
                        <div className="avatar-wrap">
                            <img alt="" src="http://pcij2jrr4.bkt.clouddn.com/upload/tempinfoavatar.jpg"/>
                        </div>
                        <h2>tuwenq@126.com<a><i></i></a></h2>
                        <p className="bio">asd</p>
                    </div>
                </div>
            )
        }
}

export default withRouter(InformationCard)


