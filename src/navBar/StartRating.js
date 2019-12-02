import React from "react";
import "./StarRating.css";
const StarRating = ({ count, changeRate = () => {} }) => {
  let tableStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < count) {
      tableStar.push(
        <span
          style={{ cursor: "pointer" }}
          key={i}
          onClick={() => changeRate(i + 1)}
          style={{ color: "#D68910" }}
        >
          ★
        </span>
      );
    } else {
      tableStar.push(
        <span
          style={{ cursor: "pointer" }}
          key={i}
          onClick={() => changeRate(i + 1)}
        >
          ☆
        </span>
      );
    }
  }
  return <div className="stars">{tableStar}</div>;
};
export default StarRating;
