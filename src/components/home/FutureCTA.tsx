"use client";

import styles from "@/styles/Home.module.css";

export default function FutureCTA() {
  return (
    <section className={styles.cta_section}>
      
      {/* Background Glow */}
      <div className={styles.cta_bg}></div>

      <div className={styles.cta_container}>

        <span className={styles.cta_badge}>READY TO BUILD</span>

        <h2 className={styles.cta_heading}>
          Ready to Build <br />
          <span>The Future?</span>
        </h2>

        <p className={styles.cta_sub}>
          Partner with us to create world-class infrastructure, sustainable
          energy solutions, and modern designs that truly make an impact.
        </p>

        <div className={styles.cta_actions}>
          <button className={styles.cta_primary}>
            Start Your Project →
          </button>

          <button className={styles.cta_secondary}>
            Get Consultation
          </button>
        </div>

      </div>
    </section>
  );
}