/* global React */
// Shared slide components for the RedMetrics pitch deck

const TYPE_SCALE = {
  hero: 120,
  title: 64,
  subtitle: 44,
  body: 34,
  small: 28,
  micro: 22,
  eyebrow: 22,
};

const SPACING = {
  paddingTop: 100,
  paddingBottom: 80,
  paddingX: 100,
  titleGap: 52,
  itemGap: 28,
  sectionGap: 64,
};

const COLORS = {
  bg: '#0E1015',
  bg1: '#1B1E26',
  bg2: '#242832',
  bg3: '#2E323E',
  fg: '#F1F5F9',
  fg2: '#CBD5E1',
  fg3: '#94A3B8',
  fg4: '#64748B',
  cyan: '#00D1FF',
  red: '#FF0000',
  redSoft: '#FF6666',
  amber: '#FFB020',
  green: '#10E0A0',
  navy: '#000080',
  glass: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.10)',
  borderStrong: 'rgba(255,255,255,0.16)',
};

// ---------- Slide frame ----------
function SlideFrame({ children, bg, label, padded = true, style }) {
  return (
    <div data-screen-label={label} style={{
      width: '100%', height: '100%',
      background: bg || COLORS.bg1,
      color: COLORS.fg,
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: padded ? `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px` : 0,
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ---------- Eyebrow / kicker ----------
function Eyebrow({ children, color, style }) {
  return (
    <div style={{
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: TYPE_SCALE.eyebrow,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: color || COLORS.cyan,
      fontWeight: 500,
      ...style,
    }}>{children}</div>
  );
}

// ---------- Slide title ----------
function SlideTitle({ children, style }) {
  return (
    <h2 style={{
      fontFamily: 'Space Grotesk, system-ui, sans-serif',
      fontSize: TYPE_SCALE.title,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: COLORS.fg,
      margin: 0,
      ...style,
    }}>{children}</h2>
  );
}

function SlideHeader({ eyebrow, title, eyebrowColor }) {
  return (
    <div style={{ marginBottom: SPACING.titleGap }}>
      {eyebrow && <Eyebrow color={eyebrowColor} style={{ marginBottom: 24 }}>{eyebrow}</Eyebrow>}
      <SlideTitle>{title}</SlideTitle>
    </div>
  );
}

// ---------- Body text ----------
function Body({ children, color, size, style }) {
  return (
    <p style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: size || TYPE_SCALE.body,
      lineHeight: 1.45,
      color: color || COLORS.fg2,
      margin: 0,
      letterSpacing: '-0.005em',
      textWrap: 'pretty',
      ...style,
    }}>{children}</p>
  );
}

// ---------- Glass card ----------
function GlassCard({ children, style, padding = 32 }) {
  return (
    <div style={{
      background: COLORS.glass,
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      border: `1px solid ${COLORS.border}`,
      borderRadius: 18,
      boxShadow: '0 12px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
      padding,
      ...style,
    }}>{children}</div>
  );
}

// ---------- Status chip ----------
function Chip({ children, tone = 'cyan', style }) {
  const tones = {
    cyan:   { c: COLORS.cyan,    bg: 'rgba(0,209,255,0.08)',  bd: 'rgba(0,209,255,0.40)' },
    red:    { c: COLORS.redSoft, bg: 'rgba(255,0,0,0.08)',    bd: 'rgba(255,0,0,0.40)' },
    amber:  { c: COLORS.amber,   bg: 'rgba(255,176,32,0.08)', bd: 'rgba(255,176,32,0.40)' },
    green:  { c: COLORS.green,   bg: 'rgba(16,224,160,0.08)', bd: 'rgba(16,224,160,0.40)' },
    slate:  { c: COLORS.fg2,     bg: 'rgba(255,255,255,0.04)',bd: 'rgba(255,255,255,0.16)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: TYPE_SCALE.micro, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: t.c, background: t.bg, border: `1px solid ${t.bd}`,
      padding: '8px 16px', borderRadius: 999, fontWeight: 500,
      ...style,
    }}>{children}</span>
  );
}

// ---------- Bathymetric pattern ----------
function Bathymetry({ opacity = 0.06, style }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity, ...style }} viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 18 }).map((_, i) => {
        const y = 60 + i * 60;
        return <path key={i} d={`M0 ${y} Q480 ${y - 30 + (i%2)*60} 960 ${y} T1920 ${y}`} fill="none" stroke={COLORS.cyan} strokeWidth="1"/>;
      })}
    </svg>
  );
}

// ---------- Hairline divider ----------
function Hairline({ style }) {
  return <div style={{ height: 1, background: COLORS.border, width: '100%', ...style }}/>;
}

// ---------- Number block (big metric) ----------
function BigNumber({ value, unit, label, color, style }) {
  return (
    <div style={style}>
      <div style={{
        fontFamily: 'Space Grotesk, system-ui, sans-serif',
        fontVariantNumeric: 'tabular-nums',
        fontSize: TYPE_SCALE.hero,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: '-0.03em',
        color: color || COLORS.cyan,
      }}>
        {value}
        {unit && <span style={{ fontSize: TYPE_SCALE.subtitle, color: COLORS.fg3, marginLeft: 12, fontFamily: 'JetBrains Mono, monospace' }}>{unit}</span>}
      </div>
      {label && <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: TYPE_SCALE.micro,
        color: COLORS.fg3,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        marginTop: 16,
      }}>{label}</div>}
    </div>
  );
}

// ---------- Section system + prominent progress indicator ----------
// 6 narrative sections. Each slide gets a section name + index for the progress bar.
const SECTIONS = [
  { id: 'INTRO',    label: 'Introduction', color: '#9CA3AF' },
  { id: 'PROBLEM',  label: 'Problem',      color: '#FF6666' },
  { id: 'SOLUTION', label: 'Solution',     color: '#00D1FF' },
  { id: 'PRODUCT',  label: 'Product',      color: '#10E0A0' },
  { id: 'BUSINESS', label: 'Business',     color: '#FFB020' },
  { id: 'TEAM',     label: 'Team & Next',  color: '#A78BFA' },
];

function SectionProgress({ activeId }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      display: 'flex', gap: 6, padding: '14px 100px 0',
      zIndex: 5, pointerEvents: 'none',
    }}>
      {SECTIONS.map(s => {
        const active = s.id === activeId;
        return (
          <div key={s.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{
              height: 5, borderRadius: 2,
              background: active ? s.color : 'rgba(255,255,255,0.08)',
              boxShadow: active ? `0 0 12px ${s.color}` : 'none',
              transition: 'all 240ms',
            }}/>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: active ? s.color : 'rgba(255,255,255,0.20)',
              fontWeight: active ? 600 : 400,
              transition: 'color 240ms',
            }}>{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Page footer (deck chrome) ----------
// num/total are FALLBACKS — actual values come from the surrounding <deck-stage> sections,
// so footers stay correct even when the slide list is reordered or extended.
function SlideFooter({ num, total, section, sectionId }) {
  const ref = React.useRef(null);
  const [auto, setAuto] = React.useState({ num, total });
  React.useEffect(() => {
    if (!ref.current) return;
    const sec = ref.current.closest('deck-stage > section');
    if (!sec) return;
    const all = Array.from(sec.parentElement.querySelectorAll(':scope > section'));
    const idx = all.indexOf(sec);
    if (idx >= 0) setAuto({ num: idx + 1, total: all.length });
  }, []);
  const n = auto.num ?? num;
  const t = auto.total ?? total;
  return (
    <>
      {sectionId && <SectionProgress activeId={sectionId}/>}
      <div ref={ref} style={{
        position: 'absolute',
        left: SPACING.paddingX, right: SPACING.paddingX, bottom: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: COLORS.fg4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: COLORS.red, boxShadow: `0 0 8px ${COLORS.red}` }}/>
          RedMetrics · TideAlert
        </div>
        {section && <div>{section}</div>}
        <div style={{ fontVariantNumeric: 'tabular-nums' }}>{String(n).padStart(2, '0')} / {String(t).padStart(2, '0')}</div>
      </div>
    </>
  );
}

Object.assign(window, {
  TYPE_SCALE, SPACING, COLORS, SECTIONS,
  SlideFrame, Eyebrow, SlideTitle, SlideHeader, Body, GlassCard, Chip,
  Bathymetry, Hairline, BigNumber, SlideFooter, SectionProgress,
});
