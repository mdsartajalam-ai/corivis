"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./project.module.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import React from "react";
import Chip from "@mui/material/Chip";

/* ─── Data ─────────────────────────────────────────────────────────── */
const stats = [
  { icon: <EmojiEventsOutlinedIcon />, value: "2+", label: "Years of Excellence" },
  { icon: <HomeWorkOutlinedIcon />, value: "200+", label: "Projects Delivered" },
  { icon: <PeopleAltOutlinedIcon />, value: "700+", label: "Happy Clients" },
  { icon: <BarChartRoundedIcon />, value: "₹100Cr+", label: "Project Value" },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "solar", label: "Solar Energy" },
  { key: "civil", label: "Civil Construction" },
  { key: "smart", label: "Smart Metering" },
  { key: "interior", label: "Interiors" },
];

const categoryMeta: Record<
  string,
  { icon: React.ReactNode; color: string; bg: string }
> = {
  civil: {
    icon: <HomeWorkOutlinedIcon fontSize="small" />,
    color: "#6366f1",
    bg: "#eef2ff",
  },
  smart: {
    icon: <SpeedOutlinedIcon fontSize="small" />,
    color: "#0ea5e9",
    bg: "#e0f2fe",
  },
  solar: {
    icon: <SolarPowerOutlinedIcon fontSize="small" />,
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  interior: {
    icon: <DesignServicesOutlinedIcon fontSize="small" />,
    color: "#10b981",
    bg: "#ecfdf5",
  },
};

const projects = [
  {
    id: 1, category: "civil", title: "Rajendra Nagar Residential Complex",
    location: "Patna, Bihar", year: "2024", area: "12,000 sq.ft", featured: true,
    tag: "Completed", tagColor: "#10b981",
    desc: "Premium residential complex with modern amenities, earthquake-resistant RCC structure, and sustainable landscaping.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-1.jpeg&w=1200&q=80",
  },
  {
    id: 2, category: "civil", title: "NH-30 Bridge Infrastructure",
    location: "Aurangabad, Bihar", year: "2023", area: "3.2 km span", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "Multi-lane bridge over Sone river, engineered for heavy traffic load with advanced anti-corrosion treatment.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-2.jpeg&w=1200&q=80",
  },
  {
    id: 3, category: "civil", title: "Government School Complex",
    location: "Gaya, Bihar", year: "2023", area: "8,500 sq.ft", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "State-of-the-art school building with smart classrooms, solar backup, and rainwater harvesting system.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-3.jpeg&w=1200&q=80",
  },
  {
    id: 4, category: "smart", title: "BSPHCL Smart Meter Rollout — Phase I",
    location: "Patna District", year: "2024", area: "18,000 units", featured: true,
    tag: "Ongoing", tagColor: "#6366f1",
    desc: "Large-scale advanced metering infrastructure deployment for Bihar State Power Holding Company, covering urban and semi-urban zones.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-4.jpeg&w=1200&q=80",
  },
  {
    id: 5, category: "smart", title: "Rural AMI Network — Vaishali",
    location: "Vaishali, Bihar", year: "2023", area: "7,200 units", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "End-to-end AMI solution with real-time monitoring dashboard, tamper detection, and GSM-based two-way communication.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-5.jpeg&w=1200&q=80",
  },
  {
    id: 6, category: "civil", title: "Commercial Hub — Bailey Road",
    location: "Patna, Bihar", year: "2022", area: "22,000 sq.ft", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "G+5 commercial complex with basement parking, fire-safety systems, and energy-efficient glazing facade.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-7.jpeg&w=1200&q=80",
  },
  {
    id: 7, category: "smart", title: "Industrial Metering — Hajipur SEZ",
    location: "Hajipur, Bihar", year: "2024", area: "3,400 units", featured: false,
    tag: "Ongoing", tagColor: "#6366f1",
    desc: "High-precision CT-operated smart meters for industrial consumers with demand forecasting and load management.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-8.jpeg&w=1200&q=80",
  },
  {
    id: 8, category: "civil", title: "Anisabad Road Widening",
    location: "Patna, Bihar", year: "2022", area: "4.8 km", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "Urban road widening and drainage improvement project under PMGSY, with LED street lighting and pedestrian pathways.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-9.jpeg&w=1200&q=80",
  },
  {
    id: 9, category: "civil", title: "District Hospital — Chapra",
    location: "Saran, Bihar", year: "2023", area: "15,000 sq.ft", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "Fully functional 100-bed district hospital with dedicated ICU, OT theatre, and pharmaceutical storage.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fwork-gallery%2Fwork-10.jpeg&w=1200&q=80",
  },
  {
    id: 10, category: "solar", title: "10 MW Ground-Mount Solar Farm",
    location: "Nawada, Bihar", year: "2024", area: "10 MW", featured: true,
    tag: "Ongoing", tagColor: "#6366f1",
    desc: "Utility-scale bifacial solar installation with string inverters, SCADA monitoring, and grid synchronisation.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0021.jpg&w=1200&q=80",
  },
  {
    id: 11, category: "solar", title: "Rooftop Solar — IGIMS Hospital",
    location: "Patna, Bihar", year: "2024", area: "250 kWp", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "Grid-tied rooftop system with net metering, reducing hospital electricity bill by 40% annually.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0022.jpg&w=1200&q=80",
  },
  {
    id: 12, category: "solar", title: "Agricultural Solar Pumping Scheme",
    location: "Muzaffarpur, Bihar", year: "2023", area: "1.2 MW", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "PM-KUSUM scheme solar pumps for 480 farmers, ensuring reliable irrigation without grid dependency.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0023.jpg&w=1200&q=80",
  },
  {
    id: 13, category: "solar", title: "Solar Street Lighting — Nalanda",
    location: "Nalanda, Bihar", year: "2023", area: "800 units", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "LED solar street lights with dusk-to-dawn sensors and lithium battery backup across 12 villages.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0025.jpg&w=1200&q=80",
  },
  {
    id: 14, category: "interior", title: "Corporate HQ — Tech Mahindra Patna",
    location: "Patna, Bihar", year: "2024", area: "6,200 sq.ft", featured: true,
    tag: "Completed", tagColor: "#10b981",
    desc: "Contemporary open-plan office with biophilic design, acoustic panels, collaborative zones, and ergonomic workstations.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0031.jpg&w=1200&q=80",
  },
  {
    id: 15, category: "interior", title: "Luxury Villa — Boring Road",
    location: "Patna, Bihar", year: "2023", area: "4,800 sq.ft", featured: false,
    tag: "Completed", tagColor: "#10b981",
    desc: "High-end residential interior with Italian marble, custom millwork, smart home integration, and a rooftop lounge.",
    image: "https://brajmohangroup.in/_next/image?url=%2Fimages%2Fsolar-gallery%2FIMG-20250805-WA0041.jpg&w=1200&q=80",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(9);
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory]);

  /* subtle parallax on hero */
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.setProperty("--scroll-y", `${window.scrollY * 0.35}px`);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.root}>
      {/* ── Hero ──────────────────────────────── */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            <ElectricBoltOutlinedIcon fontSize="small" /> Our Portfolio
          </span>
          <h1 className={styles.heroTitle}>
            Projects That <br />
            <span className={styles.heroAccent}>Define Excellence</span>
          </h1>
          <p className={styles.heroSub}>
            From civil infrastructure to smart metering, renewable energy to premium interiors —
            every project is a testament to precision, quality, and lasting impact.
          </p>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8faff" />
          </svg>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div className={styles.statCard} key={i}>
                <span className={styles.statIcon}>{s.icon}</span>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter & View Toggle ──────────────── */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            <div className={styles.filterLeft}>
              <FilterListRoundedIcon fontSize="small" className={styles.filterIcon} />
              <div className={styles.filterPills}>
                {categories.map((c) => (
                  <button
                    key={c.key}
                    className={`${styles.pill} ${activeCategory === c.key ? styles.pillActive : ""}`}
                    onClick={() => setActiveCategory(c.key)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.viewToggle}>
              <button
                className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <GridViewRoundedIcon fontSize="small" />
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewBtnActive : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <ViewAgendaRoundedIcon fontSize="small" />
              </button>
            </div>
          </div>
          <p className={styles.resultCount}>
            Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong> projects
          </p>
        </div>
      </section>

      {/* ── Projects Grid / List ──────────────── */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={viewMode === "grid" ? styles.gridLayout : styles.listLayout}>
            {visible.map((project, idx) => {
              const meta = categoryMeta[project.category];
              return viewMode === "grid" ? (
                /* GRID CARD */
                <article
                  key={project.id}
                  className={`${styles.gridCard} ${project.featured ? styles.gridCardFeatured : ""}`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className={styles.cardImageWrap}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                    <div className={styles.cardImageOverlay} />
                    <span className={styles.cardTag} style={{ color: project.tagColor, borderColor: `${project.tagColor}33`, background: `${project.tagColor}12` }}>
                      <span className={styles.tagDot} style={{ background: project.tagColor }} />
                      {project.tag}
                    </span>
                    <span className={styles.cardCatBadge} style={{ color: meta.color, background: meta.bg }}>
                      {meta.icon} {project.category === "civil" ? "Civil" : project.category === "smart" ? "Smart Metering" : project.category === "solar" ? "Solar" : "Interior"}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.desc}</p>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}>
                        <LocationOnOutlinedIcon fontSize="inherit" /> {project.location}
                      </span>
                      <span className={styles.metaItem}>
                        <CalendarTodayOutlinedIcon fontSize="inherit" /> {project.year}
                      </span>
                      <span className={styles.metaItem}>
                        <SquareFootOutlinedIcon fontSize="inherit" /> {project.area}
                      </span>
                    </div>
                    <button className={styles.cardCta}>
                      View Details <ArrowOutwardIcon fontSize="small" />
                    </button>
                  </div>
                </article>
              ) : (
                /* LIST ROW */
                <article
                  key={project.id}
                  className={styles.listRow}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={styles.listImageWrap}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.listImage}
                      loading="lazy"
                    />
                    <span className={styles.listCatBadge} style={{ color: meta.color, background: meta.bg }}>
                      {meta.icon}
                    </span>
                  </div>
                  <div className={styles.listBody}>
                    <div className={styles.listHeader}>
                      <h3 className={styles.listTitle}>{project.title}</h3>
                      <Chip
                        label={project.tag}
                        size="small"
                        sx={{
                          backgroundColor: `${project.tagColor}14`,
                          color: project.tagColor,
                          border: `1px solid ${project.tagColor}44`,
                          fontWeight: 600,
                          fontSize: "0.7rem",
                        }}
                      />
                    </div>
                    <p className={styles.listDesc}>{project.desc}</p>
                    <div className={styles.listMeta}>
                      <span className={styles.metaItem}>
                        <LocationOnOutlinedIcon fontSize="inherit" /> {project.location}
                      </span>
                      <span className={styles.metaItem}>
                        <CalendarTodayOutlinedIcon fontSize="inherit" /> {project.year}
                      </span>
                      <span className={styles.metaItem}>
                        <SquareFootOutlinedIcon fontSize="inherit" /> {project.area}
                      </span>
                    </div>
                  </div>
                  <button className={styles.listCta} aria-label="View project">
                    <ArrowOutwardIcon />
                  </button>
                </article>
              );
            })}
          </div>

          {hasMore && (
            <div className={styles.loadMoreWrap}>
              <button className={styles.loadMoreBtn} onClick={() => setVisibleCount((v) => v + 6)}>
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Ready to Build?</span>
            <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
            <p className={styles.ctaSub}>
              Let's discuss how Eceladdus Enllave Group can turn your vision into a landmark project.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.ctaPrimary}>
              Start a Conversation <ArrowOutwardIcon fontSize="small" />
            </a>
            <a href="tel:+919231447005" className={styles.ctaSecondary}>
              +91 92314 47005
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}