import { useEffect } from "react";
import { tags, features } from "@/data/about";
import MainHeading from "../heading/MainHeading";
import styles from "@/pages/about/test.module.css";
import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const MissionSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const elements = document.querySelectorAll(`.${styles.reveal}`);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.mission_container}>
      <div className={styles.mission_grid}>
        <div className={`${styles.mission_visual} ${styles.reveal}`}>
          <div className={styles.mission_dark_card}>
            <div className={styles.mission_card_glow} />
            <BusinessIcon/>
            <h3>Empowering Communities</h3>
            <p>
              From government highways to household solar — our work touches
              every layer of Bihar&apos;s growth story.
            </p>

            <div className={styles.mission_tags}>
              {tags.map((item, index) => (
                <span key={index} className={styles.mission_tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.mission_mini_cards}>
            <div className={styles.mission_mini}>
              <strong>1K+</strong>
              <span>Households Powered with Solar</span>
            </div>

            <div className={styles.mission_mini}>
              <strong>Bihar #1</strong>
              <span>Trusted Infra Partner</span>
            </div>
          </div>
        </div>

        <div className={`${styles.mission_text} ${styles.reveal}`}>
          <span className={styles.section_tag}>Who We Are</span>
          <MainHeading text={"More Than a Company — {{A Nation Builder}}"} />

          <p className={styles.body}>
            Eceladdus Enllave Group is a multidisciplinary infrastructure
            powerhouse headquartered in Samastipur, Bihar.
          </p>

          <p className={styles.body}>
            Our mission is to build a sustainable, progressive ecosystem for
            future generations.
          </p>

          <div className={styles.check_list}>
            {features.map((item, index) => (
              <div key={index} className={styles.check_item}>
                <CheckCircleIcon/>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
