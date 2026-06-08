import React from "react";
import { stats } from "@/data/icon";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import MainHeading from "../heading/MainHeading";
import styles from "@/pages/about/about.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { certificates, heroCardStats } from "@/data/about";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_bg}>
        <div className={styles.hero_orb1} />
        <div className={styles.hero_orb2} />
        <div className={styles.hero_orb3} />
        <div className={styles.hero_grid} />
      </div>

      <div className={styles.hero_inner}>
        <div className={styles.hero_left}>
          <MainHeading text="Building {{India's Future}}" />

          <p className={styles.hero_desc}>
            A multidisciplinary infrastructure powerhouse — from construction
            and renewable energy to AI-powered digital solutions. Trusted by the
            Government of Bihar for over two decades.
          </p>

          <div className={styles.hero_certs}>
            {certificates.map((item, index) => (
              <span key={index} className={styles.cert_badge}>
                <VerifiedIcon />
                {item}
              </span>
            ))}
          </div>

          <div className={styles.hero_actions}>
            <Button
              text="Partner With Us"
              action={() => router.push("/contact")}
            />
            <Button
              text="Our Journey"
              action={() => {
                document
                  .getElementById("journey")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        <div className={styles.hero_right}>
          <div className={styles.hero_card}>
            <div className={styles.hero_card_glow} />

            <div className={styles.hero_card_top}>
              <LocationOnIcon />
              <span>Samastipur, Bihar · India</span>
            </div>

            <div className={styles.hero_card_quote}>
              <FormatQuoteIcon />
              <p>
                "We don't just build structures — we build the foundation of
                communities, the pathways of progress, and the systems of a
                sustainable tomorrow."
              </p>
            </div>

            <div className={styles.hero_card_stats}>
              {heroCardStats.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className={styles.hero_card_divider} />}
                  <div className={styles.hero_card_stat}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={`${styles.float_chip} ${styles.chip1}`}>
            <EnergySavingsLeafIcon />
            Solar Pioneer
          </div>

          <div className={`${styles.float_chip} ${styles.chip2}`}>
            <RocketLaunchIcon />
            AI-Integrated
          </div>
        </div>
      </div>

      <div className={styles.stats_bar}>
        {stats.map((item, index) => (
          <div key={index} className={styles.stat_item}>
            <span className={styles.stat_icon}>{item.icon}</span>
            <strong className={styles.stat_num}>{item.value}</strong>
            <span className={styles.stat_label}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
