import '../../../client/stylesheets/app.css.scss';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavbarInstance from '../Main/components/NavBars/Navbar';
import MovieView from '../Main/components/Movie/MovieView';
import MovieListView from '../Main/components/Movie/MovieListView';

const NotFound = () => <h2>404 Not Found React</h2>
const AboutView = () => <h2>AboutView</h2>

class App extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{ width: '100%', margin: '0', padding: '0' }}>
                <BrowserRouter>
                    <div style={{ width: '100%', margin: '0', padding: '0' }}>
                        <NavbarInstance />
                        <div style={{height:'58px'}}></div>
                        <Switch>
                            <Route exact path="/" component={MovieListView} />
                            <Route exact path="/home/about" component={AboutView} />
                            <Route exact path="/home/movie/:id" component={MovieView} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
