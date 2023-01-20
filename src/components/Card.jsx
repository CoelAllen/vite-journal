import React from "react";
// @ts-ignore
import arrow from "../assets/Fill220.png";

export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div>
      <div className="card">
        <img className="card--image" src={imageUrl} alt="" />
        <div>
          <div className="card--header">
            <img className="card--icon" src={arrow} alt="" />
            <p className="card--title">{location.toUpperCase()}</p>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="card--body">
            <h1 className="body--title">{title}</h1>
            <p className="body--dates">
              {startDate} - {endDate}
            </p>
            <p className="body--text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
