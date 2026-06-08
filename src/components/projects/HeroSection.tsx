import styles from "@/pages/projects/projects.module.css";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import MainHeading from "../heading/MainHeading";

const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_bg} />
      <div className={styles.hero_overlay} />

      <div className={styles.hero_content}>
        <span className={styles.hero_eyebrow}>
          <ElectricBoltOutlinedIcon fontSize="small" /> Our Portfolio
        </span>

        <MainHeading text="Projects That {{Define Excellence}}" />

        <p className={styles.hero_sub}>
          From civil infrastructure to smart metering, renewable energy to
          premium interiors — every project is a testament to precision,
          quality, and lasting impact.
        </p>
      </div>

      <div className={styles.hero_wave}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f8faff"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
