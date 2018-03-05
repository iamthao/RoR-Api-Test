import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    //this.props.dispatch(fetchNewMovie(this.props.match.params.id));
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {

    return (
      <div>
        <section className="content-header">
          <h1>Dashboard</h1>
          <ol className="breadcrumb">
            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">90<small>%</small></span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block"></div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Monthly Recap Report</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-wrench"></i></button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
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
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                        <h5 className="description-header">$10,390.90</h5>
                        <span className="description-text">TOTAL COST</span>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                        <h5 className="description-header">$24,813.53</h5>
                        <span className="description-text">TOTAL PROFIT</span>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block">
                        <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                        <h5 className="description-header">1200</h5>
                        <span className="description-text">GOAL COMPLETIONS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const DashboardView = connect((state) => {
  return state;
})(Dashboard);

export default DashboardView;

