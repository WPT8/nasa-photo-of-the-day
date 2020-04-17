import React from "react";
import Spinner from "./Spinner";
import "./PhotoCard.css";

function PhotoCard(props) {

    console.log(props)
{/* Display a loading message while the data is fetching */}
    if (!props.title) return <Spinner />
        else
{/* Display your component as normal after the data has been fetched */}
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt = '' />
            <br />
            <p>{props.explanation}</p>
          </div>
);


}

export default PhotoCard;
