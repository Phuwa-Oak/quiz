import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { HqModule } from "@/lib/hq-modules";

export function ModuleCard({ module }: { module: HqModule }) {
  const Icon = module.icon;

  return (
    <Link
      href={`/modules/${module.slug}`}
      className={`group relative overflow-hidden rounded-[1.65rem] border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-200 ${module.tone.card}`}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/60 blur-2xl transition group-hover:scale-125" />
      <div className="relative flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${module.tone.icon}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-white/75 p-2 text-stone-400 shadow-sm transition group-hover:text-stone-900">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="relative mt-5">
        <p className="text-sm font-semibold text-stone-950">{module.titleTh}</p>
        <h3 className="mt-1 text-xl font-bold tracking-tight text-stone-950">{module.titleEn}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">{module.description}</p>
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {module.actions.slice(0, 2).map((action) => (
          <span key={action} className={`rounded-full px-3 py-1 text-xs font-semibold ${module.tone.soft}`}>
            {action}
          </span>
        ))}
      </div>
    </Link>
  );
}
