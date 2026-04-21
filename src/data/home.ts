import logo from "@/assets/logo/logo2.png";
import logo1 from "@/assets/hero/c3.jpg";

import p1 from "@/assets/hero/c1.jpg";
import p2 from "@/assets/hero/c2.jpg";
import p3 from "@/assets/hero/c3.jpg";

import cr1 from "@/assets/hero/cr1.jpg";
import cr2 from "@/assets/hero/cr2.jpg";
import cr3 from "@/assets/hero/cr3.jpg";
import cr4 from "@/assets/hero/cr4.jpg";

import BoltIcon from "@mui/icons-material/Bolt";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ConstructionIcon from "@mui/icons-material/Construction";


export const companyFeatures = [
  "25+ Years of Industry Leadership",
  "250+ Government Projects",
  "500+ Renovations Completed",
  "1M+ Smart Meters Installed",
  "2MW+ Solar Infrastructure",
];

export const clients = [
  { name: "L&T Construction", logo: logo },
  { name: "Tata Projects", logo: logo },
  { name: "Adani Infra", logo: logo1 },
  { name: "NBCC India", logo: logo },
  { name: "GMR Group", logo: logo },
];
export const serviceOptions = [
  { label: "Real Estate" },
  { label: "Construction" },
  { label: "Consulting" },
  { label: "Technology Services" },
];


export const expertiseData = [
  {
    title: "Construction",
    desc: "Advanced infrastructure & modern architecture.",
    icon: ConstructionIcon,
  },
  {
    title: "Energy",
    desc: "Smart renewable energy solutions.",
    icon: BoltIcon,
  },
  {
    title: "Web",
    desc: "Scalable high-performance platforms.",
    icon: LanguageIcon,
  },
  {
    title: "Mobile",
    desc: "Premium cross-platform apps.",
    icon: PhoneIphoneIcon,
  },
];

export const projects = [
  { title: "Building Construction", category: "Construction", image: p1 },
  { title: "Infrastructure Project", category: "Infrastructure", image: p2 },
  { title: "Solar Plant Setup", category: "Energy", image: p3 },
  { title: "Smart City Work", category: "Infrastructure", image: p1 },
  { title: "Interior Design", category: "Design", image: p2 },
  { title: "Renovation Work", category: "Construction", image: p3 },
];

export const categories = [
  "All",
  "Construction",
  "Infrastructure",
  "Energy",
  "Design",
];

export const customers = [
  { name: "Ramesh Kumar", location: "Patna, Bihar", image: cr1 },
  { name: "Sunita Devi", location: "Gaya, Bihar", image: cr2 },
  { name: "Amit Sharma", location: "Delhi", image: cr3 },
  { name: "Rajesh Singh", location: "Lucknow", image: cr4 },
];