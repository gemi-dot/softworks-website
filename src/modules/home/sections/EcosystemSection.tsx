"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type DomainKey = "Government" | "Business" | "Education" | "Sports and Events";

const domainStyles: Record<
  DomainKey,
  { badge: string; dot: string; line: string; cardAccent: string }
> = {
  Government: {
    badge:
      "bg-blue-100 text-blue-700 border-transparent dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-500/30",
    dot: "bg-sky-500 dark:bg-sky-400",
    line: "bg-sky-300 dark:bg-sky-700",
    cardAccent: "border-blue-200 dark:border-blue-900/60",
  },
  Business: {
    badge:
      "bg-emerald-100 text-emerald-700 border-transparent dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-500/30",
    dot: "bg-emerald-500 dark:bg-emerald-400",
    line: "bg-emerald-300 dark:bg-emerald-700",
    cardAccent: "border-emerald-200 dark:border-emerald-900/60",
  },
  Education: {
    badge:
      "bg-violet-100 text-violet-700 border-transparent dark:bg-violet-500/20 dark:text-violet-200 dark:border-violet-500/30",
    dot: "bg-violet-500 dark:bg-violet-400",
    line: "bg-violet-300 dark:bg-violet-700",
    cardAccent: "border-violet-200 dark:border-violet-900/60",
  },
  "Sports and Events": {
    badge:
      "bg-orange-100 text-orange-700 border-transparent dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-500/30",
    dot: "bg-orange-500 dark:bg-orange-400",
    line: "bg-orange-300 dark:bg-orange-700",
    cardAccent: "border-orange-200 dark:border-orange-900/60",
  },
};

const ecosystemDomains: Array<{
  domain: DomainKey;
  title: string;
  systems: string[];
}> = [
  {
    domain: "Government",
    title: "Government Solutions",
    systems: ["BIMS", "Resident Information", "Inventory", "Certificates"],
  },
  {
    domain: "Business",
    title: "Business Solutions",
    systems: ["Hotel Management", "Mineral Water Station", "Water Billing"],
  },
  {
    domain: "Education",
    title: "Education Solutions",
    systems: ["Montessori School System"],
  },
  {
    domain: "Sports and Events",
    title: "Sports and Events",
    systems: ["Pickleball Management"],
  },
];

const ecosystemFeatures = [
  "One SoftWorks branding and interface style",
  "Common login and user management patterns",
  "Similar dashboard and reports",
  "Reusable billing, inventory, and document modules",
  "Shared support and maintenance process",
  "Future integration between compatible systems",
];

const demoCards = [
  { category: "Government" as DomainKey, product: "BIMS", stage: "First Version Demo" },
  {
    category: "Government" as DomainKey,
    product: "Resident Information",
    stage: "First Version Demo",
  },
  { category: "Government" as DomainKey, product: "Inventory", stage: "First Version Demo" },
  {
    category: "Government" as DomainKey,
    product: "Certificates",
    stage: "First Version Demo",
  },
  {
    category: "Business" as DomainKey,
    product: "Hotel Management",
    stage: "First Version Demo",
  },
  {
    category: "Business" as DomainKey,
    product: "Mineral Water Station",
    stage: "First Version Demo",
  },
  { category: "Business" as DomainKey, product: "Water Billing", stage: "First Version Demo" },
  {
    category: "Education" as DomainKey,
    product: "Montessori School System",
    stage: "First Version Demo",
  },
  {
    category: "Sports and Events" as DomainKey,
    product: "Pickleball Management",
    stage: "First Version Demo",
  },
];

export function EcosystemSection() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecosystem" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SoftWorks · Ecosystem"
          title="Connected systems under one SoftWorks standard"
          description="These are not separate experiments. Every solution follows shared patterns so teams can use, support, and scale with confidence."
        />

        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          <article className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)] dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Ecosystem Map
            </h3>
            <div
              ref={mapRef}
              className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold tracking-[0.18em] text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
                SoftWorks Ecosystem
              </p>

              <div className="mt-4 space-y-3">
                {ecosystemDomains.map((domainData) => {
                  const style = domainStyles[domainData.domain];
                  const index = ecosystemDomains.findIndex((item) => item.title === domainData.title);

                  return (
                    <div key={domainData.title} className="relative pl-7">
                      <span
                        className={cn(
                          "absolute left-2 top-1 h-[calc(100%-0.25rem)] w-px origin-top transition-transform duration-700",
                          style.line,
                          isMapVisible ? "scale-y-100" : "scale-y-0",
                        )}
                        style={{ transitionDelay: `${index * 140}ms` }}
                        aria-hidden
                      />
                      <span
                        className={cn(
                          "absolute left-[5px] top-2 h-4 w-4 rounded-full ring-4 ring-white transition-all duration-500 dark:ring-slate-950",
                          style.dot,
                          isMapVisible ? "scale-100 opacity-100" : "scale-75 opacity-0",
                        )}
                        style={{ transitionDelay: `${80 + index * 140}ms` }}
                        aria-hidden
                      />

                      <article
                        className={cn(
                          "rounded-2xl border bg-white p-4 shadow-sm transition-all duration-600 dark:bg-slate-900",
                          style.cardAccent,
                          isMapVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                        )}
                        style={{ transitionDelay: `${120 + index * 140}ms` }}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${style.badge}`}
                          >
                            {domainData.title}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {domainData.systems.length} system
                            {domainData.systems.length > 1 ? "s" : ""}
                          </span>
                        </div>

                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {domainData.systems.map((system) => (
                            <li
                              key={system}
                              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
                              {system}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Shared Standard
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              {ecosystemFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                    ✓
                  </span>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Demo Systems</p>
            <h3 className="mt-2 text-2xl font-black">Public Landing Demo Grid</h3>
          </div>
          <div className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            First-stage rollout focus
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            First release focuses on the public landing page and demo card grid. Advanced platform
            controls are scheduled after this version is stable.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {demoCards.map((item) => (
              <article
                key={item.category + item.product}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/25"
              >
                <p
                  className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${domainStyles[item.category].badge}`}
                >
                  {item.category}
                </p>
                <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.product}
                </h4>
                <p className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  {item.stage}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 rounded-lg border border-dashed border-slate-300 px-4 py-3 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Next phase after first version: single sign-on, live demo accounts, filtering,
            analytics, and client portal.
          </p>

          <div className="mt-5">
            <Link
              href="#book-demo"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Book an Ecosystem Demo
            </Link>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
