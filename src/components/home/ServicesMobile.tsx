import { useState } from "react";
import { serviceList } from "@/data/iocn";
import SubHeading from "../heading/SubHeading";
import styles from "./servicemobile.module.css";
import ServiceCardMobile from "./ServiceCardMobile";

export default function ServicessMobile() {
  const [openCards, setOpenCards] = useState<boolean[]>(
    serviceList.map((_, index) => index === 0)
  );

  const handleToggle = (index: number) => {
    setOpenCards((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <SubHeading text="Our Services" />
      </div>

      <div className={styles.list}>
        {serviceList.map((item, index) => (
          <ServiceCardMobile
            key={item.slug}
            item={item}
            index={index}
            isActive={openCards[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
