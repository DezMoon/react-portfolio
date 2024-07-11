import React, { useState } from "react";
// Icon
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
// Modal
import Modal from "./Modal";

// Services data
const services = [
  {
    name: "Website Design and Development",
    excerpt:
      "Expert design and development of modern, responsive websites tailored to your needs.",
    description:
      "Our website design and development service includes creating visually appealing and highly functional websites. We use the latest technologies and frameworks to ensure your website is fast, secure, and user-friendly. Whether you need an e-commerce site, a blog, or a corporate website, we have the skills to deliver a top-notch product.",
  },
  {
    name: "Application Development",
    excerpt:
      "Custom application development for mobile and web platforms, ensuring seamless performance.",
    description:
      "Our application development services cover everything from mobile apps to complex web applications. We specialize in building scalable, efficient, and user-friendly applications that meet your business requirements. Our team is proficient in various programming languages and frameworks, ensuring we can tackle any project with expertise.",
  },
  {
    name: "IT Consultancy & Support",
    excerpt:
      "Professional IT consultancy and support services to help you achieve your business goals.",
    description:
      "Our IT consultancy and support services provide you with expert advice and assistance in managing your IT infrastructure. We offer solutions tailored to your business needs, helping you optimize your operations and improve efficiency. From network setup to cybersecurity, our team is here to support you every step of the way.",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleModal = (service) => {
    setModalContent(service);
    setShowModal(true);
  };

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full-Stack developer with over 4 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, excerpt, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{excerpt}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <button
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        onClick={() => handleModal({ name, description })}
                      >
                        <BsArrowUpRight />
                      </button>
                      <button
                        onClick={() => handleModal({ name, description })}
                        className="text-gradient text-sm"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
        type="service"
      />
    </section>
  );
};

export default Services;
