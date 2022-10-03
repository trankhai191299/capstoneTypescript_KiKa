import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { Provider } from 'react-redux';
import HomeTemplate from './template/HomeTemplate';
import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import Detail from './pages/Detail/Detail';
//store redux
import { store } from './redux/configStore'
//css+scss
import 'antd/dist/antd.css';
//history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({ window });
//
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Navigate to="" />}></Route>
        {/* <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

