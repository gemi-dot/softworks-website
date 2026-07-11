import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/config/home-data";

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Module 9"
          title="Featured Projects"
          description="Selected implementations with measurable outcomes."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {project.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {project.name}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
