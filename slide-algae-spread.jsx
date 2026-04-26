/* global React */
// Algae Spread visual — full-bleed playback of RedMetrics.mp4. No chrome.
const { useEffect: useEffectAS, useRef: useRefAS } = React;

function AlgaeSpreadSlide() {
  const ref = useRefAS(null);

  useEffectAS(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => { v.currentTime = 0; v.play().catch(() => {}); };
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) tryPlay();
        else v.pause();
      });
    }, { threshold: 0.4 });
    obs.observe(v);
    const onSlideChange = (e) => {
      const slide = v.closest('section[data-deck-slide]');
      if (!slide) return;
      if (e.detail.slide === slide) tryPlay();
      else v.pause();
    };
    const stage = document.querySelector('deck-stage');
    stage && stage.addEventListener('slidechange', onSlideChange);
    return () => {
      obs.disconnect();
      stage && stage.removeEventListener('slidechange', onSlideChange);
    };
  }, []);

  return (
    <div data-screen-label="03 Algae Spread" style={{
      width: '100%', height: '100%', background: '#000',
      position: 'relative', overflow: 'hidden',
    }}>
      <video
        ref={ref}
        src="RedMetrics.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }}
      />
    </div>
  );
}

window.AlgaeSpreadSlide = AlgaeSpreadSlide;
