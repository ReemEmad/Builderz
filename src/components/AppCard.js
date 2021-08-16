import React from "react"
import AppButton from "./AppButton"
import { Card, Button } from "react-bootstrap"
import star from "../assets/icons8-star-48.png"
import like from "../assets/heart.svg"

export default function AppCard({
  Img,
  title,
  text,
  width,
  height,
  btnText,
  showStars,
  showdate,
  child,
  lecturer,
}) {
  return (
    // <div className="container__text__grid__1__card">
    <Card>
      <span className="relative-container">
        <Card.Img variant="top" src={Img} width={width} height={height} />
        {showStars && (
          <div className="d-flex justify-content-start">
            <span>
              <img src={like} alt="" id="white-circle-like"></img>
              <div className="white-circle-like"></div>
            </span>
            <Button
              id="card-btn"
              className={
                child
                  ? "card-btn--child "
                  : lecturer
                  ? "card-btn--lecturer"
                  : "card-btn-parent"
              }
            >
              {child ? "Children" : lecturer ? "Lecturer" : "Parents"}
            </Button>
          </div>
        )}
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <hr size="" width="" color="#777777" className="hr-line" />
          {showdate && (
            <p className="card-date">Nov Tue 2021 @9:00 AM -04:00 PM</p>
          )}
          <Card.Text className="card-text">{text}</Card.Text>
          {showStars && (
            <>
              <div className="d-flex">
                <span className="d-flex">
                  {Array.from({ length: 4 }).map((item) => (
                    <img src={star} alt="star" width="25.99px" />
                  ))}
                </span>
                &nbsp;
                <span className="d-flex">(286)</span>
              </div>
            </>
          )}
          <div className="pt-2 d-flex justify-content-between align-items-center">
            <p className="pt-3 price-card" id="priceCard">
              $16 <strike className="priceB4">$35</strike>
            </p>
            <AppButton text={btnText} />
          </div>
        </Card.Body>
      </span>
    </Card>
    // </div>
  )
}
