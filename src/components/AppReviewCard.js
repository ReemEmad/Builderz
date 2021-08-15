import React from "react"
import imgsrc from "../assets/double-quotes.svg"
import star from "../assets/icons8-star-48.png"
export default function AppReviewCard({ profile }) {
  return (
    <div className="app-review-card px-5 pb-3 pt-5 rounded mx-auto col-11 mb-4">
      <img
        src={imgsrc}
        alt="double quotes"
        width="50px"
        height="54px"
        className="mx-auto"
      />
      <p className="text-center">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris"
      </p>
      <div className="d-flex pb-5 mb-2 w-50 mx-auto">
        {Array.from({ length: 5 }).map((item) => (
          <img src={star} alt="star" width="26.12px" className="mx-auto" />
        ))}
      </div>
      <img
        src={profile}
        alt="profile img"
        width="135px"
        height="130px"
        style={{ borderRadius: "50%" }}
        className="mx-auto"
      />
      <h2 className="mx-auto pt-4 text-center">Julie Bailey</h2>
      <p className="mx-auto pb-4 text-center">Germany, Berlin</p>
    </div>
  )
}
