import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { AppDispatch, RootState } from "../../../redux/configStore"
import {useFormik,FormikProps} from 'formik'
import * as Yup from 'yup'
import { capNhatKhoaHocApi, CourseModel2, DanhMucKhoaHoc, getCourseCategory, themKhoaHocApi } from "../../../redux/reducers/courseReducer"
import { getAllUserApi, UserModel } from "../../../redux/reducers/userReducer"
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import ckeditor from '@ckeditor/ckeditor5-react'
type Props = {}

interface FormValues {
  maKhoaHoc: string;
  biDanh?: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: 0;
  danhGia: 0;
  hinhAnh: string;
  maNhom?: string;
  ngayTao: string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;
  submitAction?:string|undefined;
}

export default function AddCourse({}: Props) {
  const dispatch:AppDispatch = useDispatch()
  const location = useLocation()
  const {allUsers} = useSelector((state:RootState)=>state.userReducer)
  const {courseCategory} = useSelector((state:RootState)=>state.courseReducer)
  const {course} = location.state
  let submitAction: string|undefined = undefined
  const getAllUser = () =>{
    dispatch(getAllUserApi())
  }
  const getCategory = () =>{
    dispatch(getCourseCategory())
  }
  useEffect(()=>{
    getAllUser()
    getCategory()
  },[])
  const getOnlyGvUser = (arr:UserModel[]) =>{
    let newArr = arr.filter((item)=>item.maLoaiNguoiDung?.includes('GV'))
    return newArr
  }
  const renderOptTK = () =>{
    let arrGv = getOnlyGvUser(allUsers)
    return arrGv?.map((user:UserModel,index:number)=>{
      return <option value={user?.taiKhoan} key={index}>{user?.hoTen}</option>
    })
  }
  const renderOptCt = () =>{
    return courseCategory?.map((crs:DanhMucKhoaHoc,index:number)=>{
      return <option value={crs.maDanhMuc} key={index}>{crs.tenDanhMuc}</option>
    })
  }
  const frm:FormikProps<FormValues> = useFormik<FormValues>({
    initialValues:{
      maKhoaHoc: course?.maKhoaHoc,
      tenKhoaHoc: course?.tenKhoaHoc,
      moTa: course?.moTa,
      luotXem: course?.luotXem,
      danhGia: course?.danhGia,
      hinhAnh: course?.hinhAnh,
      ngayTao: course?.ngayTao,
      maDanhMucKhoaHoc: course?.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: course?.taiKhoanNguoiTao,
      submitAction : undefined,
    },
    onSubmit:(values:CourseModel2):void=>{
      if(submitAction === 'addCourse'){
        // dispatch(themKhoaHocApi(values))
        console.log('them khoa ne');
        
      }else if(submitAction === 'uptCourse'){
        // dispatch(capNhatKhoaHocApi(values))
        console.log('cap nhat ne');
        
      }
    },
    validationSchema:Yup.object().shape({
      maKhoaHoc: Yup.string().required('M?? kh??a h???c kh??ng ???????c tr???ng'),
      tenKhoaHoc:Yup.string().required('T??n kh??a h???c kh??ng ???????c tr???ng'),
      moTa:Yup.string().max(1000,'?????ng vi???t nhi???u th??? ch???!'),
      luotXem:Yup.number().min(0,'Kh??ng ???????c nh??? h??n 0').integer(),
      danhGia:Yup.number().min(0,'Kh??ng ???????c nh??? h??n 0').integer(),
      ngayTao:Yup.string().required('Cho xin ng??y t???o').matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,'Ng??y th??ng n??m kh??ng ????ng ?????nh d???ng'),
      maDanhMucKhoaHoc:Yup.string().required('Xin h??y ch???n m?? danh m???c'),
      taiKhoanNguoiTao:Yup.string().required('Xin h??y cho bi???t ng?????i t???o'),
    })
  })

  return (
    <div className="add-course container">
      <h2 className="mt-3">Th??m S???a Kh??a H???c</h2>
      <div className="form-part">
        <form onSubmit={frm.handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>M?? kh??a h???c</p>
                  <input type="text" name="maKhoaHoc" className="form-control" placeholder={course?.maKhoaHoc} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  {frm.errors.maKhoaHoc?<span className="text-danger">{frm.errors.maKhoaHoc}</span>:''}
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>T??n kh??a h???c</p>
                  <input type="text" name="tenKhoaHoc" className="form-control" placeholder={course?.tenKhoaHoc} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  {frm.errors.tenKhoaHoc?<span className="text-danger">{frm.errors.tenKhoaHoc}</span>:''}
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Danh m???c kh??a h???c</p>
                  <select className="form-select" name="maDanhMucKhoaHoc" onChange={frm.handleChange} onBlur={frm.handleBlur}>
                    <option defaultChecked> --Ch???n danh m???c kh??a h???c--</option>
                    {renderOptCt()}
                    {/* <option value="BackEnd">L???p tr??nh Backend</option>
                    <option value="FullStack">L???p tr??nh Full Stack</option>
                    <option value="TuDuy">T?? duy L???p tr??nh</option>
                    <option value="Design">Thi???t k??? Web</option>
                    <option value="DiDong">L???p tr??nh Di ?????ng</option> */}
                  </select>
                  {frm.errors.maDanhMucKhoaHoc?<span className="text-danger">{frm.errors.maDanhMucKhoaHoc}</span>:''}
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Ng??y t???o</p>
                  <input type="text" name="ngayTao" className="form-control" placeholder={course?course?.ngayTao:'dd/mm/yyyy'} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  {frm.errors.ngayTao?<span className="text-danger">{frm.errors.ngayTao}</span>:''}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                <div className="form-group mb-3">
                  <p>????nh gi??</p>
                  <input type="text" name="danhGia" className="form-control" style={{width:'90%'}} placeholder={course?.danhGia} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  {frm.errors.danhGia?<span className="text-danger">{frm.errors.danhGia}</span>:''}
                </div>
                <div className="form-group mb-3">
                  <p>L?????t xem</p>
                  <input type="text" name="luotXem" className="form-control" style={{width:'90%'}} placeholder={course?.luotXem} onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  {frm.errors.luotXem?<span className="text-danger">{frm.errors.luotXem}</span>:''}
                </div>
                <div className="form-group mb-3">
                  <p>Ng?????i t???o</p>
                  <select className="form-select" name="taiKhoanNguoiTao" onChange={frm.handleChange} onBlur={frm.handleBlur}>
                    <option defaultChecked> --Ch???n ng?????i t???o--</option>
                    {renderOptTK()}
                    {/* <option value="dpnguyen">L?? Quang Anh</option>
                    <option value="khanhpham">Ph???m Vi???t Kh??nh</option>
                    <option value="hunggv1">H??ng GV</option>
                    <option value="123">Phong</option>
                    <option value="nguyenvana">Nguy???n V??n A</option>
                    <option value="LongDangDn05">?????ng Ti???n Long</option> */}
                  </select>
                  {frm.errors.taiKhoanNguoiTao?<span className="text-danger">{frm.errors.taiKhoanNguoiTao}</span>:''}
                </div>
                <div className="form-group mb-3">
                  <p>H??nh ???nh</p>
                  <input type="file" name="hinhAnh" accept="image/png, image/jpeg"  className="form-control" style={{width:'90%'}} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <p>M?? t???</p>
            <textarea className="form-control" name="moTa" placeholder={course?course?.moTa:"M?? t??? ??? ????y"} cols={30} rows={10} style={{width:'95%'}} onChange={frm.handleChange} onBlur={frm.handleBlur}></textarea>
            {frm.errors.moTa?<span className="text-danger">{frm.errors.moTa}</span>:''}
          </div>
          <div className="d-flex justify-content-between mt-4 mb-5">
            <div className="turn-back">
              <NavLink to={'/admin/coursemanagement'}>Tr??? l???i</NavLink>
            </div>
            <div className="btn-area">
              <button type="button" className="btn btn-warning mx-2" onClick={()=>{
                submitAction = 'addCourse'
                frm.handleSubmit()
              }}>Th??m</button>
              <button type="button" className="btn btn-secondary mx-2" onClick={()=>{
                submitAction = 'uptCourse'
                frm.handleSubmit()
              }}>L??u</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}