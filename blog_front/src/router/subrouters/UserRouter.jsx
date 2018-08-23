import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Login from '@/pages/Login/Login'
import FindPass from '@/pages/FindPass/FindPass'
import UpdatePass from '@/pages/UpdatePass/UpdatePass'
import Setting from '@/pages/Setting/Setting'
import Information from '@/pages/Information/Information'
import NotFound from '@/pages/NotFound/NotFound'
import LoginRoute from '../auth/LoginRoute'

class UserRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Redirect exact from="/user" to="/notFound" />
        		<LoginRoute exact path="/user/setting" component={Setting} />
                <Route exact path="/user/:id" component={Information} />
                <Redirect from="/user/*" to="/notFound" />
            </Switch>
        )
    }
}

export default UserRouter
