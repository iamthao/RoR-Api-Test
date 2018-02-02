import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Main/components/NavBars/Header';
import SideBar from '../Main/components/NavBars/SideBar';
import Content from '../Main/components/NavBars/Content';
import Footer from '../Main/components/NavBars/Footer';


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
    componentDidMount() {

    }

    render() {
        return (
            <div style={{ width: '100%', margin: '0', padding: '0' }}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <SideBar />
                        <Content />
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
