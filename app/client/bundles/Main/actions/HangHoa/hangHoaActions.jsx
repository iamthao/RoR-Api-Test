//get list SP
export const callGetListSP = () => {
    return {type: 'CALL_GET_LIST_SP'}
};

export const initHangHoa = () => {
    return { type: 'INIT_HANG_HOA' }
};

export const getListSPSuccess = (data) => {
    return {
      type: 'GET_LIST_SP_SUCCESS',
      data: data}
};

//add new SP
export const callAddNewSP = (masp, tensp, giaban, giavon, tonkho) => {
    return {
      type: 'CALL_ADD_NEW_SP',
      masp: masp,
      tensp: tensp,
      giaban: giaban,
      giavon: giavon,
      tonkho: tonkho
    }
};

//Paging
export const callSPPaging = (page) => {
    return {
      type: 'CALL_SP_PAGING',
      page: page
    }
};

export const setValueSPPaging = (page) => {
    return { type: 'SET_VALUE_SP_PAGING',
    page : page }
};

export default {
  callGetListSP, initHangHoa, getListSPSuccess,
  callAddNewSP,
  callSPPaging, setValueSPPaging
}

