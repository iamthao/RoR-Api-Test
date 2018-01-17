import React, {Component} from 'react';
import HelloWorld from '../HelloWorld/components/HelloWorld';

import '../../../client/stylesheets/app.scss'

class App extends Component {
    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
        this.state = {
            path: 'home',
            componentCurrent: [<HelloWorld key={1} name={'Test'}/>]
        };

        this.handleClickMenu = this.handleClickMenu.bind(this);
    }

    handleClickMenu = (e, menu) => {
        e.preventDefault();
       if (menu == 'home'){
            this.setState({
                path: 'helloworld',
                componentCurrent: [<HelloWorld key={1} name={'Test'}/>]
            })
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" onClick={(e) => this.handleClickMenu(e,'home')} style={{color:'#fff'}}>HOME</a>
                    </div>
                    <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false" style={{height: "1px"}}>
                        <ul className="nav navbar-nav navbar-left">
                            <li>
                                <a href="#" onClick={(e) => this.handleClickMenu(e,'helloworld')}>Hello World</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.handleClickMenu(e,'counter')}>Counter</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.handleClickMenu(e,'contact')}>Contact</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li style={{margin: "0 20px"}}>
                                <form className="navbar-form" role="search" action="/details" acceptCharset="UTF-8" method="GET" style={ {paddingLeft:"0",paddingRight: "0"}}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tìm kiếm... " name="keyword"/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container" style={{marginTop:"50px"}}>
               {this.state.componentCurrent}
            </div>
            </div>
        );
    }
}

export default App;
