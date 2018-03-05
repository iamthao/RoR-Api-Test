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
                        <li className={this.handleCheck(['/hanghoa/danhmuc','/hanghoa/gia','/hanghoa/kiemkho']) ?
                        'treeview active menu-open' : 'treeview'}>
                            <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span>Hàng hóa</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={window.location.pathname == '/hanghoa/danhmuc' ? 'active' : ''}>
                                    <Link to='/hanghoa/danhmuc'><i className="fa fa-th"></i> Danh mục</Link>
                                </li>
                                <li className={window.location.pathname == '/hanghoa/gia' ? 'active' : ''}>
                                    <Link to='/hanghoa/gia'><i className="fa fa-tags"></i> Thiết lập giá</Link>
                                </li>
                                <li className={window.location.pathname == '/hanghoa/kiemkho' ? 'active' : ''}>
                                    <Link to='/hanghoa/kiemkho'><i className="fa fa-check-square-o"></i> Kiểm kho</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.handleCheck(['/giaodich/hoadon','/giaodich/trahang','/giaodich/nhaphang','/giaodich/trahangnhap','/giaodich/xuathuy']) ?
                        'treeview active menu-open' : 'treeview'}>
                            <a href="#">
                                <i className="fa fa-exchange"></i>
                                <span>Giao dịch</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={window.location.pathname == '/giaodich/hoadon' ? 'active' : ''}>
                                    <Link to='/giaodich/hoadon'><i className="fa fa-file"></i> Hóa đơn</Link>
                                </li>
                                <li className={window.location.pathname == '/giaodich/trahang' ? 'active' : ''}>
                                    <Link to='/giaodich/trahang'><i className="fa fa-reply-all"></i> Trả hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/giaodich/nhaphang' ? 'active' : ''}>
                                    <Link to='/giaodich/nhaphang'><i className="fa fa-share-square-o"></i> Nhập hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/giaodich/trahangnhap' ? 'active' : ''}>
                                    <Link to='/giaodich/trahangnhap'><i className="fa fa-share-square"></i> Trả hàng nhập</Link>
                                </li>
                                <li className={window.location.pathname == '/giaodich/xuathuy' ? 'active' : ''}>
                                    <Link to='/giaodich/xuathuy'><i className="fa fa-recycle"></i> Xuất hủy</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.handleCheck(['/doitac/khachhang','/doitac/ncc']) ?
                        'treeview active menu-open' : 'treeview'}>
                            <a href="#">
                                <i className="fa fa-male"></i>
                                <span>Đối tác</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={window.location.pathname == '/doitac/khachhang' ? 'active' : ''}>
                                    <Link to='/doitac/khachhang'><i className="fa fa-user"></i> Khách hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/doitac/ncc' ? 'active' : ''}>
                                    <Link to='/doitac/ncc'><i className="fa fa-undo"></i> Nhà cung cấp</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.handleCheck(['/baocao/cuoingay','/baocao/banhang','/baocao/dathang','/baocao/hanghoa','/baocao/khachhang','/baocao/ncc','/baocao/nhanvien','/baocao/taichinh']) ?
                        'treeview active menu-open' : 'treeview'}>
                            <a href="#">
                                <i className="fa fa-bar-chart"></i>
                                <span>Báo cáo</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={window.location.pathname == '/baocao/cuoingay' ? 'active' : ''}>
                                    <Link to='/baocao/cuoingay'><i className="fa fa-pie-chart"></i> Cuối ngày</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/banhang' ? 'active' : ''}>
                                    <Link to='/baocao/banhang'><i className="fa fa-clipboard"></i> Bán hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/dathang' ? 'active' : ''}>
                                    <Link to='/baocao/dathang'><i className="fa fa-inbox"></i> Đặt hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/hanghoa' ? 'active' : ''}>
                                    <Link to='/baocao/hanghoa'><i className="fa fa-cube"></i> Hàng hóa</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/khachhang' ? 'active' : ''}>
                                    <Link to='/baocao/khachhang'><i className="fa fa-user"></i> Khách hàng</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/ncc' ? 'active' : ''}>
                                    <Link to='/baocao/ncc'><i className="fa fa-undo"></i> Nhà cung cấp</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/nhanvien' ? 'active' : ''}>
                                    <Link to='/baocao/nhanvien'><i className="fa fa-male"></i> Nhân viên</Link>
                                </li>
                                <li className={window.location.pathname == '/baocao/taichinh' ? 'active' : ''}>
                                    <Link to='/baocao/taichinh'><i className="fa fa-line-chart"></i> Tài chính</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}
