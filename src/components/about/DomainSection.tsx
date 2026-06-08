import Link from "next/link";
import { domains } from "@/data/icon";
import MainHeading from "../heading/MainHeading";
import styles from "@/pages/about/about.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DomainSection = () => {
  return (
    <section className={styles.domain_container}>
      <div className={styles.domains_glow} />

      <div>
        <div className={`${styles.center_header} ${styles.reveal}`}>
          <span className={styles.section_tag_light}>What We Do</span>

          <MainHeading text="Three {{Pillars}} of Expertise" />

          <p className={styles.section_sub_light}>
            A multidisciplinary group delivering excellence across
            construction, energy, and technology.
          </p>
        </div>

        <div className={styles.domains_grid}>
          {domains.map((item, index) => (
            <div
              key={index}
              className={`${styles.domain_card} ${styles.reveal}`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`${styles.domain_icon_wrap} ${
                  styles[`domain_icon_${index + 1}`]
                }`}
              >
                {item.icon}
              </div>

              <h3 className={styles.domain_title}>{item.title}</h3>

              <ul className={styles.domain_list}>
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className={styles.domain_point}
                  >
                    <CheckCircleIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className={styles.domain_link}
              >
                Learn More
                <ArrowForwardIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainSection;