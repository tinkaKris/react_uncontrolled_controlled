import { FormEvent, useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <fieldset className="form-group">
      <legend>
        <h1>Controlled form</h1>
      </legend>
      <label>Username</label>
      <br />
      <input
        id="username"
        placeholder="Username"
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <label>Password</label>
      <br />
      <input
        id="password"
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button type="submit" onSubmit={handleFormSubmit}>
        Login
      </button>
    </fieldset>
  );
};

export default Controlled;
