import Link from "next/link";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import styles from "./servicemobile.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import DescriptionIcon from "@mui/icons-material/Description";
import BrochureModal from "../modal/BrochureModal";
import { useState } from "react";

type Item = {
  slug: string;
  title: string;
  badges: string[];
  image_src: string;
  description: string;
  image_caption: string;
  brochure_href: string;
};

type Props = {
  item: Item;
  index: number;
  isActive: boolean;
  onToggle: () => void;
};

export default function ServiceCardMobile({
  item,
  index,
  isActive,
  onToggle,
}: Props) {
  const theme = (index % 6) + 1;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        type="button"
        onClick={onToggle}
        className={`${styles.item_head} ${
          isActive
            ? `${styles.item_head_active} ${styles[`tab_active_${theme}`]}`
            : ""
        }`}
      >
        <span className={styles.item_title}>{item.title}</span>
        {isActive ? (
          <RemoveIcon fontSize="small" />
        ) : (
          <AddIcon fontSize="small" />
        )}
      </button>

      {isActive && (
        <div className={styles.card_wrapper}>
          <div className={`${styles.item_body} ${styles[`card_${theme}`]}`}>
            <div className={styles.badge_row}>
              {item.badges.map((badge, i) => {
                const bTheme = (i % 6) + 1;
                return (
                  <span
                    key={badge}
                    className={`${styles.badge} ${styles[`badge_${bTheme}`]}`}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>

            <div
              className={`${styles.img_wrap} ${styles[`img_wrap_${theme}`]}`}
            >
              <span className={`${styles.ring} ${styles[`ring_${theme}`]}`} />
              <Image
                fill
                sizes="160px"
                src={item.image_src}
                alt={item.image_caption}
                className={styles.img}
              />
            </div>
            <p className={styles.caption}>{item.image_caption}</p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`${styles.btn} ${styles[`btn_${theme}`]}`}
            >
              <span>Download Brochure</span>
              <DescriptionIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
      <BrochureModal
        isOpen={open}
        title={item.title}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
