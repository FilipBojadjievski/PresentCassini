/* global React */
// News-hook slide — dramatic ticker of real headlines/study findings to open the deck.
// Auto-cycles a stack of citations with a marquee + spotlight effect.
const { useState: useStateNH, useEffect: useEffectNH } = React;

const NEWS_ITEMS = [
  { tag: 'KIRKPATRICK ET AL · 2006',         line: '+54% respiratory ER admissions during red tide weeks.',                source: 'PMC2847280' },
  { tag: 'HOAGLAND ET AL · 2014',            line: '9.88 additional ER visits per zip code · 16-yr Medicare data.',         source: 'Sci. Total Environ.' },
  { tag: 'UNIVERSITY OF FLORIDA · 2026',     line: '137,930 patients studied · 1,320 extra respiratory cases per bloom month.', source: 'UF Coastal Center' },
  { tag: 'GENOA · ITALY · 2005',             line: '200+ ER admissions in days · Ostreopsis ovata outbreak.',               source: 'ResearchGate' },
  { tag: 'ANSES · BASQUE COAST · 2021–24',   line: '674 poisonings linked to Ostreopsis along French coast.',               source: 'ANSES France' },
  { tag: 'ISPRA · ITALY · 2023',             line: 'Ostreopsis monitored as a national-priority biological pollutant.',     source: 'ISPRA Annual' },
  { tag: 'IFREMER · 2024',                   line: 'Ostreopsis blooms starting earlier · lasting longer · range expanding.',source: 'IFREMER' },
  { tag: 'FRONTIERS ECOL. EVOL. · 2021',     line: '$24M capitalized economic cost from coastal HAB events.',               source: 'Frontiers' },
  { tag: 'NIH · PMC4676275',                 line: 'HABs identified as a 21st-century public-health challenge.',            source: 'NIH' },
  { tag: 'COPERNICUS / CMEMS',               line: 'Operational HAB monitoring proven for Spanish aquaculture farms.',      source: 'CMEMS Use Case' },
];

function NewsHookSlide() {
  const [active, setActive] = useStateNH(0);
  useEffectNH(() => {
    const t = setInterval(() => setActive(a => (a + 1) % NEWS_ITEMS.length), 1900);
    return () => clearInterval(t);
  }, []);

  const cur = NEWS_ITEMS[active];

  return (
    <SlideFrame label="02 News Hook" bg="#070809" padded={false}>
      {/* dramatic vignette + scanlines */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(1400px 800px at 50% 50%, rgba(255,0,0,0.10), transparent 70%),
                     radial-gradient(800px 500px at 50% 100%, rgba(0,0,128,0.30), transparent 70%)`,
      }}/>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 3px)', pointerEvents: 'none' }}/>
      <Bathymetry opacity={0.04}/>

      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px` }}>

        {/* Top: BREAKING strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 56 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 22px', borderRadius: 4,
            background: COLORS.red,
            fontFamily: 'JetBrains Mono', fontSize: 18, fontWeight: 700, letterSpacing: '0.24em',
            color: '#fff', textTransform: 'uppercase',
            animation: 'nh-pulse 1.4s ease-in-out infinite',
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#fff', boxShadow: '0 0 8px #fff' }}/>
            Live · Coastal Wire
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${COLORS.red}, transparent)` }}/>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: COLORS.fg3, letterSpacing: '0.18em' }}>10 SOURCES · PEER-REVIEWED + EU MONITORING</div>
        </div>

        {/* Hero headline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <Eyebrow color={COLORS.redSoft} style={{ marginBottom: 28, fontSize: 22 }}>{cur.tag}</Eyebrow>
          <h1 key={active} style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 96, fontWeight: 600, lineHeight: 1.02,
            letterSpacing: '-0.03em', margin: 0, color: COLORS.fg, maxWidth: 1700,
            textWrap: 'balance',
            animation: 'nh-rise 600ms cubic-bezier(.2,.7,.2,1)',
          }}>
            {cur.line}
          </h1>
          <div style={{ marginTop: 32, fontFamily: 'JetBrains Mono', fontSize: 18, color: COLORS.fg4, letterSpacing: '0.16em' }}>
            SOURCE · {cur.source}
          </div>

          {/* progress bars across the bottom: one per item */}
          <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: `repeat(${NEWS_ITEMS.length}, 1fr)`, gap: 8 }}>
            {NEWS_ITEMS.map((_, i) => (
              <div key={i} style={{
                height: 4, borderRadius: 2,
                background: i < active ? COLORS.redSoft : i === active ? COLORS.red : 'rgba(255,255,255,0.10)',
                boxShadow: i === active ? `0 0 12px ${COLORS.red}` : 'none',
                transition: 'all 220ms',
              }}/>
            ))}
          </div>
        </div>

        {/* Bottom: thesis line */}
        <div style={{
          marginTop: 56, padding: '28px 40px', borderRadius: 14,
          background: 'rgba(0,209,255,0.06)', border: `1px solid rgba(0,209,255,0.30)`,
          display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'space-between',
        }}>
          <Body size={28} color={COLORS.fg2} style={{ margin: 0, maxWidth: 1300 }}>
            <span style={{ color: COLORS.cyan, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>The evidence is in.</span>
            {' '}The science says HABs are a public-health crisis. Today, nobody prices it.
          </Body>
          <Chip tone="cyan">RedMetrics · changes that</Chip>
        </div>
      </div>

      <SlideFooter num={2} total={16} section="The hook" sectionId="INTRO"/>

      <style>{`
        @keyframes nh-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(0.98); }
        }
        @keyframes nh-rise {
          0%   { opacity: 0; transform: translateY(20px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
      `}</style>
    </SlideFrame>
  );
}

window.NewsHookSlide = NewsHookSlide;
