import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import styles from "./project.module.css";
import { projectList } from "@/data/home";
import { useState, useEffect } from "react";
import SubHeading from "../heading/SubHeading";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function ProjectSection() {
  const [limit, setLimit] = useState(5);
  const [services, setServices] = useState([]);
  const [totalCount, setTotalCount] = useState(-1);
  const [is_loading, setIsLoading] = useState(false);

  const handle_load_more = () => {
    setLimit(limit + 5);
    // setIsLoading(true);
  };

  useEffect(() => {
    getServices(limit);
  }, [limit]);

  const getServices = async (dataLimit: number) => {
    try {
      const response = await fetch("/api/service" + "?limit=" + dataLimit);

      const res = await response.json();

      if (!response.ok) return toast.error(res.message);

      setServices(res.data);
      setTotalCount(res.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.projects_container}>
      <div className={styles.pr_head}>
        <SubHeading text="Our Works &amp; Projects" />
      </div>
      <div className={styles.projects_grid}>
        {projectList.map((project_item) => (
          <Link
            key={project_item.slug}
            href={`/projects/${project_item.slug}`}
            className={`${styles.project_card} ${project_item.span_size === "wide" ? styles.project_card_wide : ""
              }`}
          >
            <div className={styles.project_image_wrapper}>
              <Image
                fill
                alt={project_item.title}
                src={project_item.image_src}
                className={styles.project_image}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={project_item.slug === projectList[0].slug}
              />

              <div className={styles.project_image_overlay} />
            </div>

            <div className={styles.project_info}>
              <h3 className={styles.project_title}>{project_item.title}</h3>
              <p className={styles.project_subtitle}>{project_item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.projects_load_more_row}>
        {totalCount >= limit &&
          <button
            type="button"
            disabled={is_loading}
            onClick={handle_load_more}
            className={styles.projects_load_more_btn}
          >
            <span>{is_loading ? "Loading..." : "Load More"}</span>
            <RefreshIcon
              className={`${styles.projects_load_more_icon} ${is_loading ? styles.projects_load_more_icon_spinning : ""
                }`}
              fontSize="small"
            />
          </button>
        }
      </div>
    </div>
  );
}