import React from 'react';
import { connect } from 'react-redux';

class SanPham extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      col: 'mahh',
      asc: true
    };
    this.sortHandleClick = this.sortHandleClick.bind(this)
  }

  componentDidMount() {
    //this.props.dispatch(fetchNewMovie(this.props.match.params.id));
  };

  sortHandleClick(col) {
    console.log('vo click')
    this.setState({
      asc: this.state.col != col ? true : !this.state.asc,
      col: col
    });
  };

  render() {
    console.log(this.state)
    let iconMahh = null;
    if (this.state.col == 'mahh' && this.state.asc == true) {
      iconMahh = <i className='fa fa-caret-up'></i>
    }
    else if (this.state.col == 'mahh' && this.state.asc == false) {
      iconMahh = <i className='fa fa-caret-down'></i>
    }
    else {
      iconMahh = ''
    }

    let iconTenhang = null;
    if (this.state.col == 'tenhang' && this.state.asc == true) {
      iconTenhang = <i className='fa fa-caret-up'></i>
    }
    else if (this.state.col == 'tenhang' && this.state.asc == false) {
      iconTenhang = <i className='fa fa-caret-down'></i>
    }
    else {
      iconTenhang = ''
    }

    let iconGiaban = null;
    if (this.state.col == 'giaban' && this.state.asc == true) {
      iconGiaban = <i className='fa fa-caret-up'></i>
    }
    else if (this.state.col == 'giaban' && this.state.asc == false) {
      iconGiaban = <i className='fa fa-caret-down'></i>
    }
    else {
      iconGiaban = ''
    }

    let iconGiavon = null;
    if (this.state.col == 'giavon' && this.state.asc == true) {
      iconGiavon = <i className='fa fa-caret-up'></i>
    }
    else if (this.state.col == 'giavon' && this.state.asc == false) {
      iconGiavon = <i className='fa fa-caret-down'></i>
    }
    else {
      iconGiavon = ''
    }

    let iconTonkho = null;
    if (this.state.col == 'tonkho' && this.state.asc == true) {
      iconTonkho = <i className='fa fa-caret-up'></i>
    }
    else if (this.state.col == 'tonkho' && this.state.asc == false) {
      iconTonkho = <i className='fa fa-caret-down'></i>
    }
    else {
      iconTonkho = ''
    }

    return (
      <div>
        <section className="content-header">
          <h1>Sản Phẩm</h1>
          <ol className="breadcrumb">
            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Sản phẩm</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-body">
                  <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                    <div className="row">
                      <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                        <button className="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-plus"></i> Thêm mới</button>
                        <div className="modal fade in" id="exampleModal" style={{paddingRight: '15px'}} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Thêm sản phẩm</h4>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>UserName</b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="password" class="form-control" id="inputPassword3"/>
                                  </div>
                                </div>
                                 <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>Password</b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="password" class="form-control" id="inputPassword3"/>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                          <thead>
                            <tr role="row">
                              <th onClick={() => this.sortHandleClick('mahh')} className="sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{ width: '15%' }}> <b>Mã hàng hóa </b>
                                {iconMahh}
                              </th>
                              <th onClick={() => this.sortHandleClick('tenhang')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={{ width: '40%' }}><b>Tên hàng </b>{iconTenhang}
                              </th>
                              <th onClick={() => this.sortHandleClick('giaban')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: '15%' }}><b>Giá bán </b> {iconGiaban}
                              </th>
                              <th onClick={() => this.sortHandleClick('giavon')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending"
                                style={{ width: '15%' }}><b>Giá vốn </b> {iconGiavon}
                              </th>
                              <th onClick={() => this.sortHandleClick('tonkho')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: '10%' }}><b>Tồn kho </b> {iconTonkho}
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: '5%' }}>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>A</td>
                              <td>Edit Delete</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>A</td>
                              <td>Edit Delete</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="dataTables_paginate paging_simple_numbers text-align-center" id="example1_paginate">
                          <ul className="pagination">
                            <li className="paginate_button previous disabled" id="example1_previous">
                              <a href="#" aria-controls="example1" data-dt-idx="0" tabIndex="0">Previous</a>
                            </li>
                            <li className="paginate_button active">
                              <a href="#" aria-controls="example1" data-dt-idx="1" tabIndex="0">1</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="example1" data-dt-idx="2" tabIndex="0">2</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="example1" data-dt-idx="3" tabIndex="0">3</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="example1" data-dt-idx="4" tabIndex="0">4</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="example1" data-dt-idx="5" tabIndex="0">5</a>
                            </li>
                            <li className="paginate_button ">
                              <a href="#" aria-controls="example1" data-dt-idx="6" tabIndex="0">6</a>
                            </li>
                            <li className="paginate_button next" id="example1_next">
                              <a href="#" aria-controls="example1" data-dt-idx="7" tabIndex="0">Next</a>
                            </li>
                          </ul>
                        </div>
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

const SanPhamView = connect((state) => {
  return state;
})(SanPham);

export default SanPhamView;

