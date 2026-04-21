import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import { projects, categories } from "@/data/home";

const OurWork = () => {
  const [active, setActive] = useState(categories[0]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className={styles.project_container}>
      <div className={styles.project_header}>
        <p className={styles.glo_badge}>OUR PROJECTS</p>
        <MainHeading text="Our Recent {{Work}}" />
        <p className={styles.p_para}>
          A glimpse of our completed and ongoing projects across sectors.
        </p>
      </div>

      <div className={styles.P_filter}>
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
      </div>

      <div className={styles.projects_grid}>
        {filtered.map((item, i) => (
          <div key={i} className={styles.project_card}>
            <div className={styles.project_img}>
              <Image
                fill
                quality={100}
                src={item.image}
                alt={item.title}
                className={styles.img}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.project_content}>
              <span>{item.category}</span>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;