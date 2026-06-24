# HQ Management Web

โครงสร้างหน้าเว็บระบบ HQ สร้างด้วย Next.js และ Tailwind CSS ในโทนขาวครีมแบบ minimal professional โดยอ้างอิงเมนูและฟังก์ชันจากภาพตัวอย่าง

## Features

- Dashboard รวมเมนูระบบ HQ ทั้ง 8 กลุ่ม
- หน้าโครงสร้างสำหรับทุกฟังก์ชัน เช่น สินค้า คลังสินค้า จัดซื้อ สมาชิก ระบบพิเศษ และบัญชี
- Layout แบบ sidebar + workspace รองรับการต่อยอดเป็น CRUD, report และ workflow เอกสาร
- Tailwind CSS v4 พร้อม custom cream theme
- พร้อมรันบน localhost

## Local development

```bash
npm install
npm run dev
```

เปิดเว็บที่:

```text
http://localhost:3000
```

## Available scripts

```bash
npm run dev     # start local dev server
npm run build   # build production bundle
npm run start   # run production server after build
npm run lint    # run ESLint
```

## Page structure

- `/` - HQ Dashboard และ sitemap ของทุกโมดูล
- `/modules/zone-channel` - Zone / Channel
- `/modules/table-room` - Table / Room
- `/modules/customer-b2b` - Customer / B2B
- `/modules/user` - User
- `/modules/group-category` - Group Category
- `/modules/category` - Category
- `/modules/product` - Product
- `/modules/promotion` - Promotion
- `/modules/inventory-group` - Inventory Group
- `/modules/inventory` - Inventory
- `/modules/match-stock` - Match Stock
- `/modules/stock-moving` - Stock Moving
- `/modules/supplier` - Supplier
- `/modules/pr-po-paper` - PR / PO Paper
- `/modules/goods-receipt` - Goods Receipt
- `/modules/purchasing` - Purchasing
- `/modules/member-card` - Member Card
- `/modules/level-member-card` - Level Member Card
- `/modules/member-renew` - Check / Re-new
- `/modules/bill-remark` - Bill Remark
- `/modules/coupon` - Coupon
- `/modules/vip-pricing` - VIP Pricing
- `/modules/barcode-printing` - Barcode Printing
- `/modules/credit-customer` - Credit Customer
- `/modules/account-summary` - Account Summary
- `/modules/account-stock-moving` - Stock Moving accounting report
