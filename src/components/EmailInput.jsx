import { useState } from "react";
import IconArrow from "../assets/icon-arrow.svg";
import IconError from "../assets/icon-error.svg";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (isError) setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setIsError(true);
    } else {
      setIsError(false);
      console.log("Success", email);
    }
  };

  return (
    <div className="email">
      <form
        onSubmit={handleSubmit}
        className={`email__form ${isError ? "email__form--error" : ""}`}
      >
        <label htmlFor="email" className="sr-only">
          Email for notification
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="email__input"
          placeholder="Email Address"
          onChange={handleChange}
          aria-invalid={isError}
          aria-describedby={isError ? "email-error" : undefined}
        />
        {isError && (
          <img
            src={IconError}
            alt=""
            className="email__error-icon"
            aria-hidden="true"
          />
        )}
        <button
          type="submit"
          className="email__submit-button"
          aria-label="Submit email"
        >
          <img src={IconArrow} alt="" aria-hidden="true" />
        </button>
      </form>
      {isError && (
        <span id="email-error" className="email__error-message" role="alert">
          Please provide a valid email
        </span>
      )}
    </div>
  );
};

export default EmailInput;
