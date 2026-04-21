import Image from "next/image";
import { customers } from "@/data/home";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";

const HappyCustomers = () => {
  return (
    <div>
      <div className={styles.hc_container}>
        <div className={styles.hc_top}>
          <p className={styles.glo_badge}>HAPPY CUSTOMERS</p>
          <MainHeading text="Trusted by {{Hundreds of Clients}}"/>
          <p className={styles.hc_sub}>
            Real installations. Real results.
          </p>
        </div>
      </div>

      <div className={styles.hc_slider}>
        <div className={styles.hc_track}>
          {[...customers, ...customers].map((item, i) => (
            <div key={i} className={styles.hc_card}>
              <div className={styles.hc_img_wrap}>
                <Image
                  fill
                  src={item.image}
                  alt={item.name}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className={styles.hc_content}>
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;