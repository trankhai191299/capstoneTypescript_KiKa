import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import { http } from "../../utils/setting";
export interface CourseModel {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: NguoiTao;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface DanhMucKhoaHoc {
  maDanhMuc: string;
  tenDanhMuc: string;
}

export interface NguoiTao {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}
const initialState: any = {
  arrCourse: [],
  courseDetail: {},
  searchCourses: [],
  courseCategory: [],
  courseByCategory:[]
};

const courseReducer = createSlice({
  name: "subjectReducer",
  initialState,
  reducers: {
    getAllCourseAction: (state, action: PayloadAction<CourseModel[]>) => {
      state.arrCourse = action.payload;
    },
    getSearchCourseAction: (state, action: PayloadAction<CourseModel[]>) => {
      state.searchCourses = action.payload;
    },
    getCourseCategoryAction: (
      state,
      action: PayloadAction<DanhMucKhoaHoc[]>
    ) => {
      state.courseCategory = action.payload;
    },
    getCourseDetailAction:(state,action:PayloadAction<CourseModel>)=>{
      state.courseDetail = action.payload
    },
    getCourseByCategoryAction:(state,action:PayloadAction<CourseModel[]>) => {
      state.courseByCategory = action.payload
    }
  },
});

export const {
  getAllCourseAction,
  getSearchCourseAction,
  getCourseCategoryAction,
  getCourseDetailAction,
  getCourseByCategoryAction
} = courseReducer.actions;

export default courseReducer.reducer;

//------------------action api
export const getAllCourseApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(
        "/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      );
      let arrSubject: CourseModel[] = result.data;

      const action = getAllCourseAction(arrSubject);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseByName = (khoahoc: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(
        `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${khoahoc}&MaNhom=GP01`
      );
      
      let searchArr: CourseModel[] = result.data;

      const action = getSearchCourseAction(searchArr);
      dispatch(action);
    } catch (error) {
      console.log(error);
      
    }
  };
};

export const getCourseCategory = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      let arrCate = result.data;
      // console.log(result);
      const action = getCourseCategoryAction(arrCate);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseDetailApi = (id:any) =>{
  return async (dispatch: AppDispatch)=>{
    try {
      let result = await http.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
      // console.log(result.data);

      let courseDetail = result.data
      const action = getCourseDetailAction(courseDetail)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCourseByCategoryApi = (maDanhMuc:string) => {
  return async (dispatch : AppDispatch) => {
    try{
      let result = await http.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)
      let courseByCategory = result.data
      const action = getCourseByCategoryAction(courseByCategory)
    }catch (err) {
      console.log(err)
    }
  }
}