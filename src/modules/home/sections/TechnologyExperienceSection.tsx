import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  {
    era: "Legacy Foundation",
    stack: "COBOL",
    description:
      "Experience supporting long-running legacy systems that power critical operations.",
  },
  {
    era: "Transition Layer",
    stack: "Business Systems Architecture",
    description:
      "Structured migration plans that protect current workflows while introducing modern tooling.",
  },
  {
    era: "Modern Delivery",
    stack: "Python · Next.js · C++",
    description:
      "Modern engineering for fast interfaces, reliable backends, and performance-focused services.",
  },
];

export function TechnologyExperienceSection() {
  return (
    <section id="technology-experience" className="bg-[#07152f] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SoftWorks · Technology"
          title="From COBOL legacy systems to modern product stacks"
          description="Your team gets support across the full timeline: maintain what works, modernize what is needed, and launch confidently."
          className="[&>h2]:text-white [&>p]:text-blue-100 [&_.brand-eyebrow]:bg-cyan-500/15 [&_.brand-eyebrow]:text-cyan-200"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {timeline.map((item) => (
            <article
              key={item.era}
              className="relative rounded-2xl border border-blue-500/25 bg-white/5 p-6 shadow-[0_20px_45px_rgba(2,6,23,0.28)] backdrop-blur"
            >
              <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                {item.era}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{item.stack}</h3>
              <p className="mt-3 text-blue-100">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <Link
            href="#book-demo"
            className="inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            Book a Demo with This Stack
          </Link>
        </div>
      </Container>
    </section>
  );
}
