const STAR_COUNT = 60;

// A tiny deterministic PRNG so the star layout is stable across renders.
// Math.random() would reshuffle on every server render, which mismatches
// the prerendered HTML against the client and trips a hydration warning.
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(20251008);
const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  id: i,
  left: random() * 100,
  top: random() * 100,
  // Fixed pixel sizes, not viewBox units - keeps stars genuinely tiny
  // regardless of the hero's own aspect ratio at any screen size.
  size: 1 + random() * 1.5,
  delay: random() * 7,
}));

/**
 * A quiet, dark-mode-only starfield behind the hero. Plain absolutely
 * positioned dots, no SVG viewBox and no animation library - sized in real
 * pixels so they stay tiny at any aspect ratio, with a slow, barely-there
 * twinkle. Hidden in light mode via globals.css (stars on a white sky make
 * no sense), and already covered by the global prefers-reduced-motion rule
 * there, which freezes this animation along with every other one.
 */
export function StarField() {
  return (
    <div aria-hidden="true" className="star-field pointer-events-none absolute inset-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
