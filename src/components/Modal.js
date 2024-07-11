import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Modal = ({ showModal, setShowModal, modalContent, type }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-site bg-cover bg-no-repeat rounded-lg p-4 md:p-6 relative w-11/12 max-w-lg"
      >
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-700"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>
        {type === "contact" ? (
          <>
            <h2 className="text-[24px] md:text-[32px] leading-none mb-4 md:mb-6 text-center text-white">
              Contact Me
            </h2>
            <h3 className="text-[30px] md:text-[45px] lg:text-[60px] leading-none mb-6 md:mb-8 text-white">
              Let's work <br />
              together!
            </h3>
            <p className="text-white mb-6">
              Fill out the form to get in touch.
            </p>
            <form>
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="email"
                placeholder="Your email"
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="btn btn-lg mt-4">
                Send
              </button>
            </form>
            <br />
            <motion.div
              variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
              initial="hidden"
              animate="show"
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.twitter.com/">
                <FaTwitter className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.github.com/">
                <FaGithub className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/in/desmond-chiku-moonga/">
                <FaLinkedin className="text-white hover:text-blue-500" />
              </a>
              <a href="mailto:moongachiku@gmail.com">
                <FaEnvelope className="text-white hover:text-blue-500" />
              </a>
              <a href="tel:+260965948921">
                <FaPhone className="text-white hover:text-blue-500" />
              </a>
            </motion.div>
          </>
        ) : (
          <>
            <h2 className="text-[24px] md:text-[32px] leading-none mb-4 md:mb-6 text-center text-white">
              {modalContent.name}
            </h2>
            <p className="text-white mb-6">{modalContent.description}</p>

            <br />
            <motion.div
              variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
              initial="hidden"
              animate="show"
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 center"
            >
              <a href="https://www.twitter.com/">
                <FaTwitter className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.github.com/">
                <FaGithub className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/in/desmond-chiku-moonga/">
                <FaLinkedin className="text-white hover:text-blue-500" />
              </a>
              <a href="mailto:moongachiku@gmail.com">
                <FaEnvelope className="text-white hover:text-blue-500" />
              </a>
              <a href="tel:+260965948921">
                <FaPhone className="text-white hover:text-blue-500" />
              </a>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
