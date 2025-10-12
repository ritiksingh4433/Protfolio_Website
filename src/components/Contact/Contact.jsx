import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbj33tv",  //service id
        "template_hi13fc9", //template id
        form.current,       // form reference
        "ENVkQsICcM2SoJPHB"  //public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">CONTACT</h2>
        <div className="w-40 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d be delighted to connect! Feel free to reach out for collaboration, opportunities, or any questions you may have.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md dark:bg-surface-dark bg-surface-light p-6 rounded-lg shadow-lg border border-primary/30">
        <h3 className="text-xl font-semibold dark:text-content-dark text-content-light text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md dark:bg-surface-dark/50 bg-white/50 dark:text-content-dark text-content-light border dark:border-gray-600 border-gray-300 focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md dark:bg-surface-dark/50 bg-white/50 dark:text-content-dark text-content-light border dark:border-gray-600 border-gray-300 focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md dark:bg-surface-dark/50 bg-white/50 dark:text-content-dark text-content-light border dark:border-gray-600 border-gray-300 focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md dark:bg-surface-dark/50 bg-white/50 dark:text-content-dark text-content-light border dark:border-gray-600 border-gray-300 focus:outline-none focus:border-primary transition-colors"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-light py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
