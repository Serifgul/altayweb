# ALTAY - Siber Vatan Savunucuları

Bu proje, Altay takımının resmi web sitesidir. Modern React, TypeScript ve Tailwind CSS teknolojileri kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **Takım Bilgileri**: Developer, Linux, Active Directory ve Research takımları
- **Döküman Entegrasyonu**: docs.siberaltay.org bağlantısı
- **Sosyal Medya Entegrasyonu**: İletişim kanalları
- **Performans Odaklı**: Hızlı yükleme ve smooth animasyonlar

## 🛠️ Teknolojiler

- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenli JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Hızlı build tool
- **Lucide React** - Modern ikonlar

## 📋 Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn package manager

## 🔧 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd altay-website
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:5173
```

## 📦 Build ve Deployment

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Lint Kontrolü
```bash
npm run lint
```

## 📁 Proje Yapısı

```
altay-website/
├── public/
│   ├── altay-logo.jpeg          # Altay logosu
│   └── 5b5996c9-7f25-421a-8000-29ac0a891ac9.png  # Siber Vatan logosu
├── src/
│   ├── App.tsx                  # Ana uygulama komponenti
│   ├── main.tsx                 # Uygulama giriş noktası
│   └── index.css                # Global stiller
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Özelleştirme

### Logo Değiştirme
- Altay logosu: `public/altay-logo.jpeg`
- Siber Vatan logosu: `public/5b5996c9-7f25-421a-8000-29ac0a891ac9.png`

### Renk Teması
Tailwind CSS kullanılarak özelleştirilebilir. Ana renkler:
- Primary: Blue (mavi tonları)
- Secondary: Cyan (turkuaz tonları)
- Accent: Purple (mor tonları)

### İçerik Güncelleme
`src/App.tsx` dosyasında:
- Takım bilgileri
- İstatistikler
- İletişim bilgileri
- Sosyal medya linkleri

## 🔗 Önemli Linkler

- **Dökümanlar**: [docs.siberaltay.org](https://docs.siberaltay.org/)
- **Siber Vatan**: [sibervatan.org](https://www.sibervatan.org/)

## 📱 Responsive Tasarım

Site tüm cihazlarda uyumlu çalışır:
- 📱 Mobil (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Deployment Seçenekleri

### 1. Netlify
```bash
npm run build
# dist/ klasörünü Netlify'a yükleyin
```

### 2. Vercel
```bash
npm run build
# dist/ klasörünü Vercel'e yükleyin
```

### 3. GitHub Pages
```bash
npm run build
# dist/ içeriğini gh-pages branch'ine push edin
```

### 4. Bolt Hosting (Önerilen)
Proje zaten Bolt Hosting'de yayında:
- **URL**: https://altay-siber-vatan-we-c59a.bolt.host

## 🐛 Sorun Giderme

### Port Çakışması
Eğer 5173 portu kullanılıyorsa:
```bash
npm run dev -- --port 3000
```

### Build Hataları
Cache temizleme:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Hataları
Type kontrolü:
```bash
npx tsc --noEmit
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje Altay takımına aittir. Tüm hakları saklıdır.

## 👥 Takım

**Altay - Siber Vatan **
- Developer Team
- Linux Team  
- Active Directory Team
- Research Team

## 📞 İletişim

- **Email**: info@altay.org
- **GitHub**: [GitHub hesabı]
- **Instagram**: [Instagram hesabı]
- **LinkedIn**: [LinkedIn hesabı]

---

**Not**: Bu site Altay takımının resmi web sitesidir ve siber güvenlik alanında faaliyet gösteren profesyonel bir ekibin çalışmalarını sergiler.
