"use client";

import { useState, ChangeEvent } from "react";
import styles from "@/styles/Home.module.css";

import Label from "@/components/label/Label";
import SelectField from "@/components/input/SelectField";
import InputField from "@/components/input/InputField";

import SendIcon from "@mui/icons-material/Send";

export default function CallbackForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const message = `Name: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`;
    window.open(`https://wa.me/919031074805?text=${message}`);
  };

  return (
    <div className={styles.formCard}>
      
      {/* HEADER */}
      <h2 className={styles.title}>Schedule a Call Back</h2>
      <p className={styles.subtitle}>
        Fill the form to connect instantly via WhatsApp
      </p>

      {/* NAME */}
      <div className={styles.field}>
        <Label text="Your Name" required />
        <InputField
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>

      {/* PHONE */}
      <div className={styles.field}>
        <Label text="Phone Number" required />
        <InputField
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          type="number"
          placeholder="Enter phone number"
        />
      </div>

      {/* SERVICE */}
      <div className={styles.field}>
        <Label text="Technology Services" required />
        <SelectField
          name="service"
          value={form.service}
          onChange={handleSelectChange}
          options={[
            { label: "Real Estate" },
            { label: "Construction" },
            { label: "Consulting" },
            { label: "Technology Services" },
          ]}
          placeholder="Select Service"
        />
      </div>

      {/* BUTTON */}
      <button onClick={handleSubmit} className={styles.button}>
        <SendIcon className={styles.btnIcon} />
        SEND VIA WHATSAPP
      </button>
    </div>
  );
}