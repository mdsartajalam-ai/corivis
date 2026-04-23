"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./web.module.css";

// MUI Icons
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PriceCheckRoundedIcon from "@mui/icons-material/PriceCheckRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

/* ─────────────── DATA ─────────────── */
const stats = [
  { value: "50+", label: "Projects Delivered", icon: <RocketLaunchRoundedIcon /> },
  { value: "30+", label: "Happy Clients", icon: <GroupsRoundedIcon /> },
  { value: "5+", label: "Years Experience", icon: <TrendingUpRoundedIcon /> },
  { value: "100%", label: "Satisfaction Rate", icon: <StarRoundedIcon /> },
];

const serviceCategories = [
  {
    id: "web",
    label: "Website Development",
    icon: <WebRoundedIcon />,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    imageAlt: "Professional web development workspace",
    color: "#6366f1",
    items: [
      {
        icon: <WebRoundedIcon />,
        title: "Business Websites",
        desc: "Corporate websites that establish authority, attract leads, and convert visitors into customers.",
        tags: ["Next.js", "SEO", "CMS"],
      },
      {
        icon: <PortraitRoundedIcon />,
        title: "Portfolio Websites",
        desc: "Stunning portfolios that tell your story visually and make a lasting first impression.",
        tags: ["React", "Animation", "Custom"],
      },
      {
        icon: <StorefrontRoundedIcon />,
        title: "E-commerce Stores",
        desc: "Powerful online stores with seamless checkout, inventory management, and payment gateways.",
        tags: ["Shopify", "WooCommerce", "Stripe"],
      },
      {
        icon: <DashboardRoundedIcon />,
        title: "Admin Dashboards",
        desc: "Custom control panels with real-time analytics, user management, and operational tools.",
        tags: ["React", "Charts", "API"],
      },
    ],
  },
  {
    id: "app",
    label: "Mobile App Development",
    icon: <PhoneAndroidRoundedIcon />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    imageAlt: "Mobile app development",
    color: "#8b5cf6",
    items: [
      {
        icon: <AndroidRoundedIcon />,
        title: "Android Apps",
        desc: "Native Android applications with buttery-smooth performance and modern Material You design.",
        tags: ["Kotlin", "Jetpack", "Firebase"],
      },
      {
        icon: <AppleIcon />,
        title: "iOS Apps",
        desc: "Premium iOS apps crafted with Apple Human Interface Guidelines for the best user experience.",
        tags: ["Swift", "SwiftUI", "Xcode"],
      },
      {
        icon: <DevicesRoundedIcon />,
        title: "Cross-Platform Apps",
        desc: "One codebase, both platforms. Flutter & React Native for maximum reach and efficiency.",
        tags: ["Flutter", "React Native", "Dart"],
      },
    ],
  },
];

const whyUs = [
  {
    icon: <GroupsRoundedIcon />,
    title: "Local Patna-Based Team",
    desc: "Face-to-face meetings and clear communication with a team that understands your local market.",
    highlight: false,
  },
  {
    icon: <PriceCheckRoundedIcon />,
    title: "Affordable Pricing",
    desc: "Premium quality at competitive rates — designed for startups and growing businesses.",
    highlight: false,
  },
  {
    icon: <CodeRoundedIcon />,
    title: "Modern Tech Stack",
    desc: "Next.js, Flutter, Node.js, and cloud-native tools for future-proof, scalable solutions.",
    highlight: true,
  },
  {
    icon: <BoltRoundedIcon />,
    title: "Lightning Fast",
    desc: "Performance-optimised builds with 90+ Lighthouse scores and sub-2s load times.",
    highlight: false,
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Post-Launch Support",
    desc: "Dedicated maintenance and support plans to keep your products running flawlessly.",
    highlight: false,
  },
  {
    icon: <AccessTimeRoundedIcon />,
    title: "On-Time Delivery",
    desc: "Structured sprints, daily updates, and milestone tracking — never miss a deadline.",
    highlight: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We deep-dive into your business goals, audience, and technical requirements to define a clear roadmap.",
    icon: <EmojiObjectsRoundedIcon />,
    duration: "Day 1–2",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Wireframes and high-fidelity Figma mockups, refined through your feedback until every pixel is perfect.",
    icon: <LayersRoundedIcon />,
    duration: "Day 3–7",
  },
  {
    step: "03",
    title: "Development",
    desc: "Agile sprints with daily commits. Clean, documented code built on the latest frameworks and best practices.",
    icon: <IntegrationInstructionsRoundedIcon />,
    duration: "Week 2–3",
  },
  {
    step: "04",
    title: "QA & Testing",
    desc: "Rigorous cross-browser, cross-device testing ensuring bug-free, secure, and blazing-fast performance.",
    icon: <SpeedRoundedIcon />,
    duration: "Day before launch",
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "Smooth deployment, DNS setup, and post-launch monitoring with ongoing maintenance plans.",
    icon: <RocketLaunchRoundedIcon />,
    duration: "Ongoing",
  },
];

const packages = [
  {
    name: "Starter",
    tagline: "For individuals & small businesses",
    price: "₹15,000",
    badge: null,
    highlight: false,
    features: [
      "Up to 5 pages or basic mobile app",
      "Responsive design for all devices",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month free support",
      "Social media integration",
      "Fast delivery in 2 weeks",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    tagline: "Best for growing businesses",
    price: "₹35,000",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Up to 10 pages or feature-rich app",
      "Custom UI/UX design",
      "Admin panel / dashboard",
      "Advanced SEO & performance",
      "3 months free support",
      "Payment gateway integration",
      "Database & backend setup",
      "Google Analytics integration",
      "Priority support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    tagline: "For startups & enterprises",
    price: "₹75,000+",
    badge: "Enterprise",
    highlight: false,
    features: [
      "Unlimited pages / screens",
      "Fully custom solution",
      "Advanced features & integrations",
      "Multiple user roles",
      "6 months free support",
      "Cloud hosting setup",
      "Security & performance testing",
      "API development",
      "Dedicated project manager",
      "Training & documentation",
    ],
    cta: "Contact Us",
  },
];

const techStack = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Patna Enterprises",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    text: "Braj Mohan Group delivered our e-commerce platform ahead of schedule. The attention to detail and post-launch support exceeded every expectation.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, StyleBoutique",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    text: "Our website traffic doubled within 3 months of launch. The team truly understands modern web design and conversion optimisation.",
    stars: 5,
  },
  {
    name: "Anil Verma",
    role: "MD, Bihar Infra Ltd.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    text: "Professional, responsive, and genuinely invested in our success. The admin dashboard they built has transformed how we manage our operations.",
    stars: 5,
  },
];

/* ─────────────── COMPONENT ─────────────── */
export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(`.${styles.reveal}`).forEach((el) =>
      observerRef.current?.observe(el)
    );

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={styles.page}>

      {/* ══════════════ HERO ══════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMesh} />
        <div className={styles.heroLines} />
        <div className={styles.heroParticle} style={{ "--px": "15%", "--py": "20%", "--ps": "6px", "--pd": "0s" } as React.CSSProperties} />
        <div className={styles.heroParticle} style={{ "--px": "80%", "--py": "15%", "--ps": "4px", "--pd": "0.5s" } as React.CSSProperties} />
        <div className={styles.heroParticle} style={{ "--px": "65%", "--py": "70%", "--ps": "8px", "--pd": "1s" } as React.CSSProperties} />
        <div className={styles.heroParticle} style={{ "--px": "30%", "--py": "80%", "--ps": "5px", "--pd": "1.5s" } as React.CSSProperties} />
        <div className={styles.heroParticle} style={{ "--px": "90%", "--py": "55%", "--ps": "3px", "--pd": "0.8s" } as React.CSSProperties} />

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroPill}>
              <VerifiedRoundedIcon fontSize="small" />
              Patna&apos;s #1 IT Development Partner
            </div>

            <h1 className={styles.heroHeading}>
              We Build Digital
              <span className={styles.heroHighlight}>
                <span className={styles.heroHighlightText}>Experiences</span>
                <span className={styles.heroUnderline} />
              </span>
              That Convert
            </h1>

            <p className={styles.heroBody}>
              From stunning websites to powerful mobile apps — we craft high-performance digital products
              that help businesses across India grow, compete, and win online.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.heroCta1}>
                Start Your Project
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
              <Link href="https://wa.me/919031074805" className={styles.heroCta2}>
                <WhatsAppIcon fontSize="small" />
                WhatsApp Us
              </Link>
            </div>

            <div className={styles.heroTrustRow}>
              <div className={styles.heroAvatarStack}>
                {["photo-1507003211169", "photo-1494790108377", "photo-1500648767791"].map((id, i) => (
                  <div key={i} className={styles.heroAvatar} style={{ zIndex: 3 - i }}>
                    <Image
                      src={`https://images.unsplash.com/${id}-0a1dd7228f2d?w=40&q=80`}
                      alt="Happy client"
                      width={36}
                      height={36}
                      className={styles.heroAvatarImg}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <div className={styles.heroTrustText}>
                <div className={styles.heroStars}>
                  {[...Array(5)].map((_, i) => <StarRoundedIcon key={i} fontSize="small" />)}
                </div>
                <span>Trusted by 30+ businesses</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=85"
                alt="Professional web development team working"
                fill
                className={styles.heroImage}
                unoptimized
                priority
              />
              <div className={styles.heroImageOverlay} />

              {/* Floating cards */}
              <div className={`${styles.floatCard} ${styles.floatCard1}`}>
                <div className={styles.floatCardDot} />
                <div>
                  <div className={styles.floatCardTitle}>Project Delivered</div>
                  <div className={styles.floatCardSub}>E-commerce Platform • ₹35K</div>
                </div>
                <CheckCircleRoundedIcon className={styles.floatCardIcon} />
              </div>

              <div className={`${styles.floatCard} ${styles.floatCard2}`}>
                <SpeedRoundedIcon className={styles.floatCard2Icon} />
                <div>
                  <div className={styles.floatCardTitle2}>98 / 100</div>
                  <div className={styles.floatCardSub2}>Lighthouse Score</div>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.floatCard3}`}>
                <RocketLaunchRoundedIcon className={styles.floatCard3Icon} />
                <div className={styles.floatCard3Text}>Live in 14 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statIcon}>{s.icon}</span>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TECH STACK ══════════════ */}
      <div className={styles.techBand}>
        <span className={styles.techBandLabel}>Powered by modern technology</span>
        <div className={styles.techScroll}>
          <div className={styles.techTrack}>
            {[...techStack, ...techStack].map((t, i) => (
              <div key={i} className={styles.techItem}>
                <Image src={t.logo} alt={t.name} width={28} height={28} unoptimized className={styles.techLogo} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.reveal}`}>Our Expertise</div>
          <h2 className={`${styles.sectionHeading} ${styles.reveal}`}>
            End-to-End Digital
            <span className={styles.gradText}> Solutions</span>
          </h2>
          <p className={`${styles.sectionSub} ${styles.reveal}`}>
            Comprehensive development services from concept to launch — tailored to your goals.
          </p>

          <div className={`${styles.serviceTabs} ${styles.reveal}`}>
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.id}
                className={`${styles.serviceTab} ${activeTab === i ? styles.serviceTabOn : ""}`}
                onClick={() => setActiveTab(i)}
                style={{ "--tab-color": cat.color } as React.CSSProperties}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.serviceBody}>
            <div className={styles.serviceImageCol}>
              <div className={styles.serviceImageFrame}>
                <Image
                  src={serviceCategories[activeTab].image}
                  alt={serviceCategories[activeTab].imageAlt}
                  fill
                  className={styles.serviceImage}
                  unoptimized
                />
                <div className={styles.serviceImageGlow} style={{ "--glow": serviceCategories[activeTab].color } as React.CSSProperties} />
                <div className={styles.serviceImageBadge}>
                  <AutoAwesomeRoundedIcon fontSize="small" />
                  {serviceCategories[activeTab].label}
                </div>
              </div>
            </div>

            <div className={styles.serviceCardsCol}>
              {serviceCategories[activeTab].items.map((item, i) => (
                <div
                  key={i}
                  className={styles.serviceCard}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className={styles.serviceCardHead}>
                    <div className={styles.serviceCardIcon}
                      style={{ "--ic": serviceCategories[activeTab].color } as React.CSSProperties}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                      <div className={styles.serviceCardTags}>
                        {item.tags.map((tag, j) => (
                          <span key={j} className={styles.serviceCardTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowForwardRoundedIcon className={styles.serviceCardArrow} />
                  </div>
                  <p className={styles.serviceCardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHY US — LIGHT ══════════════ */}
      <section className={styles.whySection} id="why-us">
        <div className={styles.whyBg} />
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.sectionLabelDark} ${styles.reveal}`}>Why Choose Us</div>
          <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingDark} ${styles.reveal}`}>
            The Advantage That Sets
            <span className={styles.gradTextDark}> Us Apart</span>
          </h2>
          <p className={`${styles.sectionSub} ${styles.sectionSubDark} ${styles.reveal}`}>
            Your trusted IT partner combining local expertise with world-class technology.
          </p>

          <div className={styles.whyGrid}>
            {whyUs.map((item, i) => (
              <div
                key={i}
                className={`${styles.whyCard} ${item.highlight ? styles.whyCardHighlight : ""} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={styles.whyCardIcon}>{item.icon}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.desc}</p>
                {item.highlight && <div className={styles.whyCardShine} />}
              </div>
            ))}
          </div>

          {/* Social proof strip */}
          <div className={`${styles.proofStrip} ${styles.reveal}`}>
            <div className={styles.proofItem}>
              <ShieldRoundedIcon />
              <div>
                <strong>100% Secure</strong>
                <span>SSL & GDPR compliant</span>
              </div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <WorkspacePremiumRoundedIcon />
              <div>
                <strong>5.0 ★★★★★</strong>
                <span>Average client rating</span>
              </div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <SupportAgentRoundedIcon />
              <div>
                <strong>24/7 Support</strong>
                <span>Always available for you</span>
              </div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <VerifiedRoundedIcon />
              <div>
                <strong>ISO Certified</strong>
                <span>Quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS — DARK ══════════════ */}
      <section className={styles.processSection} id="process">
        <div className={styles.processMesh} />
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.reveal}`}>How We Work</div>
          <h2 className={`${styles.sectionHeading} ${styles.reveal}`}>
            Our Proven 5-Step
            <span className={styles.gradText}> Methodology</span>
          </h2>
          <p className={`${styles.sectionSub} ${styles.reveal}`}>
            A battle-tested development process that delivers exceptional results, every single time.
          </p>

          <div className={styles.processTrack}>
            {processSteps.map((step, i) => (
              <div key={i} className={`${styles.processCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.processNum}>{step.step}</div>
                {i < processSteps.length - 1 && <div className={styles.processConnector} />}
                <div className={styles.processIcon}>{step.icon}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
                <div className={styles.processDuration}>
                  <AccessTimeRoundedIcon fontSize="small" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.processFooter} ${styles.reveal}`}>
            <div className={styles.processFooterItem}>
              <span className={styles.pfVal}>2–4 Weeks</span>
              <span className={styles.pfLabel}>Average timeline</span>
            </div>
            <div className={styles.processFooterItem}>
              <span className={styles.pfVal}>Daily</span>
              <span className={styles.pfLabel}>Progress updates</span>
            </div>
            <div className={styles.processFooterItem}>
              <span className={styles.pfVal}>Flexible</span>
              <span className={styles.pfLabel}>Revision rounds</span>
            </div>
            <div className={styles.processFooterItem}>
              <span className={styles.pfVal}>Agile</span>
              <span className={styles.pfLabel}>Development approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS — LIGHT ══════════════ */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialBg} />
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.sectionLabelDark} ${styles.reveal}`}>Client Stories</div>
          <h2 className={`${styles.sectionHeading} ${styles.sectionHeadingDark} ${styles.reveal}`}>
            What Our Clients
            <span className={styles.gradTextDark}> Say</span>
          </h2>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${styles.testimonialCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.testimonialStars}>
                  {[...Array(t.stars)].map((_, j) => (
                    <StarRoundedIcon key={j} fontSize="small" className={styles.starIcon} />
                  ))}
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <Image src={t.avatar} alt={t.name} width={48} height={48} unoptimized className={styles.testimonialAvatarImg} />
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                  <VerifiedRoundedIcon className={styles.testimonialVerified} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PACKAGES — DARK ══════════════ */}
      <section className={styles.pricingSection} id="packages">
        <div className={styles.pricingMesh} />
        <div className={styles.sectionWrap}>
          <div className={`${styles.sectionLabel} ${styles.reveal}`}>Transparent Pricing</div>
          <h2 className={`${styles.sectionHeading} ${styles.reveal}`}>
            Choose Your
            <span className={styles.gradText}> Package</span>
          </h2>
          <p className={`${styles.sectionSub} ${styles.reveal}`}>
            No hidden costs. No surprises. Just clear, honest pricing for every budget.
          </p>

          <div className={styles.pricingGrid}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`${styles.pricingCard} ${pkg.highlight ? styles.pricingCardOn : ""} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {pkg.badge && (
                  <div className={`${styles.pricingBadge} ${pkg.highlight ? styles.pricingBadgeGold : ""}`}>
                    {pkg.highlight ? <AutoAwesomeRoundedIcon fontSize="small" /> : <WorkspacePremiumRoundedIcon fontSize="small" />}
                    {pkg.badge}
                  </div>
                )}
                <div className={styles.pricingTop}>
                  <h3 className={styles.pricingName}>{pkg.name}</h3>
                  <p className={styles.pricingTagline}>{pkg.tagline}</p>
                  <div className={styles.pricingPriceRow}>
                    <span className={styles.pricingAmount}>{pkg.price}</span>
                    <span className={styles.pricingPer}>one-time</span>
                  </div>
                </div>
                <div className={styles.pricingDivider} />
                <ul className={styles.pricingList}>
                  {pkg.features.map((f, j) => (
                    <li key={j} className={styles.pricingFeat}>
                      <CheckCircleRoundedIcon className={`${styles.pricingCheck} ${pkg.highlight ? styles.pricingCheckOn : ""}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`${styles.pricingBtn} ${pkg.highlight ? styles.pricingBtnOn : ""}`}
                >
                  {pkg.cta} <ArrowForwardRoundedIcon fontSize="small" />
                </Link>
              </div>
            ))}
          </div>

          <div className={`${styles.pricingFooter} ${styles.reveal}`}>
            <p>Need a custom solution? Let&apos;s talk about your requirements.</p>
            <Link href="/contact" className={styles.customBtn}>
              Request Custom Quote <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA FINALE — GRADIENT ══════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaMesh} />
        <div className={styles.ctaOrb1} />
        <div className={styles.ctaOrb2} />
        <div className={styles.sectionWrap}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                fill
                className={styles.ctaImage}
                unoptimized
              />
              <div className={styles.ctaImageVeil} />
            </div>
            <div className={styles.ctaContent}>
              <AutoAwesomeRoundedIcon className={styles.ctaStarIcon} />
              <h2 className={styles.ctaHeading}>
                Ready to Build Something
                <span className={styles.ctaAccent}> Extraordinary?</span>
              </h2>
              <p className={styles.ctaBody}>
                Get a free consultation and let&apos;s map out your digital journey.
                50+ businesses already trust us — you&apos;re next.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaBtn1}>
                  Get Free Consultation
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Link>
                <Link href="tel:+919031074805" className={styles.ctaBtn2}>
                  <LocalPhoneRoundedIcon fontSize="small" />
                  +91 90310 74805
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}