// import React from "react";
import "../styles/Footer.css";
import DecryptedText from "./DecryptedText";

export default function Footer({ instagram = "Instagram", color = "#1B1616" }) {
  // use CSS variable for color and provide a default to avoid runtime errors
  return (
    <footer className="footer" style={{ "--footer-color": color }}>
      <div className="footer-menu">
        <a
          href="https://www.instagram.com/tiagomarques__"
          className="instagram"
        >
          <DecryptedText text={instagram} animateOn="hover" sequential />
        </a>
        <a
          href="https://www.linkedin.com/in/tiago-marques-546254264/"
          className="linkedin"
        >
          <DecryptedText text="LinkedIn" animateOn="hover" sequential />
        </a>
        <a href="mailto:tiagomarques527@gmail.com" className="mail">
          <DecryptedText text="Mail" animateOn="hover" sequential />
        </a>
        <a
          href="/cv.pdf"
          className="cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DecryptedText text="CV" animateOn="hover" sequential />
        </a>
      </div>
    </footer>
  );
}
