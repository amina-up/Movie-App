import React from "react";
import StarRating from "../navBar/StartRating";
import "./Card.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const CardMovie = ({ name, src, rating }) => {
  return (
    <div>
      {/* <div className="card card-comp">
        <StarRating count={rating} isClicked={false} />

        <img src={src} className="card-img-top images" alt="..." />
        <div className="card-body">{name}</div> */}
      <Card className="card">
        <CardBody>
          <CardTitle>
            <StarRating count={rating} isClicked={false} />
          </CardTitle>
        </CardBody>
        <img width="100%" src={src} alt="Card image cap" className="imgs" />
        <CardBody>
          <CardText>
            <h3 style={{ color: "#D68910 " }}>{name}</h3>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardMovie;
