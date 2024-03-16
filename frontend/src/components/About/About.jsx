import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Khana Wala</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores perferendis illum laborum ut eaque?
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>KT</h3>
            </div>

            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod repellendus.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;