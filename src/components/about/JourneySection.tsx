import { useState } from "react";
import { timeline } from "@/data/icon";
import styles from "@/pages/about/about.module.css";
import MainHeading from "../heading/MainHeading";

const JourneySection = () => {
  const [active_year, set_active_year] = useState(0);

  return (
    <div className={styles.journey_container} id="journey">
      <div>
        <div className={`${styles.center_header} ${styles.reveal}`}>
          <span className={styles.section_tag}>Our Story</span>

          {/* <h2 className={styles.section_title}>
            A Journey of <span className={styles.accent}>2 Years</span>
          </h2> */}
          <MainHeading text={"A Journey of {{2 Years}}"} />

          <p className={styles.section_sub}>
            From a bold vision in Patna to Bihar's most trusted infrastructure
            group.
          </p>
        </div>

        <div className={`${styles.year_tabs} ${styles.reveal}`}>
          {timeline.map((item, index) => (
            <button
              key={index}
              onClick={() => set_active_year(index)}
              className={`${styles.year_tab} ${
                active_year === index ? styles.year_tab_active : ""
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        <div className={`${styles.feature_panel} ${styles.reveal}`}>
          <div className={styles.feature_panel_left}>
            <span className={styles.feature_tag}>
              {timeline[active_year].tag}
            </span>

            <div className={styles.feature_year}>
              {timeline[active_year].year}
            </div>

            <h3 className={styles.feature_title}>
              {timeline[active_year].title}
            </h3>

            <p className={styles.feature_desc}>{timeline[active_year].desc}</p>
          </div>

          <div className={styles.feature_panel_right}>
            <div className={styles.feature_icon_big}>
              {timeline[active_year].icon}
            </div>

            <div className={styles.feature_progress}>
              <div
                className={styles.feature_progress_fill}
                style={{
                  height: `${((active_year + 1) / timeline.length) * 100}%`,
                }}
              />

              {timeline.map((_, index) => (
                <div
                  key={index}
                  onClick={() => set_active_year(index)}
                  className={`${styles.feature_dot} ${
                    index <= active_year ? styles.feature_dot_active : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.timeline_strip}>
          {timeline.map((item, index) => (
            <div
              key={index}
              onClick={() => set_active_year(index)}
              className={`${styles.strip_item} ${styles.reveal} ${
                active_year === index ? styles.strip_active : ""
              }`}
              style={{
                transitionDelay: `${index * 0.07}s`,
              }}
            >
              <div className={styles.strip_icon_wrap}>{item.icon}</div>

              <span className={styles.strip_year}>{item.year}</span>

              <span className={styles.strip_title}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
