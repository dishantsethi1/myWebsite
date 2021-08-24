import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Feedback = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SendData = async (e) => {
    e.preventDefault();
    const { name, description } = user;

    // const res = await fetch("/feedback", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     description,
    //   }),
    // });

    const res = await axios.post("/feedback", {
      name,
      description,
    });

    const data = res.data;

    if (res.status === 422 || !data) {
      window.alert("please fill form properly");
    } else {
      window.alert("done sir ");
      history.push("/");
    }
  };
  return (
    <>
      <div className="main-form">
        <h2> Get in touch</h2>
        <form method="POST">
          <div className="des">
            <label className="deslabel" htmlFor="name">
              Name
            </label>
            <input
              className="inp"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInput}
            />
          </div>

          <div className="des">
            <label className="deslabel" htmlFor="description">
              Write in Detial please
            </label>
            <textarea
              className="inp"
              name="description"
              cols="auto"
              rows="10"
              value={user.description}
              onChange={handleInput}
            ></textarea>
          </div>

          <button className="bce displayff" type="submit" onClick={SendData}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
