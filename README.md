# 🔬 Web Forensics v5 — TOTAL CAPTURE
URL    : chrome://newtab/
Start  : 2026-03-13T13:09:54
Finish : 2026-03-13T13:11:28

## 📁 الهيكل الكامل:
```
📦 forensics_newtab_20260313_131128.zip
│
├── 📊 report.html              ← افتح هذا في المتصفح (تقرير تفاعلي كامل)
│
├── 📂 network/
│   ├── requests/               ← 160 طلب كامل (URL + headers + body)
│   └── responses/              ← 154 رد كامل (headers + body كامل)
│
├── 📂 js_files/                ← 44 ملف JS كامل مع header تحليلي
├── 📂 java_files/              ← 0 ملف Java مع Crypto APIs مميزة
│
└── 📂 data/
    ├── full_report.json        ← كل البيانات الخام
    ├── cookies_full.csv        ← 275 cookie مع الخوارزمية والمصدر الدقيق
    ├── headers_analysis.csv    ← تحليل كل header حساس
    ├── value_analysis.json     ← تحليل القيم الحساسة
    ├── crypto_ops.json         ← 71 عملية تشفير مع Stack Trace
    ├── header_sets.json        ← headers أُنشئت في JS (من + أين)
    ├── console_logs.txt        ← كل Console output
    ├── js_errors.txt           ← أخطاء JavaScript
    └── timeline.txt            ← تسلسل الأحداث
```

## 🔍 كيف تجد مصدر قيمة معينة:

### Cookie / Header جاء من API:
→ ابحث في `network/responses/` عن الـ endpoint → ستجد الـ body الكامل للرد

### Cookie / Header أُنشئ في JS:
→ افتح `data/header_sets.json` → ستجد caller_file + caller_line
→ افتح الملف المقابل في `js_files/` وابحث عن السطر

### خوارزمية تشفير حية:
→ افتح `data/crypto_ops.json` → كل عملية مع Stack Trace كامل

### Java backend:
→ افتح `java_files/` → كل Crypto API مميزة في header الملف
