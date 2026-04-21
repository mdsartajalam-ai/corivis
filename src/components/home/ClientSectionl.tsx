

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { clients } from "@/data/home";
import MainHeading from "../heading/MainHeading";


const ClientSection = () => {
  return (
    <section className={styles.client_container}>
      
      {/* Heading */}
      <div className={styles.client_head}>
        <MainHeading text="Trusted by {{Industry}} Leaders"/>
        <p className={styles.heading_sub}>
          Delivering excellence across top organizations
        </p>
      </div>

      {/* Carousel */}
      <div className={styles.carousel_mask}>
        <div className={styles.carousel_track}>
          
          {[...clients, ...clients].map((item, i) => (
            <div key={i} className={styles.client_card}>
              
              <div className={styles.card_content}>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={60}
                  className={styles.logo_img}
                />

                <span className={styles.client_name}>
                  {item.name}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default ClientSection;