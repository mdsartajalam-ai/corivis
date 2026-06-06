import styles from "@/styles/Home.module.css";
import { ElementType, useEffect, useState } from "react";

type Stat = {
  Icon: ElementType;
  numericValue: number;
  suffix: string;
  label: string;
};

type StatCardProps = {
  stat: Stat;
  index: number;
  active: boolean;
};

const useCountUp = (target: number, duration = 1800, active: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
};

const StatCard = ({ stat, index, active }: StatCardProps) => {
  const count = useCountUp(stat.numericValue, 1800 + index * 150, active);

  const { Icon } = stat;

  return (
    <div className={styles.state_card} style={{ animationDelay: `${index * 0.12}s` }}>
      <div className={styles.card_inner}>
        <div className={styles.accent_line} />

        <div className={styles.icon_box}>
          <Icon className={styles.st_icon} aria-hidden="true" />
        </div>

        <div className={styles.st_number}>
          {active ? `${count}${stat.suffix}` : "0"}
        </div>

        <div className={styles.st_divider} />

        <p className={styles.st_label}>{stat.label}</p>
      </div>

      <div className={styles.st_corner_glow} />
    </div>
  );
};

export default StatCard;
