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
                                    <Link to='/'><i className="fa fa-dashboard"></i>&nbsp; Tổng quan</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false"><i className="fa fa-cube"></i>&nbsp; Hàng hóa
                                        &nbsp;<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#"><i className="fa fa-th"></i>&nbsp; Danh mục</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-tags"></i>&nbsp; Thiết lập gía</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-check-square-o"></i>&nbsp; Kiểm kho</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false"><i className="fa fa-exchange"></i>&nbsp; Giao dịch
                                        &nbsp;<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#"><i className="fa fa-file"></i>&nbsp; Hóa đơn</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-reply-all"></i>&nbsp; Trả hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-share-square-o"></i>&nbsp; Nhập hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-share-square"></i>&nbsp; Trả hàng nhập</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-recycle"></i>&nbsp; Xuất hủy</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false"><i className="fa fa-male"></i>&nbsp; Đối tác
                                        &nbsp;<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#"><i className="fa fa-user"></i>&nbsp; Khách hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-undo"></i>&nbsp; Nhà cung cấp</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false"><i className="fa fa-bar-chart"></i>&nbsp; Báo cáo
                                        &nbsp;<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#"><i className="fa fa-pie-chart"></i>&nbsp; Cuối ngày</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-clipboard"></i>&nbsp; Bán hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                         <li>
                                            <Link to="#"><i className="fa fa-inbox"></i>&nbsp; Đặt hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-cube"></i>&nbsp; Hàng hóa</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-user"></i>&nbsp; Khách hàng</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-undo"></i>&nbsp; Nhà cung cấp</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                         <li>
                                            <Link to="#"><i className="fa fa-male"></i>&nbsp; Nhân viên</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="#"><i className="fa fa-line-chart"></i>&nbsp; Tài chính</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <Link to="#" className="username dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    {'Hi ' + this.props.userReducer.full_name + ' '}&nbsp;<span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#"><i className="fa fa-unlock-alt"></i>&nbsp; Thông tin tài khoản</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="/users/sign_out"><i className="fa fa-external-link"></i>&nbsp; Thoát</a>
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
