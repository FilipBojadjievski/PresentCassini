/* global React */
// Static visual for the IoT Sentinel slide — two render screenshots:
// the vertical device on the left, the underside sensor face on the right.

function IoTDeviceModel() {
  return (
    <div style={{
      width: '100%', maxWidth: 720, height: 660, position: 'relative',
      borderRadius: 28, overflow: 'hidden',
      background: `radial-gradient(ellipse at 50% 35%, rgba(0,209,255,0.10), rgba(0,0,0,0) 60%), linear-gradient(180deg,#0E1015,#05060A)`,
      border: `1px solid ${COLORS.borderStrong}`,
      boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top label */}
      <div style={{
        padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: COLORS.fg4, letterSpacing: '0.18em' }}>
          UNDERWATER SENTINEL · LIG-12
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 11, color: COLORS.fg3, letterSpacing: '0.14em' }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: COLORS.cyan, boxShadow: `0 0 8px ${COLORS.cyan}` }}/>
          PROTOTYPE · RENDER
        </div>
      </div>

      {/* Two-up image grid */}
      <div style={{
        flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr',
        gap: 0, alignItems: 'stretch',
      }}>
        {/* Vertical view */}
        <div style={{
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '28px 16px',
          borderRight: `1px solid ${COLORS.border}`,
        }}>
          <img src="image.png" alt="Underwater sensor — vertical view"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}/>
          <div style={{
            position: 'absolute', left: 18, bottom: 16,
            fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: COLORS.cyan,
          }}>
            View · Vertical
          </div>
        </div>

        {/* Bottom view */}
        <div style={{
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '28px 16px',
        }}>
          <img src="image copy.png" alt="Underwater sensor — underside sensor face"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}/>
          <div style={{
            position: 'absolute', left: 18, bottom: 16,
            fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: COLORS.redSoft,
          }}>
            View · Underside · 8 sensors
          </div>
        </div>
      </div>
    </div>
  );
}

window.IoTDeviceModel = IoTDeviceModel;
