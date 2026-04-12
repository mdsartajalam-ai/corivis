"use client";

import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { Drawer, IconButton } from "@mui/material";
import logo from "@/assets/logo/image (1).webp"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        
        {/* LOGO */}
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={80} height={50} />
        </div>

        {/* NAV LINKS */}
        <nav className={styles.navCenter}>
          {navLinks.map((item, i) => (
            <Link key={i} href={item.path} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* CTA (DESKTOP ONLY) */}
          <button className={`app-button ${styles.desktopCta}`}>
            <PhoneIcon fontSize="small" />
            Get Started
          </button>

          {/* MOBILE MENU */}
          <IconButton
            className={styles.menuBtn}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={styles.drawer}>
          
          <div className={styles.drawerTop}>
            <span>Menu</span>
            <CloseIcon onClick={() => setOpen(false)} />
          </div>

          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA INSIDE DRAWER */}
          <button className="app-button">
            <PhoneIcon />
            Free Consultation
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;