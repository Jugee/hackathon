import React from "react";
import {
  AlertOutlined,
  BulbOutlined,
  CloseCircleOutlined,
  DeploymentUnitOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
  StarOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";
import ChartPieSecond from "./ChartPieSecond";
import ChartAreaOne from "./ChartAreaOne";
import ChartAreaSecond from "./ChartAreaSecond";
import ChartAreaThird from "./ChartAreaThird";

export default function Content() {
  return (
    <>
      <div className="owl-carousel slide-one-item">
        <div
          className="site-section-cover overlay img-bg-section"
          style={{
            backgroundImage: 'url("images/Snow_leopard_2.jpg")',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-12 col-lg-7">
                <h1 data-aos="fade-up" data-aos-delay>
                  Ховордсон ан амьтадын дайсан хүмүүс хэвээр л байх уу ?
                </h1>
                <p
                  className="mb-5 w-75 mx-auto"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Жилээс жилд ховор ан амьтадын тоо толгой буурсаар л.
                </p>
                <p data-aos="fade-up" data-aos-delay={200}>
                  <a
                    href="#slider1"
                    className="btn btn-outline-white border-w-2 btn-md"
                  >
                    Цааш үзэх
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="site-section-cover overlay img-bg-section"
          style={{ backgroundImage: 'url("images/mining.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-12 col-lg-8">
                <h1 data-aos="fade-up" data-aos-delay>
                  Бидний ирээдүй Шийдэлд хүрдэггүй маргаан !
                </h1>
                <p
                  className="mb-5 w-75 mx-auto"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Бидэнд асуудлуудыг шийдэх боломж байна уу
                </p>
                <p data-aos="fade-up" data-aos-delay={200}>
                  <a
                    href="#slider2"
                    className="btn btn-outline-white border-w-2 btn-md"
                  >
                    Цааш үзэх
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section" id="services-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Таны сонорт хүргэх нь ?</h2>
                <p>
                  Бид энэхүү вэб сайтаараа доорх мэдлэгийг таньд хүргэх болно
                </p>
              </div>
            </div>
          </div>
          {/*---------------------------------------------------------------------------- cards eposids ------------------------------------------------------------------------------------*/}
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  <StarOutlined />
                </div>
                <a href="#faq-section" className="nav-link">
                  <h3 className="mb-3 text-white" style={{ cursor: "pointer" }}>
                    Байгаль орчны нөхөн сэргээлт
                  </h3>
                </a>
                Байгаль орчны нөхөн сэргээлт буюу ургамал, ан амьтан хамгаалах
                мөн байгалийн тэнцвэрт байдлыг хадгалахад оршино.
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  {/* <span className="flaticon-skateboard-3"> */}
                  <DeploymentUnitOutlined />
                  {/* </span> */}
                </div>
                <a href="#" className="nav-link">
                  <h3 className="mb-3 text-white">
                    Уул уурхай бидний амьдарч буй байгаль орчинд хэрхэн нөлөөлөх
                    вэ?
                  </h3>
                </a>
                Уул уурхай бидний амьдарч буй байгаль орчинд цөлжилт, бэлчээрийн
                доройтол, зэрлэг амьтдыг эрсдэлд оруулж байна.
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  {/* <span className="flaticon-skateboard-3" /> */}
                  <ExclamationCircleOutlined />
                </div>
                <a href="#" className="nav-link">
                  <h3 className="mb-3 text-white">
                    Уул уурхай нийгэмд үүсгэсэн маргааныг хурцлахуй !
                  </h3>
                </a>
                Бидний нийгэмд уул уурхайгаас үүдэлтэй маргааны асуудлууд байнга
                үүсдэг. Энэ асуудлыг бид өөр шатанд авчирж шийдэх боломжтой юм
                биш биз.
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  <CloseCircleOutlined />
                </div>
                <a href="#" className="nav-link">
                  <h3 className="mb-3 text-white">
                    Ховордсон амьтдын дайсан хүмүүс хэвээр л байх уу?
                  </h3>
                </a>
                Байгалийн экологийн тэнцвэрт байдлыг алдагдуулсныхаа хэрээр бид
                бүхэн тэнцвэржүүлэх бас эрэлхийлэл хэрэгтэй. Яг л Аристотeль шиг
                надад тулах цэг өг би дэлхийг өргөе гэдэг шиг.
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  <BulbOutlined />
                </div>
                <a href="#" className="nav-link">
                  <h3 className="mb-3 text-white">
                    Бидэнд энэ асуудлуудыг шийдэх боломж байна уу?
                  </h3>
                </a>
                Уул уурхайгаас үүдэлтэй байгаль орчны доройтол, ховор ан амьтдын
                устах мөхөхийн асуудал зэргийг математик загвар ашиглан судалж
                үзье.
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="block__35630">
                <div className="icon mb-3">
                  <RocketOutlined />
                </div>
                <a href="#" className="nav-link">
                  <h3 className="mb-3 text-white">
                    Ирээдүйд бид хаана байхыг хүсэж байна вэ ?
                  </h3>
                </a>
                Байгаль орчин, ан амьтан болон уул уурхайн хоорондын тэнцвэрт
                байдлыг хадгалж үлдээх, мөн ховор амьтдыг үлгэр домгийн
                төсөөллийн амьтан болгохыг бид хүсэхгүй байна.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------------------------------------- header desc dashboard ------------------------------------------------------------------------------------*/}
      <div className="site-section">
        <div className="block__73694 mb-2" id="slider1">
          <div className="container">
            <div className="row d-flex no-gutters align-items-stretch">
              <div
                className="col-12 col-lg-6 block__73422"
                style={{ backgroundImage: 'url("images/mining.jpg")' }}
                data-aos="fade-right"
                data-aos-delay
              ></div>
              <div
                className="col-lg-5 ml-auto p-lg-5 mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay
              >
                <h2 className="mb-3 text-primary">
                  Бидний ирээдүй Шийдэлд хүрдэггүй маргаан !
                </h2>
                <p>
                  Динамик системийн тусламжтайгаар уул уурхайн ашиглалт зэрлэг
                  ан амьтдын өсөлтөд урт хугацаандаа нөлөөлөх нөлөөллийг судлав.
                  Бид гадаадын эрдэмтдийн судалгааны ажил болон Гурвантэс сум,
                  Өмнөговь аймгийн судалгааны ажил, янгир, цоохор ирвэсийг
                  судалсан судлаачдын дүгнэлт судалгааг үндэслэн тооцов.
                </p>
                <p>
                  Судалгааны загварын суурь өгөгдөл болох анхны өгөгдлүүд
                  статистик тайлан болон судалгаанаас тодорхойлогдсон боловч,
                  цоохор ирвэс, янгир зэрэг амьтдын өсөлтийн динамик судалгаа нь
                  манай оронд хийгдэж байгаагүй тул энэ тал дээр илүү
                  гүнзгийрүүлэн судлах зүйтэй гэж үзэж байна.
                </p>
                <ul className="ul-check primary list-unstyled mt-5">
                  <li>Шийдэлд хүрдэгүй маргаан</li>
                  <li>Байгалийн тэнцвэрт байдал</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="block__73694" id="slider2">
          <div className="container">
            <div className="row d-flex no-gutters align-items-stretch">
              <div
                className="col-12 col-lg-6 block__73422 order-lg-2"
                style={{ backgroundImage: 'url("images/Amazing.jpg")' }}
                data-aos="fade-left"
                data-aos-delay
              ></div>
              <div
                className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1"
                data-aos="fade-right"
                data-aos-delay
              >
                <h2 className="mb-3 text-primary">
                  Ховордсон ан амьтадын дайсан хүмүүс хэвээр л байх уу ?
                </h2>
                <p>
                  Манай орны улаан номд орсон "Уулын эзэн" гэгдэх цоохор ирвэс
                  нь дэлхийд 4000 тоо толгой байдгийн 1000 гаруй нь манай Монгол
                  оронд байдаг. Өмнөговь аймгийн Гурвантэс суманд 2016 оны
                  байдлаар 203 тоо толгой цоохор ирвэс байна.
                </p>
                <p>
                  Уул уурхайн ашиглалтаас үүдэлтэй бэлчээрийн доройтлоос
                  шалтгаалж цоохор ирвэсийн гол идэш тэжээл болох янгирын тоо
                  толгой буурсантай холбоотойгоор цоохор ирвэсд устаж мөхөх аюул
                  нүүрлэж байна.
                </p>
                <ul className="ul-check primary list-unstyled mt-5">
                  <li>Бэлчээрийн доройтол</li>
                  <li>Зэрлэг ан амьтадын тоо толгойн хорогдолт</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------------------------------------- Video player ------------------------------------------------------------------------------------*/}
      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row justify-content-center mb-4 block-img-video-1-wrap">
            <div className="col-md-12 mb-5">
              <figure className="block-img-video-1" data-aos="fade">
                <a
                  href="https://www.youtube.com/watch?v=KyXVYf98IMQ&feature=youtu.be"
                  data-fancybox
                  data-ratio={2}
                >
                  <span className="icon">
                    <span className="icon-play" />
                  </span>
                  <img
                    src="images/Snow_leopard_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div
                  className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay
                >
                  <div className="block-counter-1">
                    <span className="number text-primary">
                      <span data-number={17}>12</span>+
                    </span>
                    <span className="caption">Наслалт</span>
                  </div>
                </div>
                <div
                  className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="block-counter-1">
                    <span className="number text-primary">
                      <span data-number={160}>90</span>+
                    </span>
                    <span className="caption">Биеийн урт /cм/</span>
                  </div>
                </div>
                <div
                  className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="block-counter-1">
                    <span className="number text-primary">
                      <span data-number={27}>25</span>+
                    </span>
                    <span className="caption">Жин /кг/</span>
                  </div>
                </div>
                <div
                  className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="block-counter-1">
                    <span className="number text-primary">
                      <span data-number={4000}>3000</span>+
                    </span>
                    <span className="caption">Байгаль дах тоо толгой</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------------------------- dashboard Real -----------------------------------------------------------------------------*/}
      <div className="site-section" id="dashboard">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Танд зориулсан статистик</h2>
                <p>
                  Бид Өмнөговь аймгийн Гурвантэс cум мөн тухайн бүс нутгийн
                  ховор ан амьтан ургамал, уул уурхай зэрэг хүчин зүйлсийг
                  хамааруулж судаллаа.
                </p>
              </div>
            </div>
          </div>

          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              //   visibility: "hidden",
            }}
          >
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ width: "50%", marginRight: "15px", height: "400px" }}
              className="subChart"
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Гурвантэс сумын уул уурхайн ашиглалтын төрөл га талбайгаар
              </h3>
              <ChartPie />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ width: "50%" }}
              className="subChart"
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Гурвантэс сумын бэлчээрийн төрөл га талбайгаар
              </h3>
              <ChartPieSecond />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              style={{ width: "100%" }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Цоохор ирвэсийн идэш тэжээлийн бүрэлдэхүүн
              </h3>
              <ChartBar />
            </Col>
          </Row>
          <div
            className="row mb-5 justify-content-center"
            style={{ marginTop: "110px" }}
          >
            <div className="col-md-7 text-center">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Үр дүнгийн график</h2>
                <p>
                  Гадаадын эрдэмтдийн уул уурхайн байгаль орчинд нөлөөлж буй
                  судалгааны ажлыг Монгол нөхцөлд тохируулан, динамик системийн
                  арга ашиглан байгаль орчин, ан амьтан болон уул уурхайн
                  тогтвортой байдлын шийдэлд хүрэхийг эрмэлзсэн.
                </p>
              </div>
            </div>
          </div>
          <Row style={{ marginTop: "30px" }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              style={{ width: "100%" }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Ургамлын нөөц га талбайгаар уул уурхайн идэвхжлийн нөлөөлөл
                /ирээдүй/
              </h3>
              <ChartAreaOne />
            </Col>
          </Row>
          <Row style={{ marginTop: "120px" }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              style={{ width: "100%" }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Янгир ямааны тоо толгой, уул уурхайн идэвхжлийн нөлөөлөл
                /ирээдүй/
              </h3>
              <ChartAreaSecond />
            </Col>
          </Row>
          <Row style={{ marginTop: "120px" }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              style={{ width: "100%" }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  marginBottom: "30px",
                }}
              >
                Цоохор ирвэсний тоо толгой, уул уурхайн идэвхжилийн нөлөөлөл
                /ирээдүй/
              </h3>
              <ChartAreaThird />
            </Col>
          </Row>
        </div>
      </div>
      {/*---------------------------------------------------------------------------- Team members ------------------------------------------------------------------------------------*/}
      <div className="site-section" id="team-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Манай баг</h2>
                <p>Багийн нэр: The Makers</p>
                <p>2020</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div className="block-team-member-1 text-center rounded">
                <figure>
                  <img
                    src="images/m1A.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </figure>
                <h3 className="font-size-20 text-black">Ч.Осор</h3>
                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                  Software Engineer
                </span>
                <div className="block-social-1">
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-facebook" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="block-team-member-1 text-center rounded">
                <figure>
                  <img
                    src="images/m2A.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </figure>
                <h3 className="font-size-20 text-black">Ч.Сумьядорж</h3>
                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                  DATA ANALYST
                </span>
                <div className="block-social-1">
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-facebook" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="block-team-member-1 text-center rounded">
                <figure>
                  <img
                    src="images/m3.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle"
                  />
                </figure>
                <h3 className="font-size-20 text-white">Э.Идэрбаяр</h3>
                <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                  Graphic designer
                </span>
                <div className="block-social-1">
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-facebook" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="btn border-w-2 rounded primary-primary-outline--hover"
                  >
                    <span className="icon-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //not required */}
      {/*---------------------------------------------------------------------------- Price  ------------------------------------------------------------------------------------*/}
      <section className="site-section" id="pricing-section">
        <div className="container">
          {/* <div className="row mb-5 justify-content-center text-center">
            <div className="col-md-7">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Тун удахгүй</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quae temporibus tenetur vitae iusto suscipit alias,
                  laudantium, porro unde tempora.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="pricing">
                <h3 className="text-center text-white">Test</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>947</span> / test
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li className="remove">Lorem ipsum dolor sit amet</li>
                  <li className="remove">Consectetur adipisicing elit</li>
                  <li className="remove">
                    Dolorum esse odio quas architecto sint
                  </li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">
                    test
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="pricing">
                <h3 className="text-center text-white">Test 2</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>200</span> / test
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li className="remove">
                    Dolorum esse odio quas architecto sint
                  </li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-primary btn-md text-white">
                    test now
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="pricing">
                <h3 className="text-center text-white">Test 3</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>750</span> / test
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Dolorum esse odio quas architecto sint</li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">
                    test
                  </a>
                </p>
              </div>
            </div>
          </div> */}
          {/*---------------------------------------------------------------------------- Questions ------------------------------------------------------------------------------------*/}
          <div className="row site-section" id="faq-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title text-primary">АСУУЛТ ХАРИУЛТ</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">Тун удахгүй</h3>
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis. */}
                </p>
              </div>
              {/* <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  Can I accept both Paypal and Stripe?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">Тун удахгүй</h3>
                <p>
                  {/* Voluptatum nobis obcaecati perferendis dolor totam unde
                  dolores quod maxime corporis officia et. Distinctio assumenda
                  minima maiores. */}
                </p>
              </div>
              {/* <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What is your opening time?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  Can I accept both Paypal and Stripe?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/*---------------------------------------------------------------------------- Heleltsuuuleg ------------------------------------------------------------------------------------*/}
      {/* <div
        className="site-section block-13"
        id="testimonials-section"
        data-aos="fade"
      >
        <div className="container">
          <div className="text-center mb-5">
            <div className="block-heading-1">
              <h2>Хэлэлцүүлэг</h2>
            </div>
          </div>
          <div className="owl-carousel nonloop-block-13">
            <div>
              <div className="block-testimony-1 text-center">
                <blockquote className="mb-4">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, fugit excepturi sapiente voluptatum nulla odio
                    quaerat quibusdam tempore similique doloremque veritatis et
                    cupiditate, maiores cumque repudiandae explicabo tempora
                    deserunt consequuntur?”
                  </p>
                </blockquote>
                <figure>
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle mx-auto"
                  />
                </figure>
                <h3 className="font-size-20 text-black">Ricky Fisher</h3>
              </div>
            </div>
            <div>
              <div className="block-testimony-1 text-center">
                <figure>
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle mx-auto"
                  />
                </figure>
                <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>
                <blockquote className="mb-4">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, fugit excepturi sapiente voluptatum nulla odio
                    quaerat quibusdam tempore similique doloremque veritatis et
                    cupiditate, maiores cumque repudiandae explicabo tempora
                    deserunt consequuntur?”
                  </p>
                </blockquote>
              </div>
            </div>
            <div>
              <div className="block-testimony-1 text-center">
                <blockquote className="mb-4">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, fugit excepturi sapiente voluptatum nulla odio
                    quaerat quibusdam tempore similique doloremque veritatis et
                    cupiditate, maiores cumque repudiandae explicabo tempora
                    deserunt consequuntur?”
                  </p>
                </blockquote>
                <figure>
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle mx-auto"
                  />
                </figure>
                <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
              </div>
            </div>
            <div>
              <div className="block-testimony-1 text-center">
                <figure>
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle mx-auto"
                  />
                </figure>
                <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>
                <blockquote className="mb-4">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, fugit excepturi sapiente voluptatum nulla odio
                    quaerat quibusdam tempore similique doloremque veritatis et
                    cupiditate, maiores cumque repudiandae explicabo tempora
                    deserunt consequuntur?”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*---------------------------------------------------------------------------- Бусад контент ------------------------------------------------------------------------------------*/}
      <div className="site-section" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <span>Шинэ мэдээ</span>
                <h2>Тун удахгүй</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay
            >
              <div>
                <a href="single.html" className="mb-4 d-block">
                  <img
                    src="images/leopardNature.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
                <h2>
                  <a href="single.html">Тун удахгүй...</a>
                </h2>
                <p className="text-muted mb-3 text-uppercase small">
                  {/* <span className="mr-2">...</span> .{" "} */}
                  {/* <a href="single.html" className="by">
                    ....
                  </a> */}
                </p>
                <p>
                  ...
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat et suscipit iste libero neque. Vitae quidem ducimus
                  voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga
                  veritatis culpa quis! */}
                </p>
                <p>
                  <a href="single.html">Дэлгэрэнгүй</a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div>
                <a href="single.html" className="mb-4 d-block">
                  <img
                    src="images/leopardNature.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
                <h2>
                  <a href="single.html">Тун удахгүй</a>
                </h2>
                <p className="text-muted mb-3 text-uppercase small">
                  {/* <span className="mr-2">January 18, 2019</span> By{" "} */}
                  <a href="single.html" className="by">
                    Тун удахгүй
                  </a>
                </p>
                <p>
                  ...
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat et suscipit iste libero neque. Vitae quidem ducimus
                  voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga
                  veritatis culpa quis! */}
                </p>
                <p>
                  <a href="single.html">Дэлгэрэнгүй</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------------------------------------------- Холбоо барих ------------------------------------------------------------------------------------*/}
      <div className="site-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div
              className="col-12 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="block-heading-1">
                <span>Үргэлж нээлттэй</span>
                <h2>Холбоо барих</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Овог"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Нэр"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Мэйл хаяг"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name
                      id
                      className="form-control"
                      placeholder="Та хүсэлтээ бичнэ үү"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 ml-auto">
                    <Button className="btn btn-block btn-primary text-white py-3 px-5">
                      Илгээх
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div
              className="col-lg-4 ml-auto"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h2 className="text-primary">
                Дэлгэрэнгүй мэдээллийг илүү их мэдэх шаардлагатай.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, distinctio! Harum quibusdam nisi, illum nulla
                aspernatur aut quidem aperiam, quae non tempora recusandae
                voluptatibus fugit impedit.
              </p>
              <p>
                <a href="#" className="btn btn-primary text-white">
                  Эхлэх
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
