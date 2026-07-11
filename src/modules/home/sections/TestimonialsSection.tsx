import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/config/home-data";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Module 11"
          title="Testimonials"
          description="What client leaders say about working with our team."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <blockquote className="text-slate-700 dark:text-slate-200">“{item.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</span>
                <br />
                {item.role}, {item.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
