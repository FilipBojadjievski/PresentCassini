/* global React */
// Video showcase slide — replaces the animated dashboard mock with a real video.
const { useEffect, useRef, useState } = React;

function VideoShowcaseSlide() {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  // Try to autoplay when slide becomes visible.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => { v.play().catch(() => {}); };
    tryPlay();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) tryPlay();
        else v.pause();
      });
    }, { threshold: 0.4 });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPaused(false); }
    else { v.pause(); setPaused(true); }
  };

  return (
    <SlideFrame label="07 Live Demo" bg={COLORS.bg} padded={false}>
      <div style={{
        position: 'relative', flex: 1, display: 'flex', flexDirection: 'column',
        padding: `${SPACING.paddingTop}px ${SPACING.paddingX}px ${SPACING.paddingBottom}px`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div>
            <Eyebrow>Live Demo · TideAlert dashboard</Eyebrow>
            <SlideTitle style={{ marginTop: 18 }}>From satellite to settlement, in one screen.</SlideTitle>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Chip tone="cyan">Showcase video</Chip>
            <button onClick={toggle} style={{
              fontFamily: 'JetBrains Mono', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '10px 20px', borderRadius: 999, color: COLORS.fg, background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${COLORS.border}`, cursor: 'pointer',
            }}>{paused ? '▶ play' : '❚❚ pause'}</button>
          </div>
        </div>

        {/* Browser-window mock framing the video */}
        <div style={{
          flex: 1, borderRadius: 18, overflow: 'hidden',
          background: '#0E1015', border: `1px solid ${COLORS.borderStrong}`,
          boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Tab strip */}
          <div style={{ height: 44, background: '#14161C', borderBottom: `1px solid ${COLORS.border}`, display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10, flexShrink: 0 }}>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FF5F57' }}/>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#FEBC2E' }}/>
            <span style={{ width: 11, height: 11, borderRadius: 999, background: '#28C840' }}/>
            <div style={{ marginLeft: 24, fontFamily: 'JetBrains Mono', fontSize: 13, color: COLORS.fg3, letterSpacing: '0.12em' }}>app.redmetrics.eu / portfolio / genoa</div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 11, color: COLORS.fg3, letterSpacing: '0.12em' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: COLORS.cyan, boxShadow: `0 0 6px ${COLORS.cyan}` }}/>
              LIVE
            </div>
          </div>

          {/* Video */}
          <div style={{ flex: 1, position: 'relative', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <video
              ref={ref}
              src="assets/Showcase_Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>

        {/* Caption strip */}
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { k: 'Trigger Monitor', v: 'Real-time RRI tier per zone' },
            { k: 'Portfolio',       v: '3 hospitals · 2 insurers' },
            { k: 'Events Log',      v: 'Audit trail of every payout' },
            { k: 'RRI Map',         v: 'Sentinel-2 + CMEMS overlay' },
          ].map(x => (
            <div key={x.k} style={{
              padding: '12px 16px', borderRadius: 8,
              background: 'rgba(255,255,255,0.025)', border: `1px solid ${COLORS.border}`,
            }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: COLORS.cyan, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{x.k}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 18, color: COLORS.fg2, marginTop: 6 }}>{x.v}</div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter num={7} total={17} section="Live demo" sectionId="SOLUTION"/>
    </SlideFrame>
  );
}

window.VideoShowcaseSlide = VideoShowcaseSlide;
