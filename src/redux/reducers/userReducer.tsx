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

export interface UserModel{
  account: string,
  password: string
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

export const loginApi = (userLogin:UserModel) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.post("/QuanLyNguoiDung/DangNhap", userLogin);

      setCookie(ACCESS_TOKEN, result.data.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.accessToken);
      console.log(result.data)
      history.push("/home");
      //const action = getProfileApi();
      //dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
