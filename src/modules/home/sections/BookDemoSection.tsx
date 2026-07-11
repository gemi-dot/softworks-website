import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { demoReadyFeatures } from "@/config/home-data";

export function BookDemoSection() {
  return (
    <section id="book-demo" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-white/25 bg-white/10 px-6 py-10 text-white shadow-2xl shadow-slate-950/25 backdrop-blur sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em]">SoftWorks · Demo</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            See SoftWorks in action with community-ready features.
          </h2>
          <p className="mt-3 max-w-2xl text-blue-100">
            The platform is in its first service stage and already includes core business system
            capabilities ready for local operations demo.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
            {demoReadyFeatures.map((feature) => (
              <li key={feature} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Link
              href="#contact"
              className="inline-flex rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Schedule a Live Demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
