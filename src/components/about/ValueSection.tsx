import { values } from "@/data/icon";
import MainHeading from "../heading/MainHeading";
import styles from "@/pages/about/about.module.css";

const ValueSection = () => {
  return (
    <div className={styles.value_container}>
      <div className={styles.values_glow} />
      <div className={styles.container}>
        <div className={`${styles.center_header} ${styles.reveal}`}>
          <span className={styles.section_tag_light}>Core Philosophy</span>
          <MainHeading text={"Driven by {{Values}}"} />
          <p className={styles.section_sub_light}>
            Four principles that guide every decision, every project, and every
            partnership we undertake.
          </p>
        </div>

        <div className={styles.values_grid}>
          {values.map((item, index) => (
            <div
              key={index}
              className={`${styles.value_card} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className={styles.value_num}>0{index + 1}</span>

              <div
                className={`${styles.value_icon_wrap} ${
                  styles[`value_icon_${index + 1}`]
                }`}
              >
                {item.icon}
              </div>

              <h3 className={styles.value_title}>{item.title}</h3>
              <p className={styles.value_desc}>{item.desc}</p>

              <div
                className={`${styles.value_bar} ${
                  styles[`value_bar_${index + 1}`]
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
