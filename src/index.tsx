import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { Provider } from 'react-redux';
import HomeTemplate from './template/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';
import UserInform from './pages/UserInform/UserInform';
import Category from './pages/Category/Category';
//store redux
import { store } from './redux/configStore'
//css+scss
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import './assets/scss/styles.scss';
//history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//test page import
import TestKhai from './Test/KhaiTest/Test';
import TestKien from './Test/KienTest/Test';
import Test1 from './Test/KhaiTest/Test1';
import LinkTest from './Test/KhaiTest/LinkTest';
import Test2 from './Test/KhaiTest/Test2';
import AdminTemplate from './template/AdminTemplate';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import CourseManagement from './pages/Admin/CourseManagement/CourseManagement';
import Test3 from './Test/KhaiTest/Test3';
import SearchResult from './Test/KhaiTest/TestComponent/SearchResult';
export const history = createBrowserHistory({ window });
//
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
    <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Navigate to="" />}></Route>
        <Route path='testkhai' element={<TestKhai/>}>
          <Route index element={<LinkTest/>}></Route>
          <Route path='test1' element={<Test1/>}></Route>
          <Route path='test2' element={<Test2/>}></Route>
          <Route path='test3' element={<Test3/>}></Route>
          <Route path='searchtest' element={<SearchResult/>}></Route>
        </Route>
        <Route path='testkien' element={<TestKien/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='userinform' element={<UserInform/>}></Route>
        <Route path='category' element={<Category/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>
      </Route>
      <Route path='amin' element={<AdminTemplate/>}>
        <Route path='usermanagement'element={<UserManagement/>}></Route>
        <Route path='coursemanagement'element={<CourseManagement/>}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);


