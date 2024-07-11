import React, { useState } from "react";
// Images
import Image from "../assets/avatar.png";
// Icons
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
// Type Animation
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
import Modal from "./Modal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              DESMOND <span>MOONGA</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am</span>
              <TypeAnimation
                sequence={[
                  "a Full Stack Developer",
                  2000,
                  "an Innovator",
                  2000,
                  "a Problem Solver",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I specialize in building robust and scalable applications with
              React.js, Node.js, and cloud services. Let's turn ideas into
              innovative solutions
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg" onClick={() => setShowModal(true)}>
                Contact me
              </button>
              <a
                href="/Desmond_Moonga_Resume.pdf"
                download
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://www.youtube.com/">
                <FaTwitter />
              </a>

              <a href="https://github.com/">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/in/desmond-chiku-moonga/">
                <FaLinkedin />
              </a>

              <a href="mailto:moongachiku@gmail.com">
                <FaEnvelope />
              </a>

              <a href="tel:+260965948921">
                <FaPhone />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default Banner;
