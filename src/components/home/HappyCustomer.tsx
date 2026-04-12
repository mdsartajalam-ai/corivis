
"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import c1 from "@/assets/hero/c1.jpg";
import c2 from "@/assets/hero/c2.jpg";
import c3 from "@/assets/hero/c3.jpg";
import c4 from "@/assets/hero/c1.jpg";

const customers = [
  { name: "Ramesh Kumar", location: "Patna, Bihar", image: c1 },
  { name: "Sunita Devi", location: "Gaya, Bihar", image: c2 },
  { name: "Amit Sharma", location: "Delhi", image: c3 },
  { name: "Rajesh Singh", location: "Lucknow", image: c4 },
];

export default function HappyCustomers() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let scrollX = 0;

    const speed = 0.5; // control speed

    const animate = () => {
      if (!trackRef.current) return;

      scrollX += speed;

      const track = trackRef.current;
      const width = track.scrollWidth / 2;

      if (scrollX >= width) {
        scrollX = 0;
      }

      track.style.transform = `translateX(-${scrollX}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className={styles.hc_section}>
      
      {/* TEXT */}
      <div className={styles.hc_container}>
        <div className={styles.hc_top}>
          <span className={styles.hc_badge}>HAPPY CUSTOMERS</span>

          <h2 className={styles.hc_heading}>
            Trusted by <span>Hundreds of Clients</span>
          </h2>

          <p className={styles.hc_sub}>
            Real installations. Real results.
          </p>
        </div>
      </div>

      {/* SLIDER */}
      <div className={styles.hc_slider}>
        <div ref={trackRef} className={styles.hc_track}>

          {[...customers, ...customers].map((item, i) => (
            <div key={i} className={styles.hc_card}>
              
              <div className={styles.hc_img_wrap}>
                <Image src={item.image} alt={item.name} fill />
              </div>

              <div className={styles.hc_overlay}></div>

              <div className={styles.hc_content}>
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}