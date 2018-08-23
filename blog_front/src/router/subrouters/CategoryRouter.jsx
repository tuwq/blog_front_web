import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Category from '@/pages/Category/Category'
import NotFound from '@/pages/NotFound/NotFound'


class CategoryRouter extends React.Component {
    
    render() {
        return (
            <Switch>
            	<Redirect exact from="/category" to="/" />
            	<Route exact path="/category/:id" component={Category} />
            </Switch>
        )
    }
}
export default CategoryRouter
