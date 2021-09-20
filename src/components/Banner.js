import React from "react";

export default function Banner() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="banner container">
            <h1 className="banner_title">
              Exclusive React Workshop for beginners!
            </h1>
            <p className="banner_text">
              Once in a year opportunity to learn and build your first React app
            </p>
            <button className="banner_btn btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
