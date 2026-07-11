import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  FolderKanban,
  Network,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const platformCapabilities = [
  {
    title: "Common user accounts",
    description: "Team members use familiar access patterns across systems with role-aware entry points.",
    icon: Users,
  },
  {
    title: "Role-based security",
    description: "Permissions can be scoped by office, department, and workflow responsibility.",
    icon: ShieldCheck,
  },
  {
    title: "Unified reporting",
    description: "Operational reports can pull from shared records and present one decision-ready view.",
    icon: FolderKanban,
  },
  {
    title: "Shared resident or customer records",
    description: "Core people and account data can stay consistent across modules instead of being re-entered.",
    icon: Database,
  },
  {
    title: "Notifications and workflows",
    description: "Alerts, document steps, approvals, and follow-ups can use repeatable platform patterns.",
    icon: Network,
  },
  {
    title: "Centralized backups and deployment",
    description: "Backup routines, restore planning, and local deployment support keep operations practical and resilient.",
    icon: Server,
  },
];

const ecosystemGroups = [
  {
    title: "Shared Platform",
    description: "The common foundation that keeps every SoftWorks system consistent and expandable.",
    items: ["User accounts", "Security", "Reporting", "Notifications", "Backups"],
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Local Government",
    description: "Connected operations for barangays and local offices that need one working operational picture.",
    items: ["BIMS", "Certificates", "Inventory", "Water Billing"],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Business",
    description: "Operational systems for service businesses that benefit from common records and reporting.",
    items: ["Hotel Management", "Mineral Water Station"],
    accent: "from-orange-500 to-amber-500",
  },
  {
    title: "Education",
    description: "School workflows can plug into the same product discipline and support model.",
    items: ["Montessori System"],
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Sports",
    description: "Event and tournament administration can still follow the same platform standards.",
    items: ["Pickleball Management"],
    accent: "from-rose-500 to-pink-600",
  },
];

const bimsConnections = [
  "Resident Information",
  "Household Records",
  "Certificate Management",
  "Barangay Inventory",
  "Health Records",
  "Blotter Management",
  "Water Billing",
  "Reporting",
];

const platformPillars = [
  "Common design and navigation",
  "Modular expansion path",
  "Local deployment and support",
  "Centralized backups",
  "Consistent user experience",
  "Shared operational data",
];

export function EcosystemPage() {
  return (
    <main className="flex-1 py-14 sm:py-18 lg:py-20">
      <Container className="space-y-8 lg:space-y-10">
        <section className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,_rgba(15,35,71,0.98)_0%,_rgba(29,78,216,0.96)_58%,_rgba(8,145,178,0.92)_100%)] px-6 py-8 text-white shadow-[0_28px_80px_-40px_rgba(15,23,42,0.6)] sm:px-8 lg:px-10 lg:py-10 dark:border-slate-700/70">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100">
                SoftWorks Ecosystem
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                One Connected Ecosystem of Community Solutions
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-50 sm:text-base">
                Start with one SoftWorks application and expand into an integrated platform as your organization grows.
                This page explains how the shared platform, connected records, and related solutions work together.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {platformPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-50"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/20 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <Network className="h-4 w-4" />
                  Connection Example
                </div>
                <div className="mt-4 rounded-2xl bg-white/8 p-4">
                  <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-bold text-blue-700">
                    BIMS Core
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {bimsConnections.map((connection) => (
                      <div
                        key={connection}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/95"
                      >
                        <ChevronRight className="h-4 w-4 text-cyan-200" />
                        {connection}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
            <SectionHeading
              eyebrow="Shared Platform"
              title="The foundation behind every SoftWorks deployment"
              description="This page is about how systems connect, not just what each product does on its own. Every module can benefit from a shared platform layer."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {platformCapabilities.map((capability) => {
                const CapabilityIcon = capability.icon;

                return (
                  <article
                    key={capability.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                      <CapabilityIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {capability.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
            <SectionHeading
              eyebrow="Bigger Vision"
              title="Start with one system, expand into a platform"
              description="SoftWorks is designed so a team can adopt one practical module first, then connect surrounding workflows over time without starting over."
            />
            <div className="mt-6 space-y-3">
              {[
                "Begin with the most urgent operational problem.",
                "Reuse records, users, and navigation patterns in future modules.",
                "Keep reporting and support simpler as the ecosystem grows.",
                "Maintain local deployment options and dependable on-ground support.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
          <SectionHeading
            eyebrow="Ecosystem Structure"
            title="How the SoftWorks solutions are organized"
            description="The shared platform sits at the center, and local government, business, education, and sports solutions grow from that common base."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {ecosystemGroups.map((group) => (
              <article
                key={group.title}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${group.accent}`} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {group.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="brand-eyebrow inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                SoftWorks Direction
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
                Connected by design, practical in deployment
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                SoftWorks gives local organizations an ecosystem they can actually adopt: one dependable system first, then a connected platform that grows with operations.
              </p>
            </div>
            <Link
              href="/#solution-panel"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              View Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
