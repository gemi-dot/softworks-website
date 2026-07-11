"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowRight,
  Boxes,
  Building2,
  CalendarDays,
  Check,
  CircleHelp,
  Coins,
  Download,
  Droplets,
  Factory,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  Hotel,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquareText,
  Network,
  Search,
  Settings,
  Sparkles,
  Tags,
  Trophy,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

type IconName =
  | "dashboard"
  | "solutions"
  | "ecosystem"
  | "industry"
  | "why"
  | "about"
  | "partners"
  | "testimonials"
  | "pricing"
  | "contact"
  | "menu"
  | "settings"
  | "calendar"
  | "download"
  | "tag"
  | "mail"
  | "document"
  | "building"
  | "people"
  | "certificate"
  | "hotel"
  | "drop"
  | "bottle"
  | "school"
  | "racket"
  | "spark"
  | "check"
  | "search"
  | "arrow";

function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const iconMap: Record<IconName, LucideIcon> = {
    dashboard: LayoutDashboard,
    solutions: Boxes,
    ecosystem: Network,
    industry: Factory,
    why: CircleHelp,
    about: UserRound,
    partners: Handshake,
    testimonials: MessageSquareText,
    pricing: Coins,
    contact: Mail,
    menu: Menu,
    settings: Settings,
    calendar: CalendarDays,
    download: Download,
    tag: Tags,
    mail: Mail,
    document: FileText,
    building: Building2,
    people: Users,
    certificate: FileCheck,
    hotel: Hotel,
    drop: Droplets,
    bottle: FlaskConical,
    school: GraduationCap,
    racket: Trophy,
    spark: Sparkles,
    check: Check,
    search: Search,
    arrow: ArrowRight,
  };

  const Glyph = iconMap[name];
  return <Glyph className={className} strokeWidth={1.9} aria-hidden="true" />;
}

function Counter({ target, suffix = "", delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    let rafId = 0;
    let startRafId = 0;

    startRafId = window.requestAnimationFrame(() => {
      setCount(0);
    });

    const timer = window.setTimeout(() => {
      const duration = 1150;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setCount(Math.floor(eased * target));

        if (elapsed < 1) {
          rafId = window.requestAnimationFrame(tick);
        }
      };

      rafId = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(rafId);
      window.cancelAnimationFrame(startRafId);
    };
  }, [target, delay]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function useSectionInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}

function getGridStaggerDelay(index: number, columns: number, rowDelay = 120, columnDelay = 70) {
  const row = Math.floor(index / columns);
  const col = index % columns;

  return row * rowDelay + col * columnDelay;
}

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

const sidebarItems = [
  { label: "Dashboard", icon: "dashboard" as const },
  { label: "Solutions", icon: "solutions" as const, href: "#solution-panel" },
  { label: "Ecosystem", icon: "ecosystem" as const, href: "/ecosystem" },
  { label: "Industries", icon: "industry" as const, href: "#industries" },
  { label: "Why SoftWorks", icon: "why" as const, href: "#why-softworks" },
  { label: "About Us", icon: "about" as const },
  { label: "Clients & Partners", icon: "partners" as const },
  { label: "Testimonials", icon: "testimonials" as const },
  { label: "Pricing", icon: "pricing" as const },
  { label: "Contact Us", icon: "contact" as const },
];

const statCards = [
  { label: "Total Solutions", value: 15, suffix: "", note: "Ready for demo", color: "bg-violet-500" },
  { label: "Pilot Ready", value: 5, suffix: "", note: "Solutions", color: "bg-emerald-500" },
  { label: "Industries Served", value: 6, suffix: "", note: "Sectors", color: "bg-sky-500" },
  { label: "Modules Developed", value: 75, suffix: "+", note: "And growing", color: "bg-amber-500" },
  { label: "Happy Clients", value: 12, suffix: "+", note: "Organizations", color: "bg-rose-500" },
];

const solutionCards = [
  {
    name: "Barangay Information Management",
    sector: "Government",
    icon: "building" as const,
    summary: "Core profiles, case records, and resident lifecycle workflows.",
    badge: "Pilot Ready",
  },
  {
    name: "Barangay Inventory System",
    sector: "Government",
    icon: "document" as const,
    summary: "Asset movement and procurement logs with audit-ready reporting.",
    badge: "Pilot Ready",
  },
  {
    name: "Resident Information System",
    sector: "Government",
    icon: "people" as const,
    summary: "Household data, permits, and population analytics in one view.",
    badge: "Ready",
  },
  {
    name: "Certificate & Docs System",
    sector: "Government",
    icon: "certificate" as const,
    summary: "Faster issuance with queues, printing templates, and document trail.",
    badge: "Ready",
  },
  {
    name: "Hotel Management Suite",
    sector: "Hospitality",
    icon: "hotel" as const,
    summary: "Reservation, room operations, billing, and channel synchronization.",
    badge: "Demo Ready",
  },
  {
    name: "Water Billing System",
    sector: "Utilities",
    icon: "drop" as const,
    summary: "Meter reading, bill generation, and payment collection monitoring.",
    badge: "Demo Ready",
  },
  {
    name: "Mineral Water Station Manager",
    sector: "Manufacturing",
    icon: "bottle" as const,
    summary: "Production, inventory, route delivery, and customer management.",
    badge: "Demo Ready",
  },
  {
    name: "Montessori School System",
    sector: "Education",
    icon: "school" as const,
    summary: "Enrollment, attendance, grading, and parent communication tools.",
    badge: "Demo Ready",
  },
  {
    name: "Pickleball Event Manager",
    sector: "Sports",
    icon: "racket" as const,
    summary: "Tournament registration, ranking workflows, and sponsor visibility.",
    badge: "Demo Ready",
  },
  {
    name: "More Solutions Coming",
    sector: "Roadmap",
    icon: "spark" as const,
    summary: "We are actively expanding modules for local organizations.",
    badge: "Coming Soon",
  },
];

const updates = [
  { title: "BIMS v2.1 Released", date: "July 2, 2026" },
  { title: "Inventory Suite Upgrade", date: "June 17, 2026" },
  { title: "Hotel PMS Feature Pack", date: "May 30, 2026" },
];

const featuredProjects = [
  {
    title: "Barangay IMS Deployment Track",
    detail: "Resident records, certificates, and service workflows for faster barangay operations.",
    tag: "Government",
  },
  {
    title: "Hotel Operations Suite",
    detail: "Reservation, billing, and room management workflows packaged for quick rollout.",
    tag: "Hospitality",
  },
  {
    title: "Montessori School System",
    detail: "Enrollment and academic operations with student, guardian, and faculty coordination.",
    tag: "Education",
  },
];

const whySoftWorksCards = [
  {
    title: "Community Focused",
    description: "Designed for LGUs, schools, businesses, and organizations serving real local needs.",
    icon: "building" as const,
  },
  {
    title: "Practical Solutions",
    description: "Simplify daily operations and improve service delivery with tools teams can adopt quickly.",
    icon: "solutions" as const,
  },
  {
    title: "Secure & Reliable",
    description: "Built with modern architecture, strong data protection, and dependable system performance.",
    icon: "certificate" as const,
  },
  {
    title: "Scalable Growth",
    description: "Start with one module and expand into a complete ecosystem as your organization grows.",
    icon: "arrow" as const,
  },
  {
    title: "Long-Term Partnership",
    description: "Continuous support, updates, and collaboration from rollout to long-term operations.",
    icon: "partners" as const,
  },
  {
    title: "Innovation with Purpose",
    description: "AI-ready and cloud-ready systems that stay practical, affordable, and future-focused.",
    icon: "spark" as const,
  },
];

const trustPillars = [
  "Community Solutions",
  "Government Ready",
  "Modern Technology",
  "AI Ready",
  "Cloud Ready",
  "Affordable",
  "Customizable",
  "Professional Support",
];

const industriesServed = [
  {
    name: "Local Government",
    summary: "Digitize resident services, case handling, and records management for barangays and municipalities.",
    icon: "building" as const,
  },
  {
    name: "Education",
    summary: "Improve enrollment, class operations, and communication for schools and learning centers.",
    icon: "school" as const,
  },
  {
    name: "Hospitality",
    summary: "Streamline reservations, room operations, and guest experience in modern hotel workflows.",
    icon: "hotel" as const,
  },
  {
    name: "Utilities",
    summary: "Modernize metering, billing, and collection for water districts and utility service teams.",
    icon: "drop" as const,
  },
  {
    name: "Retail & Distribution",
    summary: "Track inventory, sales, and deliveries with practical systems that scale with growth.",
    icon: "solutions" as const,
  },
  {
    name: "Sports & Events",
    summary: "Manage registrations, match brackets, rankings, and sponsorships in one coordinated flow.",
    icon: "racket" as const,
  },
];

const sampleFeaturesBySector: Record<string, string[]> = {
  Government: ["Citizen records", "Permit workflow", "Audit-ready logs"],
  Hospitality: ["Channel sync", "Front-desk ops", "Daily occupancy"],
  Utilities: ["Meter capture", "Billing cycles", "Payment tracking"],
  Manufacturing: ["Production queue", "Route delivery", "Sales monitoring"],
  Education: ["Enrollment flow", "Attendance scan", "Parent portal"],
  Sports: ["Bracket setup", "Rankings", "Event registration"],
  Roadmap: ["New modules", "Client requests", "Release timeline"],
};

const heroChips = [
  { icon: "building" as const, tone: "bg-cyan-50 text-cyan-600 border-cyan-200", position: "-left-1 top-[10px]" },
  { icon: "school" as const, tone: "bg-indigo-50 text-indigo-600 border-indigo-200", position: "left-[34px] -top-[6px]" },
  { icon: "people" as const, tone: "bg-amber-50 text-amber-600 border-amber-200", position: "-left-[14px] bottom-[34px]" },
  { icon: "certificate" as const, tone: "bg-orange-50 text-orange-600 border-orange-200", position: "right-[14px] top-[8px]" },
  { icon: "ecosystem" as const, tone: "bg-sky-50 text-sky-600 border-sky-200", position: "-right-[6px] bottom-[40px]" },
];

function getModuleTone(sector: string) {
  const toneMap: Record<string, string> = {
    Government: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Hospitality: "bg-rose-50 text-rose-700 border-rose-200",
    Utilities: "bg-sky-50 text-sky-700 border-sky-200",
    Manufacturing: "bg-violet-50 text-violet-700 border-violet-200",
    Education: "bg-indigo-50 text-indigo-700 border-indigo-200",
    Sports: "bg-amber-50 text-amber-700 border-amber-200",
    Roadmap: "bg-slate-100 text-slate-700 border-slate-300",
  };

  return toneMap[sector] ?? "bg-blue-50 text-blue-700 border-blue-200";
}

export function HomePage() {
  const [featuredProjectsRef, isFeaturedProjectsVisible] = useSectionInView<HTMLElement>(0.22);
  const [whySoftWorksRef, isWhySoftWorksVisible] = useSectionInView<HTMLElement>(0.2);
  const [industriesRef, isIndustriesVisible] = useSectionInView<HTMLElement>(0.22);
  const isMobile = useIsMobile();

  const featuredColumns = isMobile ? 1 : 3;
  const whyColumns = isMobile ? 1 : 3;
  const trustColumns = isMobile ? 1 : 4;
  const industriesColumns = isMobile ? 1 : 3;

  const featuredBaseDelay = isMobile ? 70 : 180;
  const whyBaseDelay = isMobile ? 90 : 220;
  const trustBaseDelay = isMobile ? 130 : 360;
  const industriesBaseDelay = isMobile ? 80 : 190;
  const statsBaseDelay = isMobile ? 50 : 180;
  const statsStepDelay = isMobile ? 45 : 85;
  const solutionsBaseDelay = isMobile ? 70 : 280;
  const solutionsMobileRowDelay = 55;

  return (
    <main className={`${headingFont.variable} ${bodyFont.variable} flex-1 px-3 py-4 sm:px-4 lg:px-5`}>
      <div className="sw-dashboard-shell mx-auto grid w-full max-w-[1660px] grid-cols-1 gap-3.5 lg:grid-cols-[248px_minmax(0,1fr)_264px]">
        <aside className="overflow-hidden rounded-[22px] border border-[#c8d8f2] bg-[linear-gradient(180deg,_#11234a_0%,_#0c1733_100%)] text-slate-100 shadow-[0_22px_48px_-24px_rgba(7,15,35,0.8)]">
          <div className="border-b border-white/10 px-4 py-4">
            <p className="sw-sidebar-brand font-[var(--font-heading)] text-[21px] font-bold leading-none tracking-[0.038em]">SOFTWORKS</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Community Solutions</p>
          </div>
          <nav className="mx-2.5 mt-2 overflow-hidden rounded-xl border border-white/8 bg-black/10">
            {sidebarItems.map((item, idx) => (
              <div key={item.label} className={idx > 0 ? "border-t border-white/8" : ""}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`sw-sidebar-item group flex h-[39px] w-full items-center justify-between px-3 text-left text-[12.5px] font-medium leading-none tracking-[0.008em] transition ${
                      idx === 0
                        ? "bg-gradient-to-r from-[#3166ff] to-[#2449c7] font-semibold text-white"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name={item.icon} className="h-3.5 w-3.5" />
                      {item.label}
                    </span>
                    <span className={`text-[10px] text-slate-300/80 ${idx === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>●</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`sw-sidebar-item group flex h-[39px] w-full items-center justify-between px-3 text-left text-[12.5px] font-medium leading-none tracking-[0.008em] transition ${
                      idx === 0
                        ? "bg-gradient-to-r from-[#3166ff] to-[#2449c7] font-semibold text-white"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name={item.icon} className="h-3.5 w-3.5" />
                      {item.label}
                    </span>
                    <span className={`text-[10px] text-slate-300/80 ${idx === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>●</span>
                  </button>
                )}
              </div>
            ))}
          </nav>
          <div className="m-2.5 mt-1 rounded-2xl border border-white/12 bg-white/5 p-3.5">
            <p className="font-[var(--font-heading)] text-base font-semibold">Need help?</p>
            <p className="mt-1 text-xs text-slate-300">We can help you choose your best-fit module in one call.</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-cyan-200/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-500/20"
            >
              Contact Team
            </button>
          </div>
        </aside>

        <section className="space-y-3.5">
          <div className="flex h-[42px] items-center justify-between rounded-2xl border border-[#d8e4f7] bg-white px-3.5 shadow-[0_14px_40px_-28px_rgba(16,46,114,0.75)]">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-[#4265b3]">
              <Icon name="menu" className="h-4 w-4" />
            </button>
            <div className="hidden w-[320px] items-center gap-2 rounded-lg border border-[#d8e5f7] bg-[#f8fbff] px-2.5 py-1.5 md:flex">
              <Icon name="search" className="h-3.5 w-3.5 text-[#6f8fc8]" />
              <span className="text-xs text-[#6f8fc8]">Search solutions...</span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#d5e2f6] text-[#6f8fc8]">
                <Icon name="settings" className="h-3.5 w-3.5" />
              </button>
              <button type="button" className="inline-flex items-center gap-1.5 rounded-lg bg-[#2d5bdb] px-3 py-1.5 text-xs font-semibold text-white">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                Schedule Live Demo
              </button>
            </div>
          </div>

          <div className="animate-fade-up rounded-[22px] border border-[#d7e3f7] bg-white p-4 [animation-fill-mode:forwards] sm:p-5">
            <p className="font-[var(--font-body)] text-[13px] font-semibold tracking-[0.01em] text-[#3662cc]">Welcome to SoftWorks Demo Portal</p>
            <div className="sw-hero-grid mt-2.5 grid items-center gap-4 md:grid-cols-[1fr_304px]">
              <div>
                <h1 className="sw-hero-title font-[var(--font-heading)] text-[39px] font-bold leading-[1.03] tracking-[-0.016em] text-[#101933]">
                  Explore Our Ecosystem of
                  <span className="block text-[#2d5bdb]">Ready-to-Use Solutions</span>
                </h1>
                <p className="mt-3 max-w-2xl font-[var(--font-body)] text-[14px] leading-[1.45] tracking-[-0.002em] text-slate-600 sm:text-[15px]">
                  Built for communities, businesses, schools, and organizations. Reliable, practical, and deployment-ready.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <Link
                    href="/ecosystem"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2d5bdb] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#224abd]"
                  >
                    Explore Ecosystem
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="#solution-panel"
                    className="inline-flex items-center rounded-xl border border-[#ccdaf7] bg-white px-4 py-2.5 text-sm font-semibold text-[#315ecf] transition hover:border-[#b8cbf3] hover:bg-[#f8fbff]"
                  >
                    Browse Solutions
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-[#d6e1f4] bg-[radial-gradient(circle_at_20%_0%,_#dce8ff_0%,_#eef4ff_52%,_#f9fbff_100%)] p-3.5">
                <div className="relative mx-auto h-[170px] w-full max-w-[254px]">
                  <div className="absolute bottom-0 left-1/2 h-4 w-[86%] -translate-x-1/2 rounded-full bg-[#b7c9ee]/90 blur-[5px]" />
                  <div className="absolute bottom-[10px] left-1/2 h-[134px] w-[79%] -translate-x-1/2 overflow-hidden rounded-[14px] border border-[#1f3f91] bg-[linear-gradient(180deg,_#0f2250_0%,_#21469c_68%,_#2f5de0_100%)] shadow-[0_22px_32px_-18px_rgba(16,40,95,0.98)]">
                    <div className="absolute inset-x-0 top-0 h-6 bg-white/6" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-[var(--font-heading)] text-[24px] font-bold tracking-[0.072em] text-white">SOFTWORKS</p>
                    </div>
                    <p className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100">
                      Solutions Ecosystem
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-2 w-[96%] -translate-x-1/2 rounded-[999px] border border-[#b9ccef] bg-[#d7e4fb]" />

                  {heroChips.map((chip, idx) => (
                    <div
                      key={`${chip.icon}-${idx}`}
                      className={`absolute ${chip.position} inline-flex h-8 w-8 items-center justify-center rounded-lg border shadow-[0_10px_18px_-10px_rgba(39,77,160,0.78)] ${chip.tone}`}
                    >
                      <Icon name={chip.icon} className="h-4 w-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-5">
            {statCards.map((card, idx) => (
              <article
                key={card.label}
                className="animate-fade-up rounded-2xl border border-[#dae6f8] bg-white px-3 py-3.5 shadow-sm [animation-fill-mode:forwards]"
                style={{ animationDelay: `${statsBaseDelay + idx * statsStepDelay}ms` }}
              >
                <div className="flex items-start gap-2">
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${card.color}`} />
                  <div>
                    <p className="font-[var(--font-body)] text-[11px] tracking-[0.005em] text-slate-500">{card.label}</p>
                    <p className="font-[var(--font-heading)] text-[23px] font-bold leading-[1.06] tracking-[-0.012em] text-[#16203c]">
                      <Counter target={card.value} suffix={card.suffix} delay={320 + idx * 130} />
                    </p>
                    <p className="font-[var(--font-body)] text-[11px] text-slate-500">{card.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div id="solution-panel" className="rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)] sm:p-[18px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="sw-solutions-heading font-[var(--font-heading)] text-[30px] font-bold leading-none tracking-[-0.012em] text-[#16203c]">Our Solutions - Ready for Demo</h2>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="rounded-full bg-[#2d5bdb] px-3 py-1.5 text-xs font-semibold text-white">All</button>
                <button type="button" className="rounded-full border border-[#c9d9f6] bg-[#f8fbff] px-3 py-1.5 text-xs font-semibold text-[#4060a8]">By Category</button>
                <button type="button" className="rounded-full border border-[#c9d9f6] bg-[#f8fbff] px-3 py-1.5 text-xs font-semibold text-[#4060a8]">By Industry</button>
              </div>
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-5">
              {solutionCards.map((solution, idx) => {
                const features = sampleFeaturesBySector[solution.sector] ?? ["Live dashboard", "Team access", "Export reports"];

                return (
                  <article
                    key={solution.name}
                    className="animate-fade-up rounded-2xl border border-[#d9e5f8] bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-3 transition hover:-translate-y-0.5 hover:shadow-md [animation-fill-mode:forwards]"
                    style={{
                      animationDelay: isMobile
                        ? `${solutionsBaseDelay + getGridStaggerDelay(idx, 1, solutionsMobileRowDelay, 0)}ms`
                        : `${280 + idx * 70}ms`,
                    }}
                  >
                    <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border ${getModuleTone(solution.sector)}`}>
                      <Icon name={solution.icon} className="h-4 w-4" />
                    </div>
                    <p className="sw-solution-title font-[var(--font-heading)] text-[15px] font-bold leading-[1.16] tracking-[-0.008em] text-[#17213f]">{solution.name}</p>
                    <p className="mt-1 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.1em] text-[#5886da]">{solution.sector}</p>
                    <p className="mt-2 min-h-16 font-[var(--font-body)] text-[11px] leading-[1.42] text-slate-600">{solution.summary}</p>

                    <ul className="mt-2 space-y-1 font-[var(--font-body)] text-[10px] text-[#4d6aa9]">
                      {features.slice(0, 2).map((feature) => (
                        <li key={feature} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#4f79df]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full bg-[#e8f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#2d5bdb]">
                        {solution.badge}
                      </span>
                      <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-[#cddcf8] px-2.5 py-1 text-[11px] font-semibold text-[#315ecf]">
                        Launch
                        <Icon name="arrow" className="h-3 w-3" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#ccdcf8] bg-[linear-gradient(90deg,_#f2f7ff_0%,_#e8efff_100%)] px-4 py-3">
              <div>
                <p className="font-[var(--font-heading)] text-[21px] font-bold leading-[1.1] tracking-[-0.01em] text-[#20376f]">Digital transformation starts here.</p>
                <p className="font-[var(--font-body)] text-[13px] leading-[1.4] text-[#3e5b98]">Let SoftWorks help your organization work smarter and serve better.</p>
              </div>
              <button type="button" className="rounded-xl bg-[#2d5bdb] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#224abd]">
                Schedule Live Demo
              </button>
            </div>
          </div>

          <section
            id="featured-projects"
            ref={featuredProjectsRef}
            className="rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)] sm:p-[18px]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3766d4]">Featured Projects</p>
                <h2 className="mt-1 font-[var(--font-heading)] text-[28px] font-bold leading-[1.05] tracking-[-0.012em] text-[#16203c] sm:text-[32px]">
                  Deployment-Ready Systems for Real Operations
                </h2>
              </div>
              <Link
                href="#solution-panel"
                className="inline-flex items-center gap-1 rounded-lg border border-[#cfdcf6] bg-[#f7faff] px-3 py-1.5 text-xs font-semibold text-[#2b56c6] transition hover:bg-[#edf3ff]"
              >
                View All Solutions
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, idx) => (
                <article
                  key={project.title}
                  className={`${isFeaturedProjectsVisible ? "animate-fade-up" : "opacity-0 translate-y-3"} rounded-2xl border border-[#d9e5f8] bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-3.5 transition hover:-translate-y-0.5 hover:shadow-md [animation-fill-mode:forwards]`}
                  style={{
                    animationDelay: `${featuredBaseDelay + getGridStaggerDelay(idx, featuredColumns, isMobile ? 65 : 130, isMobile ? 0 : 90)}ms`,
                  }}
                >
                  <span className="rounded-full bg-[#e8f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2d5bdb]">
                    {project.tag}
                  </span>
                  <h3 className="mt-2.5 font-[var(--font-heading)] text-[19px] font-bold leading-[1.15] tracking-[-0.01em] text-[#1a2c58]">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-[var(--font-body)] text-[13px] leading-[1.5] text-slate-600">{project.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="why-softworks"
            ref={whySoftWorksRef}
            className="rounded-[22px] border border-[#d7e3f7] bg-[linear-gradient(180deg,_#ffffff_0%,_#f7faff_100%)] p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)] sm:p-[18px]"
          >
            <div className="rounded-2xl border border-[#dbe7fb] bg-[radial-gradient(circle_at_6%_0%,_#ecf3ff_0%,_#ffffff_48%,_#f8fbff_100%)] px-4 py-4 sm:px-5">
              <p className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3766d4]">Why Choose SoftWorks?</p>
              <h2 className="mt-1 font-[var(--font-heading)] text-[30px] font-bold leading-[1.05] tracking-[-0.014em] text-[#122248] sm:text-[34px]">
                Building Smarter Communities Through Technology
              </h2>
              <p className="mt-2 max-w-3xl font-[var(--font-body)] text-[14px] leading-[1.5] text-slate-600">
                Helping organizations modernize operations through secure, reliable, and practical software solutions.
              </p>
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {whySoftWorksCards.map((card, idx) => (
                <article
                  key={card.title}
                  className={`${isWhySoftWorksVisible ? "animate-fade-up" : "opacity-0 translate-y-3"} rounded-2xl border border-[#d9e5f8] bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-[#bdd0f3] hover:shadow-md [animation-fill-mode:forwards]`}
                  style={{
                    animationDelay: `${whyBaseDelay + getGridStaggerDelay(idx, whyColumns, isMobile ? 60 : 130, isMobile ? 0 : 90)}ms`,
                  }}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfe0f8] bg-[#eef4ff] text-[#2f58c9]">
                    <Icon name={card.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-2.5 font-[var(--font-heading)] text-[18px] font-bold leading-[1.15] tracking-[-0.01em] text-[#1a2c58]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 font-[var(--font-body)] text-[13px] leading-[1.5] text-slate-600">{card.description}</p>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#2f58c9] transition hover:text-[#2348aa]"
                  >
                    Learn More
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </button>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-2.5 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#d6e3f8] bg-[linear-gradient(135deg,_#f4f8ff_0%,_#ffffff_60%)] p-4">
                <p className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3d67d0]">Our Mission</p>
                <p className="mt-2 font-[var(--font-body)] text-[14px] leading-[1.55] text-slate-700">
                  Empowering communities through innovative software solutions that improve governance, streamline operations, and create better services.
                </p>
              </article>
              <article className="rounded-2xl border border-[#d6e3f8] bg-[linear-gradient(135deg,_#f4f8ff_0%,_#ffffff_60%)] p-4">
                <p className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3d67d0]">Our Vision</p>
                <p className="mt-2 font-[var(--font-body)] text-[14px] leading-[1.55] text-slate-700">
                  To become one of the Philippines&apos; trusted providers of community-focused digital solutions.
                </p>
              </article>
            </div>

            <article className="mt-4 rounded-2xl border border-[#d5e1f6] bg-white p-4">
              <h3 className="font-[var(--font-heading)] text-[22px] font-bold leading-none tracking-[-0.01em] text-[#1b2d59]">Why Organizations Trust Us</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {trustPillars.map((item, idx) => (
                  <li
                    key={item}
                    className={`${isWhySoftWorksVisible ? "animate-fade-up" : "opacity-0 translate-y-3"} flex items-center gap-2 rounded-xl border border-[#dce7fb] bg-[#f9fbff] px-3 py-2 font-[var(--font-body)] text-[12px] font-semibold text-[#2e4f9c] [animation-fill-mode:forwards]`}
                    style={{
                      animationDelay: `${trustBaseDelay + getGridStaggerDelay(idx, trustColumns, isMobile ? 50 : 110, isMobile ? 0 : 60)}ms`,
                    }}
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <div className="mt-4 rounded-2xl border border-[#c9dbfa] bg-[linear-gradient(100deg,_#1f4ec4_0%,_#2d67e0_48%,_#3b83ea_100%)] px-4 py-4 text-white sm:px-5">
              <h3 className="font-[var(--font-heading)] text-[24px] font-bold leading-[1.08] tracking-[-0.012em] sm:text-[28px]">
                Ready to Digitally Transform Your Organization?
              </h3>
              <p className="mt-2 max-w-3xl font-[var(--font-body)] text-[14px] leading-[1.5] text-blue-100">
                Whether you&apos;re managing residents, assets, schools, or businesses, SoftWorks is ready to help.
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2.5">
                <Link
                  href="#book-demo"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#214dbc] transition hover:bg-blue-50"
                >
                  Request a Demo
                </Link>
                <Link
                  href="#solution-panel"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-200/70 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-300/20"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </section>

          <section
            id="industries"
            ref={industriesRef}
            className="rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)] sm:p-[18px]"
          >
            <div>
              <p className="font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3766d4]">Industries We Serve</p>
              <h2 className="mt-1 font-[var(--font-heading)] text-[28px] font-bold leading-[1.05] tracking-[-0.012em] text-[#16203c] sm:text-[32px]">
                Built for Diverse Sectors Across Communities
              </h2>
              <p className="mt-2 max-w-3xl font-[var(--font-body)] text-[14px] leading-[1.5] text-slate-600">
                Our modules are tailored for day-to-day operations in public service, education, hospitality, utilities, retail, and events.
              </p>
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {industriesServed.map((industry, idx) => (
                <article
                  key={industry.name}
                  className={`${isIndustriesVisible ? "animate-fade-up" : "opacity-0 translate-y-3"} rounded-2xl border border-[#d9e5f8] bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-3.5 transition hover:-translate-y-0.5 hover:border-[#bdd0f3] hover:shadow-md [animation-fill-mode:forwards]`}
                  style={{
                    animationDelay: `${industriesBaseDelay + getGridStaggerDelay(idx, industriesColumns, isMobile ? 65 : 130, isMobile ? 0 : 90)}ms`,
                  }}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfe0f8] bg-[#eef4ff] text-[#2f58c9]">
                    <Icon name={industry.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-2.5 font-[var(--font-heading)] text-[18px] font-bold leading-[1.15] tracking-[-0.01em] text-[#1a2c58]">
                    {industry.name}
                  </h3>
                  <p className="mt-1.5 font-[var(--font-body)] text-[13px] leading-[1.5] text-slate-600">{industry.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="space-y-3">
          <Link
            id="ecosystem-panel"
            href="/ecosystem"
            className="block min-h-[204px] rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_26px_60px_-40px_rgba(37,99,235,0.4)]"
          >
            <h3 className="sw-right-heading font-[var(--font-heading)] text-[22px] font-bold leading-none tracking-[-0.01em] text-[#1a2648]">SoftWorks Ecosystem</h3>
            <p className="mt-2 font-[var(--font-body)] text-[13px] leading-[1.45] text-slate-600">
              Integrated local-government and business modules designed to work together seamlessly.
            </p>
            <ul className="mt-3 space-y-2.5 font-[var(--font-body)] text-[13px] text-[#3c5d9f]">
              <li className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />Unified design language</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />Integrated reporting</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />Secure and scalable architecture</li>
              <li className="flex items-center gap-2"><Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />Local support and deployment</li>
            </ul>
          </Link>

          <section className="min-h-[224px] rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)]">
            <h3 className="sw-right-heading font-[var(--font-heading)] text-[22px] font-bold leading-none tracking-[-0.01em] text-[#1a2648]">Quick Actions</h3>
            <div className="mt-3 space-y-2">
              {[
                { label: "Schedule Live Demo", icon: "calendar" as const },
                { label: "Download Brochure", icon: "download" as const },
                { label: "View Pricing", icon: "tag" as const },
                { label: "Contact Sales", icon: "mail" as const },
              ].map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex h-10 w-full items-center gap-2.5 rounded-xl border border-[#d2e0f8] bg-[#f8fbff] px-3 text-left font-[var(--font-body)] text-[13px] font-semibold tracking-[0.002em] text-[#2a4fbc] transition hover:bg-[#edf3ff]"
                >
                  <Icon name={action.icon} className="h-3.5 w-3.5" />
                  {action.label}
                </button>
              ))}
            </div>
          </section>

          <section className="min-h-[198px] rounded-[22px] border border-[#d7e3f7] bg-white p-4 shadow-[0_20px_50px_-36px_rgba(16,46,114,0.75)]">
            <h3 className="sw-right-heading font-[var(--font-heading)] text-[22px] font-bold leading-none tracking-[-0.01em] text-[#1a2648]">Latest Updates</h3>
            <div className="mt-3 space-y-2.5">
              {updates.map((update) => (
                <article key={update.title} className="rounded-xl border border-[#dce7fa] bg-[#f9fbff] px-3 py-2.5">
                  <p className="flex items-center gap-2 font-[var(--font-body)] text-[13px] font-semibold text-[#203a78]">
                    <Icon name="document" className="h-3.5 w-3.5" />
                    {update.title}
                  </p>
                  <p className="mt-1 font-[var(--font-body)] text-[11px] text-slate-500">{update.date}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
