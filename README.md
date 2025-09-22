# portal-bisnis
Portal Bisnis - Aplikasi Manajemen Operasional Terpadu dengan 4 Modul (React + Tailwind).


git clone https://github.com/username/portal-bisnis.git
cd portal-bisnis
📁 STRUKTUR REPOSITORY LENGKAP:
Mari saya berikan semua file yang perlu dibuat:

ROOT FILES:
README.md:

# 🏢 Portal Bisnis - Aplikasi Manajemen Operasional Terpadu

Portal Bisnis adalah aplikasi web lengkap yang terdiri dari 4 modul utama untuk mengelola operasional bisnis dengan mudah dan efisien.

## ✨ Fitur Utama

### 🔹 **4 Aplikasi Terintegrasi:**

1. **💰 Manajemen Operasional**
   - Dashboard ringkasan keuangan
   - Input transaksi pemasukan/pengeluaran
   - Riwayat transaksi dengan fitur hapus
   - Export laporan PDF

2. **🧮 Kalkulator HPP**
   - Hitung Harga Pokok Produksi
   - Input bahan baku dinamis
   - Perhitungan margin keuntungan
   - Analisis biaya produksi

3. **📊 Laporan Penjualan**
   - Manajemen produk (CRUD)
   - Dashboard statistik penjualan
   - Input penjualan dengan kalkulator
   - Analisis laba rugi

4. **🍽️ Kasir Penjualan Makanan**
   - Interface kasir untuk restoran/warung
   - Manajemen menu dengan kategori
   - Proses pembayaran otomatis
   - Laporan penjualan harian

## 🛠️ Teknologi

- **Frontend:** React 19 + React Router
- **UI Framework:** Tailwind CSS + Shadcn/UI
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Data Storage:** Browser localStorage
- **Build Tool:** Create React App + CRACO

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- npm atau yarn

### Installation

1. **Clone repository:**
```bash
git clone https://github.com/username/portal-bisnis.git
cd portal-bisnis
Install dependencies:
cd frontend
npm install
# atau
yarn install
Jalankan aplikasi:
npm start
# atau
yarn start
Buka browser:
http://localhost:3000
📱 Screenshots
Dashboard Utama
Dashboard

Aplikasi Kasir Makanan
Kasir

Manajemen Operasional
Financial

🎯 Fitur Unggulan
✅ No Login Required - Langsung pakai
✅ Responsive Design - Mobile friendly
✅ Real-time Updates - Data tersinkron
✅ Modern UI - Desain profesional
✅ Local Storage - Data tersimpan lokal
✅ Export Reports - PDF export
✅ Toast Notifications - User feedback
✅ 4 Apps in 1 - Solusi lengkap
📂 Struktur Project
portal-bisnis/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn UI Components
│   │   │   ├── Dashboard.js
│   │   │   ├── FinancialManagement.js
│   │   │   ├── HPPCalculator.js
│   │   │   ├── SalesReport.js
│   │   │   └── FoodCashier.js
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── lib/
│   ├── package.json
│   └── tailwind.config.js
├── screenshots/
├── README.md
└── LICENSE
🎨 Desain
Color Palette: Gray-based dengan accent colors
Typography: System fonts dengan hierarchy jelas
Components: Shadcn/UI untuk konsistensi
Layout: Card-based dengan spacing optimal
Icons: Lucide React (no emojis)
🔧 Development
Menambah Fitur Baru
Buat komponen di src/components/
Import di App.js
Tambah route jika perlu
Update mock data di utils/mock.js
Customize UI
Edit tailwind.config.js untuk theme
Modify components di src/components/ui/
Update CSS variables di index.css
📈 Roadmap
 Backend Integration (FastAPI + MongoDB)
 User Authentication
 Multi-tenant Support
 Real PDF Export (jsPDF)
 Advanced Reports dengan charts
 Mobile App (React Native)
 Cloud Deployment (Vercel/Netlify)
🤝 Contributing
Fork the project
Create feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.

👨‍💻 Author
Portal Bisnis Development Team

Website: [Your Website]
Email: [Your Email]
🙏 Acknowledgments
Shadcn/UI - Beautiful UI components
Tailwind CSS - Utility-first CSS
Lucide - Beautiful icons
React - Frontend framework
⭐ Star this repository if you find it helpful!


**package.json (root):**
```json
{
  "name": "portal-bisnis",
  "version": "2.0.0",
  "description": "Portal Bisnis - Aplikasi Manajemen Operasional Terpadu",
  "main": "index.js",
  "scripts": {
    "dev": "cd frontend && npm start",
    "build": "cd frontend && npm run build",
    "install-deps": "cd frontend && npm install"
  },
  "keywords": [
    "portal-bisnis",
    "management",
    "pos-system",
    "react",
    "tailwind"
  ],
  "author": "Portal Bisnis Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/portal-bisnis.git"
  }
}
.gitignore:

# Dependencies
node_modules/
*/node_modules/

# Build outputs
build/
dist/
*/build/
*/dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary folders
tmp/
temp/
