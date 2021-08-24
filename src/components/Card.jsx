import React from "react";

const Card = (props) => {
  return (
    <>
      {/* <div className="card">
        <h1>this video is {props.title}</h1>
        <p>this vidoe is all about {props.des}</p>
      </div>
       */}
      <div className="card">
        <iframe
          src={props.src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1 className="text1">{props.title}</h1>
      </div>
    </>
  );
};

export default Card;
