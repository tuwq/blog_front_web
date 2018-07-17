import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Article from '@/pages/Article/Article'


class ArticleRouter extends React.Component {
    render() {
        return (
            <Switch>
        		<Route exact path="/article/:id" component={Article} />
            </Switch>
        )
    }
}

export default ArticleRouter
