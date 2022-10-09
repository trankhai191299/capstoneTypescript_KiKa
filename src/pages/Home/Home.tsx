import React from 'react'
// import abc from '../../assets/images/hairstyle17.jpg'
type Props = {}

export default function Home({}: Props) {
  return (
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
      </div>
    </div>
  );
}