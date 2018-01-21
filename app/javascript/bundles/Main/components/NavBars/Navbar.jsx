import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDataOption } from '../../utilities/fetchDataOption';
import { fetchCurrentUser } from '../../actions/User/userAction';

class Navbar extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
       // this.props.dispatch(fetchCurrentUser());
    };

    shouldComponentUpdate (nextProps) {
        return this.props.userReducer !== nextProps.userReducer;
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-custom navbar-always-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">HOME</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to='/'>Movies</Link>
                                </li>
                                <li>
                                    <Link to='/home/about'>About</Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    {'Hi ' + this.props.userReducer.full_name + ' '}<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#">Profile</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="/users/sign_out">Sign out</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const NavbarInstance = connect((state) => {
    return state;
})(Navbar);

export default NavbarInstance;
