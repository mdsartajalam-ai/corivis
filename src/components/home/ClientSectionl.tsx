import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/data/home";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";

const ClientSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.client_container}
    >
      <div className={styles.client_head}>
        <motion.div variants={item}>
          <MainHeading text="Trusted by {{Industry}} Leaders" />
        </motion.div>

        <motion.p variants={item} className={styles.heading_sub}>
          Delivering excellence across top organizations
        </motion.p>
      </div>

      <div className={styles.carousel_mask}>
        <div className={styles.carousel_track}>
          {[...clients, ...clients].map((itemData, i) => (
            <motion.div key={i} variants={item} className={styles.client_card}>
              <div className={styles.card_content}>
                <Image
                  width={120}
                  height={60}
                  src={itemData.logo}
                  alt={itemData.name}
                  className={styles.logo_img}
                />

                <span className={styles.client_name}>{itemData.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientSection;
