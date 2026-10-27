// Rendering and interactions. Edit profile.js to change personal content.
const baseProfile = window.PROFILE;
let profile;
let language = "en";
const byId = id => document.getElementById(id);
const setText = (id, value) => { byId(id).textContent = value; };
const messages = {
  en: { skip:"Skip to content", navigation:"Navigation", siteLabel:"PERSONAL / HOMEPAGE", language:"Language", onThisPage:"ON THIS PAGE", overview:"Overview", about:"About", news:"News", projects:"Projects", background:"Background", contact:"Contact", profile:"PROFILE", interests:"Interests", contactEmpty:"Contact details coming soon.", homepage:"Personal homepage", showNav:"Show navigation", hideNav:"Hide navigation", sections:"Page sections", photo:"Profile photo", placeholder:"Profile photo placeholder" },
  zh: { skip:"跳到正文", navigation:"导航", siteLabel:"个人 / 主页", language:"语言", onThisPage:"页面目录", overview:"概览", about:"关于我", news:"近期动态", projects:"项目与作品", background:"教育与经历", contact:"联系方式", profile:"个人资料", interests:"兴趣方向", contactEmpty:"联系方式待补充。", homepage:"个人主页", showNav:"展开导航", hideNav:"收起导航", sections:"页面章节", photo:"个人头像", placeholder:"头像占位图" },
  de: { skip:"Zum Inhalt springen", navigation:"Navigation", siteLabel:"PERSÖNLICHE / WEBSITE", language:"Sprache", onThisPage:"AUF DIESER SEITE", overview:"Überblick", about:"Über mich", news:"Aktuelles", projects:"Projekte", background:"Werdegang", contact:"Kontakt", profile:"PROFIL", interests:"Interessen", contactEmpty:"Kontaktdaten folgen.", homepage:"Persönliche Website", showNav:"Navigation öffnen", hideNav:"Navigation schließen", sections:"Seitenabschnitte", photo:"Profilbild", placeholder:"Platzhalter für das Profilbild" }
};
function renderLanguage(nextLanguage) {
  language = Object.hasOwn(messages, nextLanguage) ? nextLanguage : 'en';
  profile = { ...baseProfile, ...(baseProfile.translations?.[language] || {}) };
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  byId('language-select').value = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = messages[language][el.dataset.i18n];
  });
  document.querySelector('nav').setAttribute('aria-label', messages[language].sections);
  byId('avatar-fallback').setAttribute('aria-label', messages[language].placeholder);
  byId('avatar').alt = profile.name + ' — ' + messages[language].photo;
  ['news-list','education-list','interests','project-list','contact-links'].forEach(id => byId(id).replaceChildren());
  byId('contact-empty').hidden = false;
document.querySelectorAll('[data-name]').forEach(el => el.textContent = profile.name);
document.title = profile.name + ' · ' + messages[language].homepage;
document.querySelector('meta[name="description"]').content = profile.intro;
['tagline', 'intro'].forEach(id => setText(id, profile[id]));
setText('about-text', profile.about);
setText('year', new Date().getFullYear());
setText('initials', profile.initials || profile.name.split(/\s+/).map(s => s[0]).slice(0, 2).join(''));
['affiliation', 'location'].forEach(id => {
  setText(id, profile[id] || '');
  byId(id).hidden = !profile[id];
});
function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
}
if (profile.avatar) {
  const photo = byId('avatar');
  try {
    const url = new URL(profile.avatar, document.baseURI);
    if (['https:', 'http:', 'file:'].includes(url.protocol)) {
      photo.onload = () => { photo.hidden = false; byId('avatar-fallback').hidden = true; };
      photo.onerror = () => { photo.hidden = true; byId('avatar-fallback').hidden = false; };
      photo.alt = profile.name + ' — ' + messages[language].photo;
      photo.src = url.href;
    }
  } catch { /* Keep the initials placeholder for invalid paths. */ }
}
function hideEmpty(sectionId, items) {
  const empty = !items?.length;
  byId(sectionId).hidden = empty;
  document.querySelector('nav a[href="#' + sectionId + '"]').hidden = empty;
}
hideEmpty('news', profile.news);
(profile.news || []).forEach(item => {
  const li = document.createElement('li');
  const date = document.createElement('span'); date.className = 'date'; date.textContent = item.date;
  const text = document.createElement('span'); text.textContent = item.text;
  li.append(date, text); byId('news-list').append(li);
});
hideEmpty('background', profile.education);
(profile.education || []).forEach(item => {
  const entry = document.createElement('article'); entry.className = 'entry';
  const heading = document.createElement('div'); heading.className = 'entry-heading';
  const title = document.createElement('h3'); title.textContent = item.title;
  const period = document.createElement('span'); period.className = 'date'; period.textContent = item.period;
  const detail = document.createElement('p'); detail.textContent = item.detail;
  heading.append(title, period); entry.append(heading, detail); byId('education-list').append(entry);
});
(profile.interests || []).forEach(text => {
  const li = document.createElement('li'); li.textContent = text; byId('interests').append(li);
});
document.querySelector('.interests').hidden = !profile.interests?.length;
hideEmpty('projects', profile.projects);
(profile.projects || []).forEach(project => {
  const article = document.createElement('article'); article.className = 'project';
  const label = document.createElement('small'); label.textContent = project.category;
  const title = document.createElement('h3'); title.textContent = project.title;
  const desc = document.createElement('p'); desc.textContent = project.description;
  article.append(label, title, desc);
  const url = safeUrl(project.url);
  if (url) { const link = document.createElement('a'); link.href = url; link.textContent = url; article.append(link); }
  byId('project-list').append(article);
});
function contactLink(label, href) {
  const a = document.createElement('a'); a.textContent = label; a.href = href;
  byId('contact-links').append(a); byId('contact-empty').hidden = true;
}
if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) contactLink(profile.email, 'mailto:' + profile.email);
if (safeUrl(profile.github)) contactLink('GitHub', safeUrl(profile.github));


  const expanded = byId('nav-toggle').getAttribute('aria-expanded') === 'true';
  byId('nav-toggle').setAttribute('aria-label', expanded ? messages[language].hideNav : messages[language].showNav);
}
const mobile = window.matchMedia('(max-width: 760px)');
const navToggle = byId('nav-toggle');
function setNavigation(open) {
  document.body.classList.toggle('nav-collapsed', !open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? messages[language].hideNav : messages[language].showNav);
}
setNavigation(!mobile.matches);
mobile.addEventListener('change', () => setNavigation(!mobile.matches));
navToggle.addEventListener('click', () => setNavigation(navToggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    setNavigation(false); navToggle.focus();
  }
});
const navLinks = [...document.querySelectorAll('nav a')];
function revealSection(hash, focus = false) {
  const target = byId(hash.slice(1));
  if (!target || target.hidden) return;
  if (target.tagName === 'DETAILS') target.open = true;
  navLinks.forEach(link => {
    if (link.hash === hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  if (focus) {
    const heading = target.querySelector('summary, h1');
    if (heading) { if (heading.tagName !== 'SUMMARY') heading.tabIndex = -1; heading.focus({preventScroll:true}); }
  }
}
navLinks.forEach(link => link.addEventListener('click', () => {
  revealSection(link.hash, true);
  if (mobile.matches) setNavigation(false);
}));
window.addEventListener('hashchange', () => revealSection(location.hash));
if (location.hash) revealSection(location.hash);

let scrollQueued = false;
window.addEventListener('scroll', () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header')) + 48;
    const trackedSections = navLinks.filter(link => !link.hidden).map(link => byId(link.hash.slice(1)));
    let current = trackedSections[0];
    trackedSections.forEach(section => { if (section.getBoundingClientRect().top <= top) current = section; });
    navLinks.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollQueued = false;
  });
}, {passive:true});

// English is the initial default; explicit language choices are remembered.
let initialLanguage = 'en';
try { initialLanguage = localStorage.getItem('homepage-language') || 'en'; } catch {}
renderLanguage(initialLanguage);
if (location.hash) revealSection(location.hash);
byId('language-select').addEventListener('change', event => {
  renderLanguage(event.target.value);
  try { localStorage.setItem('homepage-language', language); } catch {}
});
