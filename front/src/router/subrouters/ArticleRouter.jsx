import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import Article from '@/pages/Article/Article'
import NotFound from '@/pages/NotFound/NotFound'


class ArticleRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Redirect exact from="/article" to="/notFound"/>
        		<Route exact path="/article/:id" component={Article} />
        		<Redirect path="/article/*" to="/notFound"/>
            </Switch>
        )
    }
}

export default ArticleRouter
