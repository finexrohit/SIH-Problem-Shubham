/**
 * STELLAR NEXUS - Lunar Exploration Site Selection & Analysis Platform
 * Smart India Hackathon 2026 (SIH26209)
 */

// --- 1. LUNAR CANDIDATE SITES REPOSITORY ---
const LUNAR_SITES = [
  {
    id: 'shackleton-rim',
    name: 'Shackleton Crater Rim',
    region: 'South Pole',
    category: 'south-pole',
    lat: -89.9,
    lon: 0.0,
    elevationKm: 1.2,
    rawSlopeDeg: 4.2,      // Lower is better (safe landing < 8°)
    rawIllumination: 92,   // % time in sun (Higher is better)
    rawEarthComms: 88,     // % direct-to-earth line of sight
    rawIceDistKm: 0.8,     // Proximity to cold trap PSR (Lower is better)
    rawHazard: 12,         // Boulder / crater roughness % (Lower is better)
    description: 'Located right at the South Pole edge, Shackleton Rim boasts quasi-permanent solar illumination, minimizing energy storage mass while sitting directly above cryogenic ice cold-traps.'
  },
  {
    id: 'malapert-mountain',
    name: 'Malapert Mountain (Peak of Eternal Light)',
    region: 'South Pole',
    category: 'south-pole',
    lat: -84.9,
    lon: 12.9,
    elevationKm: 5.0,
    rawSlopeDeg: 6.5,
    rawIllumination: 95,
    rawEarthComms: 94,
    rawIceDistKm: 4.2,
    rawHazard: 18,
    description: 'A 5km high massif offering near uninterrupted line-of-sight to Earth for high-bandwidth direct communications and supreme solar power collection efficiency.'
  },
  {
    id: 'connecting-ridge',
    name: 'Connecting Ridge',
    region: 'South Pole',
    category: 'south-pole',
    lat: -89.4,
    lon: 222.0,
    elevationKm: 0.8,
    rawSlopeDeg: 3.8,
    rawIllumination: 87,
    rawEarthComms: 82,
    rawIceDistKm: 1.5,
    rawHazard: 9,
    description: 'An exceptionally smooth, low-slope ridge between Shackleton and de Gerlache craters, making it an ideal staging ground for heavy Artemis lunar base infrastructure.'
  },
  {
    id: 'nobile-rim',
    name: 'Nobile Crater Rim (VIPER Site)',
    region: 'South Pole',
    category: 'south-pole',
    lat: -85.2,
    lon: 53.5,
    elevationKm: -1.1,
    rawSlopeDeg: 5.1,
    rawIllumination: 84,
    rawEarthComms: 86,
    rawIceDistKm: 1.1,
    rawHazard: 14,
    description: 'NASA VIPER rover priority landing zone. Features diverse micro-cold traps and accessible slopes for rover mobility between illuminated ridges and shadowed craters.'
  },
  {
    id: 'faustini-rim',
    name: 'Faustini Crater Rim',
    region: 'South Pole',
    category: 'south-pole',
    lat: -87.1,
    lon: 77.0,
    elevationKm: 0.4,
    rawSlopeDeg: 7.2,
    rawIllumination: 79,
    rawEarthComms: 78,
    rawIceDistKm: 0.5,
    rawHazard: 22,
    description: 'Direct access to one of the coldest Permanently Shadowed Regions on the Moon, containing dense surface water-ice spectral signatures.'
  },
  {
    id: 'de-gerlache-rim',
    name: 'De Gerlache Crater Rim',
    region: 'South Pole',
    category: 'south-pole',
    lat: -88.5,
    lon: -88.3,
    elevationKm: 1.6,
    rawSlopeDeg: 5.8,
    rawIllumination: 88,
    rawEarthComms: 83,
    rawIceDistKm: 2.0,
    rawHazard: 15,
    description: 'Elevated crater rim offering expansive views and long illumination windows with manageable traffic corridors toward polar ice reserves.'
  },
  {
    id: 'oceanus-procellarum',
    name: 'Oceanus Procellarum (Ocean of Storms)',
    region: 'Equatorial',
    category: 'equatorial',
    lat: 18.4,
    lon: -57.4,
    elevationKm: -2.4,
    rawSlopeDeg: 1.5,
    rawIllumination: 50,
    rawEarthComms: 100,
    rawIceDistKm: 2800,
    rawHazard: 5,
    description: 'Vast volcanic basalt plain with ultra-smooth terrain and zero landing slope hazard; however, subject to standard 14-day cryogenic lunar nights.'
  },
  {
    id: 'mare-tranquillitatis',
    name: 'Mare Tranquillitatis (Apollo 11 Base)',
    region: 'Equatorial',
    category: 'equatorial',
    lat: 0.67,
    lon: 23.47,
    elevationKm: -1.8,
    rawSlopeDeg: 2.1,
    rawIllumination: 50,
    rawEarthComms: 100,
    rawIceDistKm: 2700,
    rawHazard: 8,
    description: 'Historic low-roughness landing zone with abundant titanium-rich ilmenite minerals and permanent direct line-of-sight to Earth.'
  },
  {
    id: 'aristarchus-plateau',
    name: 'Aristarchus Plateau',
    region: 'Equatorial',
    category: 'equatorial',
    lat: 23.7,
    lon: -47.4,
    elevationKm: 0.9,
    rawSlopeDeg: 8.9,
    rawIllumination: 50,
    rawEarthComms: 98,
    rawIceDistKm: 2600,
    rawHazard: 28,
    description: 'High scientific interest volcanic plateau with pyroclastic glass deposits and sinuous rilles, but challenging terrain slope variability.'
  },
  {
    id: 'von-karman',
    name: 'Von Kármán Crater (Chang\'e 4 Site)',
    region: 'Far Side',
    category: 'far-side',
    lat: -45.5,
    lon: 177.6,
    elevationKm: -3.8,
    rawSlopeDeg: 3.2,
    rawIllumination: 50,
    rawEarthComms: 0,      // Requires Queqiao Relay Satellite
    rawIceDistKm: 1300,
    rawHazard: 11,
    description: 'Located in the South Pole-Aitken Basin on the lunar far side. Shielded from Earth radio interference, making it premier for deep-space radio astronomy.'
  },
  {
    id: 'schrodinger-basin',
    name: 'Schrödinger Basin',
    region: 'Far Side / Polar Margin',
    category: 'far-side',
    lat: -75.0,
    lon: 132.4,
    elevationKm: -2.1,
    rawSlopeDeg: 4.8,
    rawIllumination: 68,
    rawEarthComms: 15,
    rawIceDistKm: 450,
    rawHazard: 16,
    description: 'Well-preserved impact basin exposing deep lunar crustal materials, featuring smooth inner plains and volcanic vent features.'
  }
];

// --- 2. MULTI-CRITERIA DECISION ANALYSIS (MCDA) WEIGHTS & SCORING ENGINE ---
let weights = {
  slope: 0.30,
  sun: 0.25,
  rf: 0.20,
  ice: 0.15,
  hazard: 0.10
};

let currentSelectedSiteId = 'shackleton-rim';
let currentFilter = 'all';
let currentRasterMode = 'composite';
let radarChartInstance = null;

// Calculate normalized sub-scores (0 - 100) for any site
function calculateSiteScores(site) {
  // 1. Slope Score: 0 deg = 100, 15 deg = 0
  const slopeScore = Math.max(0, Math.min(100, (1 - (site.rawSlopeDeg / 15)) * 100));
  
  // 2. Solar Illumination: directly proportional (50% equat = 50, 95% = 95)
  const sunScore = site.rawIllumination;
  
  // 3. Earth RF Line of Sight: 0% = 0, 100% = 100
  const rfScore = site.rawEarthComms;
  
  // 4. Ice Proximity: 0km = 100, 10km+ = 0 (exponential dropoff for distant sites)
  let iceScore = 0;
  if (site.rawIceDistKm <= 10) {
    iceScore = Math.max(0, (1 - (site.rawIceDistKm / 10)) * 100);
  } else {
    iceScore = Math.max(0, 20 - (site.rawIceDistKm / 150));
  }
  
  // 5. Hazard / Smoothness: 0% = 100, 40% = 0
  const hazardScore = Math.max(0, Math.min(100, (1 - (site.rawHazard / 40)) * 100));

  // Weighted Composite MCDA Score
  const totalWeight = weights.slope + weights.sun + weights.rf + weights.ice + weights.hazard;
  const compositeScore = (
    (slopeScore * weights.slope) +
    (sunScore * weights.sun) +
    (rfScore * weights.rf) +
    (iceScore * weights.ice) +
    (hazardScore * weights.hazard)
  ) / (totalWeight || 1);

  return {
    slopeScore: Math.round(slopeScore * 10) / 10,
    sunScore: Math.round(sunScore * 10) / 10,
    rfScore: Math.round(rfScore * 10) / 10,
    iceScore: Math.round(iceScore * 10) / 10,
    hazardScore: Math.round(hazardScore * 10) / 10,
    compositeScore: Math.round(compositeScore * 10) / 10
  };
}

// Update ranked sites
function getRankedSites() {
  const scored = LUNAR_SITES.map(site => {
    const scores = calculateSiteScores(site);
    return { ...site, ...scores };
  });

  return scored.sort((a, b) => b.compositeScore - a.compositeScore);
}

// Preset configurations
const PRESETS = {
  artemis: { slope: 30, sun: 25, rf: 20, ice: 15, hazard: 10, label: 'Artemis Base' },
  rover: { slope: 45, sun: 20, rf: 15, ice: 10, hazard: 10, label: 'Rover Exploration' },
  ice: { slope: 15, sun: 15, rf: 10, ice: 50, hazard: 10, label: 'Water-Ice Mining' },
  radio: { slope: 25, sun: 15, rf: 0, ice: 10, hazard: 50, label: 'Radio Observatory' }
};

function applyMissionPreset(presetKey) {
  if (presetKey === 'custom') return;
  const p = PRESETS[presetKey];
  if (!p) return;

  document.getElementById('w-slope').value = p.slope;
  document.getElementById('w-sun').value = p.sun;
  document.getElementById('w-rf').value = p.rf;
  document.getElementById('w-ice').value = p.ice;
  document.getElementById('w-hazard').value = p.hazard;
  document.getElementById('preset-badge').textContent = p.label;

  updateWeights();
}

function updateWeights() {
  const wSlope = parseInt(document.getElementById('w-slope').value);
  const wSun = parseInt(document.getElementById('w-sun').value);
  const wRf = parseInt(document.getElementById('w-rf').value);
  const wIce = parseInt(document.getElementById('w-ice').value);
  const wHazard = parseInt(document.getElementById('w-hazard').value);

  document.getElementById('val-w-slope').textContent = `${wSlope}%`;
  document.getElementById('val-w-sun').textContent = `${wSun}%`;
  document.getElementById('val-w-rf').textContent = `${wRf}%`;
  document.getElementById('val-w-ice').textContent = `${wIce}%`;
  document.getElementById('val-w-hazard').textContent = `${wHazard}%`;

  weights = {
    slope: wSlope / 100,
    sun: wSun / 100,
    rf: wRf / 100,
    ice: wIce / 100,
    hazard: wHazard / 100
  };

  renderQuickSiteList();
  renderMatrixTable();
  updateActiveHUD();
  updateGlobePins();
}

function resetWeights() {
  applyMissionPreset('artemis');
  document.getElementById('mission-preset-select').value = 'artemis';
}

// --- 3. UI RENDERING & COMPONENT UPDATES ---

function renderQuickSiteList() {
  const container = document.getElementById('quick-site-list');
  if (!container) return;

  const ranked = getRankedSites();
  container.innerHTML = '';

  ranked.slice(0, 6).forEach((site, index) => {
    const isSelected = site.id === currentSelectedSiteId;
    const item = document.createElement('div');
    item.className = `p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
      isSelected
        ? 'bg-cyan-950/70 border-cyan-500 shadow-md shadow-cyan-500/10'
        : 'bg-space-950 border-space-800 hover:border-space-700 hover:bg-space-900'
    }`;
    
    let scoreColor = 'text-emerald-400';
    if (site.compositeScore < 70) scoreColor = 'text-amber-400';
    if (site.compositeScore < 50) scoreColor = 'text-red-400';

    item.innerHTML = `
      <div class="flex items-center gap-2.5">
        <span class="w-5 h-5 rounded-full bg-space-800 text-[10px] font-mono flex items-center justify-center font-bold text-slate-300">#${index + 1}</span>
        <div>
          <h5 class="text-xs font-bold text-white leading-none">${site.name}</h5>
          <span class="text-[10px] text-slate-400 font-mono">${site.region} • ${site.lat > 0 ? site.lat + '°N' : Math.abs(site.lat) + '°S'}</span>
        </div>
      </div>
      <div class="text-right">
        <span class="text-sm font-mono font-bold ${scoreColor}">${site.compositeScore}</span>
      </div>
    `;

    item.onclick = () => {
      selectSite(site.id);
      focusOnSite(site.id);
    };

    container.appendChild(item);
  });
}

function renderMatrixTable() {
  const tbody = document.getElementById('matrix-table-body');
  if (!tbody) return;

  const query = (document.getElementById('matrix-search')?.value || '').toLowerCase();
  const ranked = getRankedSites();
  tbody.innerHTML = '';

  const filtered = ranked.filter(s => 
    s.name.toLowerCase().includes(query) || 
    s.region.toLowerCase().includes(query)
  );

  filtered.forEach((site, index) => {
    const tr = document.createElement('tr');
    tr.className = 'matrix-row border-b border-space-800/80 hover:bg-space-850/60';

    let scoreBadge = 'bg-emerald-950 text-emerald-300 border-emerald-600/50';
    if (site.compositeScore < 70) scoreBadge = 'bg-amber-950 text-amber-300 border-amber-600/50';
    if (site.compositeScore < 50) scoreBadge = 'bg-red-950 text-red-300 border-red-600/50';

    tr.innerHTML = `
      <td class="p-3 font-bold text-slate-400">#${index + 1}</td>
      <td class="p-3 font-semibold text-white">${site.name}</td>
      <td class="p-3 text-slate-300">${site.region}</td>
      <td class="p-3 text-cyan-300">${site.lat}° / ${site.lon}°</td>
      <td class="p-3">${site.rawSlopeDeg}° (${site.rawSlopeDeg < 6 ? '<span class="text-emerald-400">Safe</span>' : '<span class="text-amber-400">Moderate</span>'})</td>
      <td class="p-3 text-amber-300 font-bold">${site.rawIllumination}%</td>
      <td class="p-3 text-blue-300">${site.rawEarthComms}%</td>
      <td class="p-3 text-purple-300">${site.rawIceDistKm} km</td>
      <td class="p-3 text-right">
        <span class="px-2 py-0.5 rounded text-xs font-bold border ${scoreBadge}">${site.compositeScore}</span>
      </td>
      <td class="p-3 text-center">
        <button onclick="openSiteDetailsModal('${site.id}')" class="px-2.5 py-1 bg-cyan-950 hover:bg-cyan-900 border border-cyan-700/60 text-cyan-300 rounded text-[11px] transition-colors">
          Inspect
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function selectSite(siteId) {
  currentSelectedSiteId = siteId;
  updateActiveHUD();
  renderQuickSiteList();
}

function updateActiveHUD() {
  const site = LUNAR_SITES.find(s => s.id === currentSelectedSiteId);
  if (!site) return;

  const scores = calculateSiteScores(site);

  document.getElementById('hud-region').textContent = site.region;
  document.getElementById('hud-name').textContent = site.name;
  document.getElementById('hud-score').textContent = scores.compositeScore;
  document.getElementById('hud-desc').textContent = site.description;
  document.getElementById('hud-slope').textContent = `${site.rawSlopeDeg}° (${site.rawSlopeDeg < 6 ? 'Safe' : 'Moderate'})`;
  document.getElementById('hud-sun').textContent = `${site.rawIllumination}%`;
  document.getElementById('hud-earth').textContent = `${site.rawEarthComms}%`;
}

function filterSites(cat) {
  currentFilter = cat;
  document.querySelectorAll('.site-filter').forEach(btn => {
    btn.classList.remove('bg-cyan-950', 'text-cyan-300', 'border', 'border-cyan-700/60');
    btn.classList.add('bg-space-800', 'text-slate-300');
  });
  event.target.classList.remove('bg-space-800', 'text-slate-300');
  event.target.classList.add('bg-cyan-950', 'text-cyan-300', 'border', 'border-cyan-700/60');

  updateGlobePins();
}

// --- 4. VIEW NAVIGATION ---

function switchView(viewName) {
  document.querySelectorAll('.view-panel').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active-tab'));
  document.querySelectorAll('.mobile-nav-btn').forEach(el => {
    el.classList.remove('bg-space-800', 'text-cyan-300');
    el.classList.add('bg-space-850', 'text-slate-400');
  });

  const targetView = document.getElementById(`view-${viewName}`);
  const targetTab = document.getElementById(`tab-${viewName}`);
  
  if (targetView) targetView.classList.remove('hidden');
  if (targetTab) targetTab.classList.add('active-tab');

  if (viewName === 'heatmap') {
    renderRasterCanvas();
  }
  if (viewName === 'matrix') {
    renderMatrixTable();
  }
  if (viewName === 'globe') {
    onWindowResize();
  }
}

// --- 5. THREE.JS 3D MOON GLOBE & SPHERICAL PROJECTION ---

let scene, camera, renderer, controls, moonMesh, pinsGroup, starsGroup;
let isAutoRotating = true;

function initThreeGlobe() {
  const container = document.getElementById('canvas-container');
  const canvas = document.getElementById('moon-canvas');
  if (!container || !canvas) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || 500;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 4.2);

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // OrbitControls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.8;
  controls.minDistance = 2.0;
  controls.maxDistance = 8.0;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x223344, 0.7);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
  sunLight.position.set(5, 2, 5);
  scene.add(sunLight);

  // Generate Procedural Moon Texture
  const moonTexture = generateProceduralMoonTexture();
  const moonBump = generateProceduralMoonBump();

  // Moon Sphere Geometry
  const sphereGeo = new THREE.SphereGeometry(1.5, 64, 64);
  const sphereMat = new THREE.MeshStandardMaterial({
    map: moonTexture,
    bumpMap: moonBump,
    bumpScale: 0.04,
    roughness: 0.9,
    metalness: 0.1
  });
  moonMesh = new THREE.Mesh(sphereGeo, sphereMat);
  scene.add(moonMesh);

  // Starfield
  starsGroup = createStarfield();
  scene.add(starsGroup);

  // Pins Group
  pinsGroup = new THREE.Group();
  moonMesh.add(pinsGroup);
  updateGlobePins();

  // Raycasting for pin clicks
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  canvas.addEventListener('pointerdown', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pinsGroup.children, true);

    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit && !hit.userData.siteId && hit.parent) {
        hit = hit.parent;
      }
      if (hit && hit.userData.siteId) {
        selectSite(hit.userData.siteId);
        focusOnSite(hit.userData.siteId);
      }
    }
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    if (isAutoRotating && moonMesh) {
      moonMesh.rotation.y += 0.0012;
    }

    // Update lat/lon readout based on camera angle
    updateCameraCoords();

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', onWindowResize);
}

function updateCameraCoords() {
  const coordsEl = document.getElementById('camera-coords');
  if (!coordsEl || !camera) return;

  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  
  const lat = Math.asin(dir.y) * (180 / Math.PI);
  const lon = Math.atan2(dir.x, -dir.z) * (180 / Math.PI);

  coordsEl.textContent = `LAT: ${lat.toFixed(1)}° • LON: ${lon.toFixed(1)}°`;
}

function updateGlobePins() {
  if (!pinsGroup) return;

  while (pinsGroup.children.length > 0) {
    pinsGroup.remove(pinsGroup.children[0]);
  }

  const ranked = getRankedSites();

  ranked.forEach(site => {
    if (currentFilter !== 'all' && site.category !== currentFilter) return;

    // Convert lat/lon to 3D Cartesian coordinates
    const radius = 1.52;
    const phi = (90 - site.lat) * (Math.PI / 180);
    const theta = (site.lon + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    const pinContainer = new THREE.Group();
    pinContainer.position.set(x, y, z);
    pinContainer.lookAt(0, 0, 0);

    // Glowing Pin Marker
    const isSelected = site.id === currentSelectedSiteId;
    const pinColor = isSelected ? 0x00f2fe : (site.compositeScore > 85 ? 0x00e676 : 0xffb300);

    const pinGeo = new THREE.SphereGeometry(0.028, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: pinColor });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);

    // Outer Ring
    const ringGeo = new THREE.RingGeometry(0.04, 0.055, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: pinColor, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);

    pinContainer.add(pinMesh);
    pinContainer.add(ringMesh);
    pinContainer.userData = { siteId: site.id };

    pinsGroup.add(pinContainer);
  });
}

function focusOnSite(siteId) {
  const site = LUNAR_SITES.find(s => s.id === siteId);
  if (!site || !moonMesh) return;

  isAutoRotating = false;
  document.getElementById('btn-rotate').innerHTML = '<i data-lucide="play" class="w-4 h-4"></i>';
  lucide.createIcons();

  // Target rotation
  const phi = (90 - site.lat) * (Math.PI / 180);
  const theta = (site.lon + 180) * (Math.PI / 180);

  // Smooth camera orbit
  const dist = 3.0;
  const targetX = dist * Math.sin(phi) * Math.cos(theta);
  const targetY = dist * Math.cos(phi);
  const targetZ = -dist * Math.sin(phi) * Math.sin(theta);

  camera.position.set(targetX, targetY, targetZ);
  controls.target.set(0, 0, 0);
  camera.lookAt(0, 0, 0);
}

function toggleMoonRotation() {
  isAutoRotating = !isAutoRotating;
  const btn = document.getElementById('btn-rotate');
  btn.innerHTML = isAutoRotating 
    ? '<i data-lucide="pause" class="w-4 h-4"></i>' 
    : '<i data-lucide="play" class="w-4 h-4"></i>';
  lucide.createIcons();
}

function resetCameraView() {
  camera.position.set(0, 0, 4.2);
  controls.target.set(0, 0, 0);
}

function onWindowResize() {
  const container = document.getElementById('canvas-container');
  if (!container || !renderer || !camera) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Procedural Moon Texture Generator (High-Detail Canvas Texture)
function generateProceduralMoonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base Lunar Regolith
  ctx.fillStyle = '#8a939e';
  ctx.fillRect(0, 0, 1024, 512);

  // Maria Basalt Plains (Dark Patches)
  ctx.fillStyle = '#4c525c';
  const maria = [
    { x: 300, y: 200, r: 90 }, // Mare Imbrium
    { x: 230, y: 260, r: 80 }, // Oceanus Procellarum
    { x: 450, y: 220, r: 65 }, // Mare Serenitatis
    { x: 540, y: 240, r: 75 }, // Mare Tranquillitatis
    { x: 620, y: 280, r: 50 }, // Mare Fecunditatis
    { x: 600, y: 190, r: 40 }, // Mare Crisium
    { x: 420, y: 320, r: 55 }  // Mare Nectaris
  ];

  maria.forEach(m => {
    const grad = ctx.createRadialGradient(m.x, m.y, 10, m.x, m.y, m.r);
    grad.addColorStop(0, '#363c46');
    grad.addColorStop(0.7, '#4c535e');
    grad.addColorStop(1, '#8a939e00');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Random Craters & High-Albedo Rays
  for (let i = 0; i < 300; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 512;
    const cr = 2 + Math.random() * 12;

    ctx.fillStyle = 'rgba(30, 35, 45, 0.6)';
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(230, 240, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Polar Caps (Bright icy scatter)
  const polarGradNorth = ctx.createLinearGradient(0, 0, 0, 60);
  polarGradNorth.addColorStop(0, 'rgba(230, 245, 255, 0.4)');
  polarGradNorth.addColorStop(1, 'rgba(230, 245, 255, 0)');
  ctx.fillStyle = polarGradNorth;
  ctx.fillRect(0, 0, 1024, 60);

  const polarGradSouth = ctx.createLinearGradient(0, 452, 0, 512);
  polarGradSouth.addColorStop(0, 'rgba(230, 245, 255, 0)');
  polarGradSouth.addColorStop(1, 'rgba(230, 245, 255, 0.5)');
  ctx.fillStyle = polarGradSouth;
  ctx.fillRect(0, 452, 1024, 60);

  return new THREE.CanvasTexture(canvas);
}

function generateProceduralMoonBump() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 256);

  for (let i = 0; i < 200; i++) {
    const cx = Math.random() * 512;
    const cy = Math.random() * 256;
    const cr = 3 + Math.random() * 15;

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
}

function createStarfield() {
  const group = new THREE.Group();
  const starGeo = new THREE.BufferGeometry();
  const starCount = 800;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 80;
    positions[i + 1] = (Math.random() - 0.5) * 80;
    positions[i + 2] = (Math.random() - 0.5) * 80;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0x88bbff, size: 0.15, transparent: true, opacity: 0.8 });
  const stars = new THREE.Points(starGeo, starMat);
  group.add(stars);

  return group;
}

// --- 6. 2D GEOSPATIAL RASTER HEATMAP CANVAS ---

function setRasterLayer(layerKey) {
  currentRasterMode = layerKey;
  document.querySelectorAll('.raster-tab').forEach(btn => {
    btn.classList.remove('bg-cyan-950', 'text-cyan-300', 'border', 'border-cyan-600');
    btn.classList.add('bg-space-800', 'text-slate-300');
  });
  event.target.classList.remove('bg-space-800', 'text-slate-300');
  event.target.classList.add('bg-cyan-950', 'text-cyan-300', 'border', 'border-cyan-600');

  const titleEl = document.getElementById('raster-legend-title');
  const barEl = document.getElementById('raster-legend-bar');

  if (layerKey === 'composite') {
    titleEl.textContent = 'Composite Suitability Score (0 - 100)';
    barEl.className = 'w-36 h-3 rounded bg-gradient-to-r from-red-600 via-amber-500 via-yellow-400 to-emerald-400';
  } else if (layerKey === 'dem') {
    titleEl.textContent = 'LOLA Elevation Topography (-8 km to +6 km)';
    barEl.className = 'w-36 h-3 rounded bg-gradient-to-r from-blue-900 via-teal-600 via-yellow-200 to-white';
  } else if (layerKey === 'slope') {
    titleEl.textContent = 'Slope Safety Gradient (0° Safe to >25° Severe Hazard)';
    barEl.className = 'w-36 h-3 rounded bg-gradient-to-r from-emerald-500 via-amber-500 to-red-700';
  } else if (layerKey === 'sun') {
    titleEl.textContent = 'Solar Illumination & PSR Cold Traps (0% Dark to 100% Sun)';
    barEl.className = 'w-36 h-3 rounded bg-gradient-to-r from-purple-900 via-blue-700 via-amber-400 to-yellow-100';
  } else if (layerKey === 'rf') {
    titleEl.textContent = 'Earth Direct-to-Earth (DTE) RF Line-of-Sight Visibility';
    barEl.className = 'w-36 h-3 rounded bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-400';
  }

  renderRasterCanvas();
}

function renderRasterCanvas() {
  const canvas = document.getElementById('raster-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth || 800;
  canvas.height = canvas.parentElement.clientHeight || 450;

  const w = canvas.width;
  const h = canvas.height;

  // Background map simulation
  const imgData = ctx.createImageData(w, h);
  const data = imgData.data;

  for (let py = 0; py < h; py++) {
    const lat = 90 - (py / h) * 180;
    const absLat = Math.abs(lat);

    for (let px = 0; px < w; px++) {
      const lon = (px / w) * 360 - 180;
      const idx = (py * w + px) * 4;

      // Synthetic Multi-Spectral Layer Calculations
      let val = 0;
      let r = 0, g = 0, b = 0;

      if (currentRasterMode === 'composite') {
        // High score near south pole peaks (lat < -80) and low roughness maria
        const polarBoost = (lat < -75) ? 80 + (Math.sin(lon * 0.1) * 15) : 45 + (Math.cos(lat * 0.05) * 20);
        val = Math.max(10, Math.min(98, polarBoost));
        
        // Color gradient: Red -> Yellow -> Emerald
        if (val < 50) {
          r = 220; g = Math.floor((val / 50) * 180); b = 40;
        } else {
          r = Math.floor((1 - (val - 50) / 50) * 200); g = 220; b = 80;
        }
      } else if (currentRasterMode === 'dem') {
        // Topography: Deep basins at South Pole Aitken, high crater rims
        val = Math.sin(lat * 0.08) * Math.cos(lon * 0.05) * 50 + 50;
        r = Math.floor(val * 1.5);
        g = Math.floor(val * 2.0);
        b = Math.floor(val * 2.5);
      } else if (currentRasterMode === 'slope') {
        // High slopes at crater rims, smooth at maria
        const slopeDeg = (Math.abs(Math.sin(lat * 0.2) * Math.sin(lon * 0.2)) * 20) + (absLat > 80 ? 4 : 2);
        if (slopeDeg < 6) {
          r = 0; g = 200; b = 100;
        } else if (slopeDeg < 12) {
          r = 240; g = 180; b = 20;
        } else {
          r = 230; g = 40; b = 40;
        }
      } else if (currentRasterMode === 'sun') {
        // Polar permanent shadow vs peak light
        if (lat < -80) {
          val = (Math.sin(lon * 0.2) > 0.3) ? 92 : 5; // Peaks vs PSRs
          if (val > 80) { r = 255; g = 220; b = 100; } // High sun
          else { r = 120; g = 40; b = 180; }          // Cold trap PSR
        } else {
          r = 180; g = 180; b = 120;
        }
      } else if (currentRasterMode === 'rf') {
        // Far side has 0 direct Earth LOS
        const isFarSide = Math.abs(lon) > 90;
        if (isFarSide) {
          r = 20; g = 30; b = 50;
        } else {
          r = 30; g = 160; b = 240;
        }
      }

      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Draw Grid Lines (Equator & Poles)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  // Equator
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();

  // Prime Meridian
  ctx.beginPath();
  ctx.moveTo(w / 2, 0);
  ctx.lineTo(w / 2, h);
  ctx.stroke();
  ctx.setLineDash([]);

  // Plot Candidate Site Pins on 2D map
  LUNAR_SITES.forEach(site => {
    const sx = ((site.lon + 180) / 360) * w;
    const sy = ((90 - site.lat) / 180) * h;

    ctx.fillStyle = '#00f2fe';
    ctx.beginPath();
    ctx.arc(sx, sy, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '10px "JetBrains Mono"';
    ctx.fillText(site.name, sx + 8, sy + 3);
  });
}

// --- 7. CUSTOM COORDINATE EVALUATOR ---

function evaluateCustomCoordinate(e) {
  e.preventDefault();
  const lat = parseFloat(document.getElementById('custom-lat').value);
  const lon = parseFloat(document.getElementById('custom-lon').value);

  // Synthesize realistic physical parameters based on lunar geography
  const absLat = Math.abs(lat);
  const isSouthPole = lat <= -70;
  const isFarSide = Math.abs(lon) > 90;

  // 1. Slope estimation
  let slope = 3.5 + Math.abs(Math.sin(lat * 0.15) * 5.5);
  slope = Math.round(slope * 10) / 10;

  // 2. Solar Illumination estimation
  let sun = 50;
  if (isSouthPole) {
    sun = Math.round(75 + (Math.abs(Math.sin(lon * 0.1)) * 20));
  }

  // 3. Earth Direct LOS
  let rf = isFarSide ? 0 : Math.round(Math.max(0, Math.cos(lat * Math.PI / 180) * 100));
  if (isSouthPole && !isFarSide) rf = 82;

  // 4. PSR Cold Trap Proximity
  let iceDist = isSouthPole ? Math.round((Math.abs(lat + 90) * 30 + 1) * 10) / 10 : 2500;

  // Hazard
  const hazard = Math.round(10 + Math.abs(Math.cos(lon * 0.2)) * 15);

  const mockSite = {
    id: 'custom-site',
    name: `Evaluated Site (${lat.toFixed(2)}°, ${lon.toFixed(2)}°)`,
    rawSlopeDeg: slope,
    rawIllumination: sun,
    rawEarthComms: rf,
    rawIceDistKm: iceDist,
    rawHazard: hazard
  };

  const scores = calculateSiteScores(mockSite);

  // Update UI Result Card
  document.getElementById('eval-header-region').textContent = isSouthPole ? 'Lunar South Pole Region' : (isFarSide ? 'Lunar Far Side' : 'Lunar Near Side / Equatorial');
  document.getElementById('eval-header-title').textContent = `Evaluated Point: ${lat.toFixed(3)}°N, ${lon.toFixed(3)}°E`;
  document.getElementById('eval-final-score').textContent = scores.compositeScore;
  
  document.getElementById('eval-res-slope').textContent = `${slope}° (${slope < 6 ? 'Safe' : 'Caution'})`;
  document.getElementById('eval-res-sun').textContent = `${sun}%`;
  document.getElementById('eval-res-rf').textContent = `${rf}%`;
  document.getElementById('eval-res-ice').textContent = `${iceDist} km`;

  const verdictTitle = document.getElementById('eval-verdict-title');
  const verdictDesc = document.getElementById('eval-verdict-desc');
  const verdictBox = document.getElementById('eval-verdict-box');

  if (scores.compositeScore >= 80) {
    verdictBox.className = 'p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 flex items-start gap-3';
    verdictTitle.textContent = 'RECOMMENDATION: PRIME CANDIDATE SITE (TIER 1)';
    verdictTitle.className = 'font-bold text-sm block text-emerald-300';
    verdictDesc.textContent = 'Exceptional multi-factor suitability. Favorable terrain slopes ensure safe landing and rover traversal. Stable power generation and communication links present minimal mission risk.';
  } else if (scores.compositeScore >= 60) {
    verdictBox.className = 'p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-3';
    verdictTitle.textContent = 'RECOMMENDATION: SECONDARY SITE (REQUIRES RELAY / THERMAL MGMT)';
    verdictTitle.className = 'font-bold text-sm block text-amber-300';
    verdictDesc.textContent = 'Moderate scientific potential with notable engineering constraints. Long lunar night dormancy or orbital communication relay may be mandatory.';
  } else {
    verdictBox.className = 'p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-red-200 flex items-start gap-3';
    verdictTitle.textContent = 'RECOMMENDATION: HIGH RISK / UNFAVORABLE LANDING ZONE';
    verdictTitle.className = 'font-bold text-sm block text-red-300';
    verdictDesc.textContent = 'Severe terrain slopes or complete communication blackout detected. High landing hazard index exceeds standard autonomous soft-landing tolerances.';
  }
}

// --- 8. SITE DETAILS MODAL & RADAR CHART ---

function openSiteDetailsModal(siteId) {
  const site = LUNAR_SITES.find(s => s.id === siteId);
  if (!site) return;

  const scores = calculateSiteScores(site);

  document.getElementById('modal-name').textContent = site.name;
  document.getElementById('modal-region').textContent = site.region;
  document.getElementById('modal-coords').textContent = `${site.lat > 0 ? site.lat + '° N' : Math.abs(site.lat) + '° S'}, ${site.lon > 0 ? site.lon + '° E' : Math.abs(site.lon) + '° W'} (Elev: ${site.elevationKm} km)`;
  document.getElementById('modal-slope').textContent = `${site.rawSlopeDeg}° (${site.rawSlopeDeg < 6 ? 'Safe' : 'Caution'})`;
  document.getElementById('modal-sun').textContent = `${site.rawIllumination}% Persistent`;
  document.getElementById('modal-earth').textContent = `${site.rawEarthComms}% Line-of-Sight`;
  document.getElementById('modal-ice').textContent = `${site.rawIceDistKm} km to Cold Trap`;
  document.getElementById('modal-score').textContent = `${scores.compositeScore} / 100`;
  document.getElementById('modal-description').textContent = site.description;

  document.getElementById('site-modal').classList.remove('hidden');

  renderRadarChart(scores);
}

function closeSiteDetailsModal() {
  document.getElementById('site-modal').classList.add('hidden');
}

function renderRadarChart(scores) {
  const ctx = document.getElementById('radar-chart');
  if (!ctx) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Slope Safety', 'Solar Power', 'Earth RF Comms', 'Ice / ISRU', 'Low Roughness'],
      datasets: [{
        label: 'Site Performance Index',
        data: [scores.slopeScore, scores.sunScore, scores.rfScore, scores.iceScore, scores.hazardScore],
        backgroundColor: 'rgba(0, 242, 254, 0.25)',
        borderColor: '#00f2fe',
        pointBackgroundColor: '#00e676',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#00f2fe'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: {
            color: '#94a3b8',
            font: { family: '"JetBrains Mono"', size: 10 }
          },
          ticks: {
            backdropColor: 'transparent',
            color: '#64748b',
            stepSize: 20,
            max: 100,
            min: 0
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// --- 9. REPORT EXPORTERS ---

function exportSiteReport() {
  const ranked = getRankedSites();
  const report = {
    project: 'Lunar Exploration Site Selection & Analysis Platform',
    team: 'Stellar Nexus (SIH 2026)',
    problemStatement: 'SIH26209 - Space Technology',
    generatedAt: new Date().toISOString(),
    activeWeights: weights,
    rankedCandidates: ranked.map((s, idx) => ({
      rank: idx + 1,
      name: s.name,
      region: s.region,
      coordinates: { lat: s.lat, lon: s.lon, elevationKm: s.elevationKm },
      parameters: {
        slopeDeg: s.rawSlopeDeg,
        illuminationPercent: s.rawIllumination,
        earthCommsPercent: s.rawEarthComms,
        iceProximityKm: s.rawIceDistKm,
        hazardRoughnessPercent: s.rawHazard
      },
      scores: {
        compositeScore: s.compositeScore,
        slopeScore: s.slopeScore,
        sunScore: s.sunScore,
        rfScore: s.rfScore,
        iceScore: s.iceScore,
        hazardScore: s.hazardScore
      }
    }))
  };

  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `StellarNexus_SIH26209_Lunar_Report_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportSingleSite(siteId) {
  const site = LUNAR_SITES.find(s => s.id === siteId);
  if (!site) return;
  const scores = calculateSiteScores(site);

  const content = `# STELLAR NEXUS - LUNAR SITE DOSSIER
**Site Name:** ${site.name}
**Region:** ${site.region}
**Coordinates:** ${site.lat}° N, ${site.lon}° E (Elevation: ${site.elevationKm} km)
**Composite Suitability Score:** ${scores.compositeScore} / 100

---

## 1. Physical & Environmental Parameters
- **Slope Angle:** ${site.rawSlopeDeg}° (Normalized Score: ${scores.slopeScore}/100)
- **Mean Solar Illumination:** ${site.rawIllumination}% (Normalized Score: ${scores.sunScore}/100)
- **Earth Direct-to-Earth Line of Sight:** ${site.rawEarthComms}% (Normalized Score: ${scores.rfScore}/100)
- **PSR Water Ice Cold Trap Proximity:** ${site.rawIceDistKm} km (Normalized Score: ${scores.iceScore}/100)
- **Surface Roughness / Hazard:** ${site.rawHazard}% (Normalized Score: ${scores.hazardScore}/100)

---

## 2. Scientific & Engineering Assessment
${site.description}

*Report generated by Stellar Nexus Decision Platform (Smart India Hackathon 2026 - Problem Statement SIH26209)*
`;

  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${site.id}_dossier.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// --- 10. INITIALIZATION ON DOM READY ---
window.addEventListener('DOMContentLoaded', () => {
  initThreeGlobe();
  renderQuickSiteList();
  renderMatrixTable();
  updateActiveHUD();
});
