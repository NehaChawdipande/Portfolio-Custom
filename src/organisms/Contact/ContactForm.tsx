import { useForm, ValidationError } from "@formspree/react";

const ContactForm = (): JSX.Element => {
  const [state, handleSubmit] = useForm("xayzykkr"); //my formspree form endpoint
  if (state.succeeded) {
    return (
      <>
        <h3 style={{ display: "inline", color: "#ececec" }}>
          Your message has been sent!
          <br />
          Will get back to you{" "}
          <strong style={{ color: "#da314b" }}>A.S.A.P</strong>!
        </h3>
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="myform" style={{ display: "grid" }}>
          <label
            htmlFor="email"
            className="subtext"
            style={{ color: "#ececec", margin: "8px 12px", fontWeight: "600" }}
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="formInputField"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <br />
          <label
            htmlFor="message"
            className="subtext"
            style={{ color: "#ececec", margin: "8px 12px", fontWeight: "600" }}
          >
            Your message
          </label>
          <textarea id="message" name="message" className="formInputField " />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="sendButton">
            <button
              className="textButtonLight"
              type="submit"
              disabled={state.submitting}
            >
              <h3 id="knowMore">Send!</h3>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
