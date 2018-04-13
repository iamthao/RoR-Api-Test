import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardView from '../Dashboard/DashboardView';
import SanPhamView from '../HangHoa/SanPhamView';
import MovieView from '../Movie/MovieView';

const NotFound = () => <h2>404 Not Found React</h2>



export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={DashboardView} />
                    <Route exact path="/home/hanghoa/danhmuc" component={SanPhamView} />
                    <Route exact path="/home/hanghoa/gia" component={DashboardView} />
                    <Route exact path="/home/hanghoa/kiemkho" component={MovieView} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        )
    }
}
