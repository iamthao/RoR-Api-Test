import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Index = () => <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dashboard</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>This is text</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                <h5 className="description-header">$35,210.43</h5>
                                                <span className="description-text">TOTAL REVENUE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

const Index2 = () => <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.
                                </small>
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                              </div>
                              <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                              </div>
                              <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
const Index3 = () => <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            Index 3
                        </div>
                    </div>
                </section>
const NotFound = () => <h2>404 Not Found React</h2>

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/charts/chartjs" component={Index2} />
                    <Route exact path="/charts/morris" component={Index3} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        )
    }
}
