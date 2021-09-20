import React from "react";

export default function Footer() {
  return (
    <div className="container text-center py-5">
      <div className="row">
        <div className="col-12">
          <p className="footer_text">
            &copy; ThatJSDude {new Date().getFullYear()}, a codinism initiative.
          </p>
          <h5>Hosted By Kawsar</h5>
        </div>
      </div>
    </div>
  );
}
