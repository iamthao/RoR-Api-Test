import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import {
    callGetListSP,
    callAddNewSP,
    callSPPaging,
    setImageToList,
    deleteImagefromList,
    setImageEmpty
} from '../../actions/HangHoa/hangHoaActions';
import ReactPaginate from 'react-paginate';

class SanPham extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      col: 'mahh',
      asc: true,
      error_masp: false,
      error_masp_msg :''
    };
    this.sortHandleClick = this.sortHandleClick.bind(this)

    this.openModalClick = this.openModalClick.bind(this)
    this.closeModelClick = this.closeModelClick.bind(this)
    this.addNewClick = this.addNewClick.bind(this)

    this.handlePageChange = this.handlePageChange.bind(this)
    this.onImageChange = this.onImageChange.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(callGetListSP());
  };

  sortHandleClick(col) {
    this.setState({
      asc: this.state.col != col ? true : !this.state.asc,
      col: col
    });
  };

  closeModelClick(){
    $('#addNewModal').modal('hide');
  }

  openModalClick(){
    this.props.dispatch(setImageEmpty())
    $('#masp').val('');
    $('#tensp').val('');
    $('#giaban').val('');
    $('#giavon').val('');
    $('#tonkho').val('');
    $("#group_image").val('');

    this.setState({
      error_masp: false,
      error_masp_msg :''
    });

    $('#addNewModal').modal('show');
  }

  addNewClick(){
    let isError = false;
    if ($('#masp').val().trim() === ''){
      this.setState({
        error_masp: true,
        error_masp_msg: 'Mã SP không được trống'
      });
      isError = true;
    }

    if(isError){
      return;
    }
    else
    {
      this.props.dispatch(callAddNewSP($('#masp').val(), $('#tensp').val(), $('#giaban').val(), $('#giavon').val(), $('#tonkho').val() ));
      $('#addNewModal').modal('hide');
    }

  }

  handlePageChange(page){
     this.props.dispatch(callSPPaging(page.selected +1))
  }

  onImageChange(event){
    if(this.props.hangHoaReducer.images.size >= 5){
        $("#group_image").val('');
        alert('Allow 5 images')
        return;
    }
    else if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              //this.setState({image: this.state.image.push(e.target.result)});
              this.props.dispatch(setImageToList(e.target.result));
            };
            reader.readAsDataURL(event.target.files[0]);
    }
  }

  deleteImage(index){
    this.props.dispatch(deleteImagefromList(index))
  }

  render() {
    let props = this.props.hangHoaReducer;
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
                        <button className="btn btn-sm btn-primary" onClick={() => this.openModalClick()}><i className="fa fa-plus"></i> Thêm mới</button>
                        <div className="modal  fade in" id="addNewModal" style={{paddingRight: '15px'}} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <b>Mã SP: <span style={{color: 'red'}}>*</span></b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="text" className="form-control" id="masp"/>
                                  </div>
                                  {this.state.error_masp ?
                                    <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                      <span style={{color: 'red'}}>{this.state.error_masp_msg}</span>
                                    </div> : ''}
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>Tên SP: <span style={{color: 'red'}}>*</span></b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="text" className="form-control" id="tensp"/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>Giá bán: <span style={{color: 'red'}}>*</span></b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="text" className="form-control" id="giaban"/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>Giá vốn: <span style={{color: 'red'}}>*</span></b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="text" className="form-control" id="giavon"/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <b>Tồn kho: <span style={{color: 'red'}}>*</span></b>
                                  </div>
                                  <div className="col-sm-12">
                                    <input style={{width: '100%'}} type="text" className="form-control" id="tonkho"/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                  <div className="col-sm-12" style={{marginBottom: '5px'}}>
                                    <input multiple type="file" onChange={(event) =>this.onImageChange(event)} className="filetype" id="group_image"/>
                                  </div>
                                  <div className="col-sm-12">
                                    <div className="row" style={{padding: '0 15px'}}>
                                       {props.images.map((value, index) =>
                                        <div className="col-sm-4 img-wrap" key={index} style={{padding: '0'}}>
                                          <button onClick={() =>this.deleteImage(index)} type="button" className="btn btn-sm delete-image">x</button>
                                          <img width='100%' src={value} key={index} height="120px"/>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <div className="row">
                                  <div className="col-sm-6 col-xs-12">
                                     <span className="pull-left">(<span style={{color: 'red'}}>*</span>) : Không được trống </span>
                                  </div>
                                  <div className="col-sm-6 col-xs-12" style={{textAlign: 'right'}}>
                                     <button type="button" className="btn btn-default" onClick={() => this.closeModelClick()}><i className="fa fa-times"></i> Đóng</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.addNewClick()}><i className="fa fa-save"></i> Lưu</button>
                                  </div>
                                </div>
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
                                style={{ width: '10%' }}><b>Giá bán </b> {iconGiaban}
                              </th>
                              <th onClick={() => this.sortHandleClick('giavon')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending"
                                style={{ width: '10%' }}><b>Giá vốn </b> {iconGiavon}
                              </th>
                              <th onClick={() => this.sortHandleClick('tonkho')} className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: '10%' }}><b>Tồn kho </b> {iconTonkho}
                              </th>
                              <th  className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: '10%' }}><b>Image </b> {iconTonkho}
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: '5%' }}>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {props.data.map((value, index) =>
                              <tr role="row" className={index % 2 == 0 ? "odd" : "even"} key ={index}>
                                <td>{value.masp}</td>
                                <td>{value.tensp}</td>
                                <td>{value.giaban}</td>
                                <td>{value.giavon}</td>
                                <td>{value.tonkho}</td>
                                 <td> <img width='100%' src={value.image_1} height="50px"/></td>
                                <td>Edit Delete</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12" style={{textAlign:'center'}}>
                        <ReactPaginate previousLabel={"Previous"}
                       nextLabel={"Next"}
                       breakLabel={<a href="#">...</a>}
                       breakClassName={"break-me"}
                       pageCount={props.total_page}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageChange}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
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

