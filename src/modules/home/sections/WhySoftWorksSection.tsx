import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlights } from "@/config/home-data";

export function WhySoftWorksSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SoftWorks · Why"
          title="Why SoftWorks"
          description="Local implementation focus with experienced team support across old and new systems."
        />
        <ul className="mt-8 grid gap-4">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:border-blue-200 hover:bg-blue-50/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-900 dark:hover:bg-blue-950/15"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <Link
            href="#book-demo"
            className="inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            Book a Demo Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}
