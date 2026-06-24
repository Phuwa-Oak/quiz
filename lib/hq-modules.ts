import type { LucideIcon } from "lucide-react";
import {
  Barcode,
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  CreditCard,
  Database,
  Download,
  Factory,
  FileText,
  Home,
  Landmark,
  Layers3,
  Link2,
  MonitorCog,
  Newspaper,
  ReceiptText,
  ShoppingCart,
  SmilePlus,
  Tag,
  TicketPercent,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  Warehouse,
} from "lucide-react";

type Tone = {
  card: string;
  icon: string;
  soft: string;
  text: string;
  ring: string;
};

export type HqModule = {
  slug: string;
  titleTh: string;
  titleEn: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
  fields: string[];
  actions: string[];
  metrics: string[];
};

export type HqModuleGroup = {
  id: string;
  titleTh: string;
  titleEn: string;
  description: string;
  tone: Tone;
  modules: HqModule[];
};

const rose: Tone = {
  card: "bg-rose-50 border-rose-200",
  icon: "bg-rose-500 text-white",
  soft: "bg-rose-100 text-rose-700",
  text: "text-rose-700",
  ring: "ring-rose-200",
};

const amber: Tone = {
  card: "bg-amber-50 border-amber-200",
  icon: "bg-amber-500 text-white",
  soft: "bg-amber-100 text-amber-800",
  text: "text-amber-700",
  ring: "ring-amber-200",
};

const emerald: Tone = {
  card: "bg-emerald-50 border-emerald-200",
  icon: "bg-emerald-500 text-white",
  soft: "bg-emerald-100 text-emerald-800",
  text: "text-emerald-700",
  ring: "ring-emerald-200",
};

const fuchsia: Tone = {
  card: "bg-fuchsia-50 border-fuchsia-200",
  icon: "bg-fuchsia-500 text-white",
  soft: "bg-fuchsia-100 text-fuchsia-800",
  text: "text-fuchsia-700",
  ring: "ring-fuchsia-200",
};

const cyan: Tone = {
  card: "bg-cyan-50 border-cyan-200",
  icon: "bg-cyan-500 text-white",
  soft: "bg-cyan-100 text-cyan-800",
  text: "text-cyan-700",
  ring: "ring-cyan-200",
};

const slate: Tone = {
  card: "bg-slate-50 border-slate-200",
  icon: "bg-slate-700 text-white",
  soft: "bg-slate-100 text-slate-700",
  text: "text-slate-700",
  ring: "ring-slate-200",
};

export const hqModuleGroups: HqModuleGroup[] = [
  {
    id: "general",
    titleTh: "ข้อมูลระบบทั่วไป",
    titleEn: "General System",
    description: "ตั้งค่าพื้นฐานของสาขา ช่องทาง ลูกค้า และสิทธิ์ผู้ใช้งาน",
    tone: rose,
    modules: [
      {
        slug: "zone-channel",
        titleTh: "โซน / กลุ่มลูกค้า",
        titleEn: "Zone / Channel",
        description: "จัดกลุ่มพื้นที่ขาย ช่องทางการขาย และประเภทลูกค้าที่ใช้ร่วมกันทั้ง HQ",
        icon: Users,
        tone: rose,
        fields: ["รหัสโซน", "ชื่อโซน", "ช่องทางขาย", "สถานะ", "สาขาที่ใช้งาน"],
        actions: ["เพิ่มโซน", "แก้ไขช่องทาง", "กำหนดสาขา", "นำเข้า/ส่งออกข้อมูล"],
        metrics: ["โซนทั้งหมด", "ช่องทาง Active", "สาขาที่ผูกข้อมูล"],
      },
      {
        slug: "table-room",
        titleTh: "โต๊ะ / ห้อง",
        titleEn: "Table / Room",
        description: "กำหนดผังโต๊ะ ห้องบริการ และสถานะการใช้งานในแต่ละสาขา",
        icon: Home,
        tone: rose,
        fields: ["รหัสโต๊ะ", "ชื่อโต๊ะ/ห้อง", "โซน", "จำนวนที่นั่ง", "สถานะ"],
        actions: ["สร้างโต๊ะ", "จัดเรียงผัง", "กำหนดโซน", "ปิดใช้งาน"],
        metrics: ["โต๊ะทั้งหมด", "ห้องบริการ", "พื้นที่พร้อมใช้งาน"],
      },
      {
        slug: "customer-b2b",
        titleTh: "ลูกค้า",
        titleEn: "Customer / B2B",
        description: "ดูแลข้อมูลลูกค้าทั่วไป ลูกค้าองค์กร เครดิต และเงื่อนไขการขาย",
        icon: Building2,
        tone: rose,
        fields: ["รหัสลูกค้า", "ชื่อบริษัท/ลูกค้า", "เลขภาษี", "วงเงินเครดิต", "ผู้ติดต่อ"],
        actions: ["เพิ่มลูกค้า", "ตรวจสอบเครดิต", "กำหนดราคา", "ดูประวัติซื้อ"],
        metrics: ["ลูกค้า Active", "ลูกค้า B2B", "วงเงินคงเหลือ"],
      },
      {
        slug: "user",
        titleTh: "ผู้ใช้งานระบบ",
        titleEn: "User",
        description: "บริหารผู้ใช้งาน บทบาท สิทธิ์การเข้าถึง และประวัติการใช้งาน",
        icon: UserCog,
        tone: rose,
        fields: ["ชื่อผู้ใช้", "อีเมล", "บทบาท", "สาขา", "สถานะบัญชี"],
        actions: ["เชิญผู้ใช้", "กำหนดสิทธิ์", "รีเซ็ตรหัสผ่าน", "ดู Audit log"],
        metrics: ["ผู้ใช้ทั้งหมด", "บทบาท", "เข้าสู่ระบบวันนี้"],
      },
    ],
  },
  {
    id: "product",
    titleTh: "ข้อมูลสินค้า",
    titleEn: "Product Master",
    description: "โครงสร้างกลุ่มสินค้า หมวดสินค้า สินค้า และโปรโมชั่น",
    tone: amber,
    modules: [
      {
        slug: "group-category",
        titleTh: "กลุ่มสินค้า",
        titleEn: "Group Category",
        description: "กำหนดกลุ่มใหญ่ของสินค้าเพื่อใช้จัดเมนู รายงาน และการวิเคราะห์ยอดขาย",
        icon: Factory,
        tone: amber,
        fields: ["รหัสกลุ่ม", "ชื่อกลุ่ม", "ลำดับแสดงผล", "สถานะ", "รูปภาพ"],
        actions: ["เพิ่มกลุ่ม", "จัดลำดับ", "กำหนดหมวด", "ซ่อน/แสดง"],
        metrics: ["กลุ่มสินค้า", "กลุ่ม Active", "หมวดที่เชื่อมโยง"],
      },
      {
        slug: "category",
        titleTh: "หมวดสินค้า",
        titleEn: "Category",
        description: "แยกหมวดสินค้าในแต่ละกลุ่มเพื่อรองรับ POS, Online และรายงาน HQ",
        icon: Layers3,
        tone: amber,
        fields: ["รหัสหมวด", "ชื่อหมวด", "กลุ่มสินค้า", "ภาษี", "สถานะ"],
        actions: ["เพิ่มหมวด", "จับคู่กลุ่ม", "ตั้งค่าภาษี", "นำเข้าหมวด"],
        metrics: ["หมวดสินค้า", "หมวด Active", "สินค้าที่อยู่ในหมวด"],
      },
      {
        slug: "product",
        titleTh: "สินค้า",
        titleEn: "Product",
        description: "จัดการข้อมูลสินค้า ราคา หน่วยขาย รูปภาพ สูตร และสถานะการขาย",
        icon: Database,
        tone: amber,
        fields: ["SKU", "ชื่อสินค้า", "หมวด", "ราคาขาย", "หน่วย", "บาร์โค้ด"],
        actions: ["เพิ่มสินค้า", "แก้ไขราคา", "กำหนดสูตร", "Sync ไปสาขา"],
        metrics: ["สินค้าทั้งหมด", "พร้อมขาย", "รอ Sync"],
      },
      {
        slug: "promotion",
        titleTh: "โปรโมชั่น",
        titleEn: "Promotion",
        description: "สร้างโปรโมชั่น ส่วนลด เงื่อนไขสินค้า และช่วงเวลาที่มีผล",
        icon: Tag,
        tone: amber,
        fields: ["รหัสโปร", "ชื่อโปร", "ประเภทส่วนลด", "ช่วงเวลา", "เงื่อนไข"],
        actions: ["สร้างโปร", "ทดสอบเงื่อนไข", "กำหนดสาขา", "หยุดโปร"],
        metrics: ["โปรโมชัน Active", "ใกล้หมดอายุ", "สาขาที่ใช้"],
      },
    ],
  },
  {
    id: "inventory",
    titleTh: "ข้อมูลวัตถุดิบ / คลังสินค้า",
    titleEn: "Inventory",
    description: "ตั้งค่าวัตถุดิบ คลัง การจับคู่สต็อก และการเคลื่อนไหวสินค้า",
    tone: emerald,
    modules: [
      {
        slug: "inventory-group",
        titleTh: "กลุ่มคลังสินค้า",
        titleEn: "Inventory Group",
        description: "กำหนดกลุ่มวัตถุดิบหรือคลังเพื่อใช้แยกต้นทุนและการควบคุมสต็อก",
        icon: Factory,
        tone: emerald,
        fields: ["รหัสกลุ่มคลัง", "ชื่อกลุ่ม", "ประเภทวัตถุดิบ", "หน่วยนับหลัก", "สถานะ"],
        actions: ["เพิ่มกลุ่ม", "กำหนดหน่วย", "เชื่อมคลัง", "ตั้งค่าแจ้งเตือน"],
        metrics: ["กลุ่มวัตถุดิบ", "รายการ Active", "จุดสั่งซื้อ"],
      },
      {
        slug: "inventory",
        titleTh: "คลังสินค้า",
        titleEn: "Inventory",
        description: "จัดการคลังสินค้า วัตถุดิบ คงเหลือขั้นต่ำ และหน่วยนับของสต็อก",
        icon: MonitorCog,
        tone: emerald,
        fields: ["รหัสคลัง", "ชื่อคลัง", "ประเภท", "สาขา", "คงเหลือต่ำสุด"],
        actions: ["เพิ่มคลัง", "ปรับยอด", "ตั้ง Min/Max", "ดูประวัติ"],
        metrics: ["คลังทั้งหมด", "รายการต่ำกว่า Min", "ปรับยอดเดือนนี้"],
      },
      {
        slug: "match-stock",
        titleTh: "Map คลังสินค้า",
        titleEn: "Match Stock",
        description: "จับคู่สินค้าเมนูกับวัตถุดิบหรือคลังที่ต้องตัดสต็อกตามสูตร",
        icon: Download,
        tone: emerald,
        fields: ["สินค้า", "วัตถุดิบ", "อัตราส่วน", "หน่วยตัดสต็อก", "สาขา"],
        actions: ["เพิ่ม Mapping", "ตรวจสูตร", "คัดลอกสาขา", "อนุมัติสูตร"],
        metrics: ["Mapping ทั้งหมด", "รอตรวจสอบ", "สินค้าไม่มีสูตร"],
      },
      {
        slug: "stock-moving",
        titleTh: "นำเข้าคลังสินค้า",
        titleEn: "Stock Moving",
        description: "บันทึกนำเข้า โอนย้าย เบิกใช้ และเคลื่อนไหวสต็อกระหว่างคลัง",
        icon: ShoppingCart,
        tone: emerald,
        fields: ["เลขเอกสาร", "ประเภทเคลื่อนไหว", "ต้นทาง", "ปลายทาง", "จำนวน"],
        actions: ["สร้างเอกสาร", "นำเข้าไฟล์", "อนุมัติรายการ", "พิมพ์เอกสาร"],
        metrics: ["เอกสารวันนี้", "รออนุมัติ", "มูลค่าเคลื่อนไหว"],
      },
    ],
  },
  {
    id: "purchasing",
    titleTh: "ข้อมูลการจัดซื้อ / รับสินค้า",
    titleEn: "Purchasing",
    description: "ผู้จำหน่าย ใบขอซื้อ ใบสั่งซื้อ การรับสินค้า และสรุปจัดซื้อ",
    tone: fuchsia,
    modules: [
      {
        slug: "supplier",
        titleTh: "ผู้จำหน่าย",
        titleEn: "Supplier",
        description: "ดูแลข้อมูล Supplier เงื่อนไขชำระเงิน รายการสินค้า และผู้ติดต่อ",
        icon: Users,
        tone: fuchsia,
        fields: ["รหัสผู้จำหน่าย", "ชื่อบริษัท", "เลขภาษี", "เครดิตเทอม", "ผู้ติดต่อ"],
        actions: ["เพิ่ม Supplier", "กำหนดสินค้า", "ตรวจเอกสาร", "ปิดใช้งาน"],
        metrics: ["Supplier Active", "เครดิตเทอมเฉลี่ย", "เอกสารรอตรวจ"],
      },
      {
        slug: "pr-po-paper",
        titleTh: "ใบขอซื้อ / ใบสั่งซื้อ",
        titleEn: "PR / PO Paper",
        description: "สร้าง PR/PO ตรวจอนุมัติ และติดตามสถานะการสั่งซื้อ",
        icon: FileText,
        tone: fuchsia,
        fields: ["เลข PR/PO", "ผู้จำหน่าย", "วันที่ต้องการ", "ยอดรวม", "สถานะ"],
        actions: ["สร้าง PR", "แปลงเป็น PO", "อนุมัติ", "ส่งออก PDF"],
        metrics: ["PO เปิดอยู่", "รออนุมัติ", "ยอดสั่งซื้อเดือนนี้"],
      },
      {
        slug: "goods-receipt",
        titleTh: "ใบรับสินค้า",
        titleEn: "Goods Receipt",
        description: "รับสินค้าเข้าคลัง เทียบ PO ตรวจจำนวน และบันทึกต้นทุน",
        icon: ReceiptText,
        tone: fuchsia,
        fields: ["เลขรับสินค้า", "เลข PO", "คลังรับเข้า", "จำนวนรับ", "ผลต่าง"],
        actions: ["รับสินค้า", "เทียบ PO", "บันทึกส่วนต่าง", "พิมพ์ใบรับ"],
        metrics: ["ใบรับวันนี้", "รับไม่ครบ", "มูลค่ารับเข้า"],
      },
      {
        slug: "purchasing",
        titleTh: "สรุปการสั่งซื้อสินค้า",
        titleEn: "Purchasing",
        description: "สรุปยอดจัดซื้อ แนวโน้ม Supplier และเอกสารที่ต้องติดตาม",
        icon: BarChart3,
        tone: fuchsia,
        fields: ["ช่วงเวลา", "Supplier", "หมวดสินค้า", "สถานะเอกสาร", "ยอดรวม"],
        actions: ["กรองรายงาน", "Export Excel", "ดู Drill-down", "ส่งอีเมล"],
        metrics: ["ยอดจัดซื้อ", "เอกสารครบกำหนด", "Supplier Top 5"],
      },
    ],
  },
  {
    id: "member",
    titleTh: "ข้อมูลบัตรสมาชิก",
    titleEn: "Membership",
    description: "บัตรสมาชิก ระดับสมาชิก คะแนน และการต่ออายุ",
    tone: rose,
    modules: [
      {
        slug: "member-card",
        titleTh: "บัตรสมาชิก",
        titleEn: "Member Card",
        description: "จัดการเลขบัตรสมาชิก ข้อมูลลูกค้า คะแนน และสถานะบัตร",
        icon: CreditCard,
        tone: rose,
        fields: ["เลขบัตร", "ชื่อลูกค้า", "เบอร์โทร", "คะแนน", "วันหมดอายุ"],
        actions: ["ออกบัตร", "แก้ไขข้อมูล", "ปรับคะแนน", "ระงับบัตร"],
        metrics: ["สมาชิกทั้งหมด", "บัตร Active", "คะแนนรวม"],
      },
      {
        slug: "level-member-card",
        titleTh: "ประเภท บัตรสมาชิก",
        titleEn: "Level Member Card",
        description: "กำหนดระดับสมาชิก สิทธิประโยชน์ เงื่อนไขสะสม และส่วนลด",
        icon: Link2,
        tone: rose,
        fields: ["ระดับสมาชิก", "ยอดขั้นต่ำ", "ส่วนลด", "คะแนนต่อบาท", "สิทธิพิเศษ"],
        actions: ["เพิ่มระดับ", "แก้ไขสิทธิ์", "จัดลำดับ", "Preview เงื่อนไข"],
        metrics: ["ระดับสมาชิก", "สมาชิก VIP", "สิทธิ์ Active"],
      },
      {
        slug: "member-renew",
        titleTh: "เช็คคะแนน สมาชิก",
        titleEn: "Check / Re-new",
        description: "ตรวจคะแนน ใช้คะแนน และต่ออายุสมาชิกจาก HQ",
        icon: Database,
        tone: rose,
        fields: ["เลขบัตร", "คะแนนคงเหลือ", "ประวัติใช้คะแนน", "วันหมดอายุ", "สถานะต่ออายุ"],
        actions: ["ค้นหาสมาชิก", "ใช้คะแนน", "ต่ออายุ", "พิมพ์สรุป"],
        metrics: ["รอต่ออายุ", "ใช้คะแนนวันนี้", "คะแนนหมดอายุ"],
      },
    ],
  },
  {
    id: "special",
    titleTh: "ข้อมูลระบบพิเศษ",
    titleEn: "Special System",
    description: "ข้อความท้ายบิล คูปอง และราคาพิเศษรายลูกค้า",
    tone: cyan,
    modules: [
      {
        slug: "bill-remark",
        titleTh: "ข้อความท้ายบิล",
        titleEn: "Bill Remark",
        description: "จัดการข้อความท้ายใบเสร็จตามสาขา ช่องทางขาย หรือช่วงเวลา",
        icon: Newspaper,
        tone: cyan,
        fields: ["หัวข้อ", "ข้อความ", "ช่องทาง", "ช่วงเวลา", "สถานะ"],
        actions: ["เพิ่มข้อความ", "Preview ใบเสร็จ", "กำหนดสาขา", "ตั้งเวลา"],
        metrics: ["ข้อความ Active", "ข้อความตามสาขา", "ใกล้หมดอายุ"],
      },
      {
        slug: "coupon",
        titleTh: "คูปอง",
        titleEn: "Coupon",
        description: "สร้างคูปอง ส่วนลด โค้ดใช้งาน และเงื่อนไขการแลก",
        icon: TicketPercent,
        tone: cyan,
        fields: ["รหัสคูปอง", "ประเภทส่วนลด", "จำนวนสิทธิ์", "วันหมดอายุ", "เงื่อนไข"],
        actions: ["สร้างคูปอง", "Generate Code", "ตรวจการใช้", "หยุดแคมเปญ"],
        metrics: ["คูปอง Active", "ใช้แล้ว", "คงเหลือ"],
      },
      {
        slug: "vip-pricing",
        titleTh: "ราคาลูกค้าพิเศษ",
        titleEn: "VIP Pricing",
        description: "กำหนดราคาพิเศษตามลูกค้า กลุ่มลูกค้า หรือระดับสมาชิก",
        icon: ClipboardList,
        tone: cyan,
        fields: ["กลุ่มลูกค้า", "สินค้า", "ราคาพิเศษ", "ช่วงเวลา", "เงื่อนไข"],
        actions: ["เพิ่มราคา VIP", "นำเข้าราคา", "ตรวจชนโปร", "อนุมัติราคา"],
        metrics: ["ราคา VIP", "ลูกค้าที่ใช้", "รายการรออนุมัติ"],
      },
    ],
  },
  {
    id: "extra",
    titleTh: "ข้อมูลเพิ่มเติม",
    titleEn: "Utilities",
    description: "เครื่องมือพิมพ์บาร์โค้ดและการจัดการลูกค้าค้างชำระ",
    tone: slate,
    modules: [
      {
        slug: "barcode-printing",
        titleTh: "พิมพ์บาร์โค้ดสินค้า",
        titleEn: "Barcode Printing",
        description: "เลือกสินค้า ออกแบบฉลาก และพิมพ์บาร์โค้ดตามจำนวนที่ต้องการ",
        icon: Barcode,
        tone: slate,
        fields: ["สินค้า", "บาร์โค้ด", "รูปแบบฉลาก", "จำนวนพิมพ์", "เครื่องพิมพ์"],
        actions: ["เลือกสินค้า", "Preview ฉลาก", "พิมพ์", "บันทึก Template"],
        metrics: ["Template", "พิมพ์วันนี้", "สินค้าที่ไม่มีบาร์โค้ด"],
      },
      {
        slug: "credit-customer",
        titleTh: "ลูกค้าค้างชำระ",
        titleEn: "Credit Customer",
        description: "ติดตามลูกค้าเครดิต ยอดค้างชำระ อายุหนี้ และการชำระเงิน",
        icon: SmilePlus,
        tone: slate,
        fields: ["ลูกค้า", "วงเงิน", "ยอดค้าง", "กำหนดชำระ", "สถานะ"],
        actions: ["ค้นหาลูกหนี้", "บันทึกรับชำระ", "แจ้งเตือน", "Export Statement"],
        metrics: ["ยอดค้างรวม", "เกินกำหนด", "รับชำระวันนี้"],
      },
    ],
  },
  {
    id: "accounting",
    titleTh: "ข้อมูลทางบัญชี",
    titleEn: "Accounting",
    description: "รายงานบัญชีรายเดือนและการเคลื่อนไหวสต็อกเชิงบัญชี",
    tone: fuchsia,
    modules: [
      {
        slug: "account-summary",
        titleTh: "สรุปทางบัญชี (รายเดือน)",
        titleEn: "Account Summary",
        description: "สรุปยอดขาย ต้นทุน ภาษี และรายการบัญชีประจำเดือน",
        icon: TrendingUp,
        tone: fuchsia,
        fields: ["เดือน", "สาขา", "ยอดขาย", "ต้นทุน", "ภาษี", "กำไรขั้นต้น"],
        actions: ["เลือกเดือน", "ปิดงวด", "Export รายงาน", "ส่งบัญชี"],
        metrics: ["ยอดขายเดือนนี้", "ต้นทุน", "กำไรขั้นต้น"],
      },
      {
        slug: "account-stock-moving",
        titleTh: "ความเคลื่อนไหวสินค้า",
        titleEn: "Stock Moving",
        description: "รายงานมูลค่าเคลื่อนไหวสินค้า รับเข้า โอนออก ปรับยอด และคงเหลือ",
        icon: Landmark,
        tone: fuchsia,
        fields: ["ช่วงเวลา", "สินค้า/คลัง", "ประเภทเคลื่อนไหว", "จำนวน", "มูลค่า"],
        actions: ["กรองรายงาน", "ตรวจต้นทุน", "Export Excel", "พิมพ์รายงาน"],
        metrics: ["มูลค่ารับเข้า", "มูลค่าเบิกใช้", "คงเหลือปลายงวด"],
      },
    ],
  },
];

export const hqModules = hqModuleGroups.flatMap((group) =>
  group.modules.map((module) => ({ ...module, group })),
);

export function getModuleBySlug(slug: string) {
  return hqModules.find((module) => module.slug === slug);
}

export const totalModules = hqModuleGroups.reduce(
  (sum, group) => sum + group.modules.length,
  0,
);
