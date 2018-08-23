import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Login from '@/pages/Login/Login'
import FindPass from '@/pages/FindPass/FindPass'
import UpdatePass from '@/pages/UpdatePass/UpdatePass'
import NotFound from '@/pages/NotFound/NotFound'
import MailMessage from '@/pages/MailMessage/MailMessage'
import SecretLetter from '@/pages/SecretLetter/SecretLetter'

class ExtraRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Redirect exact from="/extra" to="/notFound"/>
        		<Route exact path="/extra/login" component={Login} />
        		<Route exact path="/extra/findpass" component={FindPass} />
        		<Route exact path="/extra/updatepass/:key" component={UpdatePass} />
                <Route exact path="/extra/mailMessage" component={MailMessage} />
                <Route exact path="/extra/secretLetter" component={SecretLetter} />
        		<Redirect from="/extra/*" to="/notFound"/>
            </Switch>
        )
    }
}

export default ExtraRouter
