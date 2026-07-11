import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/config/home-data";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SoftWorks · Solutions"
          title="Solutions"
          description="Pre-built solution frameworks tailored to your sector."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.name}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {solution.audience}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                {solution.name}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{solution.summary}</p>
              <Link
                href="#book-demo"
                className="mt-5 inline-flex text-sm font-semibold text-orange-700 hover:text-orange-600 dark:text-orange-300 dark:hover:text-orange-200"
              >
                Book Demo for This Solution →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
