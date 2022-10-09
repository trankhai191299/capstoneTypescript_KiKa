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
    <div>
      {/* cho nay de carousel */}
      <div className="container">
      <div className="row">{renderCourse()}</div>
      </div>
    </div>
  );
}
