import React from 'react';
import { Route,Switch  } from 'react-router-dom';


import Main from '@/pages/Main/main.jsx';

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
