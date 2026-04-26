/* global React */
// Dashboard demo slide for RedMetrics deck-with-video
// Animated TideAlert dashboard replay: Day 0 → Day 6 of Genoa 2005 Ostreopsis event.
// Auto-plays on slide visibility, restarts on focus.
const { useState, useEffect, useRef } = React;

const GENOA = [
  { d:'07-19', p:0.18, rri:3.2,   tier:'GREEN' },
  { d:'07-20', p:0.27, rri:7.1,   tier:'GREEN' },
  { d:'07-21', p:0.41, rri:21.0,  tier:'GREEN' },
  { d:'07-22', p:0.55, rri:42.9,  tier:'AMBER' },
  { d:'07-23', p:0.68, rri:68.0,  tier:'RED' },
  { d:'07-24', p:0.78, rri:88.3,  tier:'CRITICAL' },
  { d:'07-25', p:0.86, rri:100.0, tier:'CRITICAL' },
  { d:'07-26', p:0.92, rri:100.0, tier:'CRITICAL' },
];
const TIER_COLOR = { GREEN:'#10E0A0', AMBER:'#FFB020', RED:'#FF6666', CRITICAL:'#FF0000' };

function useDashboardClock() {
  // Auto-advance through the 8 days every ~1.4s, with a 2s hold on final frame, then loop.
  const [day, setDay] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    let cancelled = false;
    let t;
    const step = (i) => {
      if (cancelled) return;
      setDay(i);
      const last = i === GENOA.length - 1;
      t = setTimeout(() => step((i+1) % GENOA.length), last ? 2400 : 1300);
    };
    step(0);
    return () => { cancelled = true; clearTimeout(t); };
  }, [running]);
  return { day, running, setRunning };
}

function DashboardDemoSlide() {
  const { day, running, setRunning } = useDashboardClock();
  const cur = GENOA[day];
  const tierC = TIER_COLOR[cur.tier];

  return (
    <SlideFrame label="06 Dashboard Demo" bg={COLORS.bg} padded={false}>
      <div style={{ position:'relative', flex:1, display:'flex', flexDirection:'column', padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <div>
            <Eyebrow>Live Demo · Genoa 2005 · Ostreopsis Replay</Eyebrow>
            <SlideTitle style={{ marginTop: 18 }}>The TideAlert dashboard, watching the bloom climb.</SlideTitle>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Chip tone="cyan">Day +{day} of 7</Chip>
            <button onClick={() => setRunning(!running)} style={{
              fontFamily: 'JetBrains Mono', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '10px 20px', borderRadius: 999, color: COLORS.fg, background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${COLORS.border}`, cursor: 'pointer',
            }}>{running ? '❚❚ pause' : '▶ play'}</button>
          </div>
        </div>

        {/* Browser-window mock */}
        <div style={{
          flex: 1, borderRadius: 18, overflow: 'hidden',
          background: '#0E1015', border: `1px solid ${COLORS.borderStrong}`,
          boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)',
          display: 'grid', gridTemplateColumns: '220px 1fr', gridTemplateRows: 'auto 1fr',
        }}>
          {/* Top tab strip across full width */}
          <div style={{ gridColumn: '1 / 3', height: 44, background: '#14161C', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10 }}>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FF5F57' }}/>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FEBC2E' }}/>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#28C840' }}/>
            <div style={{ marginLeft: 24, fontFamily: 'JetBrains Mono', fontSize: 13, color: COLORS.fg3, letterSpacing: '0.12em' }}>app.redmetrics.eu / portfolio / genoa</div>
          </div>
          {/* Sidebar */}
          <div style={{ background: '#14161C', borderRight: `1px solid ${COLORS.border}`, padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px 16px' }}>
              <div style={{ width: 26, height: 26, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="assets/redmetrics-logo.png" alt="" style={{ width: 18, height: 18 }}/>
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 600 }}>RedMetrics</div>
            </div>
            {[
              { t: 'Trigger Monitor', alert: cur.tier === 'CRITICAL' || cur.tier === 'RED' },
              { t: 'Portfolio',       active: true, live: true },
              { t: 'Events Log' },
              { t: 'Payout Simulate' },
              { t: 'RRI Map' },
            ].map(x => (
              <div key={x.t} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8,
                background: x.active ? 'rgba(0,209,255,0.08)' : 'transparent',
                border: x.active ? `1px solid rgba(0,209,255,0.25)` : '1px solid transparent',
                color: x.active ? COLORS.cyan : COLORS.fg2, fontSize: 13,
              }}>
                <span style={{ width: 14, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.06)' }}/>
                <span style={{ flex: 1 }}>{x.t}</span>
                {x.live && <span style={{ width: 6, height: 6, borderRadius: 999, background: COLORS.cyan, boxShadow: `0 0 6px ${COLORS.cyan}` }}/>}
                {x.alert && <span style={{ width: 6, height: 6, borderRadius: 999, background: COLORS.red }}/>}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ padding: 28, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20, alignContent: 'start', overflow: 'hidden', background: 'linear-gradient(180deg,#0E1015,#15171F)' }}>
            {/* Top metric row */}
            <DashCard cols={3} label="Aggregate exposure" chip="3 hospitals" chipTone="cyan">
              <div style={dvalStyle('#F1F5F9')}>€50<small style={{fontSize:18, color:COLORS.fg3, fontFamily:'JetBrains Mono', marginLeft:4}}>k/day</small></div>
              <div style={dsubStyle()}>San Martino · Galliera · Villa Scassi</div>
            </DashCard>
            <DashCard cols={3} label="Zone RRI · live" chip={cur.tier} chipTone={tierColorTone(cur.tier)} flash={cur.tier==='CRITICAL'}>
              <div style={dvalStyle(tierC)}>{cur.rri.toFixed(1)}</div>
              <div style={dsubStyle()}>Day {day} · {cur.tier}</div>
            </DashCard>
            <DashCard cols={3} label="Bloom probability" chip="Watch" chipTone="amber">
              <div style={dvalStyle(COLORS.cyan)}>{cur.p.toFixed(2)}</div>
              <div style={dsubStyle()}>Stage 1 · NDCI uplift</div>
            </DashCard>
            <DashCard cols={3} label="Triggered (24h)" chip={cur.tier==='CRITICAL'?'2 / 3':'0 / 3'} chipTone={cur.tier==='CRITICAL'?'red':'slate'}>
              <div style={dvalStyle(cur.tier==='CRITICAL'?COLORS.red:COLORS.fg)}>
                {cur.tier==='CRITICAL' ? '€198k' : '—'}
              </div>
              <div style={dsubStyle()}>Stage 4 · payout {cur.tier==='CRITICAL'?'queued':'idle'}</div>
            </DashCard>

            {/* Map */}
            <DashCard cols={8} pad={0} style={{ minHeight: 260 }}>
              <div style={{ padding: '14px 18px', borderBottom: `1px solid ${COLORS.border}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <div style={{ fontFamily:'JetBrains Mono', fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:COLORS.cyan }}>RRI Heatmap · Ligurian Coast</div>
                  <div style={{ fontFamily:'JetBrains Mono', fontSize:10, color:COLORS.fg3, letterSpacing:'.10em', marginTop: 4 }}>SENTINEL-2 · 04:18 UTC · 44.41°N 8.96°E</div>
                </div>
                <div style={{ fontFamily:'JetBrains Mono', fontSize: 10, color: COLORS.fg3, letterSpacing: '.10em' }}>{cur.d} · 2005</div>
              </div>
              <DashMap day={day} cur={cur}/>
            </DashCard>

            {/* RRI big readout */}
            <DashCard cols={4} pad={0} style={{ minHeight: 260 }}>
              <div style={{ padding: '14px 18px', borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{ fontFamily:'JetBrains Mono', fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:COLORS.cyan }}>Respiratory Risk · Genoa</div>
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
                <DashGauge value={cur.rri} color={tierC}/>
                <div style={{ padding: '6px 16px', borderRadius: 999, background: `${tierC}22`, color: tierC, border: `1px solid ${tierC}66`, fontFamily:'JetBrains Mono', fontSize: 12, fontWeight: 600, letterSpacing: '.18em' }}>{cur.tier}</div>
                <div style={{ fontFamily:'JetBrains Mono', fontSize: 11, color: COLORS.fg3, letterSpacing: '.10em', textAlign: 'center' }}>
                  {cur.tier === 'CRITICAL' && 'Trigger fired · €132k payout queued'}
                  {cur.tier === 'RED' && 'Surge prep · staffing notified'}
                  {cur.tier === 'AMBER' && 'Watch state · hospitals informed'}
                  {cur.tier === 'GREEN' && 'No active aerosolisation risk'}
                </div>
              </div>
            </DashCard>

            {/* Forecast chart full width */}
            <DashCard cols={12} pad={0}>
              <div style={{ padding: '14px 18px', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily:'JetBrains Mono', fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:COLORS.cyan }}>Genoa 2005 · Ostreopsis Replay</div>
                  <div style={{ fontFamily:'JetBrains Mono', fontSize:10, color:COLORS.fg3, letterSpacing:'.10em', marginTop: 4 }}>Bloom probability · RRI 0–100 · 8-day window</div>
                </div>
                <div style={{ display:'flex', gap:14, fontFamily:'JetBrains Mono', fontSize:10, letterSpacing:'.10em', color:COLORS.fg2, textTransform:'uppercase' }}>
                  <span style={{ display:'flex', gap:6, alignItems:'center' }}><span style={{ width:14, height:2, background: COLORS.cyan }}/>Bloom prob</span>
                  <span style={{ display:'flex', gap:6, alignItems:'center' }}><span style={{ width:14, height:2, background: COLORS.redSoft }}/>RRI</span>
                </div>
              </div>
              <div style={{ height: 180, padding: 14 }}>
                <DashChart day={day}/>
              </div>
            </DashCard>
          </div>
        </div>

        {/* Caption strip */}
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8 }}>
          {GENOA.map((g, i) => (
            <div key={g.d} style={{
              padding: '10px 14px', borderRadius: 8, textAlign: 'center',
              background: i === day ? `${TIER_COLOR[g.tier]}18` : 'rgba(255,255,255,0.025)',
              border: `1px solid ${i === day ? TIER_COLOR[g.tier] : COLORS.border}`,
              transition: 'all 200ms',
            }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: i === day ? TIER_COLOR[g.tier] : COLORS.fg3, letterSpacing: '0.12em' }}>{g.d}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 600, color: i === day ? COLORS.fg : COLORS.fg3, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{Math.round(g.rri)}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter num={6} total={16} section="Live demo"/>
    </SlideFrame>
  );
}

function tierColorTone(t) {
  return t === 'CRITICAL' || t === 'RED' ? 'red' : t === 'AMBER' ? 'amber' : 'green';
}

function dvalStyle(c) {
  return { fontFamily:'Space Grotesk', fontVariantNumeric:'tabular-nums', fontSize: 38, fontWeight: 600, color: c, letterSpacing: '-0.02em', lineHeight: 1, marginTop: 8 };
}
function dsubStyle() {
  return { fontFamily:'JetBrains Mono', fontSize: 11, color: COLORS.fg3, marginTop: 10, letterSpacing: '.06em' };
}

function DashCard({ cols, label, chip, chipTone, children, pad = 16, style, flash }) {
  return (
    <div style={{
      gridColumn: `span ${cols}`,
      background: '#1E2129', border: `1px solid ${flash ? 'rgba(255,0,0,0.45)' : COLORS.border}`,
      borderRadius: 12,
      boxShadow: flash ? `0 0 24px rgba(255,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)` : '0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
      padding: pad, transition: 'all 280ms',
      ...style,
    }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: COLORS.cyan }}>{label}</span>
          {chip && <Chip tone={chipTone || 'slate'} style={{ fontSize: 9, padding: '4px 10px', letterSpacing: '0.12em' }}>{chip}</Chip>}
        </div>
      )}
      {children}
    </div>
  );
}

function DashMap({ day, cur }) {
  // Bloom blob radius grows with day; pin colors driven by RRI
  const intensity = Math.min(day / 6, 1);
  return (
    <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: 'radial-gradient(600px 300px at 50% 50%, rgba(0,0,128,0.25), transparent 70%), linear-gradient(180deg,#0E1015,#15171F)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,209,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,255,0.06) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}/>
      <svg viewBox="0 0 800 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M30 30 Q160 50 320 65 Q480 80 640 70 Q740 65 780 55 L780 200 L30 200 Z" fill="rgba(0,209,255,0.05)" stroke="rgba(0,209,255,0.30)" strokeWidth="1"/>
      </svg>
      {/* bloom */}
      <div style={{
        position: 'absolute', left: '34%', top: '38%',
        width: 120 + 100 * intensity, height: 70 + 50 * intensity,
        borderRadius: '50%', filter: 'blur(14px)',
        background: `radial-gradient(ellipse, rgba(255,0,0,${0.25 + 0.4*intensity}), transparent 70%)`,
        transition: 'all 600ms',
      }}/>
      <div style={{
        position: 'absolute', left: '52%', top: '44%',
        width: 100 + 80 * intensity, height: 60 + 40 * intensity,
        borderRadius: '50%', filter: 'blur(14px)',
        background: `radial-gradient(ellipse, rgba(255,102,102,${0.18 + 0.3*intensity}), transparent 70%)`,
        transition: 'all 600ms',
      }}/>
      {/* Pins */}
      {[
        { x: 32, y: 56, name: 'SAN MARTINO', factor: 1 },
        { x: 50, y: 64, name: 'GALLIERA',     factor: 0.82 },
        { x: 68, y: 56, name: 'VILLA SCASSI', factor: 0.62 },
      ].map(p => {
        const v = cur.rri * p.factor;
        const c = v > 85 ? COLORS.red : v > 60 ? COLORS.redSoft : v > 30 ? COLORS.amber : COLORS.green;
        return (
          <div key={p.name} style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: `${c}66`, border: `2px solid ${c}`, boxShadow: v > 85 ? `0 0 12px ${c}` : 'none' }}/>
            <div style={{ fontFamily:'JetBrains Mono', fontSize: 9, letterSpacing:'.10em', color: COLORS.fg, background: 'rgba(20,22,28,0.85)', padding:'2px 6px', borderRadius: 4, border:`1px solid ${COLORS.border}`, whiteSpace:'nowrap' }}>{p.name} · {v.toFixed(1)}</div>
          </div>
        );
      })}
      {/* Legend */}
      <div style={{ position: 'absolute', left: 12, bottom: 10, padding: '6px 10px', background: 'rgba(20,22,28,0.85)', backdropFilter: 'blur(8px)', borderRadius: 8, border: `1px solid ${COLORS.border}`, fontFamily:'JetBrains Mono', fontSize: 9, letterSpacing:'.12em', color: COLORS.fg2, textTransform: 'uppercase', display: 'flex', gap: 12 }}>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: COLORS.green, borderRadius: 2, marginRight: 4 }}/>0–30</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: COLORS.amber, borderRadius: 2, marginRight: 4 }}/>31–60</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: COLORS.redSoft, borderRadius: 2, marginRight: 4 }}/>61–85</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: COLORS.red, borderRadius: 2, marginRight: 4 }}/>&gt;85</span>
      </div>
    </div>
  );
}

function DashGauge({ value, color }) {
  const r = 70, cx = 100, cy = 100;
  const a = 180 + (value / 100) * 180;
  const polar = (deg, rad=r) => [cx + rad*Math.cos(deg*Math.PI/180), cy + rad*Math.sin(deg*Math.PI/180)];
  const arc = (a1, a2) => {
    const [x1,y1] = polar(a1); const [x2,y2] = polar(a2);
    return `M ${x1} ${y1} A ${r} ${r} 0 ${a2-a1>180?1:0} 1 ${x2} ${y2}`;
  };
  return (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path d={arc(180, 360)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14"/>
      <path d={arc(180, a)} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" style={{ transition: 'all 600ms' }}/>
      <text x={cx} y={cy+4} textAnchor="middle" fill={COLORS.fg} fontFamily="Space Grotesk" fontSize="36" fontWeight="600" style={{ fontVariantNumeric: 'tabular-nums' }}>{value.toFixed(0)}</text>
    </svg>
  );
}

function DashChart({ day }) {
  const w = 1600, h = 150, pad = { l: 30, r: 14, t: 10, b: 22 };
  const xs = i => pad.l + (i*(w - pad.l - pad.r))/(GENOA.length-1);
  const yProb = v => pad.t + (h - pad.t - pad.b)*(1 - v);
  const yRri  = v => pad.t + (h - pad.t - pad.b)*(1 - v/100);
  const visible = GENOA.slice(0, day + 1);
  const line = (vals, fn) => vals.map((v,i)=>(i===0?'M':'L')+xs(i)+' '+fn(v)).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
      {[
        {y0:85, y1:100, fill:'rgba(255,0,0,0.06)'},
        {y0:60, y1:85,  fill:'rgba(255,102,102,0.05)'},
        {y0:30, y1:60,  fill:'rgba(255,176,32,0.05)'},
      ].map((b,i)=>(
        <rect key={i} x={pad.l} width={w-pad.l-pad.r} y={yRri(b.y1)} height={yRri(b.y0)-yRri(b.y1)} fill={b.fill}/>
      ))}
      {[0,50,100].map(t => (
        <g key={t}>
          <line x1={pad.l} x2={w-pad.r} y1={yRri(t)} y2={yRri(t)} stroke="rgba(255,255,255,0.05)"/>
          <text x={pad.l-6} y={yRri(t)+3} fill={COLORS.fg4} fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">{t}</text>
        </g>
      ))}
      {GENOA.map((r,i) => (
        <text key={r.d} x={xs(i)} y={h-pad.b+14} fill={i<=day?COLORS.fg2:COLORS.fg4} fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">{r.d}</text>
      ))}
      {/* CRITICAL line */}
      <line x1={pad.l} x2={w-pad.r} y1={yRri(85)} y2={yRri(85)} stroke="#FF0000" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"/>
      {visible.length > 1 && (
        <>
          <path d={line(visible.map(r=>r.p), yProb)} stroke={COLORS.cyan} strokeWidth="2" fill="none"/>
          <path d={line(visible.map(r=>r.rri), yRri)} stroke={COLORS.redSoft} strokeWidth="2" fill="none"/>
        </>
      )}
      {/* current point markers */}
      {visible.length > 0 && (
        <>
          <circle cx={xs(day)} cy={yProb(visible[visible.length-1].p)} r="4" fill="#001218" stroke={COLORS.cyan} strokeWidth="2"/>
          <circle cx={xs(day)} cy={yRri(visible[visible.length-1].rri)} r="5" fill={visible[visible.length-1].rri > 85 ? COLORS.red : COLORS.redSoft} stroke="#fff" strokeWidth="1.5"/>
        </>
      )}
    </svg>
  );
}

window.DashboardDemoSlide = DashboardDemoSlide;
