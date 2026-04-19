"use client";

import styles from "./footer.module.css";
import Link from "next/link";

// MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      {/* ===== MAIN FOOTER ===== */}
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.logo}>Braj Mohan Group</h2>
          <p className={styles.desc}>
            Building future-ready infrastructure with innovation and precision.
          </p>

          <div className={styles.info}>
            <p><LocationOnIcon /> Patna, Bihar, India</p>
            <p><CallIcon /> +91 90310 74805</p>
            <p><EmailIcon /> info@brajmohangroup.in</p>
          </div>
        </div>

        {/* CENTER */}
        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Real Estate</li>
              <li>Construction</li>
              <li>Consulting</li>
              <li>Architecture</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <h4>Follow Us</h4>

          <div className={styles.social}>
            <span><FacebookIcon /></span>
            <span><TwitterIcon /></span>
            <span><InstagramIcon /></span>
            <span><LinkedInIcon /></span>
          </div>

          <div className={styles.legal}>
            <p>CIN: U45200BR1999PTC009060</p>
            <p>GST: 10AABCB6571F1Z5</p>
          </div>
        </div>
      </div>

      {/* ===== MAP ===== */}
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps?q=Kankarbagh,Patna&output=embed"
          loading="lazy"
          className={styles.map}
        ></iframe>

        <Link
          href="https://maps.google.com?q=Kankarbagh,Patna"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapBtn}
        >
          Open in Maps <OpenInNewIcon className={styles.icon} />
        </Link>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className={styles.copy}>
        © {new Date().getFullYear()} Braj Mohan Group. All rights reserved.
      </div>
    </footer>
  );
}