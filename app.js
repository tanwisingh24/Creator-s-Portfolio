/* ============================================================
   CREATOR FOLIO — app.js
   Modular, clean JavaScript. No frameworks.
   ============================================================ */

'use strict';

/* ===== STATE ===== */
const state = {
  profile: {
    name: 'Alex Rivera',
    profession: 'Lifestyle & Travel Creator',
    bio: 'I craft authentic stories that connect brands with audiences. Specializing in travel, fashion, and lifestyle content that converts.',
    location: 'Mumbai, India',
    email: 'hello@alexrivera.co',
    website: 'alexrivera.co',
    social: { instagram: '@alexrivera', youtube: '@AlexRivera', linkedin: 'alexrivera', x: '@alexrivera' },
    ctaLabel: 'Work With Me',
    avatar: '',
  },
  stats: [
    { icon: '👥', label: 'Followers', value: '2.4M', raw: 2400000 },
    { icon: '🌍', label: 'Total Reach', value: '18M', raw: 18000000 },
    { icon: '🤝', label: 'Campaigns', value: '140+', raw: 140 },
    { icon: '📈', label: 'Avg Engagement', value: '7.8%', raw: 7.8 },
    { icon: '🎬', label: 'Videos Created', value: '620+', raw: 620 },
    { icon: '⭐', label: 'Years Active', value: '6', raw: 6 },
  ],
  gallery: [
    { id: uid(), thumb: '', title: 'Wanderlust Asia', brand: 'TravelBrand Co.', category: 'Travel', desc: 'A 10-part video series covering hidden gems across Southeast Asia.', stats: '4.1M views · 9.2% ER' },
    { id: uid(), thumb: '', title: 'Summer Looks 2024', brand: 'ZARA', category: 'Fashion', desc: 'Curated summer collection showcasing 15 outfits across 3 cities.', stats: '2.3M views · 8.4% ER' },
    { id: uid(), thumb: '', title: 'City Food Diaries', brand: 'Swiggy', category: 'Food', desc: 'Street-to-fine-dining food exploration series across 6 Indian cities.', stats: '1.8M views · 7.1% ER' },
  ],
  collabs: [
    { id: uid(), brand: 'Samsung India', campaign: 'Galaxy S24 Launch', desc: 'Unboxing & lifestyle integration campaign reaching tech-savvy millennials.', reach: '3.2M', views: '5.8M', er: '8.9%', emoji: '📱' },
    { id: uid(), brand: 'Airbnb', campaign: 'Live Anywhere', desc: 'Showcased unique stays across 4 countries for the remote-work audience.', reach: '2.8M', views: '4.2M', er: '7.4%', emoji: '🏡' },
    { id: uid(), brand: 'Nike India', campaign: 'Just Move It', desc: 'Fitness-meets-travel campaign targeting urban Gen-Z audience.', reach: '4.1M', views: '6.9M', er: '10.2%', emoji: '👟' },
  ],
  testimonials: [
    { id: uid(), name: 'Priya Sharma', company: 'Samsung India Marketing', rating: 5, review: 'Alex delivered beyond our KPIs. The content was authentic, visually stunning, and our engagement rates were the best we\'ve seen for a creator campaign.' },
    { id: uid(), name: 'James Holloway', company: 'Airbnb APAC', rating: 5, review: 'Working with Alex was seamless. The storytelling felt real, not sponsored—which is exactly what we needed. Highly recommend for travel brands.' },
  ],
  skills: ['Photography', 'Video Editing', 'Content Strategy', 'Brand Marketing', 'Adobe Premiere', 'Canva', 'Instagram Growth', 'Scripting & Voiceover', 'Drone Videography'],
  services: [
    { id: uid(), icon: '📸', name: 'Sponsored Posts', desc: 'Authentic, story-driven posts that blend seamlessly with your audience.', price: 'From ₹25,000' },
    { id: uid(), icon: '🎬', name: 'UGC Content', desc: 'High-quality user-generated content you can repurpose across channels.', price: 'From ₹15,000' },
    { id: uid(), icon: '🏷️', name: 'Brand Shoots', desc: 'Professional photo & video shoots for your products or services.', price: 'From ₹40,000' },
    { id: uid(), icon: '🎤', name: 'Event Coverage', desc: 'Real-time event documentation with same-day delivery.', price: 'From ₹30,000' },
  ],
  contact: {
    email: 'hello@alexrivera.co',
    phone: '+91 98765 43210',
    website: 'alexrivera.co',
    instagram: '@alexrivera',
    youtube: '@AlexRivera',
    linkedin: 'alexrivera',
    location: 'Mumbai, India',
  },
  theme: {
    primary: '#a78bfa',
    accent: '#7c3aed',
    mode: 'dark',
    radius: '8px',
    font: "'Syne', sans-serif",
  },
  sections: {
    about: true, stats: true, gallery: true, collaborations: true,
    testimonials: true, skills: true, services: true, contact: true,
  },
};

/* ===== UTILS ===== */
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function $(id) { return document.getElementById(id); }

function showToast(msg, icon = '✓') {
  const t = $('toast');
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function openModal(id) {
  const el = $(id);
  if (el) { el.classList.add('open'); el.dataset.editId = ''; }
}
function closeModal(id) {
  const el = $(id);
  if (el) el.classList.remove('open');
}

/* ===== THEME APPLICATION ===== */
function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', state.theme.primary);
  root.style.setProperty('--primary-glow', hexToRgba(state.theme.primary, 0.18));
  root.style.setProperty('--accent', state.theme.accent);
  root.style.setProperty('--radius', state.theme.radius);
  document.body.style.fontFamily = state.theme.font;
  document.body.classList.toggle('dark-mode', state.theme.mode === 'dark');
  document.body.classList.toggle('light-mode', state.theme.mode === 'light');
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ===== LIVE PREVIEW RENDER ===== */

// --- Profile ---
function renderProfile() {
  const p = state.profile;
  const pfName = $('pf-name');
  const pfProfession = $('pf-profession');
  const pfBio = $('pf-bio');
  const pfLocation = $('pf-location');
  const pfEmail = $('pf-email');
  const pfCta = $('pf-cta');
  const pfAvatar = $('pf-avatar');

  if (pfName) pfName.textContent = p.name || 'Your Name';
  if (pfProfession) pfProfession.textContent = p.profession || 'Creator';
  if (pfBio) pfBio.textContent = p.bio || '';
  if (pfLocation) pfLocation.textContent = p.location || '';
  if (pfEmail) pfEmail.textContent = p.email || '';
  if (pfCta) pfCta.textContent = p.ctaLabel || 'Work With Me';
  if (pfAvatar && p.avatar) pfAvatar.src = p.avatar;

  // Socials visibility
  const socialMap = { instagram: 'pf-instagram', youtube: 'pf-youtube', linkedin: 'pf-linkedin', x: 'pf-x' };
  Object.entries(socialMap).forEach(([key, elId]) => {
    const el = $(elId);
    if (el) el.style.display = p.social[key] ? '' : 'none';
  });
}

// --- Stats ---
function renderStats() {
  const grid = $('pf-stats-grid');
  if (!grid) return;
  grid.innerHTML = state.stats.map((s, i) => `
    <div class="pf-stat-card fade-in" style="animation-delay:${i * 0.07}s">
      <div class="pf-stat-icon">${s.icon}</div>
      <div class="pf-stat-value" data-target="${s.raw}" data-suffix="${getSuffix(s.value)}">${s.value}</div>
      <div class="pf-stat-label">${s.label}</div>
    </div>
  `).join('');
  animateCounters();
}

function getSuffix(val) {
  if (val.includes('%')) return '%';
  if (val.includes('M')) return 'M';
  if (val.includes('K')) return 'K';
  if (val.includes('+')) return '+';
  return '';
}

function animateCounters() {
  const cards = document.querySelectorAll('.pf-stat-value[data-target]');
  cards.forEach(card => {
    const raw = parseFloat(card.dataset.target);
    const suffix = card.dataset.suffix;
    if (isNaN(raw)) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let current = raw * eased;
      // Format
      let display;
      if (suffix === 'M') display = (current / 1000000).toFixed(1) + 'M';
      else if (suffix === 'K') display = Math.round(current / 1000) + 'K';
      else if (suffix === '%') display = current.toFixed(1) + '%';
      else if (suffix === '+') display = Math.round(current) + '+';
      else display = Math.round(current).toString();
      card.textContent = display;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

// --- Gallery ---
function renderGallery() {
  const grid = $('pf-gallery-grid');
  if (!grid) return;
  if (!state.gallery.length) {
    grid.innerHTML = `<div class="empty-state"><i class="ph ph-images"></i>No projects yet. Add some in the editor.</div>`;
    return;
  }
  grid.innerHTML = state.gallery.map((g, i) => `
    <div class="pf-gallery-card fade-in" style="animation-delay:${i * 0.08}s">
      <img class="pf-gallery-thumb" src="${g.thumb || ''}" alt="${g.title}"
        onerror="this.style.background='var(--bg-3)'; this.src=''" 
        style="${!g.thumb ? 'background:var(--bg-3);' : ''}"/>
      <div class="pf-gallery-body">
        <span class="pf-gallery-category">${g.category || 'Project'}</span>
        <div class="pf-gallery-title">${g.title}</div>
        <div class="pf-gallery-brand">${g.brand}</div>
        <div class="pf-gallery-desc">${g.desc}</div>
        ${g.stats ? `<span class="pf-gallery-stats">📊 ${g.stats}</span>` : ''}
      </div>
    </div>
  `).join('');
}

// --- Collabs ---
function renderCollabs() {
  const grid = $('pf-collabs-grid');
  if (!grid) return;
  if (!state.collabs.length) {
    grid.innerHTML = `<div class="empty-state"><i class="ph ph-handshake"></i>No collaborations yet.</div>`;
    return;
  }
  grid.innerHTML = state.collabs.map((c, i) => `
    <div class="pf-collab-card fade-in" style="animation-delay:${i * 0.08}s">
      <div class="pf-collab-header">
        <div class="pf-collab-logo">${c.emoji || '🤝'}</div>
        <div>
          <div class="pf-collab-brand">${c.brand}</div>
          <div class="pf-collab-campaign">${c.campaign}</div>
        </div>
      </div>
      <div class="pf-collab-desc">${c.desc}</div>
      <div class="pf-collab-metrics">
        <div class="pf-metric"><div class="pf-metric-value">${c.reach}</div><div class="pf-metric-label">Reach</div></div>
        <div class="pf-metric"><div class="pf-metric-value">${c.views}</div><div class="pf-metric-label">Views</div></div>
        <div class="pf-metric"><div class="pf-metric-value">${c.er}</div><div class="pf-metric-label">Eng. Rate</div></div>
      </div>
    </div>
  `).join('');
}

// --- Testimonials ---
function renderTestimonials() {
  const grid = $('pf-testimonials-grid');
  if (!grid) return;
  if (!state.testimonials.length) {
    grid.innerHTML = `<div class="empty-state"><i class="ph ph-quotes"></i>No testimonials yet.</div>`;
    return;
  }
  grid.innerHTML = state.testimonials.map((t, i) => `
    <div class="pf-testimonial-card fade-in" style="animation-delay:${i * 0.08}s">
      <div class="pf-quote-icon">"</div>
      <div class="pf-testimonial-text">${t.review}</div>
      <div class="pf-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <div class="pf-testimonial-client">
        <div class="pf-client-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="pf-client-name">${t.name}</div>
          <div class="pf-client-company">${t.company}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// --- Skills ---
function renderSkills() {
  const wrap = $('pf-skills-wrap');
  if (!wrap) return;
  wrap.innerHTML = state.skills.map(s => `<span class="pf-skill-tag">${s}</span>`).join('');
}

// --- Services ---
function renderServices() {
  const grid = $('pf-services-grid');
  if (!grid) return;
  if (!state.services.length) {
    grid.innerHTML = `<div class="empty-state"><i class="ph ph-briefcase"></i>No services added yet.</div>`;
    return;
  }
  grid.innerHTML = state.services.map((s, i) => `
    <div class="pf-service-card fade-in" style="animation-delay:${i * 0.08}s">
      <div class="pf-service-icon">${s.icon || '✦'}</div>
      <div class="pf-service-name">${s.name}</div>
      <div class="pf-service-desc">${s.desc}</div>
      <div class="pf-service-price">${s.price}</div>
    </div>
  `).join('');
}

// --- Contact ---
function renderContact() {
  const grid = $('pf-contact-grid');
  if (!grid) return;
  const c = state.contact;
  const items = [
    { icon: 'ph-envelope', label: 'Email', value: c.email },
    { icon: 'ph-phone', label: 'Phone', value: c.phone },
    { icon: 'ph-globe', label: 'Website', value: c.website },
    { icon: 'ph-instagram-logo', label: 'Instagram', value: c.instagram },
    { icon: 'ph-youtube-logo', label: 'YouTube', value: c.youtube },
    { icon: 'ph-linkedin-logo', label: 'LinkedIn', value: c.linkedin },
    { icon: 'ph-map-pin', label: 'Location', value: c.location },
  ].filter(item => item.value);

  grid.innerHTML = items.map(item => `
    <div class="pf-contact-card">
      <div class="pf-contact-icon-wrap"><i class="ph ${item.icon}"></i></div>
      <div>
        <div class="pf-contact-label">${item.label}</div>
        <div class="pf-contact-value">${item.value}</div>
      </div>
    </div>
  `).join('');
}

// --- Section visibility ---
function renderSections() {
  const sectionMap = {
    about: 'pf-section-about',
    stats: 'pf-section-stats',
    gallery: 'pf-section-gallery',
    collaborations: 'pf-section-collaborations',
    testimonials: 'pf-section-testimonials',
    skills: 'pf-section-skills',
    services: 'pf-section-services',
    contact: 'pf-section-contact',
  };
  Object.entries(state.sections).forEach(([key, visible]) => {
    const el = $(sectionMap[key]);
    if (el) el.classList.toggle('hidden', !visible);
  });
}

// --- Render all ---
function renderAll() {
  renderProfile();
  renderStats();
  renderGallery();
  renderCollabs();
  renderTestimonials();
  renderSkills();
  renderServices();
  renderContact();
  renderSections();
  applyTheme();
}

/* ===== EDITOR LISTS ===== */

// Gallery editor list
function renderGalleryEditorList() {
  const list = $('galleryEditorList');
  if (!list) return;
  list.innerHTML = state.gallery.length ? state.gallery.map(g => `
    <div class="editor-item-card">
      <div class="editor-item-info">
        <div class="editor-item-title">${g.title || 'Untitled'}</div>
        <div class="editor-item-sub">${g.brand || ''} · ${g.category || ''}</div>
      </div>
      <div class="editor-item-actions">
        <button class="icon-btn" onclick="editGalleryItem('${g.id}')"><i class="ph ph-pencil-simple"></i></button>
        <button class="icon-btn delete" onclick="deleteGalleryItem('${g.id}')"><i class="ph ph-trash"></i></button>
      </div>
    </div>
  `).join('') : `<div class="empty-state"><i class="ph ph-images"></i>No projects yet.</div>`;
}

// Collab editor list
function renderCollabEditorList() {
  const list = $('collabEditorList');
  if (!list) return;
  list.innerHTML = state.collabs.length ? state.collabs.map(c => `
    <div class="editor-item-card">
      <div class="editor-item-info">
        <div class="editor-item-title">${c.brand || 'Untitled'}</div>
        <div class="editor-item-sub">${c.campaign || ''}</div>
      </div>
      <div class="editor-item-actions">
        <button class="icon-btn" onclick="editCollab('${c.id}')"><i class="ph ph-pencil-simple"></i></button>
        <button class="icon-btn delete" onclick="deleteCollab('${c.id}')"><i class="ph ph-trash"></i></button>
      </div>
    </div>
  `).join('') : `<div class="empty-state"><i class="ph ph-handshake"></i>No collabs yet.</div>`;
}

// Testimonial editor list
function renderTestimonialEditorList() {
  const list = $('testimonialEditorList');
  if (!list) return;
  list.innerHTML = state.testimonials.length ? state.testimonials.map(t => `
    <div class="editor-item-card">
      <div class="editor-item-info">
        <div class="editor-item-title">${t.name || 'Client'}</div>
        <div class="editor-item-sub">${t.company || ''} · ${'★'.repeat(t.rating)}</div>
      </div>
      <div class="editor-item-actions">
        <button class="icon-btn" onclick="editTestimonial('${t.id}')"><i class="ph ph-pencil-simple"></i></button>
        <button class="icon-btn delete" onclick="deleteTestimonial('${t.id}')"><i class="ph ph-trash"></i></button>
      </div>
    </div>
  `).join('') : `<div class="empty-state"><i class="ph ph-quotes"></i>No testimonials yet.</div>`;
}

// Service editor list
function renderServiceEditorList() {
  const list = $('serviceEditorList');
  if (!list) return;
  list.innerHTML = state.services.length ? state.services.map(s => `
    <div class="editor-item-card">
      <div class="editor-item-info">
        <div class="editor-item-title">${s.icon || ''} ${s.name || 'Service'}</div>
        <div class="editor-item-sub">${s.price || ''}</div>
      </div>
      <div class="editor-item-actions">
        <button class="icon-btn" onclick="editService('${s.id}')"><i class="ph ph-pencil-simple"></i></button>
        <button class="icon-btn delete" onclick="deleteService('${s.id}')"><i class="ph ph-trash"></i></button>
      </div>
    </div>
  `).join('') : `<div class="empty-state"><i class="ph ph-briefcase"></i>No services yet.</div>`;
}

// Stats editor
function renderStatsEditor() {
  const list = $('statsEditorList');
  if (!list) return;
  list.innerHTML = state.stats.map((s, i) => `
    <div class="stat-editor-row">
      <div>
        <label>Label</label>
        <input class="field-input" value="${s.label}" onchange="updateStat(${i},'label',this.value)" />
      </div>
      <div>
        <label>Value</label>
        <input class="field-input" value="${s.value}" onchange="updateStat(${i},'value',this.value)" placeholder="e.g. 2.4M" />
      </div>
      <div>
        <label>Icon</label>
        <input class="field-input" value="${s.icon}" onchange="updateStat(${i},'icon',this.value)" placeholder="Emoji" />
      </div>
    </div>
  `).join('');
}

// Skills editor
function renderSkillsEditor() {
  const wrap = $('skillTagsEditor');
  if (!wrap) return;
  wrap.innerHTML = state.skills.map((s, i) => `
    <span class="skill-tag-edit">
      ${s}
      <button onclick="removeSkill(${i})"><i class="ph ph-x"></i></button>
    </span>
  `).join('');
}

// Section toggles
function renderSectionToggles() {
  const container = $('sectionToggles');
  if (!container) return;
  const labels = {
    about: 'About / Profile', stats: 'Stats & Highlights', gallery: 'Featured Work',
    collaborations: 'Collaborations', testimonials: 'Testimonials',
    skills: 'Skills', services: 'Services', contact: 'Contact',
  };
  container.innerHTML = Object.entries(state.sections).map(([key, on]) => `
    <div class="toggle-row">
      <span class="toggle-row-label">${labels[key] || key}</span>
      <div class="toggle-switch ${on ? 'on' : ''}" onclick="toggleSection('${key}')">
        <div class="toggle-knob"></div>
      </div>
    </div>
  `).join('');
}

/* ===== GALLERY CRUD ===== */
let currentGalleryThumb = '';

function editGalleryItem(id) {
  const item = state.gallery.find(g => g.id === id);
  if (!item) return;
  $('galleryModalTitle').textContent = 'Edit Project';
  $('gTitle').value = item.title;
  $('gBrand').value = item.brand;
  $('gCategory').value = item.category;
  $('gDesc').value = item.desc;
  $('gStats').value = item.stats;
  $('galleryThumbPreview').src = item.thumb || '';
  currentGalleryThumb = item.thumb || '';
  $('galleryModal').dataset.editId = id;
  openModal('galleryModal');
}

function deleteGalleryItem(id) {
  state.gallery = state.gallery.filter(g => g.id !== id);
  renderGalleryEditorList();
  renderGallery();
  showToast('Project removed', '🗑️');
}

window.editGalleryItem = editGalleryItem;
window.deleteGalleryItem = deleteGalleryItem;

/* ===== COLLAB CRUD ===== */
function editCollab(id) {
  const item = state.collabs.find(c => c.id === id);
  if (!item) return;
  $('collabModalTitle').textContent = 'Edit Collaboration';
  $('cBrand').value = item.brand;
  $('cCampaign').value = item.campaign;
  $('cDesc').value = item.desc;
  $('cReach').value = item.reach;
  $('cViews').value = item.views;
  $('cER').value = item.er;
  $('cEmoji').value = item.emoji || '';
  $('collabModal').dataset.editId = id;
  openModal('collabModal');
}

function deleteCollab(id) {
  state.collabs = state.collabs.filter(c => c.id !== id);
  renderCollabEditorList();
  renderCollabs();
  showToast('Collaboration removed', '🗑️');
}

window.editCollab = editCollab;
window.deleteCollab = deleteCollab;

/* ===== TESTIMONIAL CRUD ===== */
function editTestimonial(id) {
  const item = state.testimonials.find(t => t.id === id);
  if (!item) return;
  $('testimonialModalTitle').textContent = 'Edit Testimonial';
  $('tName').value = item.name;
  $('tCompany').value = item.company;
  $('tRating').value = item.rating;
  $('tReview').value = item.review;
  $('testimonialModal').dataset.editId = id;
  openModal('testimonialModal');
}

function deleteTestimonial(id) {
  state.testimonials = state.testimonials.filter(t => t.id !== id);
  renderTestimonialEditorList();
  renderTestimonials();
  showToast('Testimonial removed', '🗑️');
}

window.editTestimonial = editTestimonial;
window.deleteTestimonial = deleteTestimonial;

/* ===== SERVICE CRUD ===== */
function editService(id) {
  const item = state.services.find(s => s.id === id);
  if (!item) return;
  $('sIcon').value = item.icon;
  $('sName').value = item.name;
  $('sDesc').value = item.desc;
  $('sPrice').value = item.price;
  $('serviceModal').dataset.editId = id;
  openModal('serviceModal');
}

function deleteService(id) {
  state.services = state.services.filter(s => s.id !== id);
  renderServiceEditorList();
  renderServices();
  showToast('Service removed', '🗑️');
}

window.editService = editService;
window.deleteService = deleteService;

/* ===== STAT UPDATE ===== */
window.updateStat = function(i, field, val) {
  state.stats[i][field] = val;
  if (field === 'value') state.stats[i].raw = parseFloat(val) || 0;
  renderStats();
};

/* ===== SKILL ACTIONS ===== */
window.removeSkill = function(i) {
  state.skills.splice(i, 1);
  renderSkillsEditor();
  renderSkills();
};

/* ===== SECTION TOGGLE ===== */
window.toggleSection = function(key) {
  state.sections[key] = !state.sections[key];
  renderSectionToggles();
  renderSections();
};

/* ===== PROFILE INPUT LISTENERS ===== */
function bindProfileInputs() {
  const map = [
    ['creatorName', 'name'],
    ['creatorProfession', 'profession'],
    ['creatorBio', 'bio'],
    ['creatorLocation', 'location'],
    ['creatorEmail', 'email'],
    ['creatorWebsite', 'website'],
    ['ctaLabel', 'ctaLabel'],
  ];
  map.forEach(([elId, key]) => {
    const el = $(elId);
    if (el) {
      el.value = state.profile[key] || '';
      el.addEventListener('input', () => {
        state.profile[key] = el.value;
        renderProfile();
      });
    }
  });

  // Socials
  const socialMap = [
    ['socialInstagram', 'instagram'],
    ['socialYoutube', 'youtube'],
    ['socialLinkedin', 'linkedin'],
    ['socialX', 'x'],
  ];
  socialMap.forEach(([elId, key]) => {
    const el = $(elId);
    if (el) {
      el.value = state.profile.social[key] || '';
      el.addEventListener('input', () => {
        state.profile.social[key] = el.value;
        renderProfile();
      });
    }
  });
}

/* ===== CONTACT INPUT LISTENERS ===== */
function bindContactInputs() {
  const fields = ['email', 'phone', 'website', 'instagram', 'youtube', 'linkedin', 'location'];
  fields.forEach(field => {
    const el = $('contact' + field.charAt(0).toUpperCase() + field.slice(1));
    if (el) {
      el.value = state.contact[field] || '';
      el.addEventListener('input', () => {
        state.contact[field] = el.value;
        renderContact();
      });
    }
  });
}

/* ===== AVATAR UPLOAD ===== */
function bindAvatarUpload() {
  const area = $('avatarUploadArea');
  const input = $('avatarInput');
  if (area && input) {
    area.addEventListener('click', () => input.click());
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        state.profile.avatar = ev.target.result;
        $('avatarPreview').src = ev.target.result;
        $('pf-avatar').src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
}

/* ===== GALLERY MODAL ===== */
function bindGalleryModal() {
  $('addGalleryItem')?.addEventListener('click', () => {
    $('galleryModalTitle').textContent = 'Add Project';
    $('gTitle').value = ''; $('gBrand').value = ''; $('gCategory').value = '';
    $('gDesc').value = ''; $('gStats').value = '';
    $('galleryThumbPreview').src = '';
    currentGalleryThumb = '';
    openModal('galleryModal');
  });

  // Thumbnail upload
  $('galleryThumbArea')?.addEventListener('click', () => $('galleryThumbInput').click());
  $('galleryThumbInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      currentGalleryThumb = ev.target.result;
      $('galleryThumbPreview').src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  $('saveGalleryItem')?.addEventListener('click', () => {
    const modal = $('galleryModal');
    const editId = modal.dataset.editId;
    const item = {
      id: editId || uid(),
      thumb: currentGalleryThumb,
      title: $('gTitle').value.trim(),
      brand: $('gBrand').value.trim(),
      category: $('gCategory').value.trim(),
      desc: $('gDesc').value.trim(),
      stats: $('gStats').value.trim(),
    };
    if (!item.title) { showToast('Enter a project title', '⚠️'); return; }
    if (editId) {
      const idx = state.gallery.findIndex(g => g.id === editId);
      if (idx >= 0) state.gallery[idx] = item;
    } else {
      state.gallery.push(item);
    }
    closeModal('galleryModal');
    renderGalleryEditorList();
    renderGallery();
    showToast(editId ? 'Project updated!' : 'Project added!', '🎉');
  });
}

/* ===== COLLAB MODAL ===== */
function bindCollabModal() {
  $('addCollab')?.addEventListener('click', () => {
    $('collabModalTitle').textContent = 'Add Collaboration';
    $('cBrand').value = ''; $('cCampaign').value = ''; $('cDesc').value = '';
    $('cReach').value = ''; $('cViews').value = ''; $('cER').value = ''; $('cEmoji').value = '';
    openModal('collabModal');
  });

  $('saveCollab')?.addEventListener('click', () => {
    const modal = $('collabModal');
    const editId = modal.dataset.editId;
    const item = {
      id: editId || uid(),
      brand: $('cBrand').value.trim(),
      campaign: $('cCampaign').value.trim(),
      desc: $('cDesc').value.trim(),
      reach: $('cReach').value.trim(),
      views: $('cViews').value.trim(),
      er: $('cER').value.trim(),
      emoji: $('cEmoji').value.trim() || '🤝',
    };
    if (!item.brand) { showToast('Enter brand name', '⚠️'); return; }
    if (editId) {
      const idx = state.collabs.findIndex(c => c.id === editId);
      if (idx >= 0) state.collabs[idx] = item;
    } else {
      state.collabs.push(item);
    }
    closeModal('collabModal');
    renderCollabEditorList();
    renderCollabs();
    showToast(editId ? 'Collaboration updated!' : 'Collaboration added!', '🎉');
  });
}

/* ===== TESTIMONIAL MODAL ===== */
function bindTestimonialModal() {
  $('addTestimonial')?.addEventListener('click', () => {
    $('testimonialModalTitle').textContent = 'Add Testimonial';
    $('tName').value = ''; $('tCompany').value = ''; $('tRating').value = 5; $('tReview').value = '';
    openModal('testimonialModal');
  });

  $('saveTestimonial')?.addEventListener('click', () => {
    const modal = $('testimonialModal');
    const editId = modal.dataset.editId;
    const item = {
      id: editId || uid(),
      name: $('tName').value.trim(),
      company: $('tCompany').value.trim(),
      rating: parseInt($('tRating').value) || 5,
      review: $('tReview').value.trim(),
    };
    if (!item.review) { showToast('Enter review text', '⚠️'); return; }
    if (editId) {
      const idx = state.testimonials.findIndex(t => t.id === editId);
      if (idx >= 0) state.testimonials[idx] = item;
    } else {
      state.testimonials.push(item);
    }
    closeModal('testimonialModal');
    renderTestimonialEditorList();
    renderTestimonials();
    showToast(editId ? 'Testimonial updated!' : 'Testimonial added!', '🎉');
  });
}

/* ===== SERVICE MODAL ===== */
function bindServiceModal() {
  $('addService')?.addEventListener('click', () => {
    $('sIcon').value = ''; $('sName').value = ''; $('sDesc').value = ''; $('sPrice').value = '';
    openModal('serviceModal');
  });

  $('saveService')?.addEventListener('click', () => {
    const modal = $('serviceModal');
    const editId = modal.dataset.editId;
    const item = {
      id: editId || uid(),
      icon: $('sIcon').value.trim() || '✦',
      name: $('sName').value.trim(),
      desc: $('sDesc').value.trim(),
      price: $('sPrice').value.trim(),
    };
    if (!item.name) { showToast('Enter service name', '⚠️'); return; }
    if (editId) {
      const idx = state.services.findIndex(s => s.id === editId);
      if (idx >= 0) state.services[idx] = item;
    } else {
      state.services.push(item);
    }
    closeModal('serviceModal');
    renderServiceEditorList();
    renderServices();
    showToast(editId ? 'Service updated!' : 'Service added!', '🎉');
  });
}

/* ===== SKILLS ===== */
function bindSkillsEditor() {
  $('addSkillBtn')?.addEventListener('click', addSkill);
  $('newSkillInput')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') addSkill(); });
}
function addSkill() {
  const input = $('newSkillInput');
  const val = input.value.trim();
  if (!val) return;
  if (state.skills.includes(val)) { showToast('Skill already added', '⚠️'); return; }
  state.skills.push(val);
  input.value = '';
  renderSkillsEditor();
  renderSkills();
  showToast('Skill added!', '✓');
}

/* ===== THEME CONTROLS ===== */
function bindThemeControls() {
  // Mode toggle
  $('darkModeBtn')?.addEventListener('click', () => {
    state.theme.mode = 'dark';
    $('darkModeBtn').classList.add('active');
    $('lightModeBtn').classList.remove('active');
    applyTheme();
  });
  $('lightModeBtn')?.addEventListener('click', () => {
    state.theme.mode = 'light';
    $('lightModeBtn').classList.add('active');
    $('darkModeBtn').classList.remove('active');
    applyTheme();
  });

  // Color pickers
  $('primaryColor')?.addEventListener('input', (e) => {
    state.theme.primary = e.target.value;
    applyTheme();
  });
  $('accentColor')?.addEventListener('input', (e) => {
    state.theme.accent = e.target.value;
    applyTheme();
  });

  // Color presets
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const target = dot.dataset.target;
      const color = dot.dataset.color;
      if (target === 'primary') { state.theme.primary = color; $('primaryColor').value = color; }
      if (target === 'accent') { state.theme.accent = color; $('accentColor').value = color; }
      applyTheme();
    });
  });

  // Font
  $('fontSelect')?.addEventListener('change', (e) => {
    state.theme.font = e.target.value;
    applyTheme();
  });

  // Radius
  document.querySelectorAll('.radius-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.radius-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme.radius = btn.dataset.radius;
      applyTheme();
    });
  });
}

/* ===== EDITOR NAV TABS ===== */
function bindEditorNav() {
  document.querySelectorAll('.enav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.enav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = btn.dataset.section;
      document.querySelectorAll('.editor-section').forEach(s => s.classList.remove('active'));
      $(`editor-${section}`)?.classList.add('active');
      // Refresh section-specific editors
      if (section === 'sections') renderSectionToggles();
      if (section === 'stats') renderStatsEditor();
      if (section === 'skills') renderSkillsEditor();
    });
  });
}

/* ===== TOPBAR TABS (mobile) ===== */
function bindTopbarTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      const editor = $('editorPanel');
      const preview = $('previewPanel');
      if (tab === 'editor') {
        editor.dataset.hidden = 'false';
        preview.dataset.hidden = 'true';
        editor.style.display = '';
        preview.style.display = 'none';
      } else {
        editor.dataset.hidden = 'true';
        preview.dataset.hidden = 'false';
        editor.style.display = 'none';
        preview.style.display = '';
      }
    });
  });
}

/* ===== MODAL CLOSE ===== */
function bindModalClose() {
  document.querySelectorAll('.modal-close, [data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      if (modalId) closeModal(modalId);
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
}

/* ===== TOPBAR ACTIONS ===== */
function bindTopbarActions() {
  $('resetBtn')?.addEventListener('click', () => {
    if (confirm('Reset all data to defaults?')) {
      location.reload();
    }
  });

  $('copyLinkBtn')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    showToast('Portfolio link copied!', '🔗');
  });

  $('downloadBtn')?.addEventListener('click', () => {
    showToast('Export coming soon! Build with CreatorFolio Pro.', '⬇️');
  });
}

/* ===== INIT ===== */
function init() {
  // Bind all controls
  bindEditorNav();
  bindTopbarTabs();
  bindModalClose();
  bindTopbarActions();
  bindProfileInputs();
  bindContactInputs();
  bindAvatarUpload();
  bindGalleryModal();
  bindCollabModal();
  bindTestimonialModal();
  bindServiceModal();
  bindSkillsEditor();
  bindThemeControls();

  // Render editor lists
  renderGalleryEditorList();
  renderCollabEditorList();
  renderTestimonialEditorList();
  renderServiceEditorList();
  renderStatsEditor();
  renderSkillsEditor();
  renderSectionToggles();

  // Initial full render
  renderAll();

  // Mobile: default to preview hidden until user switches
  if (window.innerWidth <= 768) {
    $('previewPanel').style.display = 'none';
  }

  // Set initial color picker values
  $('primaryColor').value = state.theme.primary;
  $('accentColor').value = state.theme.accent;
}

document.addEventListener('DOMContentLoaded', init);
