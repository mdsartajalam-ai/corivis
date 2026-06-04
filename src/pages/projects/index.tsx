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
import Image from "next/image";

import sl1 from "@/assets/hero/sl6.jpeg";
import sl7 from "@/assets/hero/sl7.jpeg";
import sl8 from "@/assets/hero/sl8.jpeg";
import sl9 from "@/assets/hero/sl9.jpeg";
import sl10 from "@/assets/hero/sl10.jpeg";
import sl11 from "@/assets/hero/sl11.jpeg";

import cons1 from "@/assets/hero/cons1.jpeg";
import cons2 from "@/assets/hero/cons2.jpeg";
import cons3 from "@/assets/hero/cons3.jpeg";
import cons4 from "@/assets/hero/cons4.jpeg";

import int1 from "@/assets/hero/intr1.jpg";

/* ─── Data ─────────────────────────────────────────────────────────── */
const stats = [
  {
    icon: <EmojiEventsOutlinedIcon />,
    value: "2+",
    label: "Years of Excellence",
  },
  {
    icon: <HomeWorkOutlinedIcon />,
    value: "200+",
    label: "Projects Delivered",
  },
  { icon: <PeopleAltOutlinedIcon />, value: "700+", label: "Happy Clients" },
  { icon: <BarChartRoundedIcon />, value: "₹100Cr+", label: "Project Value" },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "solar", label: "Solar Energy" },
  { key: "civil", label: "Civil Construction" },
  // { key: "smart", label: "Smart Metering" },
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
    id: 1,
    category: "solar",
    title: "Residential Rooftop Solar Project",
    location: "Runisaidpur, Sitamarhi, Bihar ",
    year: "2024",
    area: "250 kWp",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Grid-tied rooftop system with net metering, reducing hospital electricity bill by 40% annually.",
    image: sl7,
  },
  {
    id: 2,
    category: "solar",
    title: "Agricultural Solar Pumping Scheme",
    location: "Runisaidpur, Sitamarhi, Bihar ",
    year: "2023",
    area: "1.2 MW",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "PM-KUSUM scheme solar pumps for 480 farmers, ensuring reliable irrigation without grid dependency.",
    image: sl8,
  },
  {
    id: 3,
    category: "solar",
    title: "Solar Street Lighting — Samastipur",
    location: "Dalsinghsarai, Samastipur, Bihar",
    year: "2023",
    area: "800 units",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "LED solar street lights with dusk-to-dawn sensors and lithium battery backup across 12 villages.",
    image: sl9,
  },
  {
    id: 11,
    category: "civil",
    title: "Rural Panchayat Bhawan Construction",
    location: "Samastipur, Bihar",
    year: "2024",
    area: "4,500 sq.ft",
    featured: true,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Modern Panchayat Bhawan with administrative offices, meeting hall, digital service center, and public facilities.",
    image: cons1,
  },
  {
    id: 12,
    category: "civil",
    title: "Village Community Hall",
    location: "Sitamarhi, Bihar",
    year: "2026",
    area: "3,800 sq.ft",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Multi-purpose community hall designed for social gatherings, cultural events, training programs, and public meetings.",
    image: cons2,
  },
  {
    id: 13,
    category: "civil",
    title: " Sundarban Apartment",
    location: "Darbhanga, Bihar",
    year: "2026",
    area: "6,200 sq.ft",
    featured: true,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Fully finished block, wonderfull park, and playground infrastructure.",
    image: cons3,
  },
  {
    id: 4,
    category: "smart",
    title: "Flour Mill",
    location: "Muzaffarpur District",
    year: "2026",
    capacity: "20kw",
    featured: true,
    tag: "Ongoing",
    tagColor: "#6366f1",
    desc: "Large-scale advanced metering infrastructure deployment for Bihar State Power Holding Company, covering urban and semi-urban zones.",
    image: sl1,
  },
  /*{
    id: 5,
    category: "smart",
    title: " — Vaishali",
    location: "Vaishali, Bihar",
    year: "2026",
    area: "7,200 units",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "End-to-end AMI solution with real-time monitoring dashboard, tamper detection, and GSM-based two-way communication.",
    image: sl1,
  },*/
  {
    id: 29,
    category: "civil",
    title: "Rural Health Sub-Centre",
    location: "Muzaffarpur, Bihar",
    year: "2026",
    area: "2,500 sq.ft",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Healthcare facility providing basic medical services, maternal care, vaccination support, and emergency treatment.",
    image: cons4,
  },
  /*{
    id: 7,
    category: "smart",
    title: "Industrial Metering — Hajipur SEZ",
    location: "Hajipur, Bihar",
    year: "2026",
    area: "3,400 units",
    featured: false,
    tag: "Ongoing",
    tagColor: "#6366f1",
    desc: "High-precision CT-operated smart meters for industrial consumers with demand forecasting and load management.",
    image: sl1,
  },*/
  /*{
    id: 31,
    category: "civil",
    title: "Rural Residential Housing Cluster",
    location: "Sitamarhi, Bihar",
    year: "2026",
    area: "18 Units",
    featured: true,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Affordable rural housing project featuring durable RCC construction, sanitation facilities, and reliable water access.",
    image: cons1,
  },*/
  /*{
    id: 9,
    category: "civil",
    title: "District Hospital — Chapra",
    location: "Saran, Bihar",
    year: "2026",
    area: "15,000 sq.ft",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Fully functional 100-bed district hospital with dedicated ICU, OT theatre, and pharmaceutical storage.",
    image: cons2,
  },*/
  /*{
    id: 10,
    category: "solar",
    title: "Solar Street Lighting Initiative",
    location: "Samastipur, Bihar",
    year: "2025",
    area: "10 KW",
    featured: true,
    tag: "Ongoing",
    tagColor: "#6366f1",
    desc: "Utility-scale bifacial solar installation with string inverters, SCADA monitoring, and grid synchronisation.",
    image: sl1,
  },*/

  {
    id: 14,
    category: "solar",
    title: "Rooftop Solar Installation — Samastipur",
    location: "Samastipur, Bihar",
    year: "2025",
    area: "120 kWp",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Grid-connected rooftop solar system installed across commercial buildings with net metering and remote monitoring.",
    image: sl10,
  },
  {
    id: 15,
    category: "solar",
    title: "Agricultural Solar Pumping Project",
    location: "Muzaffarpur, Bihar",
    year: "2025",
    area: "60 Pumps",
    featured: false,
    tag: "Completed",
    tagColor: "#13221d",
    desc: "Solar-powered irrigation pumps deployed for farmers, ensuring reliable water supply while reducing diesel costs.",
    image: sl11,
  },

  /*{
    id: 16,
    category: "interior",
    title: "Corporate HQ — Tech Mahindra Patna",
    location: "Patna, Bihar",
    year: "2025",
    area: "6,200 sq.ft",
    featured: true,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "Contemporary open-plan office with biophilic design, acoustic panels, collaborative zones, and ergonomic workstations.",
    image: int1,
  },*/
  {
    id: 17,
    category: "interior",
    title: "Luxury Villa — Boring Road",
    location: "Patna, Bihar",
    year: "2026",
    area: "4,800 sq.ft",
    featured: false,
    tag: "Completed",
    tagColor: "#10b981",
    desc: "High-end residential interior with Italian marble, custom millwork, smart home integration, and a rooftop lounge.",
    image: int1,
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
        heroRef.current.style.setProperty(
          "--scroll-y",
          `${window.scrollY * 0.35}px`,
        );
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
            From civil infrastructure to smart metering, renewable energy to
            premium interiors — every project is a testament to precision,
            quality, and lasting impact.
          </p>
        </div>
        <div className={styles.heroWave}>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#f8faff"
            />
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
              <FilterListRoundedIcon
                fontSize="small"
                className={styles.filterIcon}
              />
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
            Showing <strong>{visible.length}</strong> of{" "}
            <strong>{filtered.length}</strong> projects
          </p>
        </div>
      </section>

      {/* ── Projects Grid / List ──────────────── */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div
            className={
              viewMode === "grid" ? styles.gridLayout : styles.listLayout
            }
          >
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      className={styles.cardImage}
                      width={1200}
                      height={800}
                    />
                    <div className={styles.cardImageOverlay} />
                    <span
                      className={styles.cardTag}
                      style={{
                        color: project.tagColor,
                        borderColor: `${project.tagColor}33`,
                        background: `${project.tagColor}12`,
                      }}
                    >
                      <span
                        className={styles.tagDot}
                        style={{ background: project.tagColor }}
                      />
                      {project.tag}
                    </span>
                    <span
                      className={styles.cardCatBadge}
                      style={{ color: meta.color, background: meta.bg }}
                    >
                      {meta.icon}{" "}
                      {project.category === "civil"
                        ? "Civil"
                        : project.category === "smart"
                          ? "Smart Metering"
                          : project.category === "solar"
                            ? "Solar"
                            : "Interior"}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.desc}</p>
                    <div className={styles.cardMeta}>
                      <span className={styles.metaItem}>
                        <LocationOnOutlinedIcon fontSize="inherit" />{" "}
                        {project.location}
                      </span>
                      <span className={styles.metaItem}>
                        <CalendarTodayOutlinedIcon fontSize="inherit" />{" "}
                        {project.year}
                      </span>
                      <span className={styles.metaItem}>
                        <SquareFootOutlinedIcon fontSize="inherit" />{" "}
                        {project.area}
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className={styles.listImage}
                    />
                    <span
                      className={styles.listCatBadge}
                      style={{ color: meta.color, background: meta.bg }}
                    >
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
                        <LocationOnOutlinedIcon fontSize="inherit" />{" "}
                        {project.location}
                      </span>
                      <span className={styles.metaItem}>
                        <CalendarTodayOutlinedIcon fontSize="inherit" />{" "}
                        {project.year}
                      </span>
                      <span className={styles.metaItem}>
                        <SquareFootOutlinedIcon fontSize="inherit" />{" "}
                        {project.area}
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
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount((v) => v + 6)}
              >
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
              Let's discuss how Eceladdus Enllave Group can turn your vision
              into a landmark project.
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
