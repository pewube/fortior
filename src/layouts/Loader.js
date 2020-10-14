import React from "react";

import "../scss/_Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-border"></div>
      <svg
        className="loader"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg">
        <g strokeWidth="2">
          <ellipse
            cx="24.956"
            cy="25.057"
            rx="24.956"
            ry="24.99"
            fill="#e4583d"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ paintOrder: "markers stroke fill" }}
          />
          <path
            d="m16.357 11.414v28.408h5.7344v-12.072h11.861v-4.8047h-11.861v-6.7246h13.74v-4.8066z"
            fill="#fff"
            stroke="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
