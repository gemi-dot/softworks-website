import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/config/home-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SoftWorks · Services"
          title="Services"
          description="End-to-end execution from idea to resilient production systems."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)] dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-sky-600 dark:text-sky-300">
                {service.icon}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <Link
            href="#book-demo"
            className="inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
          >
            Book a Demo for These Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
