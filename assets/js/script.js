// ╔══════════════════════════════════════════════════════════╗
// ║           ⚙️  KONFIGURASI — Edit bagian ini              ║
// ╚══════════════════════════════════════════════════════════╝

// Gemini API Key — daftar gratis di: https://aistudio.google.com/app/apikey
const GEMINI_KEY = "AIzaSyCYBYX5dbxGMXTlOnppDLsaq1naP1BXEW8";

// Firebase Config — dari Firebase Console > Project Settings > Your Apps
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCdTvtPLBawR9tqlqPAjlJFyzAHt56-Os",
  authDomain: "cvread-z.firebaseapp.com",
  projectId: "cvread-z",
  storageBucket: "cvread-z.firebasestorage.app",
  messagingSenderId: "314171442071",
  appId: "1:314171442071:web:60da235fb625c25f947ad2"
};

// ╔══════════════════════════════════════════════════════════╗
// ║   👥  DATA PROFILE — Isi data masing-masing orang        ║
// ╚══════════════════════════════════════════════════════════╝
const PROFILES = [
  {
    id: 0,
    name: "Fazila Zaki Ahmad",
    firstName: "Fazila",
    lastName: "Zaki Ahmad",
    role: "Computer Engineering Student",
    status: "Available for work",
    desc: "Passionate about building futuristic solutions at the intersection of IoT, AI, Apps and web development, Also Database & Computer Network and Structure.",
    accent: "#00e5ff",
    emoji: "",

    // ── FOTO PROFIL ──────────────────────────────────────────────────────────
    // Ganti dengan path file foto lo (relatif dari lokasi HTML ini)
    // Contoh lokal : "assets/fazila.jpg"
    // Contoh online: "https://i.imgur.com/xxxxx.jpg"
    photo: "assets/fazilazaki.png",

    stats: { projects: "8+", skills: "5+", exp: "2,5+" },
    about: "Passionate Computer Engineering student focused on IoT systems, AI automation, robotics, embedded systems, web development, Databases, Fullstack Dev, Network & Struckture Computer and software engineering.",
    education: [
      { year: "2024 - Present", title: "Teknik Komputer", sub: "Semester 4 · Active Student" }
    ],

    // ── SKILLS ────────────────────────────────────────────────
    // icon: bisa emoji ("🌐") atau URL gambar PNG/SVG
    // Ikon teknologi gratis: https://devicons.github.io/devicon/
    skills: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/html.jpeg", pct: 97 },
      { name: "Flutter", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/flutter.jpg", pct: 80 },
      { name: "CSS", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/css.jpeg", pct: 87 },
      { name: "Java Script", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/js.jpeg", pct: 95 },
      { name: "Dart", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/dart.png", pct: 84 },
      { name: "C++", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/C%2B%2B.png", pct: 90 },
      { name: "Python", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/pythoncuk.png", pct: 84 },
      { name: "Micro Python", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/micropy.jpg", pct: 84 },
      { name: "Cisco Packet Tracer", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/OIP.jpg", pct: 96 },
      { name: "Ki Cad", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/Kicad.jpg", pct: 95 },
      { name: "Ruby", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/ruby.jpg", pct: 84 },
      { name: "Postgresql", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/postgre.jpg", pct: 87 },
      { name: "Firebase", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/firebase.jpg", pct: 94 },
      { name: "Arduino IDE", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/arduino.jpg", pct: 96 },
      { name: "STM32 Cube IDE", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/stm32.jpg", pct: 90 },
      { name: "Thonny", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/thonny.jpg", pct: 96 },
      { name: "Linux", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/linux.jpg", pct: 90 },
      { name: "Kuliax", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/kuliax.jpg", pct: 92 },
      { name: "Ubuntu", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/ubuntu.jpg", pct: 93 },
      { name: "Node JS", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/node.jpg", pct: 94 },
      { name: "Type Script", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/type.jpg", pct: 94 },
      { name: "Tailwind", icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/tailwind.jpg", pct: 96 },
    ],

    // ── PROJECTS ─────────────────────────────────────────────────────────────
    // img: path atau URL gambar thumbnail project
    //      kosongkan ("") kalau belum ada gambar, akan tampil emoji saja
    // liveUrl / srcUrl: link demo & source code, isi "#" kalau belum ada
    projects: [
      {
        title: "Smart Garden Website",
        desc: "Smartech Garden is an innovative web app designed to monitor and manage plant conditions automatically using sensors, supporting smart and efficient agriculture.",
        tag: "Website",
        img: "assets/projects/smartechgarden.jpg",   // ← ganti path gambar
        emoji: "",
        liveUrl: "https://zackyyxxx4.github.io/Smartech-garden-2.0/login_pages.html#features",
        srcUrl: "https://zackyyxxx4.github.io/Smartech-garden-2.0/login_pages.html#features"
      },
      {
        title: "Smart Garden Hardware",
        desc: "An IoT-based system that monitors plant health using sensors and automates watering via ESP, Firebae, & Website + RTC.",
        tag: "IoT",
        img: "assets/projects/prototype.jpg",   // ← ganti path gambar
        emoji: "",
        liveUrl: "https://www.blogger.com/blog/post/edit/6035571730616514783/6952832021675210515",
        srcUrl: "https://www.blogger.com/blog/post/edit/6035571730616514783/6952832021675210515"
      },
      {
        title: "HIMATEKKOM Website",
        desc: "Organizational Website I Made Solo Project Using Google sheet API, and Google Apps Script(Back-end) Also Use Python to for AI Caht respons(Back-end).",
        tag: "Website",
        img: "assets/projects/Screenshot 2026-01-19 140506.png", // ← ganti path gambar
        emoji: "",
        liveUrl: "https://zackcode46.github.io/HIMATEKKOM_UG/",
        srcUrl: "https://zackcode46.github.io/HIMATEKKOM_UG/"
      },
      {
        title: "Module MP3 Player",
        desc: "Cross-platform music player module built with ESP32-C3 Super Mini with Features and playlist support.",
        tag: "IoT",
        img: "assets/projects/mp3.jpeg",    // ← ganti path gambar
        emoji: "",
        liveUrl: "#",
        srcUrl: "#"
      },
      {
        title: "Smart Trash",
        desc: "IoT-based system that monitors trash using sensors and automatic detection via ESP + RTC.",
        tag: "IoT",
        img: "assets/projects/trash.jpeg", // ← ganti path gambar
        emoji: "",
        liveUrl: "https://www.blogger.com/blog/post/edit/6035571730616514783/6952832021675210515",
        srcUrl: "https://www.blogger.com/blog/post/edit/6035571730616514783/6952832021675210515"
      },
      {
        title: "Blackmart Shop",
        desc: "Online Shop Build with Node.js and Postgresql Databases Still Going and now almost done!",
        tag: "Website",
        img: "assets/projects/blackmart.png",  // ← ganti path gambar
        emoji: "",
        liveUrl: "",
        srcUrl: ""
      },
    ],

    experience: [
      { date: "2024 - Present", title: "IoT Project Developer", company: "Personal / Academic", desc: "Building embedded systems, Arduino projects, and IoT automation solutions.", tags: ["Arduino", "ESP32", "IoT", "Website", "C++"] },
      { date: "2024", title: "Flutter Developer", company: "Personal Projects", desc: "Cross-platform mobile apps with Flutter and Dart.", tags: ["Flutter", "Dart"] },
    ],

    // ── KONTAK ────────────────────────────────────────────────────────────────
    // icon sosmed: bisa emoji atau URL gambar PNG/SVG
    contact: {
      email: "fazilazakiahmad46@gmail.com",
      socials: [
        {
          label: "Email",
          value: "fazilazakiahmad46@gmail.com",
          href: "mailto:fazilazakiahmad46@gmail.com",
          icon: "https://cdn.jsdelivr.net/gh/ZackCode46/portfolioweb@main/assets/images/gmail.jpg"
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/Fazila Zaki Ahmad",
          href: "https://www.linkedin.com/in/fazila-zaki-1471b2335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: "https://cdn.jsdelivr.net/gh/ZackCode46/portfolioweb@main/assets/images/linkedln_icon.png"
          // Atau: icon: "💼"
        },
        {
          label: "GitHub",
          value: "github.com/zackcode46",
          href: "https://github.com/ZackCode46",
          icon: "https://cdn.jsdelivr.net/gh/ZackCode46/portfolioweb@main/assets/images/github_icon.png"
          // Atau: icon: "🐙"
        },
        {
          label: "Instagram",
          value: "@fazilazakiahmad",
          href: "https://www.instagram.com/fazilazakiahmd?igsh=NGVnY3BhbHYzNzh1",
          icon: "https://raw.githubusercontent.com/ZackCode46/portfolioweb/main/assets/images/instagram-removebg-preview.png"
          // Atau URL ikon instagram custom
        },
      ]
    },

    // ── CV FILE ──────────────────────────────────────────────────────────────
    // Ganti dengan path file PDF CV lo
    // Contoh: "assets/cv/fazila-cv.pdf"
    cvPath: "assets/portfolio_zaki.pdf",

    // ── TYPING ANIMATION ─────────────────────────────────────────────────────
    typing: ["IoT Developer", "AI Enthusiast", "Web Developer", "Flutter Engineer"],
  },

  // ══════════════════════════════════════════════════════════
  {
    id: 1,
    name: "Rizky Pratama",
    firstName: "Rizky",
    lastName: "Pratama",
    role: "Backend Developer & Cloud Engineer",
    status: "Open to opportunities",
    desc: "Building scalable, high-performance systems that power millions of users.",
    accent: "#7c3aed",
    emoji: "☁️",
    photo: "assets/profile2.jpg",    // ← ganti foto Rizky
    stats: { projects: "8+", skills: "6+", exp: "2+" },
    about: "Backend developer specializing in microservices architecture, cloud infrastructure, and high-performance APIs.",
    education: [
      { year: "2023 - Present", title: "Sistem Informasi", sub: "Semester 4 · GPA 3.8" },
      { year: "2022", title: "AWS Cloud Practitioner", sub: "Certified" }
    ],
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", pct: 90 },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", pct: 88 },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", pct: 75 },
      { name: "AWS / GCP", icon: "☁️", pct: 82 },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", pct: 85 },
      { name: "GraphQL", icon: "🔗", pct: 88 },
    ],
    projects: [
      { title: "API Gateway", desc: "High-performance API gateway handling 10k+ req/s.", tag: "Backend", img: "", emoji: "🔌", liveUrl: "#", srcUrl: "#" },
      { title: "Real-time Chat", desc: "WebSocket chat with Redis pub/sub.", tag: "Fullstack", img: "", emoji: "💬", liveUrl: "#", srcUrl: "#" },
      { title: "CI/CD Pipeline", desc: "Automated deployment with GitHub Actions + Docker.", tag: "DevOps", img: "", emoji: "🔄", liveUrl: "#", srcUrl: "#" },
      { title: "Analytics Dashboard", desc: "Real-time event stream analytics.", tag: "Data", img: "", emoji: "📊", liveUrl: "#", srcUrl: "#" },
    ],
    experience: [
      { date: "2024 - Present", title: "Backend Engineer Intern", company: "Tech Startup Jakarta", desc: "Built RESTful microservices for financial transactions.", tags: ["Node.js", "PostgreSQL", "Docker"] },
      { date: "2023", title: "Freelance Developer", company: "Various Clients", desc: "Built web apps and APIs for local businesses.", tags: ["Express.js", "MySQL"] },
    ],
    contact: {
      email: "rizky@email.com",
      socials: [
        { label: "Email", value: "rizky@email.com", href: "mailto:rizky@email.com", icon: "📧" },
        { label: "LinkedIn", value: "linkedin.com/in/rizky", href: "https://linkedin.com/in/rizky", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
        { label: "GitHub", value: "github.com/rizky", href: "https://github.com/rizky", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { label: "Instagram", value: "@rizky.dev", href: "https://instagram.com/rizky", icon: "📸" },
      ]
    },
    cvPath: "assets/cv/rizky-cv.pdf",
    typing: ["Backend Dev", "Cloud Architect", "DevOps Engineer", "API Specialist"],
  },

  // ══════════════════════════════════════════════════════════
  {
    id: 2,
    name: "Aisha Rahmawati",
    firstName: "Aisha",
    lastName: "Rahmawati",
    role: "UI/UX Designer & Frontend Developer",
    status: "Available for freelance",
    desc: "Crafting beautiful digital experiences where pixels meet purpose.",
    accent: "#f472b6",
    emoji: "🎨",
    photo: "assets/profile3.jpg",    // ← ganti foto Aisha
    stats: { projects: "12+", skills: "5+", exp: "2+" },
    about: "UI/UX designer with strong frontend background. I bridge design and engineering to create beautiful and functional interfaces.",
    education: [
      { year: "2023 - Present", title: "Desain Komunikasi Visual", sub: "Semester 4 · Top Student" },
      { year: "2024", title: "Google UX Design Certificate", sub: "Coursera · Professional Cert" }
    ],
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", pct: 97 },
      { name: "React/Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", pct: 88 },
      { name: "CSS/Animation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", pct: 95 },
      { name: "Adobe XD", icon: "🎨", pct: 90 },
      { name: "Framer Motion", icon: "🎬", pct: 82 },
    ],
    projects: [
      { title: "E-commerce Redesign", desc: "Complete UI overhaul boosting conversion by 34%.", tag: "UI/UX", img: "", emoji: "🛍️", liveUrl: "#", srcUrl: "#" },
      { title: "Design System", desc: "200+ component library for a fintech startup.", tag: "Design", img: "", emoji: "🧩", liveUrl: "#", srcUrl: "#" },
      { title: "Portfolio Generator", desc: "React tool that generates portfolios from JSON.", tag: "Frontend", img: "", emoji: "⚡", liveUrl: "#", srcUrl: "#" },
      { title: "Medical App UI", desc: "Teleconsultation app with accessibility-first design.", tag: "Mobile", img: "", emoji: "🏥", liveUrl: "#", srcUrl: "#" },
    ],
    experience: [
      { date: "2024 - Present", title: "UI/UX Designer", company: "Creative Agency Bandung", desc: "Designed interfaces for 5+ fintech, health, e-commerce clients.", tags: ["Figma", "Prototyping", "User Research"] },
      { date: "2023", title: "Frontend Intern", company: "Digital Agency", desc: "Implemented pixel-perfect designs in React.", tags: ["React", "Tailwind", "GSAP"] },
    ],
    contact: {
      email: "aisha@email.com",
      socials: [
        { label: "Email", value: "aisha@email.com", href: "mailto:aisha@email.com", icon: "📧" },
        { label: "LinkedIn", value: "linkedin.com/in/aisha", href: "https://linkedin.com/in/aisha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
        { label: "GitHub", value: "github.com/aisha", href: "https://github.com/aisha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { label: "Instagram", value: "@aisha.design", href: "https://instagram.com/aisha.design", icon: "📸" },
      ]
    },
    cvPath: "assets/cv/aisha-cv.pdf",
    typing: ["UI/UX Designer", "Frontend Dev", "Creative Technologist", "Design System Builder"],
  },

  // ══════════════════════════════════════════════════════════
  {
    id: 3,
    name: "Adrian Zahran Hakim",
    firstName: "Adrian",
    lastName: "Hakim ",
    role: "Machine Learning Engineer & Web Developer",
    status: "Seeking PhD programs",
    desc: "Turning data into intelligence, and intelligence into impact.",
    accent: "#22c55e",
    emoji: "🧠",
    photo: "assets/profile4.jpg",    // ← ganti foto Dimas
    stats: { projects: "6+", skills: "6+", exp: "2+" },
    about: "ML engineer passionate about computer vision, NLP, and edge AI. Research focus on efficient neural architectures for embedded systems.",
    education: [
      { year: "2023 - Present", title: "Teknik Informatika", sub: "Semester 4 · GPA 3.9" },
      { year: "2024", title: "Deep Learning Specialization", sub: "DeepLearning.AI · Coursera" }
    ],
    skills: [
      { name: "PyTorch / TF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", pct: 92 },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", pct: 95 },
      { name: "Computer Vision", icon: "👁️", pct: 88 },
      { name: "NLP / LLMs", icon: "💬", pct: 82 },
      { name: "Data Analysis", icon: "📊", pct: 90 },
      { name: "Edge AI / ONNX", icon: "⚡", pct: 78 },
    ],
    projects: [
      { title: "Face Recognition", desc: "Real-time face detection on Raspberry Pi, 95% accuracy.", tag: "CV", img: "", emoji: "👤", liveUrl: "#", srcUrl: "#" },
      { title: "Sentiment Analyzer NLP", desc: "BERT fine-tuned on Indonesian social media data.", tag: "NLP", img: "", emoji: "🗣️", liveUrl: "#", srcUrl: "#" },
      { title: "Object Detection Drone", desc: "YOLOv8 on edge device for aerial detection.", tag: "Edge AI", img: "", emoji: "🚁", liveUrl: "#", srcUrl: "#" },
      { title: "Stock Prediction LSTM", desc: "Time-series forecasting for Indonesian stock market.", tag: "Data", img: "", emoji: "📈", liveUrl: "#", srcUrl: "#" },
    ],
    experience: [
      { date: "2024 - Present", title: "AI Research Assistant", company: "University Lab", desc: "Researching efficient architectures for edge deployment.", tags: ["PyTorch", "ONNX", "Raspberry Pi"] },
      { date: "2024", title: "Data Science Intern", company: "Analytics Firm", desc: "Built churn and demand forecasting models.", tags: ["Python", "Scikit-learn", "Tableau"] },
    ],
    contact: {
      email: "ardianhakim493@gmail.com",
      socials: [
        { label: "Email", value: "ardianhakim493@email.com", href: "mailto:dimas@email.com", icon: "📧" },
        { label: "GitHub", value: "github.com/adrian", href: "https://github.com/dimas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { label: "Instagram", value: "yann_zhrn", href: "https://instagram.com/dimas.ai", icon: "📸" },
      ]
    },
    cvPath: "assets/cv/dimas-cv.pdf",
    typing: ["ML Engineer", "Data Scientist", "AI Researcher", "Computer Vision Dev"],
  }
];

// ════════════════════════════════════════════════════════════
// INISIALISASI
// ════════════════════════════════════════════════════════════
let currentProfile = 0;
let typingInterval = null;
let chatHistory = [];
let firebaseReady = false;

try {
  firebase.initializeApp(FIREBASE_CONFIG);
  window._db = firebase.firestore();
  firebaseReady = true;
} catch (e) { console.warn("Firebase:", e.message); }

// ─── PARTICLES ───────────────────────────────────────────────
(function () {
  const cv = document.getElementById('particles'), cx = cv.getContext('2d');
  let W, H;
  const pts = Array.from({ length: 80 }, () => ({
    x: Math.random() * 9999, y: Math.random() * 9999,
    r: Math.random() * 1.5 + .3,
    vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
    a: Math.random() * .5 + .1
  }));
  function rsz() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  rsz(); window.addEventListener('resize', rsz);
  (function loop() {
    cx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      cx.beginPath(); cx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
      cx.fillStyle = `rgba(0,229,255,${p.a})`; cx.fill();
    });
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const dx = (pts[i].x % W) - (pts[j].x % W), dy = (pts[i].y % H) - (pts[j].y % H);
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) { cx.beginPath(); cx.moveTo(pts[i].x % W, pts[i].y % H); cx.lineTo(pts[j].x % W, pts[j].y % H); cx.strokeStyle = `rgba(0,229,255,${.08 * (1 - d / 120)})`; cx.lineWidth = .5; cx.stroke(); }
    }
    requestAnimationFrame(loop);
  })();
})();

// ─── CURSOR ──────────────────────────────────────────────────
const $cur = document.getElementById('cursor'), $ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; $cur.style.left = mx + 'px'; $cur.style.top = my + 'px'; });
(function rl() { rx += (mx - rx) * .15; ry += (my - ry) * .15; $ring.style.left = rx + 'px'; $ring.style.top = ry + 'px'; requestAnimationFrame(rl); })();

// ─── SCROLL PROGRESS ─────────────────────────────────────────
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  document.getElementById('progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
});

// ─── TYPING ──────────────────────────────────────────────────
function startTyping(words) {
  const el = document.getElementById('typing');
  if (typingInterval) clearInterval(typingInterval);
  let i = 0, j = 0, del = false;
  typingInterval = setInterval(() => {
    const w = words[i]; el.textContent = w.slice(0, j);
    if (!del) { j++; if (j > w.length) del = true; }
    else { j--; if (j === 0) { del = false; i = (i + 1) % words.length; } }
  }, 100);
}

// ─── ICON HELPER ─────────────────────────────────────────────
// Menampilkan icon: URL gambar → <img>, emoji/text → teks langsung
function iconHTML(icon) {
  if (!icon) return '⚙️';
  if (icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('assets')) {
    return `<img src="${icon}" alt="" onerror="this.parentElement.innerHTML='⚙️'">`;
  }
  return icon;
}

// ─── RENDER SWITCHER ─────────────────────────────────────────
function renderSwitcher() {
  document.getElementById('switcher').innerHTML = PROFILES.map((p, i) => `
    <button class="profile-btn ${i === 0 ? 'active' : ''}" onclick="switchProfile(${i})">
      <img class="avatar" src="${p.photo}" alt="${p.firstName}"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22><circle cx=%2220%22 cy=%2220%22 r=%2220%22 fill=%22${encodeURIComponent(p.accent)}%22/><text x=%2220%22 y=%2227%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2218%22 font-family=%22sans-serif%22>${p.firstName[0]}</text></svg>'">
      ${p.firstName}
    </button>`
  ).join('');
}

// ─── RENDER SKILLS ───────────────────────────────────────────
function renderSkills(skills) {
  document.getElementById('skills-grid').innerHTML = skills.map((s, i) => `
    <div class="skill-card" data-aos="fade-up" data-aos-delay="${i * 70}">
      <div class="skill-icon">${iconHTML(s.icon)}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar"><div class="skill-bar-fill" data-pct="${s.pct}" style="width:0"></div></div>
      <div class="skill-pct">${s.pct}%</div>
    </div>`
  ).join('');
  setTimeout(() => { document.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.pct + '%'); }, 400);
}

// ─── RENDER PROJECTS ─────────────────────────────────────────
function renderProjects(projects) {
  const tags = ['All', ...new Set(projects.map(p => p.tag))];
  document.getElementById('proj-filter').innerHTML = tags.map(t =>
    `<button class="filter-btn ${t === 'All' ? 'active' : ''}" onclick="filterProjects(this,'${t}')">${t}</button>`
  ).join('');
  renderProjectCards(projects);
}
function renderProjectCards(projects) {
  document.getElementById('projects-grid').innerHTML = projects.map((p, i) => `
    <div class="project-card" data-tag="${p.tag}" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="project-img">
        ${p.img ? `<img src="${p.img}" alt="${p.title}" onerror="this.remove()">` : ''}
        <span style="position:relative;z-index:0">${p.emoji}</span>
        <div class="project-overlay"></div>
        <div class="project-tag">${p.tag}</div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-links">
          <a class="project-link" href="${p.liveUrl}" target="_blank">🔗 Live Demo</a>
          <a class="project-link" href="${p.srcUrl}"  target="_blank">📁 Source</a>
        </div>
      </div>
    </div>`
  ).join('');
}
function filterProjects(btn, tag) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const p = PROFILES[currentProfile];
  renderProjectCards(tag === 'All' ? p.projects : p.projects.filter(pr => pr.tag === tag));
}

// ─── RENDER EXPERIENCE ───────────────────────────────────────
function renderExperience(exp) {
  document.getElementById('exp-timeline').innerHTML = exp.map((e, i) => `
    <div class="tl-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="tl-dot"></div>
      <div class="tl-date">${e.date}</div>
      <div class="tl-title">${e.title}</div>
      <div class="tl-company">${e.company}</div>
      <div class="tl-desc">${e.desc}</div>
      <div class="tl-tags">${e.tags.map(t => `<span class="tl-tag">${t}</span>`).join('')}</div>
    </div>`
  ).join('');
}

// ─── RENDER CONTACT ──────────────────────────────────────────
function renderContact(contact) {
  document.getElementById('c-links').innerHTML = (contact.socials || []).map(l => `
    <a href="${l.href}" target="_blank" class="contact-link-item">
      <div class="ci-icon">${iconHTML(l.icon)}</div>
      <div>
        <div class="ci-label">${l.label}</div>
        <div class="ci-text">${l.value}</div>
      </div>
      <span style="margin-left:auto;color:var(--muted)">→</span>
    </a>`
  ).join('');
}

// ─── LOAD PROFILE ────────────────────────────────────────────
function loadProfile(id, animate = false) {
  const p = PROFILES[id]; currentProfile = id;
  document.querySelectorAll('.profile-btn').forEach((b, i) => b.classList.toggle('active', i === id));
  if (animate) {
    const c = document.getElementById('profile-content');
    c.classList.add('switching');
    setTimeout(() => { updateDOM(p); c.classList.remove('switching'); AOS.refresh(); }, 400);
  } else { updateDOM(p); }
  document.getElementById('footer-name').textContent = p.name;
  chatHistory = [];
}

function updateDOM(p) {
  // Hero
  document.getElementById('h-first').textContent = p.firstName;
  const hl = document.getElementById('h-last');
  hl.textContent = p.lastName;
  hl.style.cssText = `background:linear-gradient(90deg,${p.accent},#7c3aed);-webkit-background-clip:text;color:transparent`;
  document.getElementById('h-role').textContent = p.role;
  document.getElementById('h-desc').textContent = p.desc;
  document.getElementById('h-status').textContent = p.status;
  document.getElementById('h-stats').innerHTML = `
    <div class="stat"><div class="stat-num" style="color:${p.accent}">${p.stats.projects}</div><div class="stat-label">Projects</div></div>
    <div class="stat"><div class="stat-num" style="color:${p.accent}">${p.stats.skills}</div><div class="stat-label">Skills</div></div>
    <div class="stat"><div class="stat-num" style="color:${p.accent}">${p.stats.exp}</div><div class="stat-label">Years Exp</div></div>`;

  // ID Card photo
  const img = document.getElementById('id-photo-img');
  const wrap = document.getElementById('id-photo-wrap');
  wrap.textContent = p.emoji; // default emoji
  wrap.appendChild(img);
  img.src = p.photo;
  img.onerror = () => { img.style.display = 'none'; };
  img.onload = () => { img.style.display = 'block'; };
  document.getElementById('id-name').textContent = p.name;
  document.getElementById('id-role-card').textContent = p.role.split(' ').slice(0, 4).join(' ');
  document.getElementById('id-tag').textContent = `ID: P-${String(p.id + 1).padStart(3, '0')}-2026`;

  // About
  document.getElementById('a-text').textContent = p.about;
  document.getElementById('a-edu').innerHTML = p.education.map(e => `
    <div class="edu-item">
      <div class="edu-dot" style="background:${p.accent};box-shadow:0 0 12px ${p.accent}"></div>
      <div>
        <div class="edu-year" style="color:${p.accent}">${e.year}</div>
        <div class="edu-title">${e.title}</div>
        <div class="edu-sub">${e.sub}</div>
      </div>
    </div>`).join('');

  renderSkills(p.skills);
  renderProjects(p.projects);
  renderExperience(p.experience);
  renderContact(p.contact);
  startTyping(p.typing || [p.role]);

  // Accent
  document.documentElement.style.setProperty('--accent1', p.accent);
  const logo = document.querySelector('.nav-logo');
  logo.style.background = `linear-gradient(90deg,${p.accent},#7c3aed)`;
  logo.style.webkitBackgroundClip = 'text'; logo.style.color = 'transparent';
}

function switchProfile(id) {
  if (id === currentProfile) return;
  loadProfile(id, true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── CONTACT FORM → EMAILJS ─────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  const btn = document.getElementById('send-btn');

  if (!name || !email || !msg) {
    showToast('Mohon lengkapi nama, email, dan pesan', 'error');
    return;
  }

  const originalBtnText = btn.textContent;
  btn.textContent = 'Sending... ⏳';
  btn.disabled = true;

  try {
    await emailjs.send(
      'service_al3knef',      // ✅ Service ID kamu
      'template_11wqs5k',     // ✅ Template ID kamu
      {
        from_name: name,           // ✅ Cocok dengan {{from_name}}
        from_email: email,         // ✅ Cocok dengan {{from_email}}
        subject: subject || 'No Subject',  // ✅ Cocok dengan {{subject}}
        message: msg               // ✅ Cocok dengan {{message}}
      }
    );

    showToast('Pesan terkirim! 🎉', 'success');
    this.reset();
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    showToast('Gagal kirim: ' + (error.text || error.message || 'Cek console'), 'error');
  } finally {
    btn.textContent = originalBtnText;
    btn.disabled = false;
  }
});
// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = `toast ${type} show`;
  setTimeout(() => t.className = 'toast', 3500);
}

// ─── DOWNLOAD CV ─────────────────────────────────────────────
['dl-cv-btn', 'dl-cv-btn2'].forEach(id => {
  const el = document.getElementById(id); if (!el) return;
  el.addEventListener('click', () => {
    const p = PROFILES[currentProfile];
    // Cek apakah path CV sudah diisi (bukan default)
    const defaultPath = `assets/cv/${p.firstName.toLowerCase()}-cv.pdf`;
    if (p.cvPath && p.cvPath !== defaultPath) {
      window.open(p.cvPath, '_blank');
    } else {
      // Coba buka default path
      const link = document.createElement('a');
      link.href = p.cvPath; link.download = `${p.firstName}-CV.pdf`;
      link.click();
    }
  });
});

// ─── CHATBOT ─────────────────────────────────────────────────
let chatOpen = false;
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').classList.toggle('open', chatOpen);
  if (chatOpen && document.getElementById('chat-messages').children.length === 0) {
    addBotMsg(`Halo! 👋 Gue AI Assistant portfolio ini. Gue bisa jelasin tentang ${PROFILES.map(p => p.firstName).join(', ')} — skills, projects, dan cara kontak mereka. Mau tanya apa?`);
  }
}

function addBotMsg(t) { addMsg(t, 'bot'); }
function addUserMsg(t) { addMsg(t, 'user'); }
function addMsg(text, type) {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = `msg msg-${type}`; d.textContent = text;
  msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
}
function addTypingInd() {
  const msgs = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = 'msg msg-bot msg-typing'; d.id = 'typind';
  d.innerHTML = '<span></span><span></span><span></span>';
  msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; return d;
}
function askSugg(btn) { document.getElementById('chat-input').value = btn.textContent; sendChat(); }

async function sendChat() {
  const inp = document.getElementById('chat-input');
  const text = inp.value.trim(); if (!text) return;
  inp.value = ''; addUserMsg(text);

  const p = PROFILES[currentProfile];
  const ctx = PROFILES.map(pr => `
Nama: ${pr.name} | Role: ${pr.role} | Status: ${pr.status}
Skills: ${pr.skills.map(s => s.name + ' ' + s.pct + '%').join(', ')}
Projects: ${pr.projects.map(pj => pj.title).join(', ')}
Pengalaman: ${pr.experience.map(e => e.title + ' di ' + e.company).join(' | ')}
Kontak: ${pr.contact.email}
`).join('\n---\n');

  const prompt = `Kamu adalah AI assistant di website portfolio multi-CV mahasiswa Indonesia.

Data portfolio:
${ctx}

Profile yang sedang dilihat user: ${p.name} (${p.role})

Aturan jawab:
- Bahasa Indonesia santai & friendly
- Pakai emoji secukupnya  
- Singkat & padat (max 3 kalimat kecuali diminta detail)
- Jangan sebut nama model AI-mu
- Kalau ditanya siapa paling ahli sesuatu, bandingkan objektif

Pertanyaan: ${text}`;

  const ind = addTypingInd();

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );
    const data = await res.json();
    ind.remove();

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      addBotMsg(data.candidates[0].content.parts[0].text);
    } else if (data.error?.message) {
      console.warn('Gemini:', data.error.message);
      // Kalau API key salah/belum aktif, pakai fallback lokal
      addBotMsg(localAnswer(text, p));
    } else {
      addBotMsg(localAnswer(text, p));
    }
  } catch (e) {
    ind.remove();
    console.warn('Chat error:', e);
    addBotMsg(localAnswer(text, p));
  }
}

// Fallback lokal — tetap berguna walau tanpa API
function localAnswer(q, p) {
  const ql = q.toLowerCase();
  if (ql.includes('skill'))
    return `${p.firstName} punya skill: ${p.skills.map(s => s.name).join(', ')} 💪`;
  if (ql.includes('project'))
    return `Project ${p.firstName}: ${p.projects.map(pr => pr.title).join(', ')} 🚀`;
  if (ql.includes('kontak') || ql.includes('contact') || ql.includes('hubungi'))
    return `Kontak ${p.firstName} via ${p.contact.email} 📧`;
  if (ql.includes('siapa') || ql.includes('tentang'))
    return `${p.name} adalah ${p.role}. ${p.about.slice(0, 120)}... 😊`;
  if (ql.includes('iot'))
    return `Untuk IoT, ${PROFILES[0].firstName} paling jago dengan skill Arduino & IoT ${PROFILES[0].skills.find(s => s.name.includes('IoT'))?.pct || 95}%! ⚡`;
  if (ql.includes('desain') || ql.includes('ui') || ql.includes('ux'))
    return `Untuk UI/UX & desain, ${PROFILES[2].firstName} jagonya — Figma ${PROFILES[2].skills[0].pct}%! 🎨`;
  if (ql.includes('ai') || ql.includes('ml') || ql.includes('machine'))
    return `Untuk AI/ML, ${PROFILES[3].firstName} ahlinya — PyTorch ${PROFILES[3].skills[0].pct}%! 🧠`;
  if (ql.includes('backend') || ql.includes('server'))
    return `Backend? ${PROFILES[1].firstName} spesialisnya — Node.js, PostgreSQL, Docker ☁️`;
  return `Halo! Gue bisa jelasin skills, projects, atau kontak siapapun di sini. Coba tanya yang lebih spesifik ya! 😊\n\n(Tip: Aktifkan Gemini API key untuk jawaban yang lebih pintar)`;
}

// ─── INIT ────────────────────────────────────────────────────
emailjs.init('bLoakKS6zFzQ3gC3S'); // ← sama dengan di atas
AOS.init({ duration: 800, once: false, offset: 80 });
renderSwitcher();
loadProfile(0);

// Skill bar observer
const sObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.pct + '%'); });
}, { threshold: .1 });
setTimeout(() => { const g = document.getElementById('skills-grid'); if (g) sObs.observe(g); }, 600);
