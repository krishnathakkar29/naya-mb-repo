import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.jpeg";
function Founder() {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: "0%",
          opacity: 1,
        },
      };
  return (
    <>
      <section className="founder">
        <motion.div {...options}>
          <img src={founder} />
          <h1>Krishna</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            laborum!
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, quae!
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default Founder;
