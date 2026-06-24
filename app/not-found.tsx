import Link from "next/link";
import { AppShell } from "@/components/app-shell";

export default function NotFound() {
  return (
    <AppShell>
      <section className="cream-card rounded-[2.25rem] p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">404</p>
        <h1 className="mt-4 text-4xl font-black text-stone-950">ไม่พบหน้าที่ต้องการ</h1>
        <p className="mx-auto mt-4 max-w-xl text-stone-600">
          route นี้ไม่ได้อยู่ในโครงสร้างระบบ HQ กรุณากลับไปเลือกเมนูจาก Dashboard
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-stone-300"
        >
          กลับ Dashboard
        </Link>
      </section>
    </AppShell>
  );
}
