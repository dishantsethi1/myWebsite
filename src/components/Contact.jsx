import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SendData = async (e) => {
    e.preventDefault();
    const { name, email, phone, description } = user;

    // const res = await fetch("/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone,
    //     description,
    //   }),
    // });

    const url =
      process.env.NODE_ENV === "production"
        ? "https://techie-dishant.herokuapp.com"
        : "http://localhost:5000";

    // const data = await res.json();
    const res = await axios.post(`${url}/contact`, {
      name,
      email,
      phone,
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
            <label htmlFor="name" className="deslabel">
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
            <label htmlFor="email" className="deslabel">
              Email
            </label>
            <input
              className="inp"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="des">
            <label htmlFor="phone" className="deslabel">
              Phone Number
            </label>
            <input
              className="inp"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInput}
            />
          </div>

          <div className="des">
            <label htmlFor="description" className="deslabel">
              About Yourself
            </label>
            <textarea
              className="inp"
              name="description"
              cols="30"
              rows="10"
              value={user.description}
              onChange={handleInput}
            ></textarea>
          </div>

          <button type="submit" className="bce displayff" onClick={SendData}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
