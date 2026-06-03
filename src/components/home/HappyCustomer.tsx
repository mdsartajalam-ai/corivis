import Image from "next/image";
import { motion } from "framer-motion";
import { customers } from "@/data/home";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";

const HappyCustomers = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
        className={styles.hc_container}
      >
        <div className={styles.hc_top}>
          <motion.p variants={item} className={styles.glo_badge}>
            HAPPY CUSTOMERS
          </motion.p>

          <motion.div variants={item}>
            <MainHeading text="Trusted by {{Hundreds of Clients}}" />
          </motion.div>

          <motion.p variants={item} className={styles.hc_sub}>
            Real installations. Real results.
          </motion.p>
        </div>
      </motion.div>

      <div className={styles.hc_slider}>
        <div className={styles.hc_track}>
          {[...customers, ...customers].map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={styles.hc_card}
            >
              <div className={styles.hc_img_wrap}>
                <Image
                  fill
                  src={itemData.image}
                  alt={itemData.name}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              <div className={styles.hc_content}>
                <h4>{itemData.name}</h4>
                <span>{itemData.location}</span>
                <p>{itemData.phone}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
