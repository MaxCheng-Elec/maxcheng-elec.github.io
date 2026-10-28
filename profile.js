// Edit shared information and English content here.
// Chinese and German translations are below.
window.PROFILE = {
  name: "Jizhe Cheng",
  initials: "JC",
  // Put your photo next to index.html and enter its filename, e.g. "avatar.jpg".
  avatar: "image.jpg",
  affiliation: "University of Edinburgh",
  location: "Edinburgh",
  tagline: "Swear allegiance to our shared will. — Riku Dola",
  intro: "",
  about: "An undergraduate student studying electronics and computer science at the University of Edinburgh.",
  interests: ["Computer science", "Hardware development", "Personal projects", "Software development"],
  // Leave these empty to hide the corresponding links.
  email: "J.Cheng-46@ed.ac.uk",
  github: "https://github.com/MaxCheng-Elec",
  news: [
    { date: "2026.09", text: "Started the first semester of my first year of undergraduate studies." }
  ],
  education: [
    { title: "University of Edinburgh", period: "2026 – 2030", detail: "Bachelor’s degree studies" }
  ],
  // Add your projects here. An empty list hides the Projects section.
  projects: []
};

// Fields omitted from a translation use the shared English values above.
// Keep avatar, email and github above unless they differ by language.
window.PROFILE.translations = {
  zh: {
    name: "程继哲",
    initials: "我",
    affiliation: "爱丁堡大学",
    tagline: "向共同的意志宣誓 — 里克·多拉",
    intro: "",
    about: "爱丁堡大学的一名电子与计算机科学方向本科生。",
    interests: ["计算机科学", "硬件开发", "个人项目", "软件开发"],
    news: [
      { date: "2026.09", text: "开始本科一年级第一学期的学习。" }
    ],
    education: [
      { title: "爱丁堡大学", period: "2026 – 2030", detail: "学士学位在读" }
    ],
    projects: []
  },
  de: {
    name: "Jizhe Cheng",
    initials: "JC",
    affiliation: "Universität Edinburgh",
    tagline: "Unserem gemeinsamen Willen die Treue schwören. — Riku Dola",
    intro: "",
    about: "Ich studiere im Bachelor an der Universität Edinburgh im Bereich Elektronik und Informatik.",
    interests: ["Informatik", "Hardwareentwicklung", "Eigene Projekte", "Softwareentwicklung"],
    news: [
      { date: "2026.09", text: "Beginn des ersten Semesters meines Bachelorstudiums." }
    ],
    education: [
      { title: "Universität Edinburgh", period: "2026 – 2030", detail: "Bachelorstudium" }
    ],
    projects: []
  }
};

// Optional profile links. Empty URLs are hidden. Built-in icons:
// email, github, linkedin, scholar, orcid, location, link.
// Use iconImage: "images/my-icon.png" for your own small image.
window.PROFILE.links = [
  { label: "LinkedIn", url: "", icon: "linkedin" },
  { label: "Google Scholar", url: "", icon: "scholar" },
  { label: "ORCID", url: "", icon: "orcid" }
];

// Shared images for all languages. Keys use the entry's id when provided,
// otherwise education-0 / experience-0 / project-0 (zero-based list position).
window.PROFILE.media = {
  "education-0": {
    initials: "UE",
    image: "images/edlogo.jpg", // e.g. "images/edinburgh-logo.png"
    imageAlt: { en: "University of Edinburgh", zh: "爱丁堡大学", de: "Universität Edinburgh" },
    url: "",
    photos: [
      // { src: "images/campus.jpg", caption: { en: "Campus", zh: "校园", de: "Campus" } }
    ]
  }
};

// Add your real work experience here; empty lists stay hidden.
// Add matching translated text under translations.zh.experience and .de.experience.
// Example: { id: "internship", title: "Company · Role", period: "2027 – 2028",
//            detail: "What you worked on." }
// Put its images in media.internship using image and photos as above.
window.PROFILE.experience = [];
