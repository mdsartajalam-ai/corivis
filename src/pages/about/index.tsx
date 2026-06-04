"use client";

import React, { useEffect, useState } from "react";
import styles from "./about.module.css";

import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "@mui/icons-material/Business";
import BoltIcon from "@mui/icons-material/Bolt";
import CodeIcon from "@mui/icons-material/Code";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2+", label: "Years Legacy", icon: <CalendarTodayIcon fontSize="small" /> },
  { value: "200+", label: "Projects Done", icon: <TrendingUpIcon fontSize="small" /> },
  { value: "200+", label: "Lives Impacted", icon: <GroupsIcon fontSize="small" /> },
  { value: "₹10Cr+", label: "Work Delivered", icon: <StarBorderIcon fontSize="small" /> },
];

const values = [
  {
    icon: <WorkspacePremiumIcon />,
    title: "Excellence",
    desc: "World-class quality in every brick laid and every line of code written — no shortcuts, no compromise.",
    color: "#6366f1",
    bg: "#6366f112",
  },
  {
    icon: <HandshakeIcon />,
    title: "Integrity",
    desc: "Transparent, ethical dealings with every government body, private stakeholder, and community partner.",
    color: "#8b5cf6",
    bg: "#8b5cf612",
  },
  {
    icon: <EmojiObjectsIcon />,
    title: "Innovation",
    desc: "Pioneering AI-integrated infrastructure and green-energy solutions that redefine what is possible.",
    color: "#6366f1",
    bg: "#6366f112",
  },
  {
    icon: <EnergySavingsLeafIcon />,
    title: "Sustainability",
    desc: "Steadfast commitment to reducing carbon footprint through solar energy and responsible construction.",
    color: "#8b5cf6",
    bg: "#8b5cf612",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Foundation",
    desc: "Established in Samastipur, Bihar with a bold vision to transform India's infrastructure landscape from the ground up.",
    icon: <BusinessIcon />,
    tag: "Origin",
  },
  {
    year: "2025",
    title: "Government Expansion",
    desc: "Scaled into large-scale government civil projects and highway road construction across multiple Bihar districts.",
    icon: <TrendingUpIcon />,
    tag: "Growth",
  },
  {
    year: "2025",
    title: "Solar Initiative",
    desc: "Launched our green energy division, installing rooftop solar units statewide — powering a cleaner tomorrow.",
    icon: <EnergySavingsLeafIcon />,
    tag: "Green",
  },
  {
    year: "2026",
    title: "Digital Leap",
    desc: "Integrated AI and digital solutions into core infrastructure services — stepping boldly into India's tech future.",
    icon: <CodeIcon />,
    tag: "Tech",
  },
];

const domains = [
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Civil & Infrastructure",
    points: [
      "Government buildings & highways",
      "Bridge & road construction",
      "Housing & real estate projects",
    ],
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
  },
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Solar Energy",
    points: [
      "Rooftop solar installations",
      "Smart meter deployment",
      "Green energy partnerships",
    ],
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Digital & Technology",
    points: [
      "Web & app development",
      "AI-driven solutions",
      "Digital transformation",
    ],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroOrb3} />
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.heroInner}>
          {/* Left */}
          <div className={styles.heroLeft}>
            {/* <div className={styles.heroPill}>
              <AutoAwesomeIcon sx={{ fontSize: 13 }} />
                Patna, Bihar
            </div> */}
            <h1 className={styles.heroH1}>
              <span>Building</span>
              <span className={styles.heroAccentLine}>
                India's <em>Future</em>
              </span>
             
            </h1>
            <p className={styles.heroDesc}>
              A multidisciplinary infrastructure powerhouse — from construction
              and renewable energy to AI-powered digital solutions. Trusted by
              the Government of Bihar for over two decades.
            </p>
            <div className={styles.heroCerts}>
              {["CIN: U68100BR2025PTC075378", "GST: 10AAICE8352L1ZJ "].map((c, i) => (
                <span key={i} className={styles.certBadge}>
                  <VerifiedIcon sx={{ fontSize: 13, color: "#6366f1" }} />
                  {c}
                </span>
              ))}
            </div>
            <div className={styles.heroActions}>
              <a href="/contact" className={styles.btnPrimary}>
                Partner With Us <ArrowForwardIcon fontSize="small" />
              </a>
              <a href="#journey" className={styles.btnGhost}>
                Our Journey
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardGlow} />
              <div className={styles.heroCardTop}>
                <LocationOnIcon sx={{ color: "#a5b4fc", fontSize: 18 }} />
                <span>Samastipur, Bihar · India</span>
              </div>
              <div className={styles.heroCardQuote}>
                <FormatQuoteIcon sx={{ color: "#6366f1", fontSize: 36, opacity: 0.4 }} />
                <p>
                  "We don't just build structures — we build the foundation of
                  communities, the pathways of progress, and the systems of a
                  sustainable tomorrow."
                </p>
              </div>
              <div className={styles.heroCardStats}>
                {[
                  { n: "2+", l: "Years" },
                  { n: "200+", l: "Projects" },
                  { n: "3", l: "Verticals" },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className={styles.heroCardDivider} />}
                    <div className={styles.heroCardStat}>
                      <strong>{s.n}</strong>
                      <span>{s.l}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className={`${styles.floatChip} ${styles.chip1}`}>
              <EnergySavingsLeafIcon sx={{ fontSize: 15, color: "#6366f1" }} />
              Solar Pioneer
            </div>
            <div className={`${styles.floatChip} ${styles.chip2}`}>
              <RocketLaunchIcon sx={{ fontSize: 15, color: "#8b5cf6" }} />
              AI-Integrated
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statIcon}>{s.icon}</span>
              <strong className={styles.statNum}>{s.value}</strong>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            {/* Visual side */}
            <div className={`${styles.missionVisual} ${styles.reveal}`}>
              <div className={styles.missionDarkCard}>
                <div className={styles.missionCardGlow} />
                <BusinessIcon sx={{ fontSize: 44, color: "#a5b4fc", mb: 2 }} />
                <h3>Empowering Communities</h3>
                <p>
                  From government highways to household solar — our work touches
                  every layer of Bihar's growth story.
                </p>
                <div className={styles.missionTags}>
                  {["Infrastructure", "Energy", "Technology"].map((t, i) => (
                    <span key={i} className={styles.missionTag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.missionMiniCards}>
                <div className={styles.missionMini}>
                  <strong>1K+</strong>
                  <span>Households Powered with Solar</span>
                </div>
                <div className={styles.missionMini}>
                  <strong>Bihar #1</strong>
                  <span>Trusted Infra Partner</span>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className={`${styles.missionText} ${styles.reveal}`}>
              <span className={styles.sectionTag}>Who We Are</span>
              <h2 className={styles.sectionTitle}>
                More Than a Company —<br />
                <span className={styles.accent}>A Nation-Builder</span>
              </h2>
              <p className={styles.body}>
                Eceladdus Enllave Group is a multidisciplinary infrastructure powerhouse
                headquartered in Samastipur, Bihar. With over two years of experience,
                we have bridged the gap between traditional construction and modern
                technological innovation.
              </p>
              <p className={styles.body}>
                Our mission is to build a sustainable, progressive ecosystem for
                future generations — one project, one household, one community at a time.
              </p>
              <div className={styles.checkList}>
                {[
                  "Government-certified infrastructure company",
                  "Renewable energy & smart metering expert",
                  "AI-powered digital solutions provider",
                  "Committed to net-zero construction practices",
                ].map((item, i) => (
                  <div key={i} className={styles.checkItem}>
                    <CheckCircleIcon sx={{ fontSize: 17, color: "#6366f1", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesGlow} />
        <div className={styles.container}>
          <div className={`${styles.centerHeader} ${styles.reveal}`}>
            <span className={styles.sectionTagLight}>Core Philosophy</span>
            <h2 className={styles.sectionTitleLight}>
              Driven by <span className={styles.accentLight}>Values</span>
            </h2>
            <p className={styles.sectionSubLight}>
              Four principles that guide every decision, every project, and every partnership we undertake.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`${styles.valueCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className={styles.valueNum}>0{i + 1}</span>
                <div className={styles.valueIconWrap} style={{ background: v.bg, color: v.color }}>
                  {v.icon}
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
                <div className={styles.valueBar} style={{ background: v.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOURNEY ══ */}
      <section className={styles.journeySection} id="journey">
        <div className={styles.container}>
          <div className={`${styles.centerHeader} ${styles.reveal}`}>
            <span className={styles.sectionTag}>Our Story</span>
            <h2 className={styles.sectionTitle}>
              A Journey of <span className={styles.accent}>2 Years</span>
            </h2>
            <p className={styles.sectionSub}>
              From a bold vision in Patna to Bihar's most trusted infrastructure group.
            </p>
          </div>

          {/* Tab row */}
          <div className={`${styles.yearTabs} ${styles.reveal}`}>
            {timeline.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveYear(i)}
                className={`${styles.yearTab} ${activeYear === i ? styles.yearTabActive : ""}`}
              >
                {t.year}
              </button>
            ))}
          </div>

          {/* Feature panel */}
          <div className={`${styles.featurePanel} ${styles.reveal}`}>
            <div className={styles.featurePanelLeft}>
              <span className={styles.featureTag}>{timeline[activeYear].tag}</span>
              <div className={styles.featureYear}>{timeline[activeYear].year}</div>
              <h3 className={styles.featureTitle}>{timeline[activeYear].title}</h3>
              <p className={styles.featureDesc}>{timeline[activeYear].desc}</p>
            </div>
            <div className={styles.featurePanelRight}>
              <div className={styles.featureIconBig}>{timeline[activeYear].icon}</div>
              <div className={styles.featureProgress}>
                <div
                  className={styles.featureProgressFill}
                  style={{ height: `${((activeYear + 1) / timeline.length) * 100}%` }}
                />
                {timeline.map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.featureDot} ${i <= activeYear ? styles.featureDotActive : ""}`}
                    onClick={() => setActiveYear(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Strip */}
          <div className={styles.timelineStrip}>
            {timeline.map((t, i) => (
              <div
                key={i}
                onClick={() => setActiveYear(i)}
                className={`${styles.stripItem} ${styles.reveal} ${activeYear === i ? styles.stripActive : ""}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={styles.stripIconWrap}>{t.icon}</div>
                <span className={styles.stripYear}>{t.year}</span>
                <span className={styles.stripTitle}>{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOMAINS ══ */}
      <section className={styles.domainsSection}>
        <div className={styles.domainsGlow} />
        <div className={styles.container}>
          <div className={`${styles.centerHeader} ${styles.reveal}`}>
            <span className={styles.sectionTagLight}>What We Do</span>
            <h2 className={styles.sectionTitleLight}>
              Three <span className={styles.accentLight}>Pillars</span> of Expertise
            </h2>
            <p className={styles.sectionSubLight}>
              A multidisciplinary group delivering excellence across construction, energy, and technology.
            </p>
          </div>
          <div className={styles.domainsGrid}>
            {domains.map((d, i) => (
              <div
                key={i}
                className={`${styles.domainCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.domainIconWrap} style={{ background: d.gradient }}>
                  {d.icon}
                </div>
                <h3 className={styles.domainTitle}>{d.title}</h3>
                <ul className={styles.domainList}>
                  {d.points.map((p, j) => (
                    <li key={j} className={styles.domainPoint}>
                      <CheckCircleIcon sx={{ fontSize: 14, color: "#a5b4fc", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="/services" className={styles.domainLink}>
                  Learn More <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}>
          <div className={styles.ctaOrb1} />
          <div className={styles.ctaOrb2} />
        </div>
        <div className={`${styles.ctaInner} ${styles.reveal}`}>
          <div className={styles.ctaBadge}>
            <WorkspacePremiumIcon sx={{ fontSize: 20 }} />
          </div>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something <em>Extraordinary?</em>
          </h2>
          <p className={styles.ctaSub}>
            Partner with Bihar's most trusted infrastructure group.
            Let's shape the future of India — together.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.btnPrimary}>
              Start a Conversation <ArrowForwardIcon fontSize="small" />
            </a>
            <a href="/projects" className={styles.btnOutlineDark}>
              View Our Projects
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}