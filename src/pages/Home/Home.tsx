import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  CourseModel,
  getAllCourseApi,
} from "../../redux/reducers/courseReducer";
import { randomCourse } from "../../utils/setting";
// import abc from '../../assets/images/hairstyle17.jpg'
type Props = {};

export default function Home({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const arrCourse = useSelector(
    (rootState: RootState) => rootState?.courseReducer?.arrCourse
  );
  React.useEffect(() => {
    const action = getAllCourseApi();
    dispatch(action);
  }, []);
  const renderCourse = () => {
    let newArrCourse = randomCourse(arrCourse,8)
    return newArrCourse.map((crs: CourseModel, index: number) => {
      return (
        <div className="col-lg-3 col-12 mt-2"  key={index}>
          <div className="card shadow p-3 mb-4 bg-body rounded border-white">
            <img height="200" src={crs.hinhAnh} alt={crs.tenKhoaHoc} />
            <div className="card-body">
              <div className="d-flex flex-column">
                <div>
                  <p className="fw-semibold">{crs.tenKhoaHoc}</p>
                </div>
                <NavLink className="btn btn-dark" to={`/detail/${crs.maKhoaHoc}`}>
                  Dang Ky
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
<<<<<<< HEAD
    <div>
      {/* cho nay de carousel */}
      <div className="container">
      <div className="row">{renderCourse()}</div>
=======
    <div className="home">
      <div className="carousel">
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-8"></div>
              <div className="col-4 content">
                <div className="title">
                  <h1>Khởi đầu sự nghiệp của bạn</h1>
                </div>
                <div className="description">
                  <p>Trở thành lập trình chuyên nghiệp tại CyberSoft</p>
                </div>
                <div className="button-area">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-success">Xem khóa học</button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary">Tư vấn học</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> 8e1680d38930c525dc2b63ad7e1fe89103a7124e
      </div>
    </div>
  );
}
