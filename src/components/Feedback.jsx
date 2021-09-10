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
    try {
      const url =
        process.env.NODE_ENV === "production"
          ? "https://techie-dishant.herokuapp.com"
          : "http://localhost:5000";

      const res = await axios.post(`${url}/feedback`, {
        name,
        description,
      });

      // const data = res.data;

      window.alert("done sir ");
      setUser({
        name: "",
        description: "",
      });
      history.push("/");
    } catch (err) {
      if (err.response || err.response.status)
        if (err.response.status === 422) {
          return window.alert("please fill the form fully");
        }
      return window.alert("please fill the fully ");
    }
  };
  return (
    <>
      <div className="main-form">
        <div className="formc">
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
      </div>
    </>
  );
};

export default Feedback;
