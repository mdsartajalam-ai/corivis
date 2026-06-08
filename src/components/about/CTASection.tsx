import Button from "../button/Button";
import { useRouter } from "next/router";
import MainHeading from "../heading/MainHeading";
import EastIcon from "@mui/icons-material/East";
import styles from "@/pages/about/about.module.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const CTASection = () => {
  const router = useRouter();

  return (
    <div className={styles.cta_container}>
      <div className={styles.cta_bg}>
        <div className={styles.cta_orb_1} />
        <div className={styles.cta_orb_2} />
      </div>

      <div className={`${styles.cta_inner} ${styles.reveal}`}>
        <div className={styles.cta_badge}>
          <WorkspacePremiumIcon />
        </div>
        <MainHeading text="Ready to Build Something {{Extraordinary?}}" />

        <p className={styles.cta_sub}>
          Partner with Bihar&apos;s most trusted infrastructure group.
          Let&apos;s shape the future of India — together.
        </p>

        <div className={styles.cta_actions}>
          <Button
            endIcon={<EastIcon />}
            text="Satart a Conversation"
            action={() => router.push("/contact")}
          />

          <Button text="View Our Projects" action={() => router.push("/projects")} />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
