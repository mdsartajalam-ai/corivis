import Image from "next/image";
import CallbackForm from "./ContactForm";
import logo from "@/assets/logo/logo2.png";
import { contactFormData } from "@/data/form";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";


const OurJourney = () => {
  return (
    <div className={styles.journey_container}>
      <div className={styles.jo_left}>
        <div className={styles.jo_side_line}></div>
        <div className={styles.jo_content}>
          <p className={styles.glo_badge}>OUR JOURNEY</p>
          <MainHeading text="Building {{Infrastructure}} That Shapes {{The Future}}" />

          <p className={styles.jo_desc}>
            From a small construction firm to a diversified infrastructure
            group, our growth has been driven by precision, innovation, and an
            uncompromising commitment to excellence.
          </p>

          <p className={styles.jo_desc}>
            We don’t just deliver projects — we create long-term value, empower
            communities, and build a stronger, future-ready India.
          </p>

          <div className={styles.jo_author}>
            <Image src={logo} alt="logo" width={54} height={54} />
            <div>
              <h4>Banty Kumar</h4>
              <span>Managing Director</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.jo_right}>
        <CallbackForm initialValues={contactFormData}/>
      </div>
    </div>
  );
};

export default OurJourney;
