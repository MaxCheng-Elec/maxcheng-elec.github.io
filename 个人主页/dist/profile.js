// Edit this file to update the page. Keep quotes, commas and brackets.
window.PROFILE = {
  name: "Your Name",
  initials: "YN",
  // Put your photo next to index.html and use "avatar.jpg", or use an HTTPS URL.
  // Empty or unavailable photos show the initials placeholder.
  avatar: "",
  affiliation: "Your university / organization",
  location: "",
  tagline: "Learning, building, and sharing what I discover.",
  intro: "Welcome to my personal homepage. This is a collection of my work, interests, and things I am learning along the way.",
  about: "Replace this paragraph with a short introduction: what you work on, what interests you, and what you would like to explore next.",
  interests: ["Computer science", "Software development", "Independent projects"],
  // Leave contact fields empty to hide their links.
  email: "",
  github: "",
  // Sample entries only. Use [] to hide a section and its navigation link.
  news: [
    { date: "YYYY.MM", text: "Sample update: share a project milestone, a recent achievement, or something new you are learning." }
  ],
  education: [
    { title: "University / Organization (sample)", period: "Start — End", detail: "Add your degree, role, or area of study, followed by a brief description." }
  ],
  projects: [
    { title: "Project title", category: "SAMPLE PROJECT / 01", description: "Describe the problem, what you built, and what you learned. Keep it short and specific.", url: "" },
    { title: "Notes & experiments", category: "SAMPLE PROJECT / 02", description: "A place for a collection of notes, a small tool, or an ongoing experiment. Replace this with your own work.", url: "" }
  ]
};

// Optional translations. Missing fields fall back to the English profile above.
// Keep avatar, email and github in the shared profile above unless they differ.
window.PROFILE.translations = {
  zh: {
    name: "你的名字", initials: "我",
    affiliation: "你的学校 / 单位",
    tagline: "学习、创造，分享探索中的收获。",
    intro: "欢迎来到我的个人主页。这里记录我的作品、兴趣，以及一路学习和探索的过程。",
    about: "在这里写一段简短的自我介绍：你正在做什么、对什么感兴趣，以及接下来想探索的方向。",
    interests: ["计算机科学", "软件开发", "个人项目"],
    news: [{ date: "YYYY.MM", text: "动态示例：分享项目进展、近期成果，或者正在学习的新知识。" }],
    education: [{ title: "学校 / 单位（示例）", period: "开始时间 — 结束时间", detail: "填写你的学位、职位或研究方向，并附上一段简短说明。" }],
    projects: [
      { title: "项目名称", category: "项目示例 / 01", description: "简要介绍你解决的问题、完成的作品，以及从中得到的收获。", url: "" },
      { title: "笔记与实验", category: "项目示例 / 02", description: "展示一份笔记、一个小工具，或正在进行的实验。请替换为你自己的作品。", url: "" }
    ]
  },
  de: {
    name: "Dein Name", initials: "DN",
    affiliation: "Deine Hochschule / Organisation",
    tagline: "Lernen, entwickeln und Entdeckungen teilen.",
    intro: "Willkommen auf meiner persönlichen Website. Hier teile ich meine Projekte, Interessen und Erfahrungen beim Lernen und Entwickeln.",
    about: "Stelle dich hier kurz vor: Woran arbeitest du, was interessiert dich und womit möchtest du dich als Nächstes beschäftigen?",
    interests: ["Informatik", "Softwareentwicklung", "Eigene Projekte"],
    news: [{ date: "JJJJ.MM", text: "Beispiel: Teile einen Projektfortschritt, einen aktuellen Erfolg oder etwas Neues, das du gerade lernst." }],
    education: [{ title: "Hochschule / Organisation (Beispiel)", period: "Beginn — Ende", detail: "Ergänze deinen Abschluss, deine Position oder dein Fachgebiet sowie eine kurze Beschreibung." }],
    projects: [
      { title: "Projekttitel", category: "BEISPIELPROJEKT / 01", description: "Beschreibe kurz das Problem, deine Lösung und das, was du dabei gelernt hast.", url: "" },
      { title: "Notizen & Experimente", category: "BEISPIELPROJEKT / 02", description: "Hier ist Platz für Notizen, ein kleines Werkzeug oder ein laufendes Experiment. Ersetze dieses Beispiel durch deine eigene Arbeit.", url: "" }
    ]
  }
};
