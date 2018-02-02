import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardView from '../Dashboard/DashboardView';

const NotFound = () => <h2>404 Not Found React</h2>

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={DashboardView} />
                    <Route exact path="/hanghoa/danhmuc" component={DashboardView} />
                    <Route exact path="/hanghoa/gia" component={DashboardView} />
                    <Route exact path="/hanghoa/kiemkho" component={DashboardView} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        )
    }
}
