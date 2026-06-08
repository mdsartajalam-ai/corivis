import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import CodeIcon from "@mui/icons-material/Code";
import BusinessIcon from "@mui/icons-material/Business";
import BoltIcon from "@mui/icons-material/Bolt";

export const stats = [
  {
    value: "2+",
    label: "Years Legacy",
    icon: <CalendarTodayIcon />,
  },
  {
    value: "200+",
    label: "Projects Done",
    icon: <TrendingUpIcon />,
  },
  {
    value: "200+",
    label: "Lives Impacted",
    icon: <GroupsIcon />,
  },
  {
    value: "₹10Cr+",
    label: "Work Delivered",
    icon: <StarBorderIcon />,
  },
];

export const values = [
  {
    icon: <WorkspacePremiumIcon />,
    title: "Excellence",
    desc: "World-class quality in every brick laid and every line of code written — no shortcuts, no compromise.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Integrity",
    desc: "Transparent, ethical dealings with every government body, private stakeholder, and community partner.",
  },
  {
    icon: <EmojiObjectsIcon />,
    title: "Innovation",
    desc: "Pioneering AI-integrated infrastructure and green-energy solutions that redefine what is possible.",
  },
  {
    icon: <EnergySavingsLeafIcon />,
    title: "Sustainability",
    desc: "Steadfast commitment to reducing carbon footprint through solar energy and responsible construction.",
  },
];

export const timeline = [
  {
    year: "2025",
    title: "Foundation",
    desc: "Established in Samastipur, Bihar with a bold vision to transform India's infrastructure landscape from the ground up.",
    icon: <BusinessIcon />,
    tag: "Origin",
  },
  {
    year: "2025",
    title: "Government Expansion",
    desc: "Scaled into large-scale government civil projects and highway road construction across multiple Bihar districts.",
    icon: <TrendingUpIcon />,
    tag: "Growth",
  },
  {
    year: "2025",
    title: "Solar Initiative",
    desc: "Launched our green energy division, installing rooftop solar units statewide — powering a cleaner tomorrow.",
    icon: <EnergySavingsLeafIcon />,
    tag: "Green",
  },
  {
    year: "2026",
    title: "Digital Leap",
    desc: "Integrated AI and digital solutions into core infrastructure services — stepping boldly into India's tech future.",
    icon: <CodeIcon />,
    tag: "Tech",
  },
];

export const domains = [
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Civil & Infrastructure",
    points: [
      "Government buildings & highways",
      "Bridge & road construction",
      "Housing & real estate projects",
    ],
  },
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Solar Energy",
    points: [
      "Rooftop solar installations",
      "Smart meter deployment",
      "Green energy partnerships",
    ],
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Digital & Technology",
    points: [
      "Web & app development",
      "AI-driven solutions",
      "Digital transformation",
    ],
  },
];