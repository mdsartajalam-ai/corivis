"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./construction.module.css";

// MUI Icons
import ApartmentIcon from "@mui/icons-material/Apartment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

/* ─────────────────────── DATA ─────────────────────── */

const services = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 36 }} />,
    title: "Civil Construction",
    desc: "Large-scale infrastructure projects executed with precision and adherence to the highest international safety standards.",
    items: [
      "Highway & Road Construction",
      "Government Institutional Buildings",
      "Bridges & Flyovers",
      "Industrial Warehousing & Factories",
    ],
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 36 }} />,
    title: "Interior & Exterior",
    desc: "Transform spaces with luxury finishes, innovative designs, and meticulous attention to every visual detail.",
    items: [
      "Turnkey Interior Solutions",
      "3D Visualization & Planning",
      "Custom Furniture & Carpentry",
      "Corporate Office Interiors",
    ],
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 36 }} />,
    title: "Real Estate Development",
    desc: "Premium residential and commercial properties built with world-class materials and architectural vision.",
    items: [
      "Luxury Residential Complexes",
      "Commercial Towers",
      "Township Development",
      "Smart Building Integration",
    ],
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 36 }} />,
    title: "Project Management",
    desc: "End-to-end project oversight with transparent timelines, budgets, and quality checkpoints at every milestone.",
    items: [
      "Feasibility & Site Analysis",
      "Budget & Cost Management",
      "Procurement & Logistics",
      "Handover & Warranty Support",
    ],
  },
];

const stats = [
  { icon: <EmojiEventsIcon />, value: "25+", label: "Years of Excellence" },
  { icon: <VerifiedIcon />, value: "300+", label: "Projects Completed" },
  { icon: <GroupsIcon />, value: "1200+", label: "Expert Workforce" },
  { icon: <HandshakeIcon />, value: "98%", label: "Client Satisfaction" },
];

const portfolio = [
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    title: "NH-30 Highway Corridor",
    category: "Civil Infrastructure",
    location: "Bihar, India",
    year: "2024",
  },
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Prestige Corporate Hub",
    category: "Interior Design",
    location: "Patna, Bihar",
    year: "2024",
  },
  {
    img: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format&fit=crop",
    title: "Skyline Residency",
    category: "Real Estate",
    location: "Muzaffarpur, Bihar",
    year: "2023",
  },
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    title: "Industrial Park Phase II",
    category: "Infrastructure",
    location: "Hajipur, Bihar",
    year: "2023",
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    title: "Smart Government Complex",
    category: "Institutional",
    location: "Gaya, Bihar",
    year: "2022",
  },
  {
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    title: "Mahanadi Bridge Overpass",
    category: "Bridges & Flyovers",
    location: "Darbhanga, Bihar",
    year: "2022",
  },
];

const testimonials = [
  {
    name: "Arvind Sharma",
    role: "Director, Bihar State Roads Dept.",
    text: "Braj Mohan Group delivered the NH-30 project three weeks ahead of schedule. Their technical precision and on-ground coordination is unmatched in the region.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "CEO, Prestige Infra Ltd.",
    text: "The interior transformation they executed for our corporate headquarters was nothing short of stunning. Every detail was crafted with intention.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "MD, Kumar Industries",
    text: "Our industrial warehouse was built on budget and with zero safety incidents. The team's professionalism gave us complete confidence throughout.",
    rating: 5,
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "In-depth discovery of your vision, requirements, and project goals." },
  { step: "02", title: "Design & Planning", desc: "Architectural blueprints, 3D renders, and comprehensive project roadmap." },
  { step: "03", title: "Procurement", desc: "Sourcing premium materials with verified quality and certified suppliers." },
  { step: "04", title: "Construction", desc: "Expert execution with real-time monitoring and quality audits at every stage." },
  { step: "05", title: "Handover", desc: "Final inspection, documentation, and comprehensive post-project support." },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function ConstructionPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisibleStats(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
            alt="Construction Excellence"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <EngineeringIcon sx={{ fontSize: 14 }} /> Construction Excellence
            </span>
            <h1 className={styles.heroTitle}>
              Building the Future,<br />
              <span className={styles.heroAccent}>One Foundation</span><br />
              at a Time
            </h1>
            <p className={styles.heroDesc}>
              From monumental civil infrastructure to bespoke luxury interiors —
              Braj Mohan Group engineers spaces that inspire, endure, and define skylines.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>
                Request a Quote <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Link>
              <Link href="/projects" className={styles.btnGhost}>
                <PlayCircleOutlineIcon sx={{ fontSize: 20 }} /> View Projects
              </Link>
            </div>
          </div>

          <div className={styles.heroCards}>
            {[
              { label: "Projects Delivered", val: "300+" },
              { label: "Years of Trust", val: "25+" },
              { label: "States Active", val: "12+" },
            ].map((c) => (
              <div key={c.label} className={styles.heroCard}>
                <span className={styles.heroCardVal}>{c.val}</span>
                <span className={styles.heroCardLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>What We Build</span>
            <h2 className={styles.sectionTitle}>Comprehensive Construction Solutions</h2>
            <p className={styles.sectionDesc}>
              We combine advanced engineering with artistic vision to create
              spaces that inspire generations.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.serviceList}>
                  {s.items.map((item) => (
                    <li key={item}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 16 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.stats} ref={statsRef}>
        <div className={styles.statsInner}>
          <div className={styles.statsBg} />
          {stats.map((s, i) => (
            <div
              key={i}
              className={`${styles.statCard} ${visibleStats ? styles.statVisible : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.statIcon}>{s.icon}</div>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>How We Work</span>
            <h2 className={styles.sectionTitle}>Our Proven Process</h2>
          </div>
          <div className={styles.processTrack}>
            {process.map((p, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.processNumber}>{p.step}</div>
                {i < process.length - 1 && <div className={styles.processLine} />}
                <h4 className={styles.processTitle}>{p.title}</h4>
                <p className={styles.processDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Our Work</span>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionDesc}>
              Each project is a testament to our commitment to quality,
              innovation, and on-time delivery.
            </p>
          </div>

          <div className={styles.tabRow}>
            {["All", "Civil", "Interior", "Real Estate", "Infrastructure"].map((t, i) => (
              <button
                key={t}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className={styles.portfolioGrid}>
            {portfolio.map((p, i) => (
              <div key={i} className={styles.portfolioCard}>
                <div className={styles.portfolioImg}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.portfolioCat}>{p.category}</span>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <h3 className={styles.portfolioTitle}>{p.title}</h3>
                  <div className={styles.portfolioMeta}>
                    <span><LocationOnIcon sx={{ fontSize: 14 }} /> {p.location}</span>
                    <span><CalendarTodayIcon sx={{ fontSize: 14 }} /> {p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link href="/projects" className={styles.btnOutline}>
              View All Projects <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Client Stories</span>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <FormatQuoteIcon className={styles.quoteIcon} sx={{ fontSize: 48 }} />
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialStars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <StarIcon key={j} sx={{ fontSize: 16, color: "#f59e0b" }} />
                  ))}
                </div>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something <span className={styles.ctaAccent}>Extraordinary?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Share your vision with us. Our team of expert engineers and designers
            will turn your ideas into reality — on time, on budget.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnPrimary}>
              Start Your Project <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link href="tel:+919031074805" className={styles.btnGhostDark}>
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}