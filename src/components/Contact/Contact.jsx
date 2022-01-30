//    import React from "react";
//    import "./Contact.css";
//
//    const Contact = () => {
//      return (
//        <div className="contact">
//          <h1>Let's Work Together</h1>
//          <form action="" className="contactform">
//            <input id="contactname" type="text" name="name" placeholder="Name" />
//            <input
//              id="contactemail"
//              type="email"
//              name="email"
//              placeholder="Email"
//            />
//            <textarea
//              name="message"
//              id="contactmsg"
//              cols="50"
//              rows="20"
//              placeholder="Message"
//            ></textarea>
//            <button type="submit" className="contactbtn">
//              Submit
//            </button>
//          </form>
//        </div>
//      );
//    };
//
//    export default Contact;

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("moqrejka");
  if (state.succeeded) {
    return (
      <div className="contactsuccess">
        <h1>Thanks For Contacting!</h1>
      </div>
    );
  }
  return (
    <div className="contact">
      <h1>Let's Work Together</h1>
      <form onSubmit={handleSubmit} className="contactform">
        <input type="text" id="name" name="name" placeholder="Name" />
        <input id="email" type="email" name="email" placeholder="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          cols="50"
          rows="20"
          placeholder="Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="contactbtn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
