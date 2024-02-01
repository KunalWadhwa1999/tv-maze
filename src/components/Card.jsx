import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ViewDetail from "../pages/ViewDetail";

const Card = ({ movie }) => {
  let navigate = useNavigate();
  const viewSummary = (film) => {
    navigate("/view-detail", { state: { movie: film } });
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={movie?.image?.original}
        className="card-img-top image-card"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{movie?.name}</h5>
        <p className="card-text">
          Genres:{" "}
          <span className="genreClass">
            {movie.genres.map((genre, index) => {
              return (
                <span key={index} className="badge text-bg-dark">
                  {genre}
                </span>
              );
            })}
          </span>
        </p>
        <p className="card-text">
          Type: <span>{movie.type}</span>
        </p>
        <p className="card-text">
          RunTime: <span>{movie.runtime} minutes</span>
        </p>
        <p className="card-text">
          Language: <span>{movie.language}</span>
        </p>
        <p className="card-text">
          Rating: <span>{movie.rating.average ?? "NA"}</span>
        </p>
        <p className="btn btn-dark" onClick={() => viewSummary(movie)}>
          View Detail
        </p>
      </div>
    </div>
  );
};

export default Card;
