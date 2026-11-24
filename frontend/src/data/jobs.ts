// Sample listings. Replace with data from a CMS / API when available.

export type Demand = "Very High" | "High" | "Medium";

export interface Job {
  id: string;
  title: string;
  sector: string;
  country: string;
  city: string;
  visa: string;
  salary: string;
  openings: number;
  language: string;
  experience: string;
  benefits: string[];
  requirements: string[];
  demand: Demand;
  posted: string; // ISO date
}

export interface SectorDemand {
  sector: string;
  demand: Demand;
  note: string;
}

export const sectorDemand: SectorDemand[] = [
  { sector: "Nursing Care", demand: "Very High", note: "Aging population, ongoing shortage" },
  { sector: "Construction", demand: "Very High", note: "Infrastructure & housing projects" },
  { sector: "Food Service", demand: "High", note: "Restaurants, cafeterias, chains" },
  { sector: "Manufacturing", demand: "High", note: "Industrial & electronic products" },
  { sector: "Agriculture", demand: "High", note: "Farming, greenhouse, livestock" },
  { sector: "Food Processing", demand: "High", note: "Bakery, packaging, seafood plants" },
  { sector: "Automobile Maintenance", demand: "Medium", note: "Service centers, inspection" },
  { sector: "Building Cleaning", demand: "Medium", note: "Hotels, hospitals, offices" },
  { sector: "Hospitality", demand: "Medium", note: "Hotels & accommodation" },
  { sector: "Driving & Logistics", demand: "Medium", note: "Truck, bus, warehouse" },
];

export const jobs: Job[] = [
  {
    id: "jp-care-01",
    title: "Care Worker (Kaigo)",
    sector: "Nursing Care",
    country: "Japan",
    city: "Osaka",
    visa: "SSW Type-1",
    salary: "¥190,000 – ¥230,000 / month",
    openings: 25,
    language: "JLPT N4 + Nursing Care Japanese Test",
    experience: "No experience needed (training provided)",
    benefits: ["Company housing", "Social insurance", "Paid leave", "Overtime pay"],
    requirements: ["Age 18–35", "Pass Kaigo skill test", "Physically fit"],
    demand: "Very High",
    posted: "2026-11-15",
  },
  {
    id: "jp-con-01",
    title: "Construction Worker – Scaffolding",
    sector: "Construction",
    country: "Japan",
    city: "Tokyo",
    visa: "SSW Type-1",
    salary: "¥220,000 – ¥280,000 / month",
    openings: 40,
    language: "JLPT N4 / JFT-Basic A2",
    experience: "1+ year construction preferred",
    benefits: ["Housing support", "Social insurance", "Bonus", "Tools provided"],
    requirements: ["Age 20–38", "Pass construction skill test", "Height work comfortable"],
    demand: "Very High",
    posted: "2026-11-18",
  },
  {
    id: "jp-con-02",
    title: "Welder (TIG / MIG)",
    sector: "Construction",
    country: "Japan",
    city: "Nagoya",
    visa: "SSW Type-2",
    salary: "¥280,000 – ¥350,000 / month",
    openings: 12,
    language: "JLPT N3",
    experience: "3+ years welding",
    benefits: ["Family visa eligible", "Housing", "Bonus twice a year"],
    requirements: ["Welding certificate", "Trade test", "SSW-1 experience or equivalent"],
    demand: "High",
    posted: "2026-11-10",
  },
  {
    id: "jp-food-01",
    title: "Restaurant Kitchen Staff",
    sector: "Food Service",
    country: "Japan",
    city: "Fukuoka",
    visa: "SSW Type-1",
    salary: "¥185,000 – ¥215,000 / month",
    openings: 30,
    language: "JLPT N4 + Food Service Skill Test",
    experience: "No experience needed",
    benefits: ["Free meals", "Housing support", "Social insurance"],
    requirements: ["Age 18–35", "Hygiene awareness", "Shift work"],
    demand: "High",
    posted: "2026-11-12",
  },
  {
    id: "jp-mfg-01",
    title: "Factory Machine Operator",
    sector: "Manufacturing",
    country: "Japan",
    city: "Aichi",
    visa: "SSW Type-1",
    salary: "¥200,000 – ¥240,000 / month",
    openings: 35,
    language: "JLPT N4",
    experience: "Factory experience preferred",
    benefits: ["Dormitory", "Transport", "Overtime pay", "Paid leave"],
    requirements: ["Age 18–35", "Manufacturing skill test", "Basic math"],
    demand: "High",
    posted: "2026-11-08",
  },
  {
    id: "jp-agri-01",
    title: "Greenhouse Farm Worker",
    sector: "Agriculture",
    country: "Japan",
    city: "Hokkaido",
    visa: "SSW Type-1",
    salary: "¥180,000 – ¥210,000 / month",
    openings: 20,
    language: "JLPT N4 / JFT-Basic A2",
    experience: "Farming background preferred",
    benefits: ["Free housing", "Social insurance", "Seasonal bonus"],
    requirements: ["Age 18–40", "Agriculture skill test"],
    demand: "High",
    posted: "2026-11-05",
  },
  {
    id: "jp-fp-01",
    title: "Food Processing Plant Worker",
    sector: "Food Processing",
    country: "Japan",
    city: "Saitama",
    visa: "SSW Type-1",
    salary: "¥190,000 – ¥220,000 / month",
    openings: 28,
    language: "JLPT N4",
    experience: "No experience needed",
    benefits: ["Dormitory", "Meals", "Social insurance"],
    requirements: ["Age 18–35", "Food manufacturing skill test"],
    demand: "High",
    posted: "2026-11-14",
  },
  {
    id: "jp-auto-01",
    title: "Automobile Mechanic",
    sector: "Automobile Maintenance",
    country: "Japan",
    city: "Yokohama",
    visa: "SSW Type-1",
    salary: "¥210,000 – ¥260,000 / month",
    openings: 10,
    language: "JLPT N4",
    experience: "2+ years mechanic",
    benefits: ["Housing support", "Certification support", "Bonus"],
    requirements: ["Automobile maintenance skill test", "Diploma in auto mechanics preferred"],
    demand: "Medium",
    posted: "2026-11-02",
  },
  {
    id: "jp-clean-01",
    title: "Building Cleaning Staff",
    sector: "Building Cleaning",
    country: "Japan",
    city: "Tokyo",
    visa: "SSW Type-1",
    salary: "¥180,000 – ¥205,000 / month",
    openings: 15,
    language: "JLPT N4",
    experience: "No experience needed",
    benefits: ["Housing support", "Social insurance"],
    requirements: ["Building cleaning skill test", "Age 18–40"],
    demand: "Medium",
    posted: "2026-10-30",
  },
  {
    id: "jp-hotel-01",
    title: "Hotel Front & Housekeeping Staff",
    sector: "Hospitality",
    country: "Japan",
    city: "Kyoto",
    visa: "SSW Type-1",
    salary: "¥190,000 – ¥225,000 / month",
    openings: 18,
    language: "JLPT N3 preferred",
    experience: "Hospitality experience a plus",
    benefits: ["Staff housing", "Meals", "Paid leave"],
    requirements: ["Accommodation skill test", "Good communication"],
    demand: "Medium",
    posted: "2026-11-11",
  },
  {
    id: "jp-drv-01",
    title: "Truck Driver",
    sector: "Driving & Logistics",
    country: "Japan",
    city: "Chiba",
    visa: "SSW Type-1",
    salary: "¥240,000 – ¥300,000 / month",
    openings: 8,
    language: "JLPT N4",
    experience: "3+ years driving",
    benefits: ["License conversion support", "Housing", "Bonus"],
    requirements: ["Valid driving license", "Clean driving record"],
    demand: "Medium",
    posted: "2026-11-01",
  },
  {
    id: "jp-tit-01",
    title: "Technical Intern – Electronics Assembly",
    sector: "Manufacturing",
    country: "Japan",
    city: "Shizuoka",
    visa: "Technical Intern (TITP)",
    salary: "¥170,000 – ¥190,000 / month",
    openings: 22,
    language: "JLPT N5 (training provided)",
    experience: "No experience needed",
    benefits: ["Dormitory", "Pre-departure training", "Social insurance"],
    requirements: ["Age 18–30", "HSC passed", "Good eyesight"],
    demand: "High",
    posted: "2026-11-16",
  },
];

export const allCountries = Array.from(new Set(jobs.map((j) => j.country)));
export const allSectors = Array.from(new Set(jobs.map((j) => j.sector)));
export const allVisas = Array.from(new Set(jobs.map((j) => j.visa)));
