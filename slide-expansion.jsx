/* global React */
// Future Expansion slide — same model, more verticals.
// Hotels · Beach owners · Property owners · Fish farms

function SlideExpansion() {
  const verticals = [
    {
      tag: 'HOSPITALITY',
      tone: COLORS.cyan,
      title: 'Coastal hotels & resorts',
      who: 'Beachfront hotel groups',
      pitch: 'Protect occupancy. A 7-day RRI forecast lets a hotel rebook guests before a closure, not after a bad review.',
      metric: '€8–24k',
      metricSub: 'avg. 100-room hotel · loss per Red-Tide weekend',
      icon: 'hotel',
    },
    {
      tag: 'BEACH OWNERS',
      tone: COLORS.amber,
      title: 'Lidos & beach concessions',
      who: 'Private beach operators · municipal lidos',
      pitch: 'Trigger-based revenue insurance for closure days. Same parametric contract, daily payouts pegged to RRI tier.',
      metric: '8–14',
      metricSub: 'Italian closure days / season · Ligurian average',
      icon: 'beach',
    },
    {
      tag: 'PROPERTY',
      tone: COLORS.green,
      title: 'Coastal real-estate owners',
      who: 'STR managers · luxury rentals · HNW villas',
      pitch: 'Air-quality risk score per address. Becomes a yield lever for booking platforms and a disclosure layer for sales.',
      metric: '−18%',
      metricSub: 'STR booking rate during active blooms',
      icon: 'house',
    },
    {
      tag: 'AQUACULTURE',
      tone: COLORS.redSoft,
      title: 'Fish & shellfish farms',
      who: 'Mussel cooperatives · sea-bream operators',
      pitch: 'DO crashes kill stocks in hours. Our IoT sentinels and CMEMS forecast give 48 h to deploy aerators or move cages.',
      metric: '40–90%',
      metricSub: 'cage mortality during severe HAB events',
      icon: 'fish',
    },
  ];

  return (
    <SlideFrame label="13 Future Expansion" bg={COLORS.bg1}>
      <Bathymetry opacity={0.05}/>
      <SlideHeader
        eyebrow="Future Expansion · Same engine, new verticals"
        title="One platform. Four coastal markets that pay for warning."
      />

      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        {/* Hub diagram strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        }}>
          {verticals.map(v => (
            <GlassCard key={v.tag} padding={28} style={{ display: 'flex', flexDirection: 'column', minHeight: 460, position: 'relative', overflow: 'hidden' }}>
              {/* corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${v.tone}22, transparent 70%)`, pointerEvents: 'none' }}/>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.18em',
                  color: v.tone, padding: '6px 12px', borderRadius: 4,
                  background: `${v.tone}14`, border: `1px solid ${v.tone}55`,
                }}>{v.tag}</span>
                <ExpansionIcon kind={v.icon} color={v.tone}/>
              </div>

              <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 600, color: COLORS.fg, lineHeight: 1.15 }}>{v.title}</div>
              <Eyebrow style={{ marginTop: 10, fontSize: 14 }}>{v.who}</Eyebrow>

              <Body size={20} color={COLORS.fg2} style={{ marginTop: 20 }}>{v.pitch}</Body>

              <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: `1px solid ${COLORS.border}` }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 38, fontWeight: 600, color: v.tone, letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{v.metric}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: COLORS.fg3, marginTop: 8, letterSpacing: '0.06em' }}>{v.metricSub}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom band — same engine */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center',
          padding: '28px 36px', borderRadius: 16,
          background: 'linear-gradient(90deg, rgba(0,209,255,0.06), rgba(255,0,0,0.06))',
          border: `1px solid ${COLORS.border}`,
        }}>
          <div>
            <Eyebrow color={COLORS.cyan}>Same RedMetrics engine</Eyebrow>
            <Body size={22} color={COLORS.fg} style={{ marginTop: 8 }}>
              Copernicus + IoT + RRI physics already does the work. Each new vertical is a new
              <span style={{ color: COLORS.fg }}> contract surface</span> on top of the same data.
            </Body>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: COLORS.fg3, letterSpacing: '0.16em' }}>RRI</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: COLORS.cyan }}>→</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[
              { l: 'Hospitals',   c: COLORS.amber },
              { l: 'Hotels',      c: COLORS.cyan },
              { l: 'Beaches',     c: COLORS.amber },
              { l: 'Aquaculture', c: COLORS.redSoft },
            ].map(x => (
              <div key={x.l} style={{
                padding: '10px 12px', textAlign: 'center', borderRadius: 8,
                background: `${x.c}10`, border: `1px solid ${x.c}55`,
                fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: 600, color: x.c,
              }}>{x.l}</div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter num={13} total={17} section="Expansion" sectionId="BUSINESS"/>
    </SlideFrame>
  );
}

function ExpansionIcon({ kind, color }) {
  const s = { width: 44, height: 44, color };
  if (kind === 'hotel') return (
    <svg viewBox="0 0 48 48" style={s} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="8" y="14" width="32" height="28" rx="1.5"/>
      <line x1="8" y1="22" x2="40" y2="22"/>
      <line x1="8" y1="30" x2="40" y2="30"/>
      <rect x="13" y="17" width="4" height="3"/><rect x="22" y="17" width="4" height="3"/><rect x="31" y="17" width="4" height="3"/>
      <rect x="13" y="25" width="4" height="3"/><rect x="22" y="25" width="4" height="3"/><rect x="31" y="25" width="4" height="3"/>
      <rect x="20" y="34" width="8" height="8"/>
      <path d="M14 14 L24 6 L34 14" />
    </svg>
  );
  if (kind === 'beach') return (
    <svg viewBox="0 0 48 48" style={s} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="32" cy="14" r="3"/>
      <line x1="32" y1="17" x2="32" y2="40"/>
      <path d="M14 22 Q24 14 34 18"/>
      <path d="M11 26 Q24 20 36 22"/>
      <path d="M8 32 Q24 28 40 32" />
      <path d="M6 38 Q24 36 42 38"/>
    </svg>
  );
  if (kind === 'house') return (
    <svg viewBox="0 0 48 48" style={s} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 22 L24 8 L40 22 L40 42 L8 42 Z"/>
      <rect x="20" y="28" width="8" height="14"/>
      <line x1="8" y1="42" x2="40" y2="42" strokeWidth="2"/>
      <path d="M4 42 Q12 38 20 42" opacity="0.5"/>
      <path d="M28 42 Q36 38 44 42" opacity="0.5"/>
    </svg>
  );
  if (kind === 'fish') return (
    <svg viewBox="0 0 48 48" style={s} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 24 Q16 14 28 24 Q16 34 8 24 Z"/>
      <path d="M28 24 L40 16 L36 24 L40 32 Z"/>
      <circle cx="14" cy="22" r="1.2" fill="currentColor"/>
      <path d="M4 38 Q14 34 24 38 Q34 42 44 38" opacity="0.5"/>
    </svg>
  );
  return null;
}

window.SlideExpansion = SlideExpansion;
