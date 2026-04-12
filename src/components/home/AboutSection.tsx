"use client";

import styles from "@/styles/Home.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  "25+ Years of Industry Leadership",
  "250+ Government Projects",
  "500+ Renovations Completed",
  "1M+ Smart Meters Installed",
  "2MW+ Solar Infrastructure",
];

const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      
      {/* BACKGROUND GLOW */}
      <div className={styles.bgGlow}></div>

      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>ABOUT THE GROUP</span>

          <h2 className={styles.heading}>
            Building Infrastructure <br />
            <span>with Integrity & Innovation</span>
          </h2>

          <p className={styles.sub}>
            We are a multidisciplinary infrastructure powerhouse delivering 
            sustainable, scalable, and future-ready solutions across India.
          </p>

          <button className={styles.cta}>
            View Company Profile
          </button>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {features.map((item, i) => (
            <div key={i} className={styles.card}>
              
              <div className={styles.iconBox}>
                <CheckCircleIcon />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;