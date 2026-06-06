import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { projects, categories } from "@/data/home";
import { container, item } from "@/utils/animation";

const OurWork = () => {
  const [active, setActive] = useState(categories[0]);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={styles.project_container}
    >
      <div className={styles.project_header}>
        <motion.p variants={item} className={styles.glo_badge}>
          OUR PROJECTS
        </motion.p>

        <motion.div variants={item}>
          <MainHeading text="Our Recent {{Work}}" />
        </motion.div>

        <motion.p variants={item} className={styles.p_para}>
          A glimpse of our completed and ongoing projects across sectors.
        </motion.p>
      </div>

      <motion.div variants={item} className={styles.P_filter}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${styles.filter_btn} ${
              active === cat ? styles.fl_active : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className={styles.projects_grid}>
        {filtered.map((itemData, i) => (
          <motion.div key={i} variants={item} className={styles.project_card}>
            <div className={styles.project_img}>
              <Image
                fill
                quality={100}
                alt={itemData.title}
                src={itemData.image}
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className={styles.project_content}>
              <span>{itemData.category}</span>
              <h4>{itemData.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
