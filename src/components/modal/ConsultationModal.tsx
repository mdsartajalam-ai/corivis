import Button from "../button/Button";
import SocialIcon from "../home/SocialIcon";
import InputField from "../input/InputField";
import { ContactFormType } from "@/types/form";
import ChipSelector from "../chip/ChipSelector";
import styles from "./consultation.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TextAreaField from "../input/TextAreaField";
import { contactFormInitialData } from "@/data/form";
import { serviceOptions, budgetOptions } from "@/data/home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState, ChangeEvent, type FormEvent } from "react";



type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {

  const [is_submitting, setIsSubmitting] = useState(false);
  const [selected_budget, setSelectedBudget] = useState<string>("$1k - $5k");
  const [formData, setFormData] = useState<ContactFormType>(
    contactFormInitialData,
  );

  const [selected_services, setSelectedServices] = useState<string[]>([
    "Apple Device Management",
  ]);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggle_service = (service_label: string) => {
    setSelectedServices((current_list) =>
      current_list.includes(service_label)
        ? current_list.filter((item_label) => item_label !== service_label)
        : [...current_list, service_label],
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const previous_overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous_overflow;
    };
  }, [isOpen]);

  const handle_submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_backdrop} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        className={styles.modal_panel}
        aria-labelledby="book_consultation_heading"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className={styles.modal_close_btn}
        >
          <CloseIcon fontSize="small"/>
        </button>

        <form onSubmit={handle_submit} className={styles.modal_form}>
          <div className={styles.modal_header}>
            <div className={styles.modal_header_text}>
              <h2
                id="book_consultation_heading"
                className={styles.modal_heading}
              >
                Book a Consultation
              </h2>
              <p className={styles.modal_subheading}>
                Say Hi! and tell me about your idea
              </p>
            </div>

            <div className={styles.modal_social_row}>
              <SocialIcon />
            </div>
          </div>

          <div className={styles.modal_field_grid}>
            <InputField
              required
              label="Name"
              type="text"
              name="name"
              placeholder="Hello..."
              value={formData.name}
              onChange={onInputChange}
            />
            <InputField
              required
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Where can I reply?"
            />
            <InputField
              type="text"
              name="company_name"
              label="Company Name"
              onChange={onInputChange}
              value={formData.company_name}
              placeholder="Your company or website?"
            />
            <InputField
              type="tel"
              name="contact_no"
              label="Contact No."
              onChange={onInputChange}
              value={formData.contact_no}
              placeholder="Your Contact Details"
            />
          </div>

          <div className={styles.modal_section}>
            <p className={styles.modal_section_label}>
              What&apos;s in your mind?*
            </p>
            <ChipSelector
              multiple
              options={serviceOptions}
              onSelect={toggle_service}
              selected={selected_services}
            />
          </div>

          <div className={styles.modal_section}>
            <p className={styles.modal_section_label}>
              How much your budget range?*
            </p>
            <ChipSelector
              options={budgetOptions}
              selected={selected_budget}
              onSelect={setSelectedBudget}
            />
          </div>

          <TextAreaField
            required
            label="Message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            placeholder="Tell me about your idea."
          />

          <div className={styles.modal_footer}>
            <Button
              text="Submit"
              type="submit"
              action={() => {}}
              disabled={is_submitting}
              isLoading={is_submitting}
              endIcon={<ArrowForwardIcon fontSize="small" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
