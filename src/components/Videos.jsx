import React from "react";
import Card from "./Card";
import data from "./data";

const Videos = () => {
  return (
    <>
      <div className="dflexs">
        {data.map((val) => (
          <Card src={val.src} title={val.title} />
        ))}
      </div>
    </>
  );
};

export default Videos;
