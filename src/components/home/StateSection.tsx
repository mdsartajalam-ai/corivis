import { stats } from "@/data/home";
import StatCard from "../card/StateCard";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.state_container}>
      <div className={styles.bg_mesh} aria-hidden="true" />
        <div className={styles.state_grid}>
          {stats.map((stat, index) => (
            <StatCard 
              stat={stat} 
              key={index} 
              index={index} 
              active={active}/>
          ))}
        </div>
    </div>
  );
};

export default StatsSection;
