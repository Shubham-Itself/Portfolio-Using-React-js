import React from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

function Form() {

    const form = React.useRef();
    const [ done , setDone] = React.useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
    
  
      emailjs.sendForm('service_1bnumvj', 'template_1tjsv0i', form.current, 'EV_ve6UVjonmRqJfS')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <React.Fragment>
      <div className="Form-section" id="Form">
        <div className="Form-left">
          <span>Get in Touch</span>
          <span>Contact me</span>
        </div>

        <div className="Form-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" /> <br />
            <br />
            <br />
            <input type="email" placeholder="email" name="user_email" />
            <br />
            <br /> <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>{" "}
            <br /> <br /> <br />
            <input type="submit" value="Send" className="button btnSubmit"/>
            <span className="SubMsg">{done && 'Thank You For Contacting Me!!'}</span>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
