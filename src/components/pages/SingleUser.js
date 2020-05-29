import React from "react";
import { Link } from "react-router-dom";

const SingleUser = (props) => {
  return (
    <div className="container">
      <div className="card mb-3">
        <img
          src={props.user.avatar_url}
          alt="Card image"
          className="img_prop"
        />
        <div className="card-body">
          <h4 className="card-title">{props.user.login}</h4>
          <p className="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <Link
            to={`/userinfo/${props.user.login}`}
            className="btn btn-primary"
          >
            See Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
