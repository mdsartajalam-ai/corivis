import ServiceCard from "./ServiceCard";
import { useScroll} from "framer-motion";
import { serviceList } from "@/data/iocn";
import styles from "./servicess.module.css";
import SubHeading from "../heading/SubHeading";
import { useEffect, useRef, useState } from "react";

export default function ServicessSection() {
  const [active, setActive] = useState(0);
  const [panelTop, setPanelTop] = useState(90);

  const stackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setPanelTop(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const handleTabClick = (index: number) => {
    setActive(index);

    panelRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.container}>
      <div ref={headerRef} className={styles.sticky_area}>
        <div className={styles.header}>
          <SubHeading text="Our Services" />
        </div>

        <div className={styles.tabs_sticky}>
          <div className={styles.tabs_row}>
            {serviceList.map((item, index) => {
              const TabIcon = item.tab_icon;
              const theme = (index % 6) + 1;
              const isActive = active === index;

              return (
                <button
                  type="button"
                  key={item.slug}
                  onClick={() => handleTabClick(index)}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  className={`${styles.tab} ${isActive ? styles[`tab_active_${theme}`] : ""}`}
                >
                  <TabIcon fontSize="small" />
                  <span>{item.tab_label}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.track}>
            <span
              style={{ width: `${((active + 1) / serviceList.length) * 100}%` }}
              className={`${styles.fill} ${styles[`fill_${(active % 6) + 1}`]}`}
            />
          </div>
        </div>
      </div>

      <div
        ref={stackRef}
        className={styles.stack}
        style={{ "--panel-top": `${panelTop}px` } as React.CSSProperties}
      >
        {serviceList.map((item, index) => (
          <ServiceCard
            index={index}
            key={item.slug}
            item={item as any}
            onActive={setActive}
            total={serviceList.length}
            progress={scrollYProgress}
            range={[index / serviceList.length, 1]}
            panelRef={(el) => {
              panelRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}
