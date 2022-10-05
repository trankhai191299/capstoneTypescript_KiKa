import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '../configStore';
import {http} from '../../utils/setting'
export interface SubjectModel {
    maKhoaHoc:      string;
    biDanh:         string;
    tenKhoaHoc:     string;
    moTa:           string;
    luotXem:        number;
    hinhAnh:        string;
    maNhom:         string;
    ngayTao:        string;
    soLuongHocVien: number;
    nguoiTao:       NguoiTao;
    danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface DanhMucKhoaHoc {
    maDanhMucKhoahoc:  string;
    tenDanhMucKhoaHoc: string;
}

export interface NguoiTao {
    taiKhoan:         string;
    hoTen:            string;
    maLoaiNguoiDung:  string;
    tenLoaiNguoiDung: string;
}
const initialState:any = {
    arrSubject: []
}

const subjectReducer = createSlice({
  name: "subjectReducer",
  initialState,
  reducers: {
    getAllSubjectAction:(state,action:PayloadAction<SubjectModel[]>)=>{
        state.arrSubject = action.payload
    }
  }
});

export const {getAllSubjectAction} = subjectReducer.actions

export default subjectReducer.reducer

//------------------action api
export const getAllSubjectApi = () =>{
    return async (dispatch:AppDispatch)=>{
        try {
            let result = await http.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
            let arrSubject:SubjectModel[] = result.data
            console.log(result);
            const action = getAllSubjectAction(arrSubject)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}