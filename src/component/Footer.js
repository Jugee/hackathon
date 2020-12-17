import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="footer-heading mb-4">Вэбийн талаар</h2>
                  <p>
                    “Уул Уурхайг Өгөгдлөөр Урлахуй” цахим хакатонд "Байгаль
                    орчны нөхөн сэргээлт " сэдвээр оролцож "The Makers" багын
                    бүтээл буюу хэрхэн байгаль дэлхийгээ хамгаалж үлдэх болон
                    ....
                  </p>
                </div>
                <div className="col-md-4 ml-auto">
                  <h2 className="footer-heading mb-4">Боломжууд</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Бидний тухай</a>
                    </li>
                    <li>
                      <a href="#">Статистик мэдээлэл</a>
                    </li>
                    <li>
                      <a href="#">Бусад</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="mb-5">
                <h2 className="footer-heading mb-4">Мэдээлэл авах </h2>
                <form action="#" method="post" className="footer-suscribe-form">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control border-secondary text-white bg-transparent"
                      placeholder="Мэйл хаяг"
                      aria-label="Мэйл хаяг"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        id="button-addon2"
                      >
                        Бүртгүүлэх
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <h2 className="footer-heading mb-4">Бидний сошиал холбоосууд</h2>
              <a href="#about-section" className="smoothscroll pl-0 pr-3">
                <span className="icon-facebook" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-twitter" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-instagram" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-linkedin" />
              </a>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p className="copyright">
                  <small>
                    Copyright © 2020 | by{" "}
                    <a href="#" target="_blank">
                      The Makers баг Эх орон байгаль эхээ хайрлая
                    </a>{" "}
                    <i className="icon-heart text-danger" aria-hidden="true" />{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
