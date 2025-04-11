import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Aboutus.module.css";  // Ensure the CSS file is imported

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.rightsReservedText}>
          © WallGodds Community 2025. All rights reserved.
        </p>

        <div className={styles.footerLinks}>
        <div className={styles.knowMore}>
          <a href="#">
            Know more
            <span className={styles.knowMoreIcon}>
              <img src="Arrow-know-more.png" alt="Know more" />
            </span>
          </a>
</div>
          <div className={styles.githubIcon}>
            <a
              href="https://github.com/Parnab03/WallGodds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerImageContainer}>
        <img
          src="/let’s work together.png"
          alt="LET'S WORK TOGETHER"
          className={styles.letsWorkTogetherImage}
        />
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Footer;
