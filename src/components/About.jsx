import React from "react";
import logo from "./dishant.png";

const About = () => {
  return (
    <>
      <div className="boxi">
        <div className="box1">
          <img src={logo} alt="dishant" className="pic1" />
        </div>
        <div className="box2">
          <h1 className="heading1">Hi,I'm Dishant Sethi</h1>
          <br />
          <p className="about1">
            I am a 20-year-old tech enthusiast from Punjab (pursuing
            engineering) trying to learn and share the latest tech news. Will
            try my best to upload tech videos.
          </p>
          <br />
          <p className="b">
            Website: https://vibrant-pare-cd4be5.netlify.app/ You can send me
            your valuable feedbacks here
          </p>
          <br></br>
          <p className="b">
            Tech here will not be only about phones (though mostly it will be
            about phones ) but also laptops, processors, and many more. Started
            posting on this channel in Feb 2021 and will continue to post
            quality and informative videos. Like, comment Subscribe
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
