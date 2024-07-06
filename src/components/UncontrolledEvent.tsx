import { FormEvent } from "react";

const UncontrolledEvent = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    console.log("Username:", target.username.value);
    console.log("Password:", target.password.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <input placeholder="Password" type="text" name="password"></input>
      <br />
      <button type="submit">
        Login
      </button>
    </fieldset>
    </form>
  );
};

export default UncontrolledEvent;
