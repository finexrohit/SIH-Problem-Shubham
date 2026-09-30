# 🌕 Stellar Nexus: Lunar Exploration Site Selection & Analysis Platform

> **Smart India Hackathon  (SIH 2026)**  
> **Problem Statement ID:** `SIH26209`  
> **Theme:** Space Technology | **Category:** Software  
> **Team:** Stellar Nexus  

---

## 📌 Executive Summary of the Presentation File (`Stellar Nexus _SIH26209_SIH2026.pptx`)

| Slide # | Slide Title | Core Takeaways & Content |
| :--- | :--- | :--- |
| **Slide 1** | **Title & Metadata** | Identifies the project under SIH2026, Problem Statement `SIH26209` ("Student Innovation - Space Technology"), Team *Stellar Nexus*. |
| **Slide 2** | **Proposed Solution** | Web-based platform to detect terrain, illumination, slope, and surface characteristics using lunar remote-sensing datasets, computing suitability scores and ranking candidate sites on an interactive lunar map. |
| **Slide 3** | **Technical Approach** | Python backend, geospatial data preprocessing (LOLA DEM, LROC WAC, Chandrayaan datasets), weighted MCDA scoring engine, and interactive web visualization. |
| **Slide 4** | **Feasibility & Challenges** | Addresses high data volumes via region-wise/tiled processing; mitigates communication blackouts and thermal extremes using multi-factor safety indices. |
| **Slide 5** | **Impact & Benefits** | Empowers space researchers, mission planners (ISRO/NASA), and students by transforming raw satellite imagery into fast, understandable landing decisions. |
| **Slide 6** | **Research & References** | Uses NASA PDS, LRO, ISRO Chandrayaan-2/3 datasets, and planetary mapping literature. |

---

## 🚀 Live Interactive Web Platform

The built website implements all concepts from the presentation into a high-performance web interface:

1. **3D Lunar Orbital Globe (Three.js WebGL):**
   - Real-time 3D Moon model with craters, elevation bump mapping, day/night solar illumination simulation, and interactive 3D landing site pins.
   - Smooth orbital controls, auto-rotation toggle, and camera orientation coordinates.

2. **Multi-Criteria Decision Analysis (MCDA) Scoring Engine:**
   - Real-time dynamic sliders for **Slope Safety**, **Solar Power Availability**, **Direct Earth Comms LOS**, **Water-Ice / PSR Proximity**, and **Surface Hazard Minimization**.
   - Mission Profile Presets: *Artemis Base Camp*, *Autonomous Rover*, *Water-Ice Mining*, *Far-Side Radio Observatory*.

3. **Geospatial Multi-Spectral Layer Visualizer:**
   - 2D Canvas Map switching between Composite Suitability, LOLA Elevation DEM, Slope Hazard Gradients, Solar Illumination & Cold Traps, and Earth RF Visibility.

4. **Arbitrary Coordinate Evaluator:**
   - Enter any custom Lunar Latitude & Longitude to get an instant physical extraction, score calculation, and mission risk verdict (Safe / Moderate / Hazardous).

5. **Telemetry Modal & Multi-Axis Radar Chart (Chart.js):**
   - Deep-dive site dossiers with 5-axis spider diagrams.

6. **Export Tools:**
   - Download complete mission ranking datasets as JSON or single-site dossiers as Markdown.

---

## 💻 How to Run the Website

### Option 1: Using the Python Server (Recommended)
Run the following command in your terminal:
```bash
python server.py
```
This will automatically launch the platform in your default browser at `http://localhost:8080`.

### Option 2: Direct Browser Launch
You can double-click and open [index.html](file:///c:/Users/rohit/Desktop/Projects/Shubham%20SIH%20Project/index.html) directly in any web browser (Chrome, Edge, Firefox).
