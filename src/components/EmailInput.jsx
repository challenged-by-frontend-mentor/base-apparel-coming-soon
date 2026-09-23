import IconArrow from "../assets/icon-arrow.svg"
import IconError from "../assets/icon-error.svg"

const EmailInput = () => {
  return (
    <div className="email">
      <form action="" className="email__form">
        <input type="email" name="email" id="email" className="email__input" />
        <img src={IconError} alt="" className="email__error-icon" />
        <button type="submit" className="email__submit-button">
          <img src={IconArrow} alt="" aria-hidden="true" />
        </button>
      </form>
      <span className="email__error-message">
        Please provide a valid email
      </span>
    </div>
  );
};

export default EmailInput;
