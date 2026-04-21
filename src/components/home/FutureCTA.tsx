import Button from "../button/Button";
import styles from "@/styles/Home.module.css";
import MainHeading from "../heading/MainHeading";
import EastIcon from "@mui/icons-material/East";

const FutureCTA = () => {
  const buttonClicked = () => {
    console.log("button clicked");
  };

  return (
    <div className={styles.cta_container}>
      <p className={styles.glo_badge}>READY TO BUILD</p>
      <MainHeading text="Ready to Build {{The Future?}}" />
      <p className={styles.cta_sub}>
        Partner with us to create world-class infrastructure, sustainable energy
        solutions, and modern designs that truly make an impact.
      </p>

      <div className={styles.cta_actions}>
        <Button
          text="Start Your Project"
          action={buttonClicked}
          endIcon={<EastIcon />}
        />
        <Button
          text="Get Consultation"
          action={buttonClicked}
        />
      </div>
    </div>
  );
};

export default FutureCTA;
