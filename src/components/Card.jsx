import React from "react";
// @ts-ignore
import arrow from "../assets/Fill220.png";

export default function Card() {
  return (
    <div>
      <div className="card">
        <img
          className="card--image"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt=""
        />
        <div>
          <div className="card--header">
            <img className="card--icon" src={arrow} alt="" />
            <p className="card--title">JAPAN</p>
            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606422,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634">
              View on Google Maps
            </a>
          </div>
          <div className="card--body">
            <h1 className="body--title">Mount Fuji</h1>
            <p className="body--dates">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="body--text">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
