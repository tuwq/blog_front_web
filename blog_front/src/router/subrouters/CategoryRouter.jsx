import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Category from '@/pages/Category/Category'
import NotFound from '@/pages/NotFound/NotFound'


class CategoryRouter extends React.Component {
    
    render() {
        return (
            <Switch>
            	<Route exact path="/category/:id" component={Category} />
            	<Route path="/category" component={NotFound} />
            </Switch>
        )
    }
}
export default CategoryRouter
