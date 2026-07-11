import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10 lg:grid-cols-2 dark:border-slate-700 dark:bg-slate-900">
          <div>
            <SectionHeading
              eyebrow="SoftWorks · Contact"
              title="Contact"
              description="Tell us what you are building and we will propose a practical starting plan."
            />
            <div className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
              <p>hello@softworks.studio</p>
              <p>+63 917 000 1234</p>
              <p>30/F Tech District, Cebu City</p>
            </div>
          </div>
          <form className="space-y-4" aria-label="Contact form">
            <input
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              type="email"
              placeholder="Work Email"
            />
            <textarea
              className="h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Project Goals"
            />
            <button
              type="submit"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Contact Sales
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
