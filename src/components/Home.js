import React from "react"
import {
  Button,
  InputGroup,
  FormControl,
  Tabs,
  Tab,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap"

import cap from "../assets/icons8-graduation-cap-96.png"
import check from "../assets/icons8-checked-100.png"
import bullseye from "../assets/icons8-bullseye-48.png"
import kids from "../assets/childrenboy.png"
import parents from "../assets/avatar_parents1.png"
import teacher from "../assets/teacher1.png"
import teen from "../assets/teenager.svg"

import learn from "../assets/pexels-ivan-samkov-8504531.jpg"
import learn1 from "../assets/pexels-julia-m-cameron-4143800.jpg"
import learn3 from "../assets/pexels-julia-m-cameron-4144293.jpg"

import grid1 from "../assets/pexels-pixabay-207691.jpg"

import grid7 from "../assets/pexels-max-fischer-5212351.jpg"
import grid11 from "../assets/pexels-raniro-coelho-4257148.jpg"

import profile1 from "../assets/portrait-of-a-self-confident-young-man-1.jpg"
import profile2 from "../assets/portrait-of-a-smiling-african-american-young-woman-with-dreads-1.jpg"
import profile3 from "../assets/profile-picture-of-a-female-doctor-on-a-white-coat-looking-aside-1.jpg"
import profile4 from "../assets/my-favorite-profile-picture-1.jpg"

import img1 from "../assets/pexels-cottonbro-3584923.jpg"

import logo from "../assets/logo.jpg"

import clock from "../assets/icons8-clock-24.png"
import AppCard from "./AppCard"
import AppReviewCard from "./AppReviewCard"
import Slider from "react-slick"

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  }
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <section className="welcome py-5">
        <div className="container__text py-3">
          <div className="container__text__1 py-5">
            <h1 className="w-25">
              Welcome To <span>Academy</span>
            </h1>
            <Row>
              <Col md={6} className="col-sm-12 col-md-6 col-lg-4">
                <p className="container--narrow my-4">
                  Study any topic, anytime. Explore thousands of courses for the
                  lowest price ever!
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="col-sm-12 col-md-6 col-lg-4">
                <InputGroup className="input-container-search">
                  <FormControl
                    placeholder="What do you want to learn?"
                    aria-label="keyword"
                    aria-describedby="basic-addon1"
                    className="p-3 input-search rounded"
                  ></FormControl>
                </InputGroup>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="section-2 mb-3 pb-5">
        <div className="container__text__2">
          <Container>
            <Row>
              <Col md={4}>
                <div className="container__text__flex">
                  <span className="comp">
                    <div className="cap">
                      <img src={cap} alt="computer" width="40px"></img>
                    </div>
                  </span>
                  <div className="mt-3 text-margin">
                    <h4>13 Online Courses</h4>
                    <p>Explore a variety of fresh topics</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="container__text__flex">
                  <img
                    src={check}
                    alt="check"
                    width="70px"
                    // className="mr-4"
                  ></img>
                  <div className="mt-3 text-margin">
                    <h4>Explore Instruction</h4>
                    <p>Find the right course for you</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="container__text__flex">
                  <img src={bullseye} alt="bullseye" width="75px"></img>
                  {/* <img src={bullseye} alt="bullseye" width="75px"></img> */}
                  <div className="mt-3 text-margin2">
                    <h4>Lifetime Access</h4>
                    <p>Learn on your schedule</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section-3 mb-5">
        <div className="">
          <div className="container__text__grid__1 mb-5 ">
            <Container>
              <Row>
                <Col md={3} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="container__text__1__card">
                    <div id="triangle-topright"></div>
                    <img
                      className="mx-auto my-4"
                      src={kids}
                      alt=""
                      width="80px"
                      height="80px"
                    ></img>
                    <h1>Kids</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </Col>
                <Col md={3} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="container__text__1__card">
                    <div id="triangle-topright"></div>
                    <img
                      src={teen}
                      alt=""
                      width="80px"
                      height="80px"
                      className="mx-auto my-4"
                    ></img>
                    <h1>Teen</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </Col>
                <Col md={3} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="container__text__1__card">
                    <div id="triangle-topright"></div>
                    <img
                      src={parents}
                      alt=""
                      width="80px"
                      height="80px"
                      className="mx-auto my-4"
                    ></img>
                    <h1>Parents</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </Col>
                <Col md={3} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="container__text__1__card">
                    <div id="triangle-topright"></div>
                    <img
                      src={teacher}
                      alt=""
                      width="80px"
                      height="80px"
                      className="mx-auto my-4"
                    ></img>
                    <h1>Lecturer</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="container__text__grid__2 pt-5  ">
            <h1>Categories</h1>
            <Tabs
              defaultActiveKey="kids"
              id="uncontrolled-tab-example"
              className="align-middle container__text text-center mx-auto mt-5 tab-width"
            >
              <Tab eventKey="kids" title="Kids">
                <div className="container__text__2__flex">
                  <Slider {...settings1}>
                    <div className="container__text__2__flex__item pb-0">
                      <div className="relative">
                        <div className="over-lay"></div>
                        <img src={learn} alt="" />
                        <div className="absolute">
                          <h5>English</h5>
                          <h6>2 Courses</h6>
                        </div>
                      </div>
                    </div>

                    <div className="container__text__2__flex__item">
                      <div className="relative">
                        <div className="over-lay"></div>
                        <img src={learn1} alt=""></img>
                        <div className="absolute">
                          <h5>Graphic Design</h5>
                          <h6>2 Courses</h6>
                        </div>
                      </div>
                    </div>

                    <div className="container__text__2__flex__item">
                      <div className="relative">
                        <div className="over-lay"></div>
                        <img src={learn3} alt=""></img>
                        <div className="absolute">
                          <h5>English</h5>
                          <h6>2 Courses</h6>
                        </div>
                      </div>
                    </div>

                    <div className="container__text__2__flex__item">
                      <div className="relative">
                        <div className="over-lay"></div>
                        <img src={learn3} alt=""></img>
                        <div className="absolute">
                          <h5>English</h5>
                          <h6>2 Courses</h6>
                        </div>
                      </div>
                    </div>

                    <div className="container__text__2__flex__item">
                      <div className="relative">
                        <div className="over-lay"></div>
                        <img src={learn3} alt=""></img>
                        <div className="absolute">
                          <h5>Spanish</h5>
                          <h6>2 Courses</h6>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="teen" title="Teen">
                <p className="p-3"> teen</p>
              </Tab>
              <Tab eventKey="parents" title="Parents">
                <p className="p-3"> parents</p>
              </Tab>
              <Tab eventKey="lecturer" title="Lecturer">
                <p className="p-3"> lecturer</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="section-4 pt-5 mt-5 pb-5">
        <div className="pt-4 ">
          <div className="container__text__About__flex container__text__flex">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="container__text__About__flex__1">
                    <h1 className="pb-4">About Our Academy</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="mb-4 narrow-para">
                      Lorem ipsum dolor sit amet, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <Button className="btn" variant="outline-info">
                      Read More
                    </Button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className=" container__text__About__flex__1 mt-3">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/yEe17VY2sUA"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="section-44 pt-5 mt-5">
        <div className="container__text">
          <h1 className="text-center pb-1">Popular Courses</h1>
          <p className="mx-auto w-50 text-center">
            Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="container__text__grid__1">
            <Row md={3} className="g-5">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col md={4} className="col-sm-6 col-md-6 col-lg-4">
                  <span className="h5-title">
                    <div className="container__text__grid__1__card">
                      <AppCard
                        showStars={true}
                        title="Sewing 101"
                        text="Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.."
                        Img={grid1}
                        width="520px"
                        height="250px"
                        // Img={`grid${idx + 1}`}
                        child={idx % 2 === 0 ? true : false}
                        btnText="Enroll Now"
                      />
                    </div>
                  </span>
                </Col>
              ))}
            </Row>
          </div>
          <div className="mx-auto mt-5 text-center mb-5">
            <Button variant="outline-info" className="btn">
              View More
            </Button>
          </div>
        </div>
      </section>
      <section className="pt-5 section-5">
        <div className="container__text pt-5">
          <h1 className="font-h1">Featured Activities</h1>
          <Row>
            <Col md={6}>
              <p className="font-p pb-4">
                Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea comme.
              </p>
            </Col>
          </Row>

          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              // <div className="container__text__grid__1__card--padding pt-4">
              <Col md={4} className="col-sm-6 col-md-6 col-lg-4">
                <AppCard
                  Img={grid7}
                  width="520px"
                  height="250px"
                  title="Activity Title"
                  text="This is a longer card with supporting text below as a natural
    lead-in to additional content..."
                  btnText="Participation"
                  showdate={true}
                ></AppCard>
              </Col>
              // </div>
            ))}
          </Row>
          <div className="pt-5 text-center pb-5">
            <Button className="btn">View More</Button>
          </div>
          <div className="pb-4"></div>
        </div>
      </section>
      <section className="pt-5 section-6 mb-5">
        <div className="container__text">
          <h1 className="text-center h-text">Latest courses</h1>

          <p className="text-center w-50 mx-auto">
            Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="container__text__grid__1">
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col className="col-sm-6 col-md-6 col-lg-4">
                  <div className="container__text__grid__1__card">
                    <span className="h5-title ">
                      <AppCard
                        width="550px"
                        height="250px"
                        title="Sewing 101"
                        text=" Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
    laboris nisi ut aliquip"
                        Img={grid11}
                        showStars={true}
                        btnText="Enroll Now"
                        child={idx % 2 === 0 ? true : false}
                      ></AppCard>
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="mx-auto text-center mt-5">
            <Button className="btn" variant="outline-info">
              View More
            </Button>
          </div>
        </div>
      </section>
      <section className="pt-5 section-7 mb-5 pb-5">
        <div className="container__text review-cards">
          <h1 className="text-center">What Our Client Saying</h1>
          <p className="text-center w-50 mx-auto client-p">
            Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="pt-5 pb-5 w-100 mx-auto">
            <Slider {...settings} arrows={false}>
              <AppReviewCard profile={profile1} />
              <AppReviewCard profile={profile2} />
              <AppReviewCard profile={profile3} />
              <AppReviewCard profile={profile3} />
              <AppReviewCard profile={profile4} />
              <AppReviewCard profile={profile4} />
              <AppReviewCard profile={profile4} />
              <AppReviewCard profile={profile4} />
            </Slider>
          </div>
        </div>
      </section>

      <section className="section-8 pt-5 mb-5">
        <div className="container-text container-blog mx-auto mb-5">
          <h1 className="text-center">Latest Blog</h1>
          <p className="w-50 text-center mx-auto">
            Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="container__text__grid__1 w-100">
            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                // <div className="container__text__grid__1__blog">
                <Col className="col-sm-6 col-md-6 col-lg-4">
                  <img
                    src={img1}
                    // src={`img${idx + 1}`}
                    alt=""
                    width="320px"
                    height="260px"
                    className="rounded"
                  />
                  <h3 className="pt-3 pb-1 h3-blog">Lorem Ipsum Sit Amet,</h3>
                  <p className="d-flex align-items-center">
                    <img src={clock} width="16px" height="16px" alt="clock" />
                    {"  "}&nbsp;
                    <span>Nov 15, 2020</span>
                  </p>
                  <p className="read-more">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempo...
                    <span>Read More</span>
                  </p>
                  {/* // </div> */}
                </Col>
              ))}
            </Row>
          </div>

          <div className="container__text__subscribe pt-5 mt-5 d-flex justify-content-between p-5 align-items-center">
            <h1 className="p-3 text-left sub">
              Let Us Inform You About Everything Important Directly.
            </h1>

            <InputGroup>
              <FormControl
                placeholder="Your email address"
                aria-label="email"
                aria-describedby="basic-addon2"
                className="py-2 app-input"
              />
              <Button
                variant="secondary"
                id="button-addon2"
                className="form-sub"
              >
                Subscribe Now
              </Button>
            </InputGroup>
          </div>
          <footer>
            <div className="container__text__footer pt-5">
              <div className="container__text__footer__flex d-flex justify-content-between">
                <Row>
                  <Col className="col-sm-12 col-md-6 col-lg-3">
                    <div className="lh-small container__text__footer__flex__item">
                      <img src={logo} alt="logo"></img>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempo.
                      </p>
                    </div>
                  </Col>
                  <Col className="col-sm-12 col-md-6 col-lg-3">
                    <div className="lh-lg container__text__footer__flex__item">
                      <h4>Quick Links</h4>
                      <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms And Condition</li>
                      </ul>
                    </div>
                  </Col>
                  {/* </Row>
                <Row> */}
                  <Col className="col-sm-12 col-md-6 col-lg-3">
                    <div className="lh-lg container__text__footer__flex__item">
                      <h4>Social Media</h4>
                      <ul>
                        <li className="footer-facebook">Facebook</li>
                        <li className="footer-twitter">Twitter</li>
                        <li className="footer-instagram">Instagram</li>
                        <li className="footer-linkdin">Linkdin</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-sm-12 col-md-6 col-lg-3">
                    <div className="container__text__footer__flex__item">
                      <h4>Find Us</h4>
                      <p>Address: 8901 Marmora RAO</p>
                      <p>Phone: +143-52-9933631</p>
                      <p>Email: academy@example.com</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="container__text__footer__flex__2 d-flex justify-content-between align-items-center">
                <div></div>
                <p className="text-center pt-5 rights">
                  &copy;2020 <span className="footer-badge">BUILDERZ </span>All
                  Rights Reserved
                </p>
                <Dropdown className="pt-4">
                  <Dropdown.Toggle
                    variant="outline"
                    id="dropdown-basic"
                    className="outline-dropdown btn"
                  >
                    <span className="dropdown-lang">English</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">French</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
