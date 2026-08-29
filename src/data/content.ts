// ---------------------------------------------------------------------------
// Central content source for the site. Anything wrapped in [BRACKETS] is a
// placeholder — real info was not provided and must be filled in before
// launch. Nothing here is fabricated: no invented metrics, clients, or tools.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Fiza",
  fullName: "Fiza Tahir",
  eyebrow: "AI ENTHUSIAST • WEB • AI MARKETING",
  heroHeading: "Hi, I'm Fiza.",
  heroStatement: ["Exploring AI.", "Building for the web.", "Learning by creating."],
  heroDescription:
    "I'm a Computer Science student passionate about Artificial Intelligence, Machine Learning, and Web Development. I enjoy experimenting with emerging AI technologies and turning ideas into practical digital experiences.",
  email: "fizaatahir1506@gmail.com",
  github: "https://github.com/Fizaa-Tahir",
  linkedin: "https://linkedin.com/in/fizatahir",
  portraitAlt: "Portrait of Fiza",
};

export const about = {
  headline: ["Building with curiosity.", "Learning through creation."],
  paragraphs: [
    "I'm a Computer Science student at Government College Women University, Faisalabad, currently exploring the space where Artificial Intelligence, Machine Learning, and Web Development meet.",
    "Most of what I know, I've learned by building — training models, shipping small web apps, and breaking things until they work. Right now that curiosity extends into AI Marketing, where I get hands-on with how AI-driven tools actually get used in real campaigns.",
    "I'm drawn to the practical side of AI: not the hype, but how it can genuinely make things — content, decisions, products — a little smarter.",
  ],
};

export const education = {
  degree: "Bachelor of Science in Computer Science (BSCS)",
  status: "6th Semester",
  university: "Government College Women University, Faisalabad (GCWUF)",
  expectedGraduation: "[EXPECTED GRADUATION YEAR]",
  cgpa: "3.54 CGPA",
};

export const experience = {
  role: "AI Marketing Intern",
  company: "FlyRank",
  companyDescription: "an AI-powered SEO & content marketing platform",
  period: "2026 — Present",
  overview:
    "Working across AI-driven marketing workflows — from competitive research to campaign copy — for a platform built at the intersection of AI and content strategy.",
  responsibilities: [
    "Analyzed competitor ad strategy across Meta and Google, breaking down hooks, offers, and platform-specific angles",
    "Wrote multi-channel campaign copy — sales pages, paid social, cold outreach, and LinkedIn — for real brand positioning exercises",
    "Researched and scored new customer-acquisition channels, producing a growth report with a proposed 30-day test budget",
    "Built a lead-magnet guide on how AI search engines select and recommend brands, as an internship capstone deliverable",
  ],
};

export type Project = {
  id: string;
  index: string;
  category: "AI & Machine Learning" | "Web Development" | "AI Marketing";
  name: string;
  description: string;
  problem: string;
  approach: string;
  build: string;
  learning: string;
  technologies: string[];
  result?: string;
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
};

export const projects: Project[] = [
  {
    id: "cart-abandonment",
    index: "01",
    category: "AI & Machine Learning",
    name: "Cart Abandonment Prediction",
    description:
      "A machine learning system that predicts which e-commerce sessions are likely to end in an abandoned cart.",
    problem:
      "E-commerce stores lose revenue when shoppers add items to cart and leave without buying — but not every session is equally at risk.",
    approach:
      "Worked with a dataset of roughly 4,280 shopping sessions across 13 attributes. Used imputation to handle missing values and Box-Cox normalization to correct skewed features.",
    build:
      "Applied Recursive Feature Elimination with a Random Forest to narrow the feature set to the 5 most predictive attributes, used SMOTE to correct class imbalance, then trained a Logistic Regression model. Wrapped the final model in a Flask app for predictions.",
    learning:
      "Learned how much of a model's performance comes from the preprocessing pipeline — feature selection and class balancing mattered more here than the choice of algorithm itself.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SMOTE", "Flask"],
    result: "~98% accuracy with a Kappa score of 0.94 on the test set.",
    liveUrl: "[LIVE DEMO — DEPLOYMENT IN PROGRESS]",
    liveLabel: "Live Demo (coming soon)",
  },
  {
    id: "trendora",
    index: "02",
    category: "Web Development",
    name: "Trendora",
    description: "A fashion e-commerce storefront built from scratch with core shopping functionality.",
    problem:
      "Wanted to build a genuinely functional storefront rather than a static template — one that actually handles catalog browsing and cart logic.",
    approach:
      "Designed the site around a real shopping flow: browse, filter, view details, add to cart.",
    build:
      "Built a homepage, a ready-to-wear catalog with sorting and filtering, and product detail pages with size and quantity selection feeding into an add-to-cart flow — all in vanilla HTML, CSS, and JavaScript.",
    learning:
      "Got hands-on with structuring interactive front-end state (filters, cart) without a framework, which forced a clearer understanding of the DOM.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "[GITHUB URL]",
    liveUrl: "[LIVE DEMO URL]",
  },
  {
    id: "flyrank-marketing",
    index: "03",
    category: "AI Marketing",
    name: "FlyRank Growth & Copy Case Study",
    description:
      "A set of real AI-marketing deliverables produced during my FlyRank internship — research, strategy, and campaign copy.",
    problem:
      "FlyRank needed sharper acquisition strategy and campaign copy grounded in real competitive and channel research, not assumptions.",
    approach:
      "Combined competitive ad teardowns with structured channel scoring to find where the best acquisition opportunities actually were.",
    build:
      "Tested 20 headline variations for landing page copy, ran a competitive Meta ad teardown, and produced a 5-channel customer-acquisition research report with proposed 30-day KPIs.",
    learning:
      "Learned to treat marketing copy as a hypothesis to be tested, not a single 'best' version — and how much channel selection depends on where the audience already pays attention.",
    technologies: ["Meta Ads Library", "Copywriting", "Channel Research"],
  },
];

export const skills = {
  "AI & Machine Learning": ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
  "Web Development": ["HTML", "CSS", "JavaScript"],
  Programming: ["Python", "C#", "Java", "SQL"],
  Tools: ["Git", "GitHub"],
  "AI Marketing": ["Competitive Ad Analysis", "Multi-channel Copywriting", "Acquisition Channel Research", "AI Content Workflows"],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
