import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            pathname: ''
        };
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(arr) {
        console.log("path", window.location.pathname)
        return $.inArray(window.location.pathname, arr) != -1
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info" id="test">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className={this.handleCheck(['/','']) ? 'active menu-open' : ''}>
                            <Link to='/'><i className="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li  className={this.handleCheck(['/charts/chartjs','/charts/morris']) ?
                        'treeview active menu-open' : 'treeview'}>
                            <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span>TEst</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.handleCheck(['/charts/chartjs']) ? 'active' : ''}>
                                    <Link to='/charts/chartjs'><i className="fa fa-circle-o"></i> ChartJS</Link>
                                </li>
                                <li className={this.handleCheck(['/charts/morris']) ? 'active' : ''}>
                                    <Link to='/charts/morris'><i className="fa fa-circle-o"></i> Morris</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}
