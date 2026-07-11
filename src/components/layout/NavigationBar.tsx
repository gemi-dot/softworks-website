"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function NavigationBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(pathname === "/ecosystem" ? "/ecosystem" : "/");

  const currentRouteHref = pathname === "/ecosystem" ? "/ecosystem" : "/";

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const hashLinks = navigationLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"));

    const sections = hashLinks
      .map((href) => {
        const id = href.slice(1);
        return { href, element: document.getElementById(id) };
      })
      .filter((entry): entry is { href: string; element: HTMLElement } => Boolean(entry.element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (window.scrollY < 80) {
          setActiveHref("/");
          return;
        }

        if (visible[0]?.target) {
          const match = sections.find((entry) => entry.element === visible[0].target);
          if (match) setActiveHref(match.href);
        }
      },
      {
        rootMargin: "-38% 0px -48% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((entry) => observer.observe(entry.element));

    const onScrollTopCheck = () => {
      if (window.scrollY < 80) setActiveHref("/");
    };

    window.addEventListener("scroll", onScrollTopCheck, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollTopCheck);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-700/70 dark:bg-[#07152f]/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.35rem]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/softworks-community-logo-mobile.webp"
              alt="SoftWorks logo"
              width={56}
              height={37}
              className="h-10 w-auto rounded-lg object-contain shadow-sm"
              style={{ width: "auto" }}
              priority
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-950 dark:text-slate-100">
                {siteConfig.name}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-blue-600 dark:text-cyan-300">
                  Community Solutions
                </p>
                <span className="inline-flex items-center rounded-md border border-orange-300 bg-orange-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-orange-800 dark:border-orange-300/45 dark:bg-orange-500/20 dark:text-orange-200">
                  {siteConfig.stageLabel}
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={cn(
                  "group relative rounded-lg px-4 py-2 text-sm font-semibold transition",
                  "after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-[calc(100%-1.6rem)] after:-translate-x-1/2 after:origin-center after:rounded-full after:bg-blue-600 after:transition-transform after:duration-300 after:ease-out",
                  (link.href.startsWith("#") ? activeHref : currentRouteHref) === link.href
                    ? "bg-blue-50 text-blue-700 after:scale-x-100 dark:bg-blue-500/15 dark:text-blue-200"
                    : "text-slate-600 after:scale-x-0 hover:bg-blue-50 hover:text-blue-700 group-hover:after:scale-x-100 dark:text-slate-300 dark:hover:bg-slate-900/90 dark:hover:text-blue-200",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#book-demo"
              className="hidden rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400 md:inline-flex"
            >
              Schedule Demo
            </Link>
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Menu
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white/95 md:hidden dark:border-slate-700 dark:bg-[#07152f]/95"
        >
          <Container className="py-3">
            <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    (link.href.startsWith("#") ? activeHref : currentRouteHref) === link.href
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-900/90",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#book-demo"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-950/20 transition hover:bg-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Demo
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
