import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="animate-fade-up relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#07152f] via-[#123a75] to-[#2563eb] px-8 py-16 text-white shadow-2xl md:px-14 md:py-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.22em] text-blue-100 backdrop-blur">
              SOFTWORKS FIRST RELEASE
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Local community solutions,
              <span className="block text-cyan-300">ready for rollout.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              {siteConfig.name} is built for local adoption with practical modules, unified
              standards, and clear service operations from day one.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#book-demo"
                className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Book Your Demo
              </Link>
              <Link
                href="#book-demo"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Demo Scope
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
