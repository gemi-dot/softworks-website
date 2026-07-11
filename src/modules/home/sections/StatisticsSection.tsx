import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/config/home-data";

export function StatisticsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Module 8"
          title="Statistics"
          description="Performance indicators across our recent delivery portfolio."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
