import { ArrowRight, CheckCircle2, ClipboardCheck, Layers3, ServerCog, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ModuleCard } from "@/components/module-card";
import { hqModuleGroups, totalModules } from "@/lib/hq-modules";

const summaryCards = [
  {
    label: "Module groups",
    value: hqModuleGroups.length.toString(),
    detail: "กลุ่มเมนูหลักตามภาพ",
    icon: Layers3,
  },
  {
    label: "Function pages",
    value: totalModules.toString(),
    detail: "หน้าโครงสร้างพร้อมใช้งาน",
    icon: ClipboardCheck,
  },
  {
    label: "Local ready",
    value: "Next.js",
    detail: "รันด้วย npm run dev",
    icon: ServerCog,
  },
];

export default function Home() {
  return (
    <AppShell>
      <section className="cream-card relative overflow-hidden rounded-[2.25rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-amber-200/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 rounded-full bg-rose-200/45 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
              <ShieldCheck className="h-4 w-4" />
              HQ Management Blueprint
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              โครงสร้างระบบ HQ โทนขาวครีมที่พร้อมต่อยอดเป็นหลังบ้านจริง
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
              รวมเมนูและหน้าทำงานครบตามภาพอ้างอิง ครอบคลุมข้อมูลระบบทั่วไป สินค้า คลังสินค้า จัดซื้อ สมาชิก
              ระบบพิเศษ เครื่องมือเพิ่มเติม และบัญชี พร้อมโครงหน้าแบบ CRUD, รายงาน และ workflow เอกสาร
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#module-map"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-stone-300 transition hover:-translate-y-0.5"
              >
                ดูโครงสร้างทุกหน้า
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/75 px-5 py-3 text-sm font-bold text-stone-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Tailwind CSS Minimal UI
              </span>
            </div>
          </div>

          <div className="grid gap-3">
            {summaryCards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.label} className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-lg shadow-stone-200/70">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-stone-500">{card.label}</p>
                      <p className="mt-1 text-3xl font-black text-stone-950">{card.value}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-stone-500">{card.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="module-map" className="mt-6 space-y-6">
        {hqModuleGroups.map((group) => (
          <div key={group.id} className="cream-card rounded-[2rem] p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${group.tone.soft}`}>
                  {group.titleEn}
                </span>
                <h2 className="mt-3 text-2xl font-black text-stone-950">{group.titleTh}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">{group.description}</p>
              </div>
              <div className="rounded-2xl bg-white/75 px-4 py-3 text-right shadow-sm">
                <p className="text-2xl font-black text-stone-950">{group.modules.length}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Pages</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {group.modules.map((module) => (
                <ModuleCard key={module.slug} module={module} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
