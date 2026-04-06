/* ============================================================
   LeafLens — app.js
   ============================================================ */

/* ---- DISEASE DATABASE ---- */
const DISEASES = [
  {
    id: 1, emoji: '🍅', name: 'Late Blight', category: 'fungal', severity: 'high',
    plants: 'Tomatoes, Potatoes',
    desc: 'Late blight is a devastating fungal disease caused by Phytophthora infestans. It thrives in cool, moist conditions and can destroy an entire crop within days if left untreated.',
    symptoms: [
      'Dark brown to black lesions on leaves',
      'Water-soaked, greasy-looking patches',
      'White mould on the underside of leaves in humid conditions',
      'Rapid wilting and collapse of affected tissue',
      'Brown rot on fruits with firm, greasy appearance'
    ],
    treatment: [
      'Remove and destroy all infected plant material immediately',
      'Apply copper-based fungicide or chlorothalonil',
      'Improve air circulation by pruning dense foliage',
      'Avoid overhead watering; water at the base',
      'Rotate crops — do not replant tomatoes or potatoes in the same spot for 3+ years'
    ]
  },
  {
    id: 2, emoji: '🌾', name: 'Powdery Mildew', category: 'fungal', severity: 'medium',
    plants: 'Cucumbers, Squash, Grapes, Roses, Many Vegetables',
    desc: 'Powdery mildew is a widespread fungal disease that appears as a white powdery coating on leaf surfaces. Unlike most fungi, it thrives in dry, warm weather with high humidity.',
    symptoms: [
      'White or grayish powdery spots on leaves and stems',
      'Leaves may yellow and eventually die',
      'Distorted or stunted new growth',
      'Premature leaf drop',
      'Reduced fruit quality and yield'
    ],
    treatment: [
      'Apply a solution of 1 tsp baking soda + 1 qt water + a few drops of soap',
      'Use neem oil spray weekly as a preventive and treatment',
      'Apply sulphur-based fungicide at first sign of infection',
      'Remove heavily infected leaves and dispose of them',
      'Ensure good air circulation around plants'
    ]
  },
  {
    id: 3, emoji: '🌿', name: 'Leaf Rust', category: 'fungal', severity: 'medium',
    plants: 'Wheat, Beans, Roses, Coffee, Asparagus',
    desc: 'Leaf rust is caused by Puccinia and related fungi. It appears as orange, rust-coloured pustules on the underside of leaves. It spreads rapidly through wind-borne spores.',
    symptoms: [
      'Orange-yellow to rust-brown pustules on leaf undersides',
      'Yellowish spots visible on the upper leaf surface',
      'Leaves may turn yellow and fall early',
      'Stunted plant growth',
      'Reduced photosynthesis and plant vigour'
    ],
    treatment: [
      'Apply triazole-based or mancozeb fungicide at first sign',
      'Remove affected leaves and dispose of them far from the garden',
      'Avoid splashing water during irrigation',
      'Plant rust-resistant varieties when possible',
      'Ensure adequate spacing between plants for airflow'
    ]
  },
  {
    id: 4, emoji: '🥦', name: 'Bacterial Spot', category: 'bacterial', severity: 'medium',
    plants: 'Tomatoes, Peppers, Peaches, Plums',
    desc: 'Bacterial spot is caused by Xanthomonas bacteria and is one of the most common bacterial diseases of tomatoes and peppers. It spreads quickly in wet, warm conditions.',
    symptoms: [
      'Small, water-soaked spots on leaves that enlarge',
      'Spots turn brown with yellow halos',
      'Lesions may fall out leaving "shot hole" appearance',
      'Dark, scabby spots on fruit surface',
      'Premature leaf drop leading to sun scalding of fruit'
    ],
    treatment: [
      'Apply copper hydroxide or copper sulphate sprays',
      'Avoid working with plants when foliage is wet',
      'Remove and destroy infected plant debris',
      'Use certified disease-free seeds and transplants',
      'Apply fixed copper bactericides on a regular schedule'
    ]
  },
  {
    id: 5, emoji: '🌻', name: 'Mosaic Virus', category: 'viral', severity: 'high',
    plants: 'Tomatoes, Peppers, Cucumbers, Beans, Squash',
    desc: 'Mosaic virus is a group of viral plant diseases that cause characteristic mosaic-like mottling of leaves. It is primarily spread by aphids and contaminated tools.',
    symptoms: [
      'Mosaic-like mottling of yellow and green on leaves',
      'Leaf distortion, curling, and puckering',
      'Stunted, bushy plant growth',
      'Reduced fruit set and malformed fruits',
      'Fruit may show discolouration or streaking'
    ],
    treatment: [
      'There is no cure — remove and destroy infected plants immediately',
      'Control aphid populations with insecticidal soap',
      'Wash hands and disinfect tools with bleach solution before handling',
      'Use reflective mulch to deter aphid vectors',
      'Plant virus-resistant varieties in the next season'
    ]
  },
  {
    id: 6, emoji: '🍃', name: 'Septoria Leaf Spot', category: 'fungal', severity: 'medium',
    plants: 'Tomatoes, Wheat, Celery',
    desc: 'Septoria leaf spot is caused by the fungus Septoria lycopersici. It appears first on lower leaves and moves upward. It thrives in wet, warm weather and weakens plants significantly.',
    symptoms: [
      'Small, circular spots with dark brown edges and lighter centres',
      'Tiny black pycnidia (spore-producing bodies) visible in lesions',
      'Yellowing around spots and eventual defoliation',
      'Disease starts on lower, older leaves first',
      'Spots may merge, killing entire leaves'
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb fungicide',
      'Mulch around plant base to prevent soil splash-up',
      'Remove lower leaves that touch the ground',
      'Water at the base and avoid wetting foliage',
      'Practice 3-year crop rotation'
    ]
  },
  {
    id: 7, emoji: '🥬', name: 'Downy Mildew', category: 'fungal', severity: 'high',
    plants: 'Cucumbers, Lettuce, Spinach, Brassicas, Grapes',
    desc: 'Downy mildew is caused by Plasmopara, Peronospora, and related water moulds. Unlike powdery mildew, it thrives in cool, wet conditions and affects the underside of leaves.',
    symptoms: [
      'Yellow or brown patches on upper leaf surface',
      'Grey-white, downy growth on the underside of leaves',
      'Lesions bounded by leaf veins in a geometric pattern',
      'Leaves may eventually shrivel and die',
      'Rapid spread in cool, humid conditions'
    ],
    treatment: [
      'Apply copper-based fungicide or fosetyl-aluminium',
      'Improve ventilation and reduce humidity in greenhouses',
      'Avoid overhead irrigation',
      'Remove infected plant material promptly',
      'Plant resistant cultivars where available'
    ]
  },
  {
    id: 8, emoji: '🌱', name: 'Root Rot', category: 'fungal', severity: 'high',
    plants: 'Most plant species — especially in pots and poorly drained soil',
    desc: 'Root rot is caused by several soilborne fungi including Pythium, Phytophthora, and Rhizoctonia. Overwatering is the primary contributing factor.',
    symptoms: [
      'Wilting despite moist soil',
      'Yellowing and drooping leaves',
      'Soft, mushy, brown or black roots',
      'Foul smell from the soil or root zone',
      'Stunted growth and general decline'
    ],
    treatment: [
      'Immediately reduce watering and improve drainage',
      'Remove plant from pot, trim away black/mushy roots',
      'Repot in fresh, well-draining soil with perlite',
      'Apply hydrogen peroxide solution to soil (1:4 with water)',
      'Use a fungicide drench containing fosetyl-aluminium or thiophante-methyl'
    ]
  },
  {
    id: 9, emoji: '🍇', name: 'Anthracnose', category: 'fungal', severity: 'medium',
    plants: 'Grapes, Mangoes, Beans, Cucumbers, Strawberries',
    desc: 'Anthracnose is caused by Colletotrichum fungi. It causes dark, sunken lesions on fruits, leaves, and stems and is favoured by warm, wet weather.',
    symptoms: [
      'Dark brown to black sunken lesions on fruits',
      'Irregular, water-soaked spots on leaves',
      'Pink to orange spore masses in humid conditions',
      'Cankers on stems and twigs',
      'Premature fruit drop'
    ],
    treatment: [
      'Apply mancozeb or copper-based fungicide',
      'Prune out infected wood and dispose of it',
      'Harvest fruit promptly and handle carefully',
      'Improve air circulation',
      'Practice sanitation by removing fallen leaves and fruit'
    ]
  },
  {
    id: 10, emoji: '🌵', name: 'Whitefly Infestation', category: 'pest', severity: 'medium',
    plants: 'Tomatoes, Peppers, Cucumbers, Ornamentals',
    desc: 'Whiteflies are tiny sap-sucking insects that cluster on the undersides of leaves. They excrete sticky honeydew that promotes sooty mould and can transmit viral diseases.',
    symptoms: [
      'Tiny white insects that fly when plant is disturbed',
      'Yellowing and wilting of leaves',
      'Sticky honeydew on leaves and surfaces',
      'Black sooty mould growing on honeydew',
      'Stunted plant growth'
    ],
    treatment: [
      'Apply insecticidal soap or neem oil spray to undersides of leaves',
      'Use yellow sticky traps to monitor and reduce populations',
      'Introduce natural predators (Encarsia formosa wasps)',
      'Apply pyrethroids as a last resort',
      'Remove heavily infested leaves'
    ]
  },
  {
    id: 11, emoji: '🍀', name: 'Crown Gall', category: 'bacterial', severity: 'high',
    plants: 'Roses, Fruit Trees, Grapes, Ornamentals',
    desc: 'Crown gall is caused by Agrobacterium tumefaciens. The bacteria genetically transform plant cells, causing them to produce tumour-like growths at the crown and roots.',
    symptoms: [
      'Rough, irregularly shaped galls at the crown or roots',
      'Galls start soft and white, later turn woody and brown',
      'Stunted growth and reduced vigour',
      'Yellowing of foliage',
      'Early decline and death in severe cases'
    ],
    treatment: [
      'No cure — remove and destroy infected plants',
      'Do not replant susceptible species in the same location for 3+ years',
      'Apply biological control (Agrobacterium radiobacter K84) at planting',
      'Disinfect tools with 10% bleach solution',
      'Purchase certified disease-free planting material'
    ]
  },
  {
    id: 12, emoji: '🌾', name: 'Fusarium Wilt', category: 'fungal', severity: 'high',
    plants: 'Tomatoes, Bananas, Carnations, Melons',
    desc: 'Fusarium wilt is caused by Fusarium oxysporum, a soil-dwelling fungus that invades the vascular system of plants. It blocks water transport, causing rapid wilting.',
    symptoms: [
      'Sudden wilting of entire plant or individual branches',
      'Yellowing starting on one side of the plant',
      'Brown discolouration of vascular tissue when stem is cut',
      'Stunted growth in young plants',
      'Plant death in severe cases'
    ],
    treatment: [
      'No effective chemical cure — remove infected plants',
      'Solarise soil with clear plastic sheeting for 4–6 weeks',
      'Plant Fusarium-resistant varieties',
      'Raise soil pH slightly with lime to reduce fungal activity',
      'Practice 4+ year crop rotation'
    ]
  }
];

/* ---- FAQ DATA ---- */
const FAQS = [
  {
    q: 'How accurate is the disease detection?',
    a: 'Our AI-powered analysis achieves approximately 92–97% accuracy on high-quality images. Accuracy can be lower for rare diseases, early-stage infections, or poor-quality photos. Always verify with a professional for critical decisions.'
  },
  {
    q: 'What types of plants can be analysed?',
    a: 'LeafLens supports over 200 plant species including common vegetables (tomatoes, peppers, cucumbers), fruits, ornamentals, and field crops. The disease library is continuously expanding.'
  },
  {
    q: 'Are my uploaded photos stored?',
    a: 'No. Photos are analysed in real time and immediately discarded. We do not retain or share any images you upload to our service.'
  },
  {
    q: 'Can I use LeafLens on my mobile phone?',
    a: 'Yes! LeafLens is fully responsive and works on all modern mobile browsers. You can even take a photo and upload it directly from your camera.'
  },
  {
    q: 'Is LeafLens free to use?',
    a: 'Yes, LeafLens is completely free with no account required. Simply visit the Detector page and upload your leaf photo.'
  },
  {
    q: 'What makes a good photo for detection?',
    a: 'Use natural daylight, focus on the affected leaf area, keep the camera steady to avoid blur, and ensure the entire leaf is visible. Both sides of the leaf can be photographed for more accurate results.'
  }
];

/* ---- MOCK DETECTION RESULTS ---- */
const DETECTION_RESULTS = [
  {
    name: 'Late Blight', emoji: '🍅', confidence: 91,
    badge: 'Detected', badgeClass: 'severe',
    description: 'Late blight caused by Phytophthora infestans has been detected on this leaf. This aggressive fungal disease can destroy plants within days under the right conditions. Immediate action is recommended.',
    symptoms: ['Dark brown/black lesions', 'Water-soaked patches', 'Rapid tissue collapse', 'White mould on undersides (in humidity)'],
    treatment: ['Remove infected material immediately', 'Apply copper-based fungicide', 'Improve air circulation', 'Avoid overhead watering', 'Practice crop rotation']
  },
  {
    name: 'Powdery Mildew', emoji: '🌾', confidence: 88,
    badge: 'Detected', badgeClass: 'warn',
    description: 'Powdery mildew has been identified on this leaf. This fungal disease is widespread and appears as a white powdery coating. It is treatable if caught early.',
    symptoms: ['White powdery spots on leaf surface', 'Yellowing around spots', 'Distorted new growth', 'Reduced vigour'],
    treatment: ['Apply neem oil or baking soda spray', 'Remove infected leaves', 'Improve ventilation', 'Use sulphur-based fungicide']
  },
  {
    name: 'Healthy Plant', emoji: '✅', confidence: 97,
    badge: 'Healthy', badgeClass: 'healthy',
    description: 'No disease has been detected on this leaf. The plant appears to be in good health with normal colouration, texture, and structure. Continue with regular care practices.',
    symptoms: ['No symptoms detected', 'Leaf colour appears normal', 'No visible lesions or spots'],
    treatment: ['Continue regular watering schedule', 'Ensure proper fertilisation', 'Monitor regularly for early signs of stress', 'Maintain good air circulation']
  },
  {
    name: 'Septoria Leaf Spot', emoji: '🍃', confidence: 84,
    badge: 'Detected', badgeClass: 'warn',
    description: 'Septoria leaf spot has been identified. This fungal disease is characterised by circular spots with dark borders. It spreads upward from lower leaves and is common in wet conditions.',
    symptoms: ['Small circular spots with dark borders', 'Yellowing around lesions', 'Lower leaves affected first', 'Tiny black specks in lesions'],
    treatment: ['Apply chlorothalonil fungicide', 'Mulch around the base', 'Remove lower infected leaves', 'Water at the base only']
  },
  {
    name: 'Bacterial Spot', emoji: '🥦', confidence: 79,
    badge: 'Detected', badgeClass: 'warn',
    description: 'Bacterial spot has been detected. This is a bacterial infection that spreads in warm, wet conditions. The characteristic shot-hole appearance of lesions is a key indicator.',
    symptoms: ['Water-soaked spots with yellow halos', '"Shot-hole" appearance as lesions drop out', 'Dark spots on fruits', 'Premature defoliation'],
    treatment: ['Apply copper-based bactericide', 'Avoid working with wet plants', 'Remove infected debris', 'Use disease-free seeds next season']
  }
];

/* ============================================================
   NAVIGATION TOGGLE
   ============================================================ */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

/* ============================================================
   DETECTOR PAGE
   ============================================================ */
let currentResult = null;

function initDetector() {
  const fileInput  = document.getElementById('fileInput');
  const uploadZone = document.getElementById('uploadZone');
  if (!fileInput) return;

  fileInput.addEventListener('change', handleFileSelect);

  // Drag & drop
  uploadZone.addEventListener('dragover', e => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
  });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) loadPreview(file);
  });
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) loadPreview(file);
}

function loadPreview(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    const img = document.getElementById('previewImage');
    const inner = document.getElementById('uploadInner');
    const btn = document.getElementById('analyzeBtn');
    img.src = ev.target.result;
    img.classList.remove('hidden');
    inner.classList.add('hidden');
    btn.classList.remove('hidden');
    // Reset analysis panel
    resetAnalysisPanel();
  };
  reader.readAsDataURL(file);
}

function resetAnalysisPanel() {
  document.getElementById('analysisIdle').classList.remove('hidden');
  document.getElementById('analysisLoading').classList.add('hidden');
  document.getElementById('analysisResult').classList.add('hidden');
}

function analyzeImage() {
  document.getElementById('analysisIdle').classList.add('hidden');
  document.getElementById('analysisLoading').classList.remove('hidden');
  document.getElementById('analysisResult').classList.add('hidden');
  document.getElementById('analyzeBtn').classList.add('hidden');

  // Simulate progress
  const messages = [
    'Scanning for visual patterns...',
    'Checking for lesions and discolouration...',
    'Comparing with disease database...',
    'Generating diagnosis report...'
  ];
  let progress = 0;
  let msgIdx = 0;
  const bar = document.getElementById('progressBar');
  const msg = document.getElementById('loadingMsg');

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress > 95) progress = 95;
    bar.style.width = progress + '%';
    if (msgIdx < messages.length - 1 && progress > (msgIdx + 1) * 25) {
      msgIdx++;
      msg.textContent = messages[msgIdx];
    }
  }, 300);

  setTimeout(() => {
    clearInterval(interval);
    bar.style.width = '100%';
    setTimeout(() => {
      const result = DETECTION_RESULTS[Math.floor(Math.random() * DETECTION_RESULTS.length)];
      currentResult = result;
      showResult(result);
    }, 400);
  }, 3200);
}

function showResult(result) {
  document.getElementById('analysisLoading').classList.add('hidden');
  const panel = document.getElementById('analysisResult');
  panel.classList.remove('hidden');

  document.getElementById('resultEmoji').textContent = result.emoji;
  document.getElementById('resultName').textContent  = result.name;

  const badge = document.getElementById('resultBadge');
  badge.textContent  = result.badge;
  badge.className    = 'result-badge ' + result.badgeClass;

  // Confidence bar
  document.getElementById('confValue').textContent = result.confidence + '%';
  setTimeout(() => {
    document.getElementById('confBar').style.width = result.confidence + '%';
  }, 100);

  // Tab content
  document.getElementById('tab-description').innerHTML = `<p>${result.description}</p>`;
  document.getElementById('tab-symptoms').innerHTML = `<ul>${result.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>`;
  document.getElementById('tab-treatment').innerHTML = `<ul>${result.treatment.map(t => `<li>${t}</li>`).join('')}</ul>`;

  // Default active tab
  switchTab('description', document.querySelector('.tab-btn'));
}

function switchTab(tab, btn) {
  ['description','symptoms','treatment'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.classList.add('hidden');
  });
  const active = document.getElementById('tab-' + tab);
  if (active) active.classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function resetDetector() {
  const img   = document.getElementById('previewImage');
  const inner = document.getElementById('uploadInner');
  const btn   = document.getElementById('analyzeBtn');
  const fi    = document.getElementById('fileInput');

  img.classList.add('hidden');
  inner.classList.remove('hidden');
  btn.classList.add('hidden');
  if (fi) fi.value = '';
  resetAnalysisPanel();
}

/* ============================================================
   DISEASE LIBRARY
   ============================================================ */
let activeCategory = 'all';

function initLibrary() {
  const grid = document.getElementById('diseaseGrid');
  if (!grid) return;
  renderDiseases(DISEASES);
}

function renderDiseases(list) {
  const grid = document.getElementById('diseaseGrid');
  const none = document.getElementById('noResults');
  grid.innerHTML = '';
  if (!list.length) {
    none.classList.remove('hidden');
    return;
  }
  none.classList.add('hidden');
  list.forEach(d => {
    const card = document.createElement('div');
    card.className = 'disease-lib-card';
    card.dataset.id = d.id;
    card.onclick = () => openModal(d);
    const sevClass = d.severity === 'high' ? 'sev-high' : d.severity === 'medium' ? 'sev-medium' : 'sev-low';
    const catClass = 'cat-' + d.category;
    card.innerHTML = `
      <div class="dlc-top">
        <span class="dlc-emoji">${d.emoji}</span>
        <span class="dlc-cat ${catClass}">${d.category}</span>
      </div>
      <h4>${d.name}</h4>
      <p>${d.desc.slice(0, 90)}...</p>
      <span class="dlc-severity ${sevClass}">
        ${d.severity === 'high' ? '🔴 High Severity' : d.severity === 'medium' ? '🟡 Medium Severity' : '🟢 Low Severity'}
      </span>
    `;
    grid.appendChild(card);
  });
}

function filterDiseases() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  let filtered = DISEASES;
  if (activeCategory !== 'all') filtered = filtered.filter(d => d.category === activeCategory);
  if (query) filtered = filtered.filter(d =>
    d.name.toLowerCase().includes(query) ||
    d.plants.toLowerCase().includes(query) ||
    d.desc.toLowerCase().includes(query)
  );
  renderDiseases(filtered);
}

function filterByCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterDiseases();
}

function openModal(d) {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  document.getElementById('modalEmoji').textContent = d.emoji;
  document.getElementById('modalName').textContent  = d.name;
  document.getElementById('modalDesc').textContent  = d.desc;
  document.getElementById('modalPlants').textContent = d.plants;

  const catEl = document.getElementById('modalCategory');
  catEl.textContent = d.category;
  catEl.className = 'modal-tag cat-' + d.category;

  const sevEl = document.getElementById('modalSeverity');
  const sevMap = { high: ['🔴 High', 'sev-high'], medium: ['🟡 Medium', 'sev-medium'], low: ['🟢 Low', 'sev-low'] };
  sevEl.textContent = sevMap[d.severity][0] + ' Severity';
  sevEl.className = 'modal-severity ' + sevMap[d.severity][1];

  document.getElementById('modalSymptoms').innerHTML = d.symptoms.map(s => `<li>${s}</li>`).join('');
  document.getElementById('modalTreatment').innerHTML = d.treatment.map(t => `<li>${t}</li>`).join('');

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ============================================================
   ABOUT PAGE — FAQ
   ============================================================ */
function initFaq() {
  const list = document.getElementById('faqList');
  if (!list) return;
  FAQS.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span class="faq-arrow">▾</span>
      </div>
      <div class="faq-a">${f.a}</div>
    `;
    list.appendChild(item);
  });
}

function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDetector();
  initLibrary();
  initFaq();
});
