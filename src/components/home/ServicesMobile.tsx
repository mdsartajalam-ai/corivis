import { toast } from "react-toastify";
import { serviceList } from "@/data/iocn";
import { useEffect, useState } from "react";
import { ServiceType } from "@/types/service";
import SubHeading from "../heading/SubHeading";
import styles from "./servicemobile.module.css";
import ServiceCardMobile from "./ServiceCardMobile";

export default function ServicessMobile() {
  const [services, setServices] = useState([]);
  const [totalCount, setTotalCount] = useState(-1);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    getServices();
  }, []);

  // const [openCards, setOpenCards] = useState<boolean[]>(
  //   serviceList.map((_, index) => index === 0)
  // );

  // const handleToggle = (index: number) => {
  //   setOpenCards((prev) =>
  //     prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
  //   );
  // };
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const getServices = async () => {
    try {
      // setIsLoading(true);
      const response = await fetch("/api/service");

      const res = await response.json();
      // setIsLoading(false);
      if (!response.ok) return toast.error(res.message);

      setServices(res.data);
      setTotalCount(res.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <SubHeading text="Our Services" />
      </div>

      <div className={styles.list}>
        {services &&
          services?.length > 0 &&
          services.map((item: ServiceType, index) => (
            <ServiceCardMobile
              index={index}
              key={item.slug}
              item={item as any}
              // isActive={openCards[index]}
              // onToggle={() => handleToggle(index)}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
      </div>
    </section>
  );
}
