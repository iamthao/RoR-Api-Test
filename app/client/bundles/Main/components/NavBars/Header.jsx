import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
    <a href="index2.html" className="logo">

      <span className="logo-mini"><b>MS</b></span>

      <span className="logo-lg"><b>Master Seller</b></span>
    </a>

    <nav className="navbar navbar-static-top">

      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
              <span className="hidden-xs">Thao Nguyen</span>
            </a>
            <ul className="dropdown-menu">

              <li className="user-header">
                <img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                <p>
                  Thao Nguyen - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li>

              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a rel="nofollow" className="btn btn-default btn-flat"  href="/users/sign_out">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
        )
    }
}
