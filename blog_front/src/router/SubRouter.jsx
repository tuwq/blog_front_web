import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Main from '@/pages/Main/Main';
import Login from '@/pages/Login/Login'

class SubRouter extends React.Component {
    render() {
        return (
            <Switch>
        		<Route exact path="/" component={Main} />
        		<Route path="/user/login" component={Login} />
            </Switch>
        )
    }
}

export default SubRouter
