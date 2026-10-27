const baseProfile = window.PROFILE;
let language = 'en';
let profile;
const byId = id => document.getElementById(id);
const messages = {
  en:{skip:"Skip to content",navigation:"Navigation",language:"Language",overview:"Homepage",about:"About me",news:"News",projects:"Projects",background:"Education",experience:"Experience",interests:"Interests",contactEmpty:"Contact details coming soon.",homepage:"Personal homepage",showNav:"Show navigation",hideNav:"Hide navigation",sections:"Page sections",photo:"Profile photo",placeholder:"Profile photo placeholder",email:"Email",visit:"Website",image:"Photo"},
  zh:{skip:"跳到正文",navigation:"导航",language:"语言",overview:"主页",about:"关于我",news:"近期动态",projects:"项目与作品",background:"教育经历",experience:"工作经历",interests:"兴趣方向",contactEmpty:"联系方式待补充。",homepage:"个人主页",showNav:"展开导航",hideNav:"收起导航",sections:"页面章节",photo:"个人头像",placeholder:"头像占位图",email:"邮箱",visit:"访问网站",image:"照片"},
  de:{skip:"Zum Inhalt springen",navigation:"Navigation",language:"Sprache",overview:"Startseite",about:"Über mich",news:"Aktuelles",projects:"Projekte",background:"Ausbildung",experience:"Berufserfahrung",interests:"Interessen",contactEmpty:"Kontaktdaten folgen.",homepage:"Persönliche Website",showNav:"Navigation öffnen",hideNav:"Navigation schließen",sections:"Seitenabschnitte",photo:"Profilbild",placeholder:"Platzhalter für das Profilbild",email:"E-Mail",visit:"Website",image:"Foto"}
};
const text = (id, value) => { byId(id).textContent = value || ''; };
const localized = value => typeof value === 'object' && value !== null ? (value[language] || value.en || '') : (value || '');
function urlFor(value, image = false) {
  if (!value) return null;
  try {
    const url = new URL(value, document.baseURI);
    return (image ? ['https:','http:','file:'] : ['https:','http:','file:','mailto:']).includes(url.protocol) ? url.href : null;
  } catch { return null; }
}
const iconPaths = {
  email:['M3 5h18v14H3z','m3 6 9 7 9-7'],
  location:['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z','M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0'],
  link:['M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2','M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2'],
  scholar:['m2 9 10-5 10 5-10 5-10-5','M6 11v6q6 5 12 0v-6','M22 9v8'],
  github:['M9 19c-4 1-4-2-6-2','M9 22v-4c-5-1-6-7-3-10-1-2 0-4 0-4 2 0 4 2 4 2h4s2-2 4-2c0 0 1 2 0 4 3 3 2 9-3 10v4'],
  linkedin:['M4 9v11M4 4v1M10 20V9h4v2c1-3 6-3 6 2v7','M14 20v-7'],
  orcid:['M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0','M7 10v7M7 7v.1M11 7h3a5 5 0 0 1 0 10h-3z']
};
function icon(kind) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true');
  svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor');
  svg.setAttribute('stroke-width','1.7'); svg.setAttribute('stroke-linecap','round'); svg.setAttribute('stroke-linejoin','round'); svg.classList.add('icon');
  (iconPaths[kind] || iconPaths.link).forEach(d => {const path = document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',d);svg.append(path);});
  return svg;
}
function imageElement(src, alt, className) {
  const url = urlFor(src, true);
  if (!url) return null;
  const img = document.createElement('img');img.src = url;img.alt = alt;img.className = className;img.loading = 'lazy';img.decoding = 'async';
  return img;
}
function addSocial(label, href, kind, iconImage) {
  const url = urlFor(href);
  if (!url) return;
  const link = document.createElement('a');link.href = url;link.className = 'social-link';
  const picture = imageElement(iconImage, '', 'icon');
  if (picture) { picture.onerror = () => picture.replaceWith(icon(kind));link.append(picture); } else link.append(icon(kind));
  const labelNode = document.createElement('span');labelNode.textContent = label;link.append(labelNode);
  byId('contact-links').append(link);
}
function hideEmpty(id, entries) {
  const empty = !entries?.length;
  byId(id).hidden = empty;
  document.querySelector('.site-nav a[href="#'+id+'"]').hidden = empty;
}
function entryMedia(item, type, index) {
  return {...(baseProfile.media?.[item.id || type+'-'+index] || {}),...item};
}
function galleryFor(photos, title) {
  const gallery = document.createElement('div');gallery.className = 'gallery';
  (photos || []).forEach(photo => {
    const data = typeof photo === 'string' ? {src:photo} : photo;
    const img = imageElement(data.src, localized(data.alt) || title + ' — ' + messages[language].image, '');
    if (!img) return;
    const figure = document.createElement('figure');
    const a = document.createElement('a');a.href = urlFor(data.url) || img.src;a.target = '_blank';a.rel = 'noopener noreferrer';a.append(img);figure.append(a);
    const caption = localized(data.caption);
    if (caption) {const el = document.createElement('figcaption');el.textContent = caption;figure.append(el);}
    img.onerror = () => {figure.remove();gallery.classList.toggle('single',gallery.children.length===1);gallery.hidden=!gallery.children.length;};
    gallery.append(figure);
  });
  gallery.classList.toggle('single',gallery.children.length===1);gallery.hidden=!gallery.children.length;
  return gallery;
}
function renderEntries(items, type, targetId) {
  (items || []).forEach((item, index) => {
    const data = entryMedia(item,type,index);
    const article = document.createElement('article');article.className = 'entry';
    const header = document.createElement('div');header.className = 'entry-header';
    const badge = document.createElement('span');badge.className = 'entry-badge';badge.setAttribute('aria-hidden','true');badge.textContent = data.initials || '•';
    const logo = imageElement(data.image, localized(data.imageAlt) || data.title, 'entry-logo');
    if (logo) {logo.onerror = () => logo.replaceWith(badge);header.append(logo);} else header.append(badge);
    const heading = document.createElement('div');const title = document.createElement('h3');title.textContent = data.title;
    const period = document.createElement('span');period.className = 'date';period.textContent = data.period;
    heading.append(title,period);header.append(heading);article.append(header);
    if (data.detail) {const p = document.createElement('p');p.textContent = data.detail;article.append(p);}
    const url = urlFor(data.url);
    if (url) {const a = document.createElement('a');a.href=url;a.className='entry-link';a.textContent=messages[language].visit;article.append(a);}
    article.append(galleryFor(data.photos,data.title));byId(targetId).append(article);
  });
}
function renderLanguage(next) {
  language = Object.hasOwn(messages,next) ? next : 'en';
  profile = {...baseProfile,...(baseProfile.translations?.[language] || {})};
  document.documentElement.lang = language==='zh' ? 'zh-CN' : language;
  document.title = profile.name+' · '+messages[language].homepage;
  document.querySelector('meta[name="description"]').content = profile.intro || profile.about || '';
  byId('language-select').value = language;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent=messages[language][el.dataset.i18n]);
  document.querySelectorAll('[data-name]').forEach(el => el.textContent=profile.name);
  byId('site-nav').setAttribute('aria-label',messages[language].sections);
  ['tagline','affiliation','intro'].forEach(id=>{text(id,profile[id]);byId(id).hidden=!profile[id];});
  text('about-text',profile.about);byId('about-text').hidden=!profile.about;
  text('initials',profile.initials || '');text('year',new Date().getFullYear());
  const avatar = byId('avatar');
  byId('avatar-fallback').setAttribute('aria-label',messages[language].placeholder);
  avatar.alt=profile.name+' — '+messages[language].photo;
  const avatarUrl=urlFor(profile.avatar,true);
  if (avatarUrl) {
    avatar.onload=()=>{avatar.hidden=false;byId('avatar-fallback').hidden=true;};
    avatar.onerror=()=>{avatar.hidden=true;byId('avatar-fallback').hidden=false;};
    if (avatar.src!==avatarUrl) avatar.src=avatarUrl;
  } else {avatar.hidden=true;byId('avatar-fallback').hidden=false;}
  ['contact-links','location','news-list','interests','education-list','experience-list','project-list'].forEach(id=>byId(id).replaceChildren());
  byId('location').hidden=!profile.location;
  if(profile.location){const label=document.createElement('span');label.textContent=profile.location;byId('location').append(icon('location'),label);}
  if(profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) addSocial(messages[language].email,'mailto:'+profile.email,'email');
  if(profile.github) addSocial('GitHub',profile.github,'github');
  (profile.links || []).forEach(link=>addSocial(localized(link.label),link.url,link.icon || 'link',link.iconImage));
  byId('contact-empty').hidden=!!byId('contact-links').children.length;
  (profile.interests || []).forEach(value=>{const li=document.createElement('li');li.textContent=value;byId('interests').append(li);});
  document.querySelector('.interests').hidden=!profile.interests?.length;
  hideEmpty('news',profile.news);
  (profile.news || []).forEach(item=>{
    const li=document.createElement('li');const date=document.createElement('span');date.className='date';date.textContent=item.date;
    const label=document.createElement('span');label.textContent=item.text;li.append(date,label);byId('news-list').append(li);
  });
  hideEmpty('background',profile.education);renderEntries(profile.education,'education','education-list');
  hideEmpty('experience',profile.experience);renderEntries(profile.experience,'experience','experience-list');
  hideEmpty('projects',profile.projects);
  (profile.projects || []).forEach((item,index)=>{
    const data=entryMedia(item,'project',index);
    const article=document.createElement('article');article.className='project';
    const category=document.createElement('small');category.textContent=data.category || '';
    const title=document.createElement('h3');title.textContent=data.title;
    const p=document.createElement('p');p.textContent=data.description;article.append(category,title,p);
    article.append(galleryFor(data.photos || (data.image ? [{src:data.image}] : []),data.title));
    const url=urlFor(data.url);if(url){const a=document.createElement('a');a.href=url;a.className='entry-link';a.textContent=messages[language].visit;article.append(a);}
    byId('project-list').append(article);
  });
  updateMenuLabel();
}
const mobile=window.matchMedia('(max-width:760px)');
const navToggle=byId('nav-toggle');
function updateMenuLabel(){navToggle.setAttribute('aria-label',navToggle.getAttribute('aria-expanded')==='true' ? messages[language].hideNav : messages[language].showNav);}
function setNavigation(open){document.body.classList.toggle('nav-collapsed',!open);navToggle.setAttribute('aria-expanded',String(open));updateMenuLabel();}
setNavigation(!mobile.matches);
mobile.addEventListener('change',()=>setNavigation(!mobile.matches));
navToggle.addEventListener('click',()=>setNavigation(navToggle.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && mobile.matches){setNavigation(false);navToggle.focus();}});
const navLinks=[...document.querySelectorAll('.site-nav a')];
function revealSection(hash,focus=false){
  const target=byId(hash.slice(1));if(!target || target.hidden)return;
  if(target.tagName==='DETAILS')target.open=true;
  navLinks.forEach(link=>{if(link.hash===hash)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  if(focus){const heading=target.querySelector('summary,h1');if(heading){if(heading.tagName!=='SUMMARY')heading.tabIndex=-1;heading.focus({preventScroll:true});}}
}
navLinks.forEach(link=>link.addEventListener('click',()=>{revealSection(link.hash,true);if(mobile.matches)setNavigation(false);}));
window.addEventListener('hashchange',()=>revealSection(location.hash));
let initial='en';try{initial=localStorage.getItem('homepage-language') || 'en';}catch{}
renderLanguage(initial);
if(location.hash)revealSection(location.hash);
byId('language-select').addEventListener('change',event=>{renderLanguage(event.target.value);try{localStorage.setItem('homepage-language',language);}catch{}});
let scrollQueued=false;
window.addEventListener('scroll',()=>{
  if(scrollQueued)return;scrollQueued=true;
  requestAnimationFrame(()=>{
    let current='profile';
    navLinks.filter(link=>!link.hidden && link.hash!=='#profile').forEach(link=>{
      if(byId(link.hash.slice(1)).getBoundingClientRect().top <= byId('site-nav').parentElement.getBoundingClientRect().bottom+36)current=link.hash.slice(1);
    });
    navLinks.forEach(link=>{if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
    scrollQueued=false;
  });
},{passive:true});
