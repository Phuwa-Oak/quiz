import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { getModuleBySlug, hqModules } from "@/lib/hq-modules";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return hqModules.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hqModule = getModuleBySlug(slug);

  if (!hqModule) {
    return {
      title: "Module not found | HQ Management",
    };
  }

  return {
    title: `${hqModule.titleEn} | HQ Management`,
    description: hqModule.description,
  };
}

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const hqModule = getModuleBySlug(slug);

  if (!hqModule) {
    notFound();
  }

  const Icon = hqModule.icon;

  return (
    <AppShell>
      <div className="space-y-6">
        <section className={`relative overflow-hidden rounded-[2.25rem] border p-6 sm:p-8 ${hqModule.tone.card}`}>
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute -bottom-16 left-1/3 h-44 w-44 rounded-full bg-white/60 blur-3xl" />
          <div className="relative">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-stone-600 shadow-sm transition hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" />
              กลับ Dashboard
            </Link>
            <div className="grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-end">
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${hqModule.tone.soft}`}>
                  <Icon className="h-4 w-4" />
                  {hqModule.group.titleTh}
                </div>
                <h1 className="mt-5 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">
                  {hqModule.titleTh}
                </h1>
                <p className={`mt-2 text-2xl font-bold ${hqModule.tone.text}`}>{hqModule.titleEn}</p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">{hqModule.description}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-stone-200/60">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Quick actions</p>
                <div className="mt-4 grid gap-2">
                  {hqModule.actions.slice(0, 3).map((action, index) => (
                    <button
                      key={action}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                        index === 0
                          ? "bg-stone-950 text-white shadow-lg shadow-stone-300"
                          : "bg-white text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {action}
                      {index === 0 ? <Plus className="h-4 w-4" /> : <MoreHorizontal className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {hqModule.metrics.map((metric, index) => (
            <div key={metric} className="cream-card rounded-[1.65rem] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-stone-500">{metric}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${hqModule.tone.soft}`}>
                  {index === 0 ? "Main" : index === 1 ? "Alert" : "Report"}
                </span>
              </div>
              <p className="mt-4 text-3xl font-black text-stone-950">
                {index === 0 ? "128" : index === 1 ? "24" : "96%"}
              </p>
              <p className="mt-2 text-sm text-stone-500">ตัวเลขตัวอย่างสำหรับวางโครงหน้า สามารถเชื่อม API จริงภายหลัง</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_24rem]">
          <div className="cream-card rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Workspace</p>
                <h2 className="mt-2 text-2xl font-black text-stone-950">รายการข้อมูลและการค้นหา</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-600 shadow-sm">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-600 shadow-sm">
                  <Download className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-500 shadow-sm">
                <Search className="h-4 w-4" />
                <input className="w-full bg-transparent outline-none" placeholder={`ค้นหา ${hqModule.titleTh}`} />
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-bold text-stone-600 shadow-sm">
                <CalendarDays className="h-4 w-4" />
                ช่วงเวลา
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-stone-300">
                <Plus className="h-4 w-4" />
                {hqModule.actions[0]}
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white">
              <div className="grid grid-cols-12 border-b border-stone-200 bg-stone-50 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-stone-400">
                <div className="col-span-5">ข้อมูลหลัก</div>
                <div className="col-span-3 hidden md:block">สถานะ</div>
                <div className="col-span-3 hidden lg:block">อัปเดตล่าสุด</div>
                <div className="col-span-7 text-right md:col-span-4 lg:col-span-1">Action</div>
              </div>
              {[1, 2, 3, 4].map((row) => (
                <div
                  key={row}
                  className="grid grid-cols-12 items-center border-b border-stone-100 px-4 py-4 last:border-b-0 hover:bg-stone-50/70"
                >
                  <div className="col-span-5 min-w-0">
                    <p className="truncate font-bold text-stone-950">
                      {hqModule.titleEn} #{String(row).padStart(3, "0")}
                    </p>
                    <p className="mt-1 truncate text-sm text-stone-500">
                      {hqModule.fields[row % hqModule.fields.length]}
                    </p>
                  </div>
                  <div className="col-span-3 hidden md:block">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Active
                    </span>
                  </div>
                  <div className="col-span-3 hidden text-sm text-stone-500 lg:flex lg:items-center lg:gap-2">
                    <Clock3 className="h-4 w-4" />
                    วันนี้ 10:{row}5
                  </div>
                  <div className="col-span-7 text-right md:col-span-4 lg:col-span-1">
                    <button className="rounded-full p-2 text-stone-400 transition hover:bg-stone-100 hover:text-stone-950">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="cream-card rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${hqModule.tone.icon}`}>
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Form structure</p>
                  <h2 className="text-xl font-black text-stone-950">ข้อมูลที่ต้องมี</h2>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {hqModule.fields.map((field) => (
                  <div key={field} className="rounded-2xl border border-stone-200 bg-white/80 p-3">
                    <label className="text-xs font-bold text-stone-500">{field}</label>
                    <div className="mt-2 h-10 rounded-xl bg-stone-100" />
                  </div>
                ))}
              </div>
            </div>

            <div className="cream-card rounded-[2rem] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Page workflow</p>
              <h2 className="mt-2 text-xl font-black text-stone-950">โครงสร้างการทำงาน</h2>
              <div className="mt-5 space-y-4">
                {hqModule.actions.map((action, index) => (
                  <div key={action} className="flex gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${hqModule.tone.soft}`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold text-stone-950">{action}</p>
                      <p className="mt-1 text-sm leading-6 text-stone-500">
                        รองรับปุ่มคำสั่ง สิทธิ์ผู้ใช้งาน และการบันทึกประวัติในขั้นต่อยอดระบบจริง
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
