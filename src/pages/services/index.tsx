"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ConstructionRounded,
  WbSunnyRounded,
  CodeRounded,
  PhoneIphoneRounded,
  ArrowForwardRounded,
  CheckRounded,
  AutoAwesomeRounded,
  EastRounded,
  LayersRounded,
  VerifiedRounded,
  HandshakeRounded,
  TrendingUpRounded,
  FormatQuoteRounded,
} from "@mui/icons-material";
import styles from "./services.module.css";

const services = [
  {
    id: "01",
    slug: "/services/construction",
    tag: "Infrastructure",
    title: "Construction",
    tagline: "Built to last. Engineered to inspire.",
    description:
      "From highways to interiors, we handle every dimension of construction with precision engineering and premium craftsmanship. Trusted by governments and private enterprises alike.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Construction site with cranes and infrastructure",
    accent: "#6366f1",
    features: [
      "Highway & Road Construction",
      "Government Institutions",
      "Turnkey Interior Solutions",
      "Landscape Designing",
    ],
    stat: { value: "₹100Cr+", label: "Projects Executed" },
    dark: true,
  },
  {
    id: "02",
    slug: "/services/renewable-power",
    tag: "Clean Energy",
    title: "Renewable Power",
    tagline: "Harnessing nature. Powering futures.",
    description:
      "Cutting-edge renewable energy infrastructure built for India's energy transition. From rooftop solar to large-scale wind farms — we design, install and maintain it all.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    imageAlt: "Solar panels in a field at sunset",
    accent: "#8b5cf6",
    features: [
      "Rooftop Solar Installation",
      "PM Surya Ghar Yojana",
      "Wind Energy Infrastructure",
      "Energy Audits",
    ],
    stat: { value: "500kW+", label: "Energy Installed" },
    dark: false,
  },
  {
    id: "03",
    slug: "/services/web-development",
    tag: "Digital",
    title: "Website Development",
    tagline: "Pixels with purpose. Code with craft.",
    description:
      "High-performance digital products that convert visitors into clients. We build corporate websites, e-commerce stores and SaaS dashboards with modern tech stacks and obsessive attention to UX.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "Developer working on code and web design",
    accent: "#6366f1",
    features: [
      "Corporate Websites",
      "E-commerce Platforms",
      "SEO Optimization",
      "SaaS Dashboards",
    ],
    stat: { value: "50+", label: "Sites Delivered" },
    dark: true,
  },
  {
    id: "04",
    slug: "/services/web-development",
    tag: "Mobile",
    title: "App Development",
    tagline: "Native feel. Cross-platform power.",
    description:
      "Scalable mobile applications built for Android and iOS ecosystems. From MVPs to enterprise mobility solutions — we craft apps that users love to open.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Mobile app development on smartphone",
    accent: "#8b5cf6",
    features: [
      "Native iOS / Android Apps",
      "Cross-Platform Solutions",
      "Enterprise Mobility",
      "UI/UX Design",
    ],
    stat: { value: "30+", label: "Apps Launched" },
    dark: false,
  },
];

const pillars = [
  {
    icon: <LayersRounded fontSize="inherit" />,
    title: "Vertically Integrated",
    desc: "One partner from foundation to digital — eliminating handoff friction and ensuring consistency across every domain.",
  },
  {
    icon: <VerifiedRounded fontSize="inherit" />,
    title: "Certified & Compliant",
    desc: "Registered under MCA with valid GST, operating fully within regulatory frameworks at national and state levels.",
  },
  {
    icon: <HandshakeRounded fontSize="inherit" />,
    title: "Relationship-First",
    desc: "We build long-term client relationships, not just projects. 90% of our work comes from referrals and repeat clients.",
  },
  {
    icon: <TrendingUpRounded fontSize="inherit" />,
    title: "Scale-Ready",
    desc: "From a single rooftop solar install to a multi-crore highway project — our teams and processes scale to your ambition.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "01": <ConstructionRounded fontSize="inherit" />,
  "02": <WbSunnyRounded fontSize="inherit" />,
  "03": <CodeRounded fontSize="inherit" />,
  "04": <PhoneIphoneRounded fontSize="inherit" />,
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} aria-hidden="true" />
        <div className={styles.heroOrb1} aria-hidden="true" />
        <div className={styles.heroOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <AutoAwesomeRounded sx={{ fontSize: 14 }} />
            <span>Comprehensive Infrastructure Solutions</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Our</span>
            <span className={styles.heroTitleAccent}>Expertise</span>
          </h1>

          <p className={styles.heroDesc}>
            A 360° approach to development — from laying foundations to
            launching digital products. Eceladdus Enllave Group is your end-to-end
            partner across construction, energy and technology.
          </p>

          {/* Quick-nav chips */}
          <div className={styles.heroNav}>
            {services.map((s) => (
              <Link key={s.id} href={s.slug} className={styles.heroNavChip}>
                <span className={styles.heroNavIcon}>{iconMap[s.id]}</span>
                {s.title}
                <EastRounded sx={{ fontSize: 13 }} />
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <span />
        </div>
      </section>

      {/* ══════════════════════ INTRO TAGLINE ══════════════════════ */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <FormatQuoteRounded className={styles.quoteIcon} />
          <blockquote className={styles.quoteText}>
            Whether it&apos;s laying the foundation of a skyscraper, designing
            its interiors, or powering it with solar energy — Eceladdus Enllave Group
            handles everything from the ground up.
          </blockquote>
          <div className={styles.quoteDivider} />
          <p className={styles.quoteAuthor}>
            Eceladdus Enllave Group &nbsp;·&nbsp; Est. 1999 &nbsp;·&nbsp; Patna, Bihar
          </p>
        </div>
      </section>

      {/* ══════════════════════ SERVICE SHOWCASES ══════════════════════ */}
      {services.map((s, i) => (
        <section
          key={s.id}
          className={`${styles.showcase} ${s.dark ? styles.showcaseDark : styles.showcaseLight}`}
          id={`service-${s.id}`}
        >
          <div
            className={`${styles.showcaseInner} ${i % 2 !== 0 ? styles.showcaseReverse : ""}`}
          >
            {/* Visual */}
            <div className={styles.showcaseVisual}>
              <div className={styles.showcaseImgWrap}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className={styles.showcaseImg}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className={styles.showcaseImgOverlay} />
              </div>
              {/* Floating stat */}
              <div className={styles.showcaseStat}>
                <span className={styles.showcaseStatVal}>{s.stat.value}</span>
                <span className={styles.showcaseStatLabel}>{s.stat.label}</span>
              </div>
              {/* Number */}
              <div className={styles.showcaseNum}>Service {s.id}</div>
            </div>

            {/* Content */}
            <div className={styles.showcaseContent}>
              <span className={styles.showcaseTag}>{s.tag}</span>
              <h2 className={styles.showcaseTitle}>{s.title}</h2>
              <p className={styles.showcaseTagline}>{s.tagline}</p>
              <p className={styles.showcaseDesc}>{s.description}</p>

              <ul className={styles.showcaseFeatures}>
                {s.features.map((f) => (
                  <li key={f}>
                    <CheckRounded fontSize="small" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href={s.slug} className={styles.showcaseCta}>
                Explore {s.title}
                <ArrowForwardRounded fontSize="small" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ══════════════════════ PILLARS ══════════════════════ */}
      <section className={styles.pillars}>
        <div className={styles.pillarsOrb} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.pillarsHeader}>
            <div className={styles.sectionPill}>
              <AutoAwesomeRounded sx={{ fontSize: 13 }} />
              What Sets Us Apart
            </div>
            <h2 className={styles.pillarsTitle}>
              Why One Partner
              <br />
              <span className={styles.pillarsAccent}>Changes Everything</span>
            </h2>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className={styles.cta}>
        <div className={styles.ctaMesh} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <span className={styles.ctaBadge}>Let&apos;s Build Together</span>
            <h2 className={styles.ctaTitle}>
              Ready to Start Your
              <br />
              Next Big Project?
            </h2>
            <p className={styles.ctaDesc}>
              Talk to our team. Whether it&apos;s a highway, a solar farm, or
              your next product&apos;s website — we&apos;re ready to make it
              extraordinary.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get Free Consultation
                <ArrowForwardRounded fontSize="small" />
              </Link>
              <Link href="/projects" className={styles.btnGhost}>
                View Our Projects
              </Link>
            </div>

            <div className={styles.ctaTrust}>
              <span>✓ No commitment required</span>
              <span>✓ Response within 24 hours</span>
              <span>✓ Free project estimate</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}