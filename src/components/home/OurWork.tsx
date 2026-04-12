"use client";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

import p1 from "@/assets/hero/c1.jpg";
import p2 from "@/assets/hero/c2.jpg";
import p3 from "@/assets/hero/c3.jpg";

const projects = [
  { title: "Building Construction", category: "Construction", image: p1 },
  { title: "Infrastructure Project", category: "Infrastructure", image: p2 },
  { title: "Solar Plant Setup", category: "Energy", image: p3 },
  { title: "Smart City Work", category: "Infrastructure", image: p1 },
  { title: "Interior Design", category: "Design", image: p2 },
  { title: "Renovation Work", category: "Construction", image: p3 },
];

const categories = ["All", "Construction", "Infrastructure", "Energy", "Design"];

const OurWork = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className={styles.projects}>
      <div className={styles.projects_container}>
        
        {/* HEADER */}
        <div className={styles.projects_header}>
          <span className={styles.badge}>OUR PROJECTS</span>

          <h2 className={styles.heading}>
            Our Recent <span>Work</span>
          </h2>

          <p className={styles.sub}>
            A glimpse of our completed and ongoing projects across sectors.
          </p>
        </div>

        {/* FILTER */}
        <div className={styles.filter}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter_btn} ${
                active === cat ? styles.active : ""
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={styles.projects_grid}>
          {filtered.map((item, i) => (
            <div key={i} className={styles.project_card}>
              
              <div className={styles.project_img}>
                <Image src={item.image} alt="" fill />
              </div>

              <div className={styles.project_content}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurWork;