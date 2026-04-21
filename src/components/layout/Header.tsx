import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../button/Button";
import styles from "./header.module.css";
import { navItems } from "@/data/header";
import logo from "@/assets/logo/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const buttonClicked = () => {
    console.log("button clicked");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        <Image alt="logo" src={logo} width={80} height={60} />
        <nav className={styles.nav_center}>
          {navItems.map((item, i) =>
            item.dropdown ? (
              <div key={i} className={styles.dropdown}>
                <span className={styles.nav_link}>{item.label}</span>
                <div className={styles.dropdown_menu}>
                  {item.dropdown.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.path}
                      className={styles.dropdown_item}
                    >
                      {sub.label}
                    </Link>
                  ))}

                  <Link href="/services" className={styles.dropdown_view}>
                    View All Services →
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={i} href={item.path} className={styles.nav_link}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className={styles.nav_right}>
          <Button 
            text="Login / Signup" 
            action={buttonClicked}
          />
          <IconButton
            className={styles.menu_btn}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <div className={styles.drawer}>
          <div className={styles.drawer_top}>
            <span>Menu</span>
            <CloseIcon onClick={() => setDrawer(false)} />
          </div>

          {navItems.map((item, i) =>
            item.dropdown ? (
              <div key={i}>
                <div
                  className={styles.drawer_link}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.label}
                  <ExpandMoreIcon
                    className={`${styles.arrow} ${
                      openIndex === i ? styles.rotate : ""
                    }`}
                  />
                </div>

                {openIndex === i && (
                  <div className={styles.submenu}>
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.path}
                        className={styles.submenu_item}
                      >
                        {sub.label}
                      </Link>
                    ))}

                    <Link href="/services" className={styles.submenu_view}>
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                href={item.path}
                className={styles.drawer_link}
                onClick={() => setDrawer(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <Button 
            text="Login / Signup" 
            action={buttonClicked}
          />
        </div>
      </Drawer>
    </header>
  );
}
