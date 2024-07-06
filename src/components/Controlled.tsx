import { FormEvent, useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
    <fieldset className="form-group">
      <legend>
        <h1>Controlled form</h1>
      </legend>
      <label>Username</label>
      <br />
      <input
        placeholder="Username"
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <label>Password</label>
      <br />
      <input
        placeholder="Password"
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button type="submit">
        Login
      </button>
    </fieldset>
    </form>
  );
};

export default Controlled;
