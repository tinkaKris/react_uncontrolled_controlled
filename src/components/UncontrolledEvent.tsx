import { FormEvent } from "react";

const UncontrolledEvent = () => {
  const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const username = target.username.value;
    const password = target.password.value;
    console.log({ username, password });
  };
  return (
    <fieldset className="form-group">
      <legend>
        <h1>Uncontrolled form (event)</h1>
      </legend>
      <label>Username</label>
      <br />
      <input placeholder="Username" type="text" name="username"></input>
      <br />
      <label>Password</label>
      <br />
      <input placeholder="Password" type="password" name="password"></input>
      <br />
      <button type="submit" onSubmit={handleFormSubmit}>
        Login
      </button>
    </fieldset>
  );
};

export default UncontrolledEvent;
