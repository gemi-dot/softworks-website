import type {
  BlogPost,
  Partner,
  Project,
  Service,
  Solution,
  Stat,
  Testimonial,
} from "@/types/site";

export const partners: Partner[] = [
  { name: "MetroBank" },
  { name: "SME Circle" },
  { name: "GovTech PH" },
  { name: "BuildSpace" },
  { name: "Archipelago Ventures" },
  { name: "Nimbus Logistics" },
];

export const services: Service[] = [
  {
    title: "Community Discovery and Rollout",
    description:
      "Local area onboarding, stakeholder interviews, and first-stage service launch planning.",
    icon: "01",
  },
  {
    title: "Business Systems Engineering",
    description:
      "Workflow platforms, dashboards, and data-backed operations tools built for daily use.",
    icon: "02",
  },
  {
    title: "Legacy Modernization",
    description:
      "Migration support from COBOL-era systems into maintainable modern architectures.",
    icon: "03",
  },
  {
    title: "Team Support and Enablement",
    description:
      "Hands-on support for product teams using Python, Next.js, C++, and service operations.",
    icon: "04",
  },
];

export const solutions: Solution[] = [
  {
    name: "Operations Hub",
    audience: "For Growing SMEs",
    summary: "Unify inventory, billing, and reporting in one digital command center.",
    href: "/solutions#operations-hub",
  },
  {
    name: "Citizen Services",
    audience: "For Public Sector",
    summary: "Modernize service delivery with digital forms, workflows, and analytics.",
    href: "/solutions#citizen-services",
  },
  {
    name: "Sales Intelligence",
    audience: "For Commercial Teams",
    summary: "Track pipelines and performance with data-driven sales dashboards.",
    href: "/solutions#sales-intelligence",
  },
];

export const highlights: string[] = [
  "Local community-first approach with field-ready deployment planning",
  "Experienced support team from COBOL legacy software to Python, Next.js, and C++ stacks",
  "Business systems expertise for billing, reporting, workflows, and service delivery",
  "Structured first-stage rollout now, with clear path to scale in later phases",
];

export const stats: Stat[] = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Community Deployments", value: "42" },
  { label: "Legacy-to-Modern Transitions", value: "35+" },
  { label: "Client Retention", value: "93%" },
];

export const demoReadyFeatures: string[] = [
  "Community request intake and case tracking",
  "Service queue and status dashboards",
  "Resident and customer profile management",
  "Billing, payment logs, and reconciliation views",
  "Role-based staff access and activity audit",
  "Export-ready reports for operations and leadership",
];

export const engineeringCoverage: string[] = [
  "COBOL",
  "Python",
  "Next.js",
  "C++",
  "Business Systems Architecture",
];

export const projects: Project[] = [
  {
    name: "Pulse Retail OS",
    category: "Commerce",
    description: "Rebuilt store operations workflows for 40+ branches.",
    impact: "Cut stockout incidents by 38% in six months.",
  },
  {
    name: "CivicTrack",
    category: "Public Service",
    description: "Digital request management and case tracking for LGUs.",
    impact: "Reduced average resolution time from 7 days to 36 hours.",
  },
  {
    name: "AquaFlow Insights",
    category: "Utilities",
    description: "Real-time monitoring and billing analytics for water operations.",
    impact: "Improved billing accuracy and lowered leakage-related losses.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "SoftWorks turned our messy workflows into a platform our whole team actually loves using.",
    name: "Elaine Cruz",
    role: "COO",
    company: "Northline Distribution",
  },
  {
    quote:
      "Their delivery rhythm was exceptional. We had clarity every week and saw immediate wins.",
    name: "Martin Dela Rosa",
    role: "Head of Digital",
    company: "Harbor Group",
  },
  {
    quote:
      "The combination of engineering and business insight made all the difference.",
    name: "Isabel Reyes",
    role: "Program Director",
    company: "City Service Office",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "How Mid-Sized Teams Build Enterprise-Grade Platforms",
    excerpt:
      "A practical blueprint for scaling architecture, process, and product quality.",
    publishedAt: "Jun 28, 2026",
    readTime: "6 min read",
    href: "/blog/mid-sized-enterprise-platforms",
  },
  {
    title: "Designing Dashboards That Change Decision Behavior",
    excerpt:
      "What separates vanity metrics from operational intelligence in real teams.",
    publishedAt: "Jun 15, 2026",
    readTime: "4 min read",
    href: "/blog/dashboard-decision-behavior",
  },
  {
    title: "A Founder's Guide to Shipping Reliable v1 Products",
    excerpt:
      "Avoiding costly rewrites while moving fast in your first 12 months.",
    publishedAt: "May 31, 2026",
    readTime: "7 min read",
    href: "/blog/founder-guide-reliable-v1",
  },
];
