"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronRight, LayoutDashboard, Search, Sparkles } from "lucide-react";
import { hqModuleGroups, totalModules } from "@/lib/hq-modules";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen text-stone-900">
      <div className="subtle-grid pointer-events-none fixed inset-x-0 top-0 h-80" />
      <div className="relative mx-auto flex w-full max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-72 shrink-0 overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white/80 shadow-2xl shadow-stone-200/60 backdrop-blur-xl lg:flex lg:flex-col">
          <Link href="/" className="border-b border-stone-200/70 px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-white shadow-lg shadow-stone-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">HQ</p>
                <h1 className="text-lg font-bold text-stone-950">Management</h1>
              </div>
            </div>
          </Link>

          <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                pathname === "/"
                  ? "bg-stone-900 text-white shadow-lg shadow-stone-300"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            {hqModuleGroups.map((group) => (
              <div key={group.id} className="pt-3">
                <div className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.24em] text-stone-400">
                  {group.titleEn}
                </div>
                <div className="space-y-1">
                  {group.modules.map((module) => {
                    const active = pathname === `/modules/${module.slug}`;
                    const Icon = module.icon;

                    return (
                      <Link
                        key={module.slug}
                        href={`/modules/${module.slug}`}
                        className={`group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm transition ${
                          active
                            ? "bg-white text-stone-950 shadow-md ring-1 ring-stone-200"
                            : "text-stone-600 hover:bg-white/80 hover:text-stone-950"
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${module.tone.soft}`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="truncate">{module.titleEn}</span>
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 transition ${
                            active ? "text-stone-700" : "text-stone-300 group-hover:text-stone-500"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="m-4 rounded-3xl bg-stone-950 p-4 text-white">
            <p className="text-xs text-stone-300">HQ modules ready</p>
            <p className="mt-1 text-2xl font-bold">{totalModules} pages</p>
            <p className="mt-2 text-xs leading-5 text-stone-300">
              โครงหน้าเว็บครบตามฟังก์ชันในภาพ พร้อมต่อ API จริงในขั้นถัดไป
            </p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="glass-panel sticky top-3 z-20 mb-5 rounded-[1.75rem] px-4 py-3 sm:px-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">
                  Headquarter Control Center
                </p>
                <h2 className="text-xl font-bold text-stone-950 sm:text-2xl">ระบบ HQ สำหรับบริหารหลังบ้าน</h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-2 rounded-2xl border border-stone-200 bg-white/80 px-3 py-2 text-sm text-stone-500 shadow-sm md:flex">
                  <Search className="h-4 w-4" />
                  ค้นหาเมนู / เอกสาร
                </div>
                <button className="rounded-2xl border border-stone-200 bg-white/80 p-3 text-stone-600 shadow-sm transition hover:bg-white hover:text-stone-950">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
