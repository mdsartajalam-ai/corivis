import Button from "../button/Button";
import styles from "@/styles/Home.module.css";
import { companyFeatures } from "@/data/home";
import MainHeading from "../heading/MainHeading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutSection = () => {

  const buttonClicked = () => {
    console.log("button clicked");
  };

  return (
    <div className={styles.about_container}>
      <div className={styles.ab_left}>
        <p className={styles.glo_badge}>ABOUT THE GROUP</p>
        <MainHeading text="Building Infrastructure {{with Integrity & Innovation}}" />
        <p className={styles.glo_paragraph}>
          We are a multidisciplinary infrastructure powerhouse delivering
          sustainable, scalable, and future-ready solutions across India.
        </p>
        <Button text="View Company Profile" action={buttonClicked}/>
      </div>

      <div className={styles.ab_right}>
        {companyFeatures.map((item, index) => (
          <div key={index} className={styles.ab_card}>
            <div className={styles.ab_icon_box}>
              <CheckCircleIcon />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
