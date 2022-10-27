import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/configStore";
import * as Yup from "yup";
import { registerApi, UserModel } from "../../../redux/reducers/userReducer";

type Props = {};
interface FormValues {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
  loaiNguoiDung: string;
}

export default function UserManagement({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const frm: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
      loaiNguoiDung: '',
    },
    onSubmit: (values: UserModel): void => {
      dispatch(registerApi(values));
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được để trống!"),
      matKhau: Yup.string()
        .required("Mật khẩu không được để trống!")
        .min(6, "Mật khẩu có độ dài từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu có độ dài từ 6 đến 32 ký tự"),
      hoTen: Yup.string()
        .required("Yêu cầu họ tên!")
        .matches(
          /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/,
          "Tên không đúng định dạng"
        ),
      soDT: Yup.string()
        .required("Phải có số điện thoại!")
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Số điện thoại không đúng định dạng(09...)"
        )
        .max(10, "Số điện thoại tối đa 10 số"),
      email: Yup.string()
        .required("Email không được để trống!")
        .email("Email sai định dạng. Xin hãy thử lại!"),
    }),
  });
  return (
    <div>
      <div className="userContainer mt-5">
        <button
          type="button"
          className="btn btn-dark btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Thêm người dùng
        </button>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Them nguoi dung
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row g-3" onSubmit={frm.handleSubmit}>
                  <div className="col-md-6 form-floating mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label className="fw-normal fs-6" htmlFor="floatingInput">
                      Email address
                    </label>
                    {frm.errors.email ? (
                      <span className="text-danger fs-6 fw-lighter fst-italic ms-1 text-capitalize">
                        {frm.errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-6 form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label
                      className="fw-normal fs-6"
                      htmlFor="floatingPassword"
                    >
                      Password
                    </label>
                    {frm.errors.matKhau ? (
                      <span className="text-danger fs-6 fw-lighter fst-italic ms-1 text-capitalize">
                        {frm.errors.matKhau}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-6 form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="passwordConfirm"
                      placeholder="Confirm Password"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label
                      className="fw-normal fs-6"
                      htmlFor="floatingConfirmPassword"
                    >
                      Tai Khoan
                    </label>
                  </div>
                  <div className="col-md-6 form-floating mb-4">
                    <input
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label className="fw-normal fs-6" htmlFor="name">
                      Name
                    </label>
                    {frm.errors.hoTen ? (
                      <span className="text-danger fs-6 fw-lighter fst-italic ms-1 text-capitalize">
                        {frm.errors.hoTen}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-6 form-floating mb-4">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="phone"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label className="fw-normal fs-6" htmlFor="phone">
                      Phone
                    </label>
                    {frm.errors.soDT ? (
                      <span className="text-danger fs-6 fw-lighter fst-italic ms-1 text-capitalize">
                        {frm.errors.soDT}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-6 form-floating mb-4">
                    <fieldset className="row">
                      <legend className="col-form-label col-sm-2 pt-0 ps-3">
                        Gender
                      </legend>
                      <div className="col-sm-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender"
                            value="Hoc Vien"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="gender1">
                            Hoc Vien
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender"
                            value="Giao Vu"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="gender2">
                            Giao Vu
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="d-grid mt-4 mb-4">
                    <button className="btn btn-dark">Submit</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <input type="search" placeholder="Search" />
        <button className="btn btn-dark btn-sm">Search</button>
      </div>
      <div className="d-flex mt-5">
        <div className="table-responsive border border-dark">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tai Khoan</th>
                <th>Mat Khau</th>
                <th>Ho Ten</th>
                <th>Email</th>
                <th>So Dien Thoai</th>
                <th>Thao Tac</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
