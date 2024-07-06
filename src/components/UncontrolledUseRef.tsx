import { FormEvent, useRef } from "react";

const UncontrolledUseRef = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current?.value);
    console.log("Password:", passwordRef.current?.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
    <fieldset className="form-group">
      <legend>
        <h1>Uncontrolled form (useRef)</h1>
      </legend>
      <label>Username</label>
      <br />
      <input
        ref={usernameRef}
        placeholder="Username"
        type="text"
        name="username"
      ></input>
      <br />
      <label>Password</label>
      <br />
      <input
        ref={passwordRef}
        placeholder="Password"
        type="text"
        name="password"
      ></input>
      <br />
      <button type="submit">
        Login
      </button>
    </fieldset>
    </form>
  );
};

export default UncontrolledUseRef;
