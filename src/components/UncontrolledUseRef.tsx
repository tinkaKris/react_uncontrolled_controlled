import { FormEvent, useRef } from "react";

const UncontrolledUseRef = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current?.value);
    console.log("Password:", passwordRef.current?.value);
  };
  return (
    <fieldset className="form-group">
      <legend>
        <h1>Uncontrolled form (useRef)</h1>
      </legend>
      <label>Username</label>
      <br />
      <input
        ref={usernameRef}
        id="username"
        placeholder="Username"
        type="text"
        name="username"
      ></input>
      <br />
      <label>Password</label>
      <br />
      <input
        ref={passwordRef}
        id="password"
        placeholder="Password"
        type="password"
        name="password"
      ></input>
      <br />
      <button type="submit" onSubmit={handleFormSubmit}>
        Login
      </button>
    </fieldset>
  );
};

export default UncontrolledUseRef;
