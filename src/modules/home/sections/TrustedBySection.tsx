import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/config/home-data";

export function TrustedBySection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Module 4"
          title="Trusted By"
          description="Teams across public sector and private companies rely on SoftWorks."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
