import Image from "next/image";
import { motion } from "framer-motion";
import CallbackForm from "./ContactForm";
import logo from "@/assets/logo/logo2.png";
import { contactFormData } from "@/data/form";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";

const OurJourney = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.journey_container}
    >
      <div className={styles.jo_left}>
        <div className={styles.jo_side_line}></div>

        <div className={styles.jo_content}>
          <motion.p variants={item} className={styles.glo_badge}>
            OUR JOURNEY
          </motion.p>

          <motion.div variants={item}>
            <MainHeading text="Building {{Infrastructure}} That Shapes {{The Future}}" />
          </motion.div>

          <motion.p variants={item} className={styles.jo_desc}>
            From a small construction firm to a diversified infrastructure
            group, our growth has been driven by precision, innovation, and an
            uncompromising commitment to excellence.
          </motion.p>

          <motion.p variants={item} className={styles.jo_desc}>
            We don’t just deliver projects — we create long-term value, empower
            communities, and build a stronger, future-ready India.
          </motion.p>

          <motion.div variants={item} className={styles.jo_author}>
            <Image src={logo} alt="logo" width={54} height={54} />
            <div>
              <h4>Banty Kumar</h4>
              <span>Managing Director</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div variants={item} className={styles.jo_right}>
        <CallbackForm initialValues={contactFormData} />
      </motion.div>
    </motion.div>
  );
};

export default OurJourney;
