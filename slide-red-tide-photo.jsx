/* global React */
// "What it looks like" beat — a real aerial photograph of a red tide bloom
// hitting a coastline. Sits between the news ticker (slide 2) and the
// satellite-drift video (slide 4) to ground the audience in the visual
// reality before the data view.

function RedTidePhotoSlide() {
  return (
    <div data-screen-label="03 Red Tide Reality" style={{
      width: '100%', height: '100%', background: '#000',
      position: 'relative', overflow: 'hidden',
    }}>
      <img
        src="red_tide_genera.v3.jpg"
        alt="Aerial photograph of a red tide bloom against a turquoise coastline"
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          display: 'block', filter: 'saturate(1.05)',
        }}
      />

      {/* Subtle bottom-edge vignette so the eyebrow + caption stay readable */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.85) 100%)',
      }}/>

      {/* Top-left source eyebrow */}
      <div style={{
        position: 'absolute', top: 56, left: 64, zIndex: 2,
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontSize: 14, letterSpacing: '0.20em', textTransform: 'uppercase',
        color: '#FF6666',
      }}>
        Aerial Photograph · Coastal red tide bloom
      </div>

      {/* Bottom caption */}
      <div style={{
        position: 'absolute', left: 64, right: 64, bottom: 56, zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24,
      }}>
        <div style={{ maxWidth: 1300 }}>
          <div style={{
            fontFamily: 'Space Grotesk, system-ui, sans-serif',
            fontSize: 64, fontWeight: 600, lineHeight: 1.05,
            letterSpacing: '-0.02em', color: '#F1F5F9',
            textShadow: '0 6px 28px rgba(0,0,0,0.65)',
          }}>
            This is what Red Tide<br/>looks like.
          </div>
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
        }}>
          The water is the warning
        </div>
      </div>
    </div>
  );
}

window.RedTidePhotoSlide = RedTidePhotoSlide;
