"use client";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "@/assets/logo/image (1).webp";

const clients = [
  { name: "Transrail", logo },
  { name: "Bihar Education Dept", logo },
  { name: "CPWD", logo },
  { name: "Adani Group", logo },
  { name: "Airtel", logo },
  { name: "EESL", logo },
];

export default function PremiumClients() {
  return (
    <section className={styles.section_wrapper}>
      {/* Heading */}
      <div className={styles.heading_block}>
        <h2 className={styles.heading_title}>
          Trusted by Industry Leaders
        </h2>
        <p className={styles.heading_sub}>
          Delivering excellence across top organizations
        </p>
      </div>

      {/* Mask Wrapper (prevents cut + keeps scroll clean) */}
      <div className={styles.carousel_mask}>
        <div className={styles.carousel_outer}>
          <div className={styles.carousel_track}>
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className={styles.client_card}>
                <div className={styles.card_glow}></div>

                <div className={styles.card_content}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={110}
                    height={60}
                    className={styles.logo_img}
                  />
                  <span className={styles.client_name}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}