// src/components/About.js
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Modal from "./Modal";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">Welcome to my professional portfolio!</h3>
            <p className="mb-6">
              With over four years of experience in crafting high-quality web
              and mobile applications, I specialize in turning ideas into
              powerful, user-friendly digital solutions. Dive into my world
              where JavaScript and TypeScript meet innovative design and robust
              development. Whether it's creating dynamic UIs with React.js or
              building scalable backends with Node.js, my passion lies in
              delivering exceptional user experiences and optimizing
              performance.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp end={12} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg" onClick={() => setShowModal(true)}>
                Contact me
              </button>
              <a
                href="/Desmond_Moonga_Resume.pdf"
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={{
          type: "contact",
        }}
        type="contact"
      />
    </section>
  );
};

export default About;
