import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <h2>Khana Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @khanawala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/krishna_.thakkar">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/krishnathakkar29">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  )
}

export default Footer;
