import Button from "../button/Button";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import { companyFeatures } from "@/data/home";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutSection = () => {
  const buttonClicked = () => {
    console.log("button clicked");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.about_container}
    >
      <div className={styles.ab_left}>
        <motion.p variants={item} className={styles.glo_badge}>
          ABOUT THE GROUP
        </motion.p>

        <motion.div variants={item}>
          <MainHeading text="Building Infrastructure {{with Integrity & Innovation}}" />
        </motion.div>

        <motion.p variants={item} className={styles.glo_paragraph}>
          We are a multidisciplinary infrastructure powerhouse delivering
          sustainable, scalable, and future-ready solutions across India.
        </motion.p>

        <motion.div variants={item}>
          <Button text="View Company Profile" action={buttonClicked} />
        </motion.div>
      </div>

      <div className={styles.ab_right}>
        {companyFeatures.map((itemText, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -6 }}
            className={styles.ab_card}
          >
            <div className={styles.ab_icon_box}>
              <CheckCircleIcon />
            </div>
            <span>{itemText}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;
