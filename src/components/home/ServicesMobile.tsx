import { useState } from "react";
import { serviceList } from "@/data/iocn";
import SubHeading from "../heading/SubHeading";
import styles from "./servicemobile.module.css";
import ServiceCardMobile from "./ServiceCardMobile";

export default function ServicessMobile() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <SubHeading text="Our Services" />
      </div>

      <div className={styles.list}>
        {serviceList.map((item, index) => (
          <ServiceCardMobile
            index={index}
            key={item.slug}
            item={item as any}
            isActive={active === index}
            onToggle={() => setActive(active === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}