import logo from "@/assets/logo/logo2.png";
import logo1 from "@/assets/hero/c3.jpg";

import p1 from "@/assets/hero/c1.jpg";
import p2 from "@/assets/hero/c2.jpg";
import p3 from "@/assets/hero/sl1.jpg";
import sl6 from "@/assets/hero/sl6.jpeg";
import sl7 from "@/assets/hero/sl7.jpeg";
import sl5 from "@/assets/hero/sl5.jpeg";

import cr1 from "@/assets/hero/hc1.jpeg";
import cr2 from "@/assets/hero/hc2.jpeg";
import cr3 from "@/assets/hero/cr3.jpg";
import cr4 from "@/assets/hero/hc3.jpeg";

import BoltIcon from "@mui/icons-material/Bolt";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ConstructionIcon from "@mui/icons-material/Construction";
import GroupsIcon from "@mui/icons-material/Groups";

export const companyFeatures = [
  "5+ Years of Industry Leadership",
  "50+ Government Projects",
  "120+ Renovations Completed",
  "1MW+ Solar Infrastructure",
  "1M+ Smart Meters Installed",
];

export const clients = [
  { name: "Adani Infra", logo: logo1 },
  { name: "Tata Projects", logo: logo },
  { name: "L&T Construction", logo: logo },
  { name: "GMR Group", logo: logo },
  { name: "Loom Solar", logo: logo1 },
  { name: "Luminous", logo: logo },
];
export const serviceOptions = [
  { label: "Real Estate" },
  { label: "Construction" },
  { label: "Consulting" },
  { label: "Technology Services" },
];

export const expertiseData = [
  {
    title: "Solar Energy",
    desc: "Smart renewable energy solutions.",
    icon: BoltIcon,
  },
  {
    title: "Construction",
    desc: "Advanced infrastructure & modern architecture.",
    icon: ConstructionIcon,
  },
  {
    title: "Manpower Services",
    desc: "Skilled workforce and staffing solutions.",
    icon: GroupsIcon,
  },
  {
    title: "Web & App Development",
    desc: "Scalable high-performance platforms.",
    icon: LanguageIcon,
  },
];

export const projects = [
  { title: "Solar Plant Setup", category: "Solar Energy", image: sl7 },
  { title: "Solar Plant Setup", category: "Solar Energy", image: sl6 },
  { title: "Building Construction", category: "Construction", image: p1 },
  { title: "Infrastructure Project", category: "Infrastructure", image: sl5 },
  { title: "Interior Design", category: "Design", image: p2 },
  { title: "Renovation Work", category: "Construction", image: p3 },
];

export const categories = [
  "All",
  "Solar Energy",
  "Construction",
  "Infrastructure",
  "Design",
];

export const customers = [
  { name: "Ramesh Kumar", location: "Patna, Bihar", image: cr1 },
  { name: "Sunita Devi", location: "Gaya, Bihar", image: cr2 },
  { name: "Amit Sharma", location: "Delhi", image: cr3 },
  { name: "Rajesh Singh", location: "Lucknow", image: cr4 },
];
