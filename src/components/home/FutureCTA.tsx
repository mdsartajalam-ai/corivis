import Button from "../button/Button";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import EastIcon from "@mui/icons-material/East";
import { container, item } from "@/utils/animation";

const FutureCTA = () => {
  const buttonClicked = () => {
    console.log("button clicked");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.cta_container}
    >
      <motion.p variants={item} className={styles.glo_badge}>
        READY TO BUILD
      </motion.p>

      <motion.div variants={item}>
        <MainHeading text="Ready to Build {{The Future?}}" />
      </motion.div>

      <motion.p variants={item} className={styles.cta_sub}>
        Partner with us to create world-class infrastructure, sustainable energy
        solutions, and modern designs that truly make an impact.
      </motion.p>

      <motion.div variants={item} className={styles.cta_actions}>
        <Button
          action={buttonClicked}
          endIcon={<EastIcon />}
          text="Start Your Project"
        />
        <Button text="Get Consultation" action={buttonClicked} />
      </motion.div>
    </motion.div>
  );
};

export default FutureCTA;
