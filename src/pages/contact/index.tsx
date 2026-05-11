"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

/* ─── Data ─────────────────────────────────── */
const contactInfo = [
  {
    icon: <LocationOnOutlinedIcon />,
    label: "Visit Us",
    value: "Dalsinghsarai, Samastipur,\nBihar, India",
    link: "https://www.google.com/maps/dir/?api=1&destination=Dalsinghsarai+Samastipur+Bihar+India",
    linkLabel: "Get Directions",
    color: "#6366f1",
    bg: "#eef2ff",
  },
  {
    icon: <PhoneOutlinedIcon />,
    label: "Call Us",
    value: "+91 93046 53309",
    link: "tel:+919304653309",
    linkLabel: "Call Now",
    color: "#10b981",
    bg: "#ecfdf5",
  },
  {
    icon: <EmailOutlinedIcon />,
    label: "Email Us",
    value: "info@eceladusgroup.in",
    link: "mailto:info@eceladusgroup.in",
    linkLabel: "Send Email",
    color: "#0ea5e9",
    bg: "#e0f2fe",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    label: "Working Hours",
    value: "Mon – Sat: 10:00 AM – 7:00 PM\nSunday: Closed",
    link: null,
    linkLabel: null,
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

const services = [
  {
    key: "solar power",
    label: "Renewable Power",
    icon: <SolarPowerOutlinedIcon fontSize="small" />,
  },
  {
    key: "construction",
    label: "Civil Construction",
    icon: <HomeWorkOutlinedIcon fontSize="small" />,
  },
  {
    key: "web & app",
    label: "web & app Development",
    icon: <CodeOutlinedIcon fontSize="small" />,
  },
  {
    key: "other",
    label: "Other Services",
    icon: <MiscellaneousServicesOutlinedIcon fontSize="small" />,
  },
];

const trustItems = [
  "2+ years of trusted excellence",
  "200+ successfully delivered projects",
  "Response within 24 hours",
  "Dedicated project manager assigned",
];

/* ─── Component ─────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceSelect = (key: string) => {
    setFormData((prev) => ({ ...prev, service: key }));
  };

  const handleWhatsApp = () => {
    const svc =
      services.find((s) => s.key === formData.service)?.label ||
      "your services";
    const msg = encodeURIComponent(
      `Hello, I'm ${formData.name || "interested"} and I'd like to enquire about ${svc}. ${formData.message}`,
    );
    window.open(`https://wa.me/919031074805?text=${msg}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
    setSubmitted(true);
    setSnackOpen(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className={styles.root}>
      {/* ── Hero ────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            <ElectricBoltOutlinedIcon fontSize="small" /> Get In Touch
          </span>
          <h1 className={styles.heroTitle}>
            Let's Build Something <br />
            <span className={styles.heroAccent}>Great Together</span>
          </h1>
          <p className={styles.heroSub}>
            Have a project in mind? Our expert team is ready to listen, plan,
            and deliver beyond expectations. Reach out — we respond within 24
            hours.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+919031074805" className={styles.heroBtn}>
              <PhoneOutlinedIcon fontSize="small" /> Call Us Now
            </a>
            <a
              href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20Braj%20Mohan%20Group%20services."
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.heroBtn} ${styles.heroBtnWa}`}
            >
              <WhatsAppIcon fontSize="small" /> WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z"
              fill="#f8faff"
            />
          </svg>
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────── */}
      <section className={styles.trustStrip}>
        <div className={styles.container}>
          <div className={styles.trustList}>
            {trustItems.map((item, i) => (
              <span className={styles.trustItem} key={i}>
                <CheckCircleOutlineRoundedIcon fontSize="small" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ────────────────────── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            {/* LEFT — Info Cards */}
            <div className={styles.leftCol}>
              <div className={styles.sectionLabel}>Contact Information</div>
              <h2 className={styles.sectionTitle}>Reach Our Team</h2>
              <p className={styles.sectionDesc}>
                We're headquartered in Patna and serve clients across Bihar and
                beyond. Pick your preferred channel — we're always available.
              </p>

              <div className={styles.infoCards}>
                {contactInfo.map((item, i) => (
                  <div className={styles.infoCard} key={i}>
                    <span
                      className={styles.infoIcon}
                      style={{ color: item.color, background: item.bg }}
                    >
                      {item.icon}
                    </span>
                    <div className={styles.infoBody}>
                      <span className={styles.infoLabel}>{item.label}</span>
                      <span
                        className={styles.infoValue}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.value}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className={styles.infoLink}
                          style={{ color: item.color }}
                        >
                          {item.linkLabel}{" "}
                          <ArrowOutwardIcon fontSize="inherit" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className={styles.mapWrap}>
                <iframe
                  title="Eceladus group Location"
                  src="https://maps.google.com/maps?q=Dalsinghsarai,Samastipur,Bihar,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Dalsinghsarai+Samastipur+Bihar+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOverlayBtn}
                >
                  <OpenInNewRoundedIcon fontSize="small" /> Open in Maps
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className={styles.rightCol}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <div className={styles.sectionLabel}>Send an Inquiry</div>
                  <h2 className={styles.formTitle}>
                    Tell Us About Your Project
                  </h2>
                  <p className={styles.formSubtitle}>
                    Fill in the details and we'll connect with you via WhatsApp
                    — fast & direct.
                  </p>
                </div>

                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Name + Phone */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Service selector */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Service Required *</label>
                    <div className={styles.serviceGrid}>
                      {services.map((s) => (
                        <button
                          key={s.key}
                          type="button"
                          className={`${styles.serviceChip} ${formData.service === s.key ? styles.serviceChipActive : ""}`}
                          onClick={() => handleServiceSelect(s.key)}
                        >
                          {s.icon} {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project — location, scope, timeline..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircleOutlineRoundedIcon fontSize="small" /> Sent
                        via WhatsApp!
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon fontSize="small" /> Send via WhatsApp
                        <SendRoundedIcon fontSize="small" />
                      </>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    By submitting, you'll be redirected to WhatsApp with your
                    message pre-filled. We respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────── */}
      <section className={styles.bottomCta}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div>
              <h3 className={styles.ctaTitle}>Prefer a quick call?</h3>
              <p className={styles.ctaSub}>
                Our team is available Mon – Sat, 10 AM to 7 PM.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <a href="tel:+919031074805" className={styles.ctaBtnPrimary}>
                <PhoneOutlinedIcon fontSize="small" /> +91 93046 53309
              </a>
              <a
                href="https://wa.me/919031074805?text=Hello%2C%20I%20am%20interested%20in%20your%2012KW%20On-Grid%20%26%20Off-Grid%20Solar%20Installation%20services%20in%20Dalsinghsarai%2C%20Samastipur%2C%20Bihar."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnWa}
              >
                <WhatsAppIcon fontSize="small" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackOpen(false)}
          sx={{ fontWeight: 600 }}
        >
          Message sent via WhatsApp! We'll respond shortly.
        </Alert>
      </Snackbar>
    </main>
  );
}
