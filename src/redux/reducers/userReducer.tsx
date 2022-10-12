import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch,RootState } from "../configStore";
import {
  setCookie,
  getStore,
  getStoreJson,
  ACCESS_TOKEN,
  http,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../utils/setting";
import { history } from "../../index";
import { values } from "lodash";

export interface LoginModel{
  taiKhoan: string,
  matKhau: string,
}
export interface UserModel{
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom?: string,
  email: string,
  confirmMatKhau?:string,
  maLoaiNguoiDung?:string,
}
const initialState:any = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state,action:PayloadAction<UserModel[]>) => {
      state.userLogin = action.payload
    }
  },
});

export const {getProfileAction} = userReducer.actions;

export default userReducer.reducer;

export const getProfileApi = () =>{
  return async (dispatch:AppDispatch)=>{
    try {
      const result = await http.post('/QuanLyNguoiDung/ThongTinTaiKhoan')
      setStoreJson(USER_LOGIN,result.data)
      const action = getProfileAction(result.data)
      dispatch(action)
    } catch (error) {
      console.log(error);
      
    }
  }
}

export const loginApi = (userLogin:LoginModel) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.post("/QuanLyNguoiDung/DangNhap", userLogin);
      setCookie(ACCESS_TOKEN, result.data.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.accessToken);
      alert("Đăng nhập thành công")
      history.push("/home");
      const action = getProfileApi();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
export const registerApi = (values:UserModel) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.post("/QuanLyNguoiDung/DangKy", values);
  
      // console.log(result.data)
      alert('Đăng ký thành công!')
      history.push("/login");
      const action = getProfileApi();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateUserApi = (values:UserModel)=>{
  return async (dispatch:AppDispatch)=>{
    try {
      const result = await http.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung',values)
      console.log(result);
      const action = getProfileApi()
      dispatch(action)
    } catch (error) {
      console.log(error);
      
    }
  }
}