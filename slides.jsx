/* global React */
// All slides for RedMetrics pitch deck
const TOTAL = 16;

// =================================================================
// SLIDE 01 — Cover
// =================================================================
function Slide01Cover() {
  return (
    <SlideFrame label="01 Cover" bg={COLORS.bg} padded={false}>
      <Bathymetry opacity={0.07}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(900px 600px at 22% 70%, rgba(255,0,0,0.18), transparent 65%),
                     radial-gradient(900px 600px at 80% 30%, rgba(0,0,128,0.35), transparent 70%)`,
      }}/>
      <div style={{ position: 'relative', flex: 1, padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 88, height: 88, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.4)' }}>
            <img src="assets/redmetrics-logo.png" alt="" style={{ width: 64, height: 64 }}/>
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em' }}>RedMetrics</div>
            <Eyebrow style={{ fontSize: 18, marginTop: 6 }}>Cassini Hackathon · Challenge 02</Eyebrow>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <Eyebrow color={COLORS.redSoft} style={{ marginBottom: 32 }}>Space for Water · Biological Coastal Pollution</Eyebrow>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 132, fontWeight: 600, lineHeight: 0.98,
            letterSpacing: '-0.035em', margin: 0, color: COLORS.fg, maxWidth: 1500,
          }}>
            Price coastal biological risk<br/>
            <span style={{ color: COLORS.cyan }}>before it surfaces.</span>
          </h1>
          <Body size={36} color={COLORS.fg2} style={{ marginTop: 44, maxWidth: 1280 }}>
            Europe's first prevention-first platform for marine algal blooms — translating
            Copernicus satellite data into a Respiratory Risk Index for hospitals and insurers.
          </Body>

          <div style={{ display: 'flex', gap: 16, marginTop: 56, flexWrap: 'wrap' }}>
            <Chip tone="cyan">Sentinel-2 · CMEMS · ERA5</Chip>
            <Chip tone="slate">Pilot · Ligurian Coast</Chip>
            <Chip tone="red">RRI · 0–100</Chip>
          </div>
        </div>
      </div>
      <SlideFooter num={1} total={TOTAL} section="Introduction" sectionId="INTRO"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 02 — The Invisible Crisis
// =================================================================
function Slide02Crisis() {
  return (
    <SlideFrame label="02 The Invisible Crisis" bg={COLORS.bg}>
      <Bathymetry opacity={0.04}/>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 80, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <SlideHeader eyebrow="Problem · 01" title={<>The water looks perfect.<br/>The air is toxic.</>}/>
          <Body style={{ maxWidth: 760 }}>
            Every summer along the Mediterranean and Adriatic, <i>Ostreopsis cf. ovata</i> blooms
            release ovatoxins. Wave action aerosolises them. Beachgoers inhale invisible
            biological pollutants — without ever touching the water.
          </Body>
          <Body style={{ marginTop: 32, maxWidth: 760, color: COLORS.fg3 }}>
            Mass respiratory and gastrointestinal emergencies follow 5–7 days later. Nobody
            connects the dots between the ocean and the hospital.
          </Body>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          <GlassCard padding={36} style={{ borderColor: 'rgba(255,0,0,0.30)' }}>
            <Eyebrow color={COLORS.redSoft}>Genoa · July 2005</Eyebrow>
            <div style={{ marginTop: 20, fontFamily: 'Space Grotesk, sans-serif', fontSize: 96, fontWeight: 600, color: COLORS.redSoft, lineHeight: 1, letterSpacing: '-0.03em' }}>
              200<span style={{ color: COLORS.fg3, fontSize: 44, marginLeft: 10 }}>+</span>
            </div>
            <Body size={28} color={COLORS.fg2} style={{ marginTop: 16 }}>
              ER admissions in a single weekend. Zero prior warning.
            </Body>
          </GlassCard>
          <GlassCard padding={36}>
            <Eyebrow>Trend · ISPRA Monitoring</Eyebrow>
            <div style={{ marginTop: 20, fontFamily: 'Space Grotesk, sans-serif', fontSize: 76, fontWeight: 600, color: COLORS.cyan, lineHeight: 1, letterSpacing: '-0.03em' }}>
              3×
            </div>
            <Body size={28} color={COLORS.fg2} style={{ marginTop: 16 }}>
              Mediterranean bloom frequency since 2015.
            </Body>
          </GlassCard>
        </div>
      </div>
      <SlideFooter num={3} total={TOTAL} section="Problem" sectionId="PROBLEM"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 03 — The 7-Day Window
// =================================================================
function Slide03Window() {
  // Render a horizontal timeline: Day 0 (satellite sees) → Day 7 (ER fills)
  const days = [0,1,2,3,4,5,6,7];
  return (
    <SlideFrame label="03 The 7-Day Window" bg={COLORS.bg1}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="Problem · 02" title="The 7-day window nobody is using."/>
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Body size={32} color={COLORS.fg2} style={{ maxWidth: 1500, marginBottom: 80 }}>
          Satellites see the bloom forming a full week before the first patient walks into the ER.
          Current monitoring waits for hospitals to be overwhelmed before anyone prepares.
        </Body>

        <div style={{ position: 'relative', height: 200 }}>
          {/* axis */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 100, height: 2, background: 'linear-gradient(90deg, rgba(0,209,255,0.6), rgba(255,0,0,0.8))' }}/>
          {days.map((d, i) => {
            const isStart = i === 0;
            const isEnd = i === days.length - 1;
            return (
              <div key={d} style={{
                position: 'absolute', left: `${(i/(days.length-1))*100}%`, top: 76, transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: isStart || isEnd ? 28 : 14, height: isStart || isEnd ? 28 : 14, borderRadius: 999,
                  background: isStart ? COLORS.cyan : isEnd ? COLORS.red : COLORS.fg4,
                  boxShadow: isStart ? `0 0 16px ${COLORS.cyan}` : isEnd ? `0 0 16px ${COLORS.red}` : 'none',
                  border: isStart || isEnd ? `2px solid ${COLORS.fg}` : 'none',
                  marginTop: isStart || isEnd ? 0 : 7,
                }}/>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 22,
                  color: isStart || isEnd ? COLORS.fg : COLORS.fg4, letterSpacing: '0.1em',
                }}>D+{d}</div>
              </div>
            );
          })}
          {/* Endpoint labels — placed BELOW the timeline so they never overlap header copy */}
          <div style={{ position: 'absolute', left: 0, top: 160, maxWidth: 320 }}>
            <Eyebrow color={COLORS.cyan}>Day 0 · Sentinel-2</Eyebrow>
            <Body size={26} style={{ marginTop: 8, color: COLORS.fg, lineHeight: 1.25 }}>NDCI uplift detected offshore.</Body>
          </div>
          <div style={{ position: 'absolute', right: 0, top: 160, maxWidth: 320, textAlign: 'right' }}>
            <Eyebrow color={COLORS.redSoft}>Day 7 · Hospitals</Eyebrow>
            <Body size={26} style={{ marginTop: 8, color: COLORS.fg, lineHeight: 1.25 }}>+54% respiratory ER admissions.</Body>
          </div>
        </div>

        <div style={{ marginTop: 100, padding: '32px 40px', background: 'rgba(0,209,255,0.06)', border: `1px solid rgba(0,209,255,0.30)`, borderRadius: 18 }}>
          <Body size={32} color={COLORS.fg}>
            <span style={{ color: COLORS.cyan, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Nobody is using that window.</span>
            <span style={{ color: COLORS.fg2 }}>  We are.</span>
          </Body>
        </div>
      </div>
      <SlideFooter num={4} total={TOTAL} section="Problem" sectionId="PROBLEM"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 04 — Challenge 2 · Water Pollution
// =================================================================
function Slide04Challenge() {
  return (
    <SlideFrame label="04 Challenge 2" bg={COLORS.bg}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(900px 600px at 80% 50%, rgba(0,0,128,0.30), transparent 70%)` }}/>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="Cassini · Challenge 02" title="A biological pollutant, detectable from space."/>
      <div style={{ position: 'relative', flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Body style={{ maxWidth: 760 }}>
            Red Tide originates in the water, spreads through the water, and is detectable
            from space before it ever reaches the shore. This is water pollution monitoring —
            and the fact that our data saves lives is what makes it a viable business.
          </Body>
          <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['Originates', 'In offshore Mediterranean waters'],
              ['Spreads', 'Via currents, salinity, SST gradients'],
              ['Aerosolises', 'On wave break with onshore wind'],
              ['Impacts', '+54% respiratory ER admissions'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, alignItems: 'baseline' }}>
                <Eyebrow style={{ fontSize: 20 }}>{k}</Eyebrow>
                <Body size={28} color={COLORS.fg}>{v}</Body>
              </div>
            ))}
          </div>
        </div>

        {/* Stylised hotspot map of Europe coasts */}
        <GlassCard padding={28} style={{ aspectRatio: '4 / 3' }}>
          <Eyebrow>Bloom Hotspots · Europe</Eyebrow>
          <div style={{ position: 'relative', marginTop: 20, width: '100%', height: 'calc(100% - 40px)', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(180deg,#0E1015,#15171F)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,209,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,255,0.06) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}/>
            <svg viewBox="0 0 800 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {/* Stylised European Mediterranean / Atlantic coast */}
              <path d="M40 280 Q140 240 220 280 Q280 310 340 300 Q400 290 460 320 Q520 350 580 340 Q650 330 720 360 L760 600 L40 600 Z" fill="rgba(0,209,255,0.06)" stroke="rgba(0,209,255,0.35)" strokeWidth="1.5"/>
              {/* Adriatic spike */}
              <path d="M520 350 L550 470 L580 460 L560 340 Z" fill="rgba(0,209,255,0.06)" stroke="rgba(0,209,255,0.35)" strokeWidth="1.5"/>
              {/* hotspots */}
              {[
                {x:140, y:300, lab:'BASQUE'},
                {x:280, y:330, lab:'CATALONIA'},
                {x:430, y:330, lab:'LIGURIAN', big:true},
                {x:560, y:420, lab:'ADRIATIC'},
                {x:680, y:360, lab:'AEGEAN'},
              ].map(h => (
                <g key={h.lab}>
                  <circle cx={h.x} cy={h.y} r={h.big ? 18 : 11} fill={h.big ? COLORS.red : COLORS.redSoft} opacity="0.9"/>
                  <circle cx={h.x} cy={h.y} r={h.big ? 36 : 22} fill="none" stroke={h.big ? COLORS.red : COLORS.redSoft} strokeWidth="1" opacity="0.4"/>
                  <text x={h.x} y={h.y - (h.big ? 30 : 22)} textAnchor="middle" fill={COLORS.fg} fontFamily="JetBrains Mono" fontSize="14" letterSpacing="2">{h.lab}</text>
                </g>
              ))}
            </svg>
            <div style={{ position: 'absolute', bottom: 14, left: 14, padding: '8px 14px', background: 'rgba(20,22,28,0.85)', border: `1px solid ${COLORS.border}`, borderRadius: 8, fontFamily: 'JetBrains Mono', fontSize: 14, letterSpacing: '0.12em', color: COLORS.fg3, textTransform: 'uppercase' }}>
              Pilot · Ligurian Coast
            </div>
          </div>
        </GlassCard>
      </div>
      <SlideFooter num={5} total={TOTAL} section="Why we are here" sectionId="PROBLEM"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 05 — The Solution
// =================================================================
function Slide05Solution() {
  return (
    <SlideFrame label="05 The Solution" bg={COLORS.bg1}>
      <Bathymetry opacity={0.04}/>
      <SlideHeader eyebrow="Solution" title={<>One number. Seventy-two hours of warning.</>}/>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, flex: 1, alignItems: 'center' }}>
        <div>
          <Body style={{ maxWidth: 820 }}>
            At the heart of <b style={{ color: COLORS.fg }}>RedMetrics</b> is the <b style={{ color: COLORS.cyan }}>Respiratory Risk Index</b> —
            a 0–100 score delivered 72 hours in advance.
          </Body>
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { tone: 'green',  range: '0–30',   label: 'GREEN',     copy: 'Breathe easy. No action required.' },
              { tone: 'amber',  range: '31–60',  label: 'AMBER',     copy: 'Watch state. Hospitals notified.' },
              { tone: 'red',    range: '61–85',  label: 'RED',       copy: 'Surge prep. Staffing adjusted.' },
              { tone: 'red',    range: '> 85',   label: 'CRITICAL',  copy: 'Insurance trigger fires automatically.' },
            ].map(t => (
              <div key={t.label} style={{ display: 'grid', gridTemplateColumns: '180px 180px 1fr', gap: 28, alignItems: 'center' }}>
                <Chip tone={t.tone} style={{ justifyContent: 'center' }}>{t.label}</Chip>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 24, color: COLORS.fg3, letterSpacing: '0.10em' }}>RRI {t.range}</div>
                <Body size={26} color={COLORS.fg}>{t.copy}</Body>
              </div>
            ))}
          </div>
        </div>

        {/* RRI gauge */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <RRIGauge value={88}/>
        </div>
      </div>
      <SlideFooter num={6} total={TOTAL} section="Solution" sectionId="SOLUTION"/>
    </SlideFrame>
  );
}

function RRIGauge({ value = 88 }) {
  const r = 220, cx = 280, cy = 280;
  // semicircle from 180 to 360 (left to right)
  const startAngle = 180, endAngle = 360;
  const sweep = endAngle - startAngle;
  const valueAngle = startAngle + (value/100) * sweep;
  const polar = (a, rad=r) => {
    const rad2 = (a * Math.PI) / 180;
    return [cx + rad*Math.cos(rad2), cy + rad*Math.sin(rad2)];
  };
  const arc = (a1, a2, rr=r) => {
    const [x1,y1] = polar(a1, rr); const [x2,y2] = polar(a2, rr);
    return `M ${x1} ${y1} A ${rr} ${rr} 0 ${a2-a1>180?1:0} 1 ${x2} ${y2}`;
  };
  const tiers = [
    {a1:180, a2:180+0.30*sweep, c: COLORS.green},
    {a1:180+0.30*sweep, a2:180+0.60*sweep, c: COLORS.amber},
    {a1:180+0.60*sweep, a2:180+0.85*sweep, c: COLORS.redSoft},
    {a1:180+0.85*sweep, a2:360, c: COLORS.red},
  ];
  return (
    <svg width="560" height="380" viewBox="0 0 560 380">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      {/* Track */}
      <path d={arc(180,360, r)} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="40"/>
      {tiers.map((t,i)=>(
        <path key={i} d={arc(t.a1, t.a2, r)} fill="none" stroke={t.c} strokeWidth="40" strokeLinecap="butt" opacity="0.85"/>
      ))}
      {/* Tick marks at thresholds */}
      {[30,60,85].map(v => {
        const a = 180 + (v/100)*sweep;
        const [x1,y1] = polar(a, r-28); const [x2,y2] = polar(a, r+28);
        return <line key={v} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0E1015" strokeWidth="3"/>;
      })}
      {/* Needle — short, sits inside the arc and well clear of the digits */}
      {(() => {
        // Inner end of needle starts past the value text; outer end stops short of the colored arc inner edge.
        const innerR = r - 70;
        const outerR = r - 30;
        const [nx1, ny1] = polar(valueAngle, innerR);
        const [nx2, ny2] = polar(valueAngle, outerR);
        return (
          <g filter="url(#glow)">
            <line x1={nx1} y1={ny1} x2={nx2} y2={ny2} stroke={COLORS.red} strokeWidth="4" strokeLinecap="round"/>
            <circle cx={nx1} cy={ny1} r="6" fill={COLORS.red}/>
          </g>
        );
      })()}
      {/* Value text — moved up so digits sit cleanly above the needle path */}
      <text x={cx} y={cy-40} textAnchor="middle" fill={COLORS.fg} fontFamily="Space Grotesk" fontSize="120" fontWeight="600" letterSpacing="-3">{value}</text>
      <text x={cx} y={cy+30} textAnchor="middle" fill={COLORS.redSoft} fontFamily="JetBrains Mono" fontSize="20" letterSpacing="3">CRITICAL · DAY +3</text>
      <text x={cx} y={cy+70} textAnchor="middle" fill={COLORS.fg4} fontFamily="JetBrains Mono" fontSize="16" letterSpacing="3">RESPIRATORY RISK INDEX</text>
    </svg>
  );
}

// =================================================================
// SLIDE 06 — Powered by Copernicus
// =================================================================
function Slide06Copernicus() {
  const sources = [
    { tag: 'SENTINEL-2', desc: 'NDCI · 10m', body: 'Confirms bloom signatures at the coastline via ocean colour anomalies.' },
    { tag: 'CMEMS', desc: 'SST · Currents · Salinity · Chl-a', body: 'Tracks the warm low-salinity water feeding the bloom. 10 years back to 1999.' },
    { tag: 'C3S ERA5', desc: 'Wind · Waves', body: 'The critical question: is the bloom moving toward shore? The physics behind RRI.' },
  ];
  return (
    <SlideFrame label="06 Powered by Copernicus" bg={COLORS.bg}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="EU Space Infrastructure" title="Built entirely on Copernicus data."/>
      <Body color={COLORS.fg3} style={{ maxWidth: 1100, marginTop: -20, marginBottom: 56 }}>
        Three open-access European data sources, fused into one operational pipeline. Zero proprietary dependencies.
      </Body>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, flex: 1 }}>
        {sources.map((s, i) => (
          <GlassCard key={s.tag} padding={40} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 18, letterSpacing: '0.18em', color: COLORS.fg4 }}>SOURCE 0{i+1}</div>
            <div style={{ marginTop: 16, fontFamily: 'Space Grotesk, sans-serif', fontSize: 56, fontWeight: 600, color: COLORS.fg, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.tag}</div>
            <Eyebrow style={{ marginTop: 18 }}>{s.desc}</Eyebrow>
            <Body size={24} color={COLORS.fg2} style={{ marginTop: 28 }}>{s.body}</Body>
            <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'JetBrains Mono', fontSize: 16, color: COLORS.cyan, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: COLORS.cyan, boxShadow: `0 0 8px ${COLORS.cyan}` }}/>
              Open access · Live
            </div>
          </GlassCard>
        ))}
      </div>
      <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'center', color: COLORS.fg3 }}>
        <Eyebrow style={{ fontSize: 20 }}>+ IoT Sentinels</Eyebrow>
        <span style={{ color: COLORS.fg4, fontSize: 22 }}>→</span>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, letterSpacing: '0.14em', color: COLORS.fg2 }}>Ground-truth verification</div>
        <span style={{ color: COLORS.fg4, fontSize: 22 }}>→</span>
        <Chip tone="cyan">Respiratory Risk Index</Chip>
      </div>
      <SlideFooter num={7} total={TOTAL} section="Solution" sectionId="SOLUTION"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 07 — Three-Point Data System
// =================================================================
function Slide07Triangle() {
  return (
    <SlideFrame label="07 Three-Point Data System" bg={COLORS.bg1}>
      <Bathymetry opacity={0.04}/>
      <SlideHeader eyebrow="Architecture" title="A three-point prediction engine."/>
      <Body color={COLORS.fg3} style={{ maxWidth: 1300, marginTop: -20, marginBottom: 32 }}>
        Alone, each source is useful. Together, they are a flywheel — every IoT deployment makes the satellite model more accurate.
      </Body>
      <div style={{ position: 'relative', flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* Triangle diagram */}
        <div style={{ position: 'relative', height: 600 }}>
          <svg viewBox="0 0 700 600" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="rrigrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={COLORS.red} stopOpacity="0.6"/>
                <stop offset="100%" stopColor={COLORS.red} stopOpacity="0"/>
              </radialGradient>
            </defs>
            {/* Edges */}
            <line x1="350" y1="110" x2="120" y2="500" stroke={COLORS.cyan} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5"/>
            <line x1="350" y1="110" x2="580" y2="500" stroke={COLORS.cyan} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5"/>
            <line x1="120" y1="500" x2="580" y2="500" stroke={COLORS.cyan} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5"/>
            {/* RRI center */}
            <circle cx="350" cy="350" r="120" fill="url(#rrigrad)"/>
            <circle cx="350" cy="350" r="80" fill="rgba(255,0,0,0.15)" stroke={COLORS.red} strokeWidth="2"/>
            <text x="350" y="345" textAnchor="middle" fill={COLORS.fg} fontFamily="Space Grotesk" fontSize="52" fontWeight="600">RRI</text>
            <text x="350" y="378" textAnchor="middle" fill={COLORS.redSoft} fontFamily="JetBrains Mono" fontSize="14" letterSpacing="3">0 — 100</text>
            {/* Nodes */}
            {[
              { x: 350, y: 110, c: COLORS.cyan,    lab: 'SATELLITE',  sub: 'Copernicus · The big picture' },
              { x: 120, y: 500, c: COLORS.green,   lab: 'IOT',        sub: 'Ground truth · Days early' },
              { x: 580, y: 500, c: COLORS.amber,   lab: 'HISTORICAL',   sub: '10y admission + bloom data' },
            ].map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="46" fill={`${n.c}22`} stroke={n.c} strokeWidth="2"/>
                <circle cx={n.x} cy={n.y} r="22" fill={n.c} opacity="0.85"/>
                <text x={n.x} y={n.y + (n.y < 200 ? -68 : 90)} textAnchor="middle" fill={COLORS.fg} fontFamily="Space Grotesk" fontSize="28" fontWeight="600">{n.lab}</text>
                <text x={n.x} y={n.y + (n.y < 200 ? -42 : 118)} textAnchor="middle" fill={COLORS.fg3} fontFamily="JetBrains Mono" fontSize="13" letterSpacing="2">{n.sub}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Right column — explanation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {[
            { n: '01', tone: COLORS.cyan, head: 'Satellite · Copernicus', body: 'Sentinel-2 NDCI plus CMEMS oceanography reveal what is happening offshore — chlorophyll, SST, currents, salinity.' },
            { n: '02', tone: COLORS.green, head: 'IoT · Sentinels', body: 'In-water sondes catch nitrate and phosphate spikes that precede blooms by days, then confirm dissolved oxygen drops in real time.' },
            { n: '03', tone: COLORS.amber, head: 'Historical · 10y data', body: 'A decade of bloom records and respiratory admission data taught the model exactly what a 54% surge looks like before it arrives — this is the ground we learn from.' },
          ].map(r => (
            <div key={r.n} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 24, alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 32, color: r.tone, letterSpacing: '0.05em' }}>{r.n}</div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 30, fontWeight: 600, color: COLORS.fg, marginBottom: 10 }}>{r.head}</div>
                <Body size={22} color={COLORS.fg2}>{r.body}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter num={8} total={TOTAL} section="Solution" sectionId="SOLUTION"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 08 — TideAlert Framework (4 stages)
// =================================================================
function Slide08Framework() {
  const stages = [
    { n:'01', name:'BLOOM PROBABILITY', sub:'7-day forecast', metric:'AUC 0.95', desc:'LightGBM on NDCI, SST, salinity, currents.' },
    { n:'02', name:'RRI PHYSICS', sub:'Aerosolisation', metric:'0 → 100', desc:'Wind on shore-normal × wave-driven spray.' },
    { n:'03', name:'HOSPITAL SURGE', sub:'Health forecast', metric:'+54% ER', desc:'Ridge regression to admissions, staff, meds.' },
    { n:'04', name:'PARAMETRIC TRIGGER', sub:'Insurance', metric:'Dual AND', desc:'Satellite RRI ∧ IoT DO/pH → automatic payout.' },
  ];
  return (
    <SlideFrame label="08 TideAlert Framework" bg={COLORS.bg}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="The TideAlert Framework" title="Four stages from satellite to settlement."/>
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {/* connector line */}
          <div style={{ position: 'absolute', top: '50%', left: '4%', right: '4%', height: 2, background: 'linear-gradient(90deg, rgba(0,209,255,0.6), rgba(255,176,32,0.6), rgba(255,102,102,0.7), rgba(255,0,0,0.8))', zIndex: 0 }}/>
          {stages.map((s, i) => (
            <GlassCard key={s.n} padding={32} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: 380 }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, letterSpacing: '0.18em', color: COLORS.fg4 }}>STAGE {s.n}</div>
              <div style={{ marginTop: 18, fontFamily: 'Space Grotesk, sans-serif', fontSize: 30, fontWeight: 600, color: COLORS.fg, lineHeight: 1.1 }}>{s.name}</div>
              <Eyebrow style={{ marginTop: 12, fontSize: 16 }}>{s.sub}</Eyebrow>
              <div style={{ marginTop: 28, fontFamily: 'Space Grotesk, sans-serif', fontSize: 44, fontWeight: 600, color: COLORS.cyan, letterSpacing: '-0.02em' }}>{s.metric}</div>
              <Body size={22} color={COLORS.fg3} style={{ marginTop: 'auto', paddingTop: 24 }}>{s.desc}</Body>
            </GlassCard>
          ))}
        </div>
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
          <Eyebrow color={COLORS.fg3} style={{ fontSize: 18 }}>← Detection</Eyebrow>
          <Eyebrow color={COLORS.cyan} style={{ fontSize: 18 }}>Daily Pipeline · Supabase + Edge Functions</Eyebrow>
          <Eyebrow color={COLORS.fg3} style={{ fontSize: 18 }}>Settlement →</Eyebrow>
        </div>
      </div>
      <SlideFooter num={9} total={TOTAL} section="Solution" sectionId="SOLUTION"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 09 — IoT Sentinel
// =================================================================
function Slide09IoT() {
  const vars = [
    { k: 'TEMP',        v: 'Water temperature',     unit: '°C' },
    { k: 'pH',          v: 'Acidity',               unit: '< 7.95' },
    { k: 'DO',          v: 'Dissolved oxygen',      unit: '< 5 mg/L' },
    { k: 'NO₃',         v: 'Nitrate',               unit: 'μmol/L' },
    { k: 'PO₄',         v: 'Phosphate',             unit: 'μmol/L' },
    { k: 'COND',        v: 'Conductivity',          unit: 'mS/cm' },
    { k: 'RH',          v: 'Humidity',              unit: '%' },
  ];
  return (
    <SlideFrame label="09 IoT Sentinel" bg={COLORS.bg1}>
      <Bathymetry opacity={0.04}/>
      <SlideHeader eyebrow="Ground Truth" title="We do not just trust the sky."/>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, flex: 1 }}>
        <div>
          <Body style={{ maxWidth: 720, marginBottom: 40 }}>
            Low-cost ESP32 sentinels measure seven variables continuously. The early-warning
            signals appear days before the bloom is visible from space.
          </Body>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {vars.map(x => (
              <div key={x.k} style={{
                display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, alignItems: 'center',
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.03)', border: `1px solid ${COLORS.border}`, borderRadius: 12,
              }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: COLORS.cyan, letterSpacing: '0.05em', fontWeight: 500 }}>{x.k}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 20, color: COLORS.fg }}>{x.v}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: COLORS.fg4, letterSpacing: '0.06em' }}>{x.unit}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '24px 28px', background: 'rgba(255,0,0,0.06)', border: `1px solid rgba(255,0,0,0.30)`, borderRadius: 14 }}>
            <Eyebrow color={COLORS.redSoft} style={{ fontSize: 18 }}>Trigger condition</Eyebrow>
            <Body size={24} color={COLORS.fg} style={{ marginTop: 12, fontFamily: 'JetBrains Mono', letterSpacing: '0.02em' }}>
              RRI &gt; 70 (5d) <span style={{ color: COLORS.fg4 }}>∧</span> DO &lt; 5.0 <span style={{ color: COLORS.fg4 }}>∧</span> pH &lt; 7.95
            </Body>
          </div>
        </div>

        {/* Beach Alert Totem mock */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BeachTotem/>
        </div>
      </div>
      <SlideFooter num={10} total={TOTAL} section="Product" sectionId="PRODUCT"/>
    </SlideFrame>
  );
}

function BeachTotem() {
  return (
    <div style={{
      width: 380, height: 660,
      background: 'linear-gradient(180deg,#1B1E26,#0E1015)',
      borderRadius: 32, border: `1px solid ${COLORS.borderStrong}`,
      boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.10)',
      padding: 28, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: COLORS.fg4, letterSpacing: '0.18em' }}>BEACH ALERT · LIG-12</div>
        <div style={{ width: 10, height: 10, borderRadius: 999, background: COLORS.red, boxShadow: `0 0 12px ${COLORS.red}` }}/>
      </div>
      <div style={{
        flex: 1, borderRadius: 20,
        background: `radial-gradient(circle at 50% 40%, rgba(255,0,0,0.4), rgba(255,0,0,0.1) 60%, transparent 80%), #1A0408`,
        border: `1px solid rgba(255,0,0,0.4)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, padding: 24,
      }}>
        <Eyebrow color={COLORS.redSoft} style={{ fontSize: 16 }}>RESPIRATORY RISK</Eyebrow>
        <div style={{ fontFamily: 'Space Grotesk', fontSize: 144, fontWeight: 600, color: COLORS.fg, letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>88</div>
        <div style={{ padding: '8px 20px', background: COLORS.red, borderRadius: 999, fontFamily: 'JetBrains Mono', fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '0.18em' }}>CRITICAL</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: COLORS.fg2, letterSpacing: '0.12em', marginTop: 8, textAlign: 'center', lineHeight: 1.6 }}>
          AVOID SHORELINE<br/>NEXT 72H · GENOA-OFF
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 11, color: COLORS.fg3, letterSpacing: '0.10em' }}>
        <div style={{ padding: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 8, textAlign: 'center' }}>DO<br/><span style={{color: COLORS.redSoft, fontSize: 18}}>4.6</span></div>
        <div style={{ padding: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 8, textAlign: 'center' }}>pH<br/><span style={{color: COLORS.redSoft, fontSize: 18}}>7.91</span></div>
        <div style={{ padding: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 8, textAlign: 'center' }}>NO₃<br/><span style={{color: COLORS.amber, fontSize: 18}}>↑</span></div>
      </div>
    </div>
  );
}

// =================================================================
// SLIDE 10 — Market Gap
// =================================================================
function Slide10Gap() {
  const players = [
    { name: 'S-3 EUROHAB',     scope: 'English Channel · shellfish',         miss: 'No coastal health link' },
    { name: 'CyFi',            scope: 'Freshwater cyanobacteria',           miss: 'Wrong biology, wrong water' },
    { name: 'Norway / Spain',  scope: 'Local fisheries water quality',      miss: 'Don\'t talk to each other' },
    { name: 'ISPRA Italy',     scope: 'Periodic sampling campaigns',        miss: 'Reactive, not predictive' },
  ];
  return (
    <SlideFrame label="10 Market Gap" bg={COLORS.bg}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="Market" title="A fragmented patchwork — and a clear gap."/>
      <div style={{ position: 'relative', flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {players.map(p => (
              <div key={p.name} style={{
                display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: 24, alignItems: 'center',
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.025)', border: `1px solid ${COLORS.border}`, borderRadius: 12,
              }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 600, color: COLORS.fg }}>{p.name}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: COLORS.fg3, letterSpacing: '0.05em' }}>{p.scope}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 18, color: COLORS.redSoft }}>✕ {p.miss}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '28px 32px', background: 'rgba(0,209,255,0.06)', border: `1px solid rgba(0,209,255,0.30)`, borderRadius: 14 }}>
            <Eyebrow style={{ fontSize: 18 }}>The unfilled gap</Eyebrow>
            <Body size={26} color={COLORS.fg} style={{ marginTop: 12 }}>
              Nobody turns Copernicus data into a machine-readable insurance trigger and a hospital surge forecast.
            </Body>
          </div>
        </div>

        <div>
          <div style={{
            position: 'relative', padding: 48,
            border: `2px dashed rgba(255,0,0,0.40)`, borderRadius: 24,
            textAlign: 'center', background: 'rgba(255,0,0,0.04)',
          }}>
            <Eyebrow color={COLORS.redSoft} style={{ fontSize: 20 }}>Pan-European Coverage</Eyebrow>
            <div style={{ marginTop: 24, fontFamily: 'Space Grotesk, sans-serif', fontSize: 110, fontWeight: 600, color: COLORS.redSoft, lineHeight: 1, letterSpacing: '-0.04em' }}>
              FRAG&shy;MENTED
            </div>
            <Body size={24} color={COLORS.fg3} style={{ marginTop: 24 }}>
              No unified platform converts ocean pollution data into public health action and financial protection.
            </Body>
          </div>
        </div>
      </div>
      <SlideFooter num={11} total={TOTAL} section="Market" sectionId="PRODUCT"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 11 — Business Model
// =================================================================
function Slide11Business() {
  return (
    <SlideFrame label="11 Business Model" bg={COLORS.bg1}>
      <Bathymetry opacity={0.04}/>
      <SlideHeader eyebrow="Business Model" title="Data-as-a-Service · two commercial flows."/>
      <div style={{ position: 'relative', flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {[
          {
            tag:'B2B · DIRECT', tone: COLORS.cyan,
            title:'Hospital Surge API',
            who:'Hospitals subscribe directly',
            bullets:[
              '7-day rolling admission forecast',
              'Recommended staffing adjustments',
              'Medication pre-stock quantities (€)',
            ],
            price:'€50–150 / mo',
            note:'One avoided crisis pays for a year.'
          },
          {
            tag:'B2B2B · INDIRECT', tone: COLORS.redSoft,
            title:'Parametric Insurance Trigger',
            who:'Insurers embed in policies',
            bullets:[
              'Dual-source RRI + IoT trigger',
              'Auto-payout · no claims adjuster',
              'Single contract → hundreds of hospitals',
            ],
            price:'€500–1,000 / region',
            note:'Insurer becomes our distribution partner.'
          },
        ].map(m => (
          <GlassCard key={m.tag} padding={48} style={{ display: 'flex', flexDirection: 'column' }}>
            <Chip tone={m.tone === COLORS.cyan ? 'cyan' : 'red'} style={{ alignSelf: 'flex-start' }}>{m.tag}</Chip>
            <div style={{ marginTop: 28, fontFamily: 'Space Grotesk, sans-serif', fontSize: 48, fontWeight: 600, color: COLORS.fg, lineHeight: 1.05, letterSpacing: '-0.02em' }}>{m.title}</div>
            <div style={{ marginTop: 14, fontFamily: 'JetBrains Mono', fontSize: 16, color: COLORS.fg3, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{m.who}</div>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {m.bullets.map(b => (
                <li key={b} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 14, alignItems: 'baseline' }}>
                  <span style={{ color: m.tone, fontFamily: 'JetBrains Mono', fontSize: 22 }}>→</span>
                  <Body size={24} color={COLORS.fg2}>{b}</Body>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 32, borderTop: `1px solid ${COLORS.border}` }}>
              <Eyebrow color={COLORS.fg3} style={{ fontSize: 16 }}>Pricing</Eyebrow>
              <div style={{ marginTop: 8, fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 600, color: m.tone, letterSpacing: '-0.02em' }}>{m.price}</div>
              <Body size={20} color={COLORS.fg4} style={{ marginTop: 12, fontStyle: 'italic' }}>{m.note}</Body>
            </div>
          </GlassCard>
        ))}
      </div>
      <SlideFooter num={12} total={TOTAL} section="Business" sectionId="BUSINESS"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 12 — Year 1 Revenue
// =================================================================
function Slide12Revenue() {
  return (
    <SlideFrame label="12 Year 1 Revenue Target" bg={COLORS.bg}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="Year 1 · Conservative" title="€234,000 ARR · Ligurian Coast."/>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, flex: 1, alignItems: 'center' }}>
        <div>
          <BigNumber value="€234k" label="Year 1 conservative ARR · Ligurian pilot" color={COLORS.cyan}/>
          <Hairline style={{ margin: '52px 0' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { qty: '5', who: 'Hotel groups',         seg: 'Coastal exposure cover' },
              { qty: '2', who: 'Regional insurers',    seg: 'Embedded parametric' },
              { qty: '2', who: 'Aquaculture operators',seg: 'Asset-loss trigger' },
            ].map(r => (
              <div key={r.who} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 24, alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 56, fontWeight: 600, color: COLORS.cyan, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{r.qty}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 500, color: COLORS.fg }}>{r.who}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 16, color: COLORS.fg3, letterSpacing: '0.10em', textTransform: 'uppercase' }}>{r.seg}</div>
              </div>
            ))}
          </div>
        </div>

        <GlassCard padding={48}>
          <Eyebrow>Unit Economics</Eyebrow>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['Source data',     'Copernicus · €0'],
              ['Infrastructure',  'Supabase EU · €600/mo'],
              ['Break-even',      '8–12 active clients'],
              ['Funding ask',     'ESA BIC · €50k non-equity'],
            ].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 16, borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 18, color: COLORS.fg3, letterSpacing: '0.10em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 22, color: COLORS.fg, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '20px 24px', background: 'rgba(16,224,160,0.06)', border: `1px solid rgba(16,224,160,0.30)`, borderRadius: 12 }}>
            <Body size={22} color={COLORS.green}>COGS near zero → pure margin scales linearly with each new region.</Body>
          </div>
        </GlassCard>
      </div>
      <SlideFooter num={13} total={TOTAL} section="Business" sectionId="BUSINESS"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 13 — Team
// =================================================================
function Slide13Team() {
  // Discipline taxonomy — color-coded badges to highlight interdisciplinarity.
  const DISC = {
    TECH:    { label: 'TECHNICAL',  color: COLORS.cyan,  bg: 'rgba(0,209,255,0.10)',  border: 'rgba(0,209,255,0.45)' },
    BIZ:     { label: 'BUSINESS',   color: COLORS.amber, bg: 'rgba(255,176,32,0.10)', border: 'rgba(255,176,32,0.50)' },
    MEDICAL: { label: 'MEDICAL',    color: COLORS.green, bg: 'rgba(16,224,160,0.10)', border: 'rgba(16,224,160,0.50)' },
  };
  const team = [
    { initials: 'BE', name: 'Bojan Eftimoski',     role: 'Software Developer',                    bio: 'Pipelines · platform',     disc: 'TECH' },
    { initials: 'FB', name: 'Filip Bojadjievski',  role: 'Data Analysis & ML',                    bio: 'Copernicus · models',      disc: 'TECH' },
    { initials: 'NJ', name: 'Nikita Jakimovski',   role: 'Hardware & Electronics',                bio: 'IoT sentinel design',      disc: 'TECH' },
    { initials: 'DT', name: 'Darko Trajanov',      role: 'Software Developer',                    bio: 'Backend · APIs',           disc: 'TECH' },
    { initials: 'JS', name: 'Jakov Spirovski',     role: 'Software Developer',                    bio: 'Frontend · dashboards',    disc: 'TECH' },
    { initials: 'TV', name: 'Teona Vangelovska',   role: 'Business Planning & Finance',           bio: 'Strategy · GTM · ops',     disc: 'BIZ' },
    { initials: 'SK', name: 'Simona Kostadinova',  role: 'Medical Expert · Health Impact Lead',   bio: 'Clinical · respiratory',   disc: 'MEDICAL' },
  ];
  return (
    <SlideFrame label="13 The Team" bg={COLORS.bg}>
      <Bathymetry opacity={0.04}/>
      <SlideHeader eyebrow="Team" title="Interdisciplinary by design."/>
      <Body color={COLORS.fg3} style={{ maxWidth: 1400, marginTop: -20, marginBottom: 28 }}>
        Five technical builders, one business strategist, one medical lead — under one roof.
      </Body>
      {/* Discipline legend */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
        {Object.entries(DISC).map(([k, d]) => (
          <div key={k} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 16px', borderRadius: 999,
            background: d.bg, border: `1px solid ${d.border}`,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: d.color, boxShadow: `0 0 8px ${d.color}` }}/>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 13, letterSpacing: '0.16em', color: d.color, fontWeight: 600 }}>{d.label}</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: COLORS.fg3 }}>· {team.filter(t => t.disc === k).length}</span>
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 20, flex: 1 }}>
        {team.map(t => {
          const d = DISC[t.disc];
          return (
            <GlassCard key={t.initials} padding={22} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0, borderColor: d.border, background: d.bg, position: 'relative', overflow: 'hidden' }}>
              {/* discipline accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: d.color }}/>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 999,
                  background: `linear-gradient(135deg, ${d.color}, ${COLORS.navy})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: 20, fontWeight: 600, color: '#001218',
                  flexShrink: 0,
                }}>{t.initials}</div>
                <div style={{
                  fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', fontWeight: 600,
                  color: d.color, padding: '5px 9px', borderRadius: 4,
                  background: 'rgba(0,0,0,0.25)', border: `1px solid ${d.border}`,
                }}>{d.label}</div>
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 19, fontWeight: 600, color: COLORS.fg, lineHeight: 1.2, minHeight: 46 }}>{t.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: d.color, lineHeight: 1.4, marginTop: 12 }}>{t.role}</div>
              <Body size={15} color={COLORS.fg3} style={{ marginTop: 'auto', paddingTop: 12 }}>{t.bio}</Body>
            </GlassCard>
          );
        })}
        {/* 8th cell — closing tagline */}
        <GlassCard padding={24} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(0,209,255,0.06)', borderColor: 'rgba(0,209,255,0.30)' }}>
          <Eyebrow color={COLORS.cyan}>Status</Eyebrow>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 600, color: COLORS.fg, lineHeight: 1.2, marginTop: 10 }}>Models running.<br/>Data flowing.<br/>Dashboards live.</div>
        </GlassCard>
      </div>
      <SlideFooter num={14} total={TOTAL} section="Team" sectionId="TEAM"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 14 — What's Next
// =================================================================
function Slide14Next() {
  const milestones = [
    { when: 'Q3 2026', what: 'ESA BIC · model validation', detail: 'ISPRA supersite data · first paying clients' },
    { when: 'Q4 2026', what: 'Ligurian commercial launch', detail: '€234k ARR · 9 design partners' },
    { when: '2027',    what: 'Horizon Europe · expansion', detail: 'Adriatic · Basque · Aegean' },
    { when: '2028+',   what: 'Pan-European platform',     detail: 'Norwegian fjords · same infrastructure' },
  ];
  return (
    <SlideFrame label="14 What's Next" bg={COLORS.bg1}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader eyebrow="Roadmap" title="Same infrastructure. Only the geography changes."/>
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 56, left: '4%', right: '4%', height: 2, background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.green})`, opacity: 0.4 }}/>
          {milestones.map((m, i) => (
            <div key={m.when} style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: 999, background: i === 0 ? COLORS.cyan : 'rgba(255,255,255,0.10)', border: `2px solid ${i === 0 ? COLORS.cyan : COLORS.border}`, boxShadow: i === 0 ? `0 0 16px ${COLORS.cyan}` : 'none' }}/>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: COLORS.fg2, letterSpacing: '0.10em' }}>{m.when}</div>
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 30, fontWeight: 600, color: COLORS.fg, lineHeight: 1.15, marginBottom: 16 }}>{m.what}</div>
              <Body size={22} color={COLORS.fg3}>{m.detail}</Body>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 96, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <GlassCard padding={36}>
            <Eyebrow>Immediate Ask</Eyebrow>
            <div style={{ marginTop: 16, fontFamily: 'Space Grotesk', fontSize: 60, fontWeight: 600, color: COLORS.cyan, letterSpacing: '-0.02em' }}>€50,000</div>
            <Body size={24} color={COLORS.fg2} style={{ marginTop: 10 }}>ESA BIC · non-equity · 6-month runway to break-even.</Body>
          </GlassCard>
          <GlassCard padding={36} style={{ borderColor: 'rgba(255,0,0,0.30)', background: 'rgba(255,0,0,0.04)' }}>
            <Eyebrow color={COLORS.redSoft}>The Stakes</Eyebrow>
            <Body size={28} color={COLORS.fg} style={{ marginTop: 16, lineHeight: 1.35 }}>
              In a warming world, Red Tides are inevitable. <span style={{ color: COLORS.redSoft }}>The health crises they cause are not.</span>
            </Body>
          </GlassCard>
        </div>
      </div>
      <SlideFooter num={15} total={TOTAL} section="Next" sectionId="TEAM"/>
    </SlideFrame>
  );
}

// =================================================================
// SLIDE 15 — Thank You
// =================================================================
function Slide15Thanks() {
  return (
    <SlideFrame label="15 Thank You" bg={COLORS.bg} padded={false}>
      <Bathymetry opacity={0.07}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(900px 600px at 70% 60%, rgba(255,0,0,0.18), transparent 65%),
                     radial-gradient(900px 600px at 25% 40%, rgba(0,209,255,0.18), transparent 70%)`,
      }}/>
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `0 ${SPACING.paddingX}px` }}>
        <Eyebrow style={{ fontSize: 24 }}>Thank you</Eyebrow>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 144, fontWeight: 600, lineHeight: 0.98,
          letterSpacing: '-0.035em', margin: '32px 0 0', color: COLORS.fg, maxWidth: 1500,
        }}>
          Seven days of warning.<br/>
          <span style={{ color: COLORS.cyan }}>For every European coastline.</span>
        </h1>

        <div style={{ marginTop: 96, display: 'flex', gap: 64, alignItems: 'center' }}>
          <div style={{ width: 96, height: 96, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.4)' }}>
            <img src="assets/redmetrics-logo.png" alt="" style={{ width: 70, height: 70 }}/>
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 600 }}>RedMetrics · TideAlert</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 20, color: COLORS.fg3, letterSpacing: '0.14em', marginTop: 8 }}>hello@redmetrics.eu · Cassini Hackathon · Ed. 11</div>
          </div>
        </div>
      </div>
      <SlideFooter num={16} total={TOTAL} section="Close" sectionId="TEAM"/>
    </SlideFrame>
  );
}

Object.assign(window, {
  Slide01Cover, Slide02Crisis, Slide03Window, Slide04Challenge, Slide05Solution,
  Slide06Copernicus, Slide07Triangle, Slide08Framework, Slide09IoT, Slide10Gap,
  Slide11Business, Slide12Revenue, Slide13Team, Slide14Next, Slide15Thanks,
  TOTAL_SLIDES: TOTAL,
});
