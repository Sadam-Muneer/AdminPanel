import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (event) => {
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        toast("Message sent successfully");
      }
    } catch (error) {
      toast.error("Message not sent");
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/24.jpeg"
                  alt="Registration image"
                  width="500"
                  height="500"
                />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Get in Touch</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Your Name"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">message</label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      required
                      cols="60"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-submit bg-dark text-white p-3"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.1370540947464!2d71.44098707539497!3d30.147497374871772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b31170593881d%3A0x90d09c94962b2464!2sMuhammad%20Nawaz%20Shareef%20University%20of%20Agriculture%2CMultan!5e0!3m2!1sen!2s!4v1714559885969!5m2!1sen!2s"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};
