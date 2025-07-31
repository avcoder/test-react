import { useState, useEffect } from "react";

// components

// types

const Lesson11 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("name>", name);
  }, [name]);

  useEffect(() => {
    console.log("email>", email);
  }, [email]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={handleChangeName}
      />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <br />
      <button>Submit</button>
    </>
  );
};

export default Lesson11;
