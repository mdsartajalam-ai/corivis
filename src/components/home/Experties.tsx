import { expertiseData } from "@/data/home";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";

const Expertise = () => {
  return (
    <div className={styles.expertise_container}>
      <p className={styles.glo_badge}>OUR EXPERTISE</p>
      <MainHeading text="Powerful Solutions For {{Modern Businesses}}" />

      <div className={styles.expertise_grid}>
        {expertiseData.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className={styles.expertise_card}>
              <div className={styles.expertise_inner}>
                <div className={styles.expertise_icon}>
                  <Icon />
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
