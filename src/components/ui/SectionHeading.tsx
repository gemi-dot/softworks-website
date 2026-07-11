import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="brand-eyebrow inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-100">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
