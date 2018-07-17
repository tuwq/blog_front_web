import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Main from '@/pages/Main/Main';

class SubRouter extends React.Component {
    render() {
        return (
            <Switch>
        		<Route exact path="/" component={Main} />
            </Switch>
        )
    }
}

export default SubRouter
