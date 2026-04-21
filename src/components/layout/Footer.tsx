import Link from "next/link";
import styles from "./footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.logo}>Eceladus Group</h2>
          <p className={styles.desc}>
            Building future-ready infrastructure with innovation and precision.
          </p>
          <div className={styles.info}>
            <p><LocationOnIcon /> Patna, Bihar, India</p>
            <p><CallIcon /> +91 90310 74805</p>
            <p><EmailIcon /> info@brajmohangroup.in</p>
          </div>
        </div>

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

      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps?q=Kankarbagh,Patna&output=embed"
          loading="lazy"
          className={styles.map}
        />
        <Link
          href="https://maps.google.com?q=Kankarbagh,Patna"
          target="_blank"
          className={styles.mapBtn}
        >
          Open in Maps <OpenInNewIcon className={styles.icon} />
        </Link>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Eceladus Group. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;