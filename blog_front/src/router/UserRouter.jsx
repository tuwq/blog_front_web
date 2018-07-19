import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Login from '@/pages/Login/Login'
import FindPass from '@/pages/FindPass/FindPass'
import UpdatePass from '@/pages/UpdatePass/UpdatePass'
import Setting from '@/pages/Setting/Setting'

class UserRouter extends React.Component {
    render() {
        return (
            <Switch>
        		<Route exact path="/user/login" component={Login} />
        		<Route exact path="/user/findpass" component={FindPass} />
        		<Route exact path="/user/updatepass/:id" component={UpdatePass} />
        		<Route exact path="/user/setting" component={Setting} />
            </Switch>
        )
    }
}

export default UserRouter
