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
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

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
            <p>
              <LocationOnIcon /> Dalsinghsarai Samastipur, Bihar, India
            </p>
            <p>
              <CallIcon /> +91 93046 53309
            </p>
            <p>
              <EmailIcon /> info@eceladusgroup.in
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Solar Energy</li>
              <li>Construction</li>
              <li>Development</li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <TwitterIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <LinkedInIcon />
            </span>
          </div>
          <div className={styles.legal}>
            <p>CIN: U45200BR1999PTC009060</p>
            <p>GST: 10AABCB6571F1Z5</p>
          </div>
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          title="Eceladus group Location"
          src="https://maps.google.com/maps?q=Dalsinghsarai,Samastipur,Bihar,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Dalsinghsarai+Samastipur+Bihar+India"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapOverlayBtn}
        >
          <OpenInNewRoundedIcon fontSize="small" /> Open in Maps
        </a>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Eceladus Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
