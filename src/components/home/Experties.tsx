// components/Expertise.tsx
import styles from "@/styles/Home.module.css";
import ConstructionIcon from "@mui/icons-material/Construction";
import BoltIcon from "@mui/icons-material/Bolt";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const data = [
  {
    title: "Construction",
    desc: "Advanced infrastructure & modern architecture.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Energy",
    desc: "Smart renewable energy solutions.",
    icon: <BoltIcon />,
  },
  {
    title: "Web",
    desc: "Scalable high-performance platforms.",
    icon: <LanguageIcon />,
  },
  {
    title: "Mobile",
    desc: "Premium cross-platform apps.",
    icon: <PhoneIphoneIcon />,
  },
];

export default function Expertise() {
  return (
    <section className={styles.expertise_section}>
      <div className={styles.expertise_container}>
        <p className={styles.expertise_tag}>OUR EXPERTISE</p>

        <h2 className={styles.expertise_heading}>
          Powerful Solutions For Modern Businesses
        </h2>

        <div className={styles.expertise_grid}>
          {data.map((item, i) => (
            <div key={i} className={styles.expertise_card}>
              <div className={styles.expertise_inner}>
                <div className={styles.expertise_icon}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}