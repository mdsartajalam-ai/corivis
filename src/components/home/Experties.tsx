import { motion } from "framer-motion";
import { expertiseData } from "@/data/home";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";

const Expertise = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.expertise_container}
    >
      <motion.p variants={item} className={styles.glo_badge}>
        OUR EXPERTISE
      </motion.p>

      <motion.div variants={item}>
        <MainHeading text="Powerful Solutions For {{Modern Businesses}}" />
      </motion.div>

      <div className={styles.expertise_grid}>
        {expertiseData.map((itemData, i) => {
          const Icon = itemData.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className={styles.expertise_card}
            >
              <div className={styles.expertise_inner}>
                <div className={styles.expertise_icon}>
                  <Icon />
                </div>

                <h4>{itemData.title}</h4>
                <p>{itemData.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Expertise;
