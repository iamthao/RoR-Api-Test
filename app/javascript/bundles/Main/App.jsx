

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavbarInstance from '../Main/components/NavBars/Navbar';

const NotFound = () => <h2>404 Not Found React</h2>
const AboutView = () => <h2>AboutView</h2>
const Index = () => <h2>Index</h2>


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
                            <Route exact path="/react" component={Index} />
                            <Route exact path="/react/about" component={AboutView} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
