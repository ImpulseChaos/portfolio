"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// ─── Color utilities ───────────────────────────────────────────────────────────

type RGB = [number, number, number];

const lerp    = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpRgb = (a: RGB, b: RGB, t: number): RGB => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];
const rgba = ([r, g, b]: RGB, a: number) =>
  `rgba(${r | 0},${g | 0},${b | 0},${a})`;

// ─── Scene palettes ────────────────────────────────────────────────────────────

const SUNSET = {
  sky:           [[13,2,33],[30,10,60],[74,14,48],[138,26,10]] as RGB[],
  gridRgb:       [255,0,160]   as RGB,
  chipGlowIn:    [255,140,40]  as RGB,
  chipGlowMid:   [255,50,90]   as RGB,
  chipGlowOut:   [160,0,120]   as RGB,
  chipPin:       [255,130,60]  as RGB,
  chipPinCap:    [255,200,80]  as RGB,
  chipDie0:      [255,160,60]  as RGB,
  chipDie1:      [255,60,120]  as RGB,
  chipDie2:      [150,0,100]   as RGB,
  chipBorder:    [255,130,60]  as RGB,
  chipBody0:     [42,16,64]    as RGB,
  chipBody1:     [24,8,37]     as RGB,
  chipBody2:     [13,2,32]     as RGB,
  hGlowTop:      [255,130,40]  as RGB,
  hGlowMid:      [255,40,100]  as RGB,
  hLine:         [255,210,80]  as RGB,
  silStroke:     [255,100,60]  as RGB,
  monGlow0:      [255,140,60]  as RGB,
  monGlow1:      [255,60,120]  as RGB,
  sunRiseOffset: 1.2,
};

const SUNRISE = {
  sky:           [[13,27,62],[26,58,122],[58,122,184],[232,147,16]] as RGB[],
  gridRgb:       [255,170,30]  as RGB,
  chipGlowIn:    [255,215,60]  as RGB,
  chipGlowMid:   [255,150,30]  as RGB,
  chipGlowOut:   [200,90,0]    as RGB,
  chipPin:       [255,200,50]  as RGB,
  chipPinCap:    [255,240,130] as RGB,
  chipDie0:      [255,225,80]  as RGB,
  chipDie1:      [255,165,40]  as RGB,
  chipDie2:      [200,100,0]   as RGB,
  chipBorder:    [255,200,60]  as RGB,
  chipBody0:     [10,20,50]    as RGB,
  chipBody1:     [8,15,42]     as RGB,
  chipBody2:     [5,10,30]     as RGB,
  hGlowTop:      [255,200,80]  as RGB,
  hGlowMid:      [255,150,40]  as RGB,
  hLine:         [255,245,160] as RGB,
  silStroke:     [255,180,60]  as RGB,
  monGlow0:      [255,200,80]  as RGB,
  monGlow1:      [255,150,40]  as RGB,
  sunRiseOffset: 1.8,
};

type Scene = ReturnType<typeof buildScene>;
function buildScene(p: number) {
  const l = (a: RGB, b: RGB) => lerpRgb(a, b, p);
  return {
    p,
    gridRgb:       l(SUNSET.gridRgb,    SUNRISE.gridRgb),
    chipGlowIn:    l(SUNSET.chipGlowIn,  SUNRISE.chipGlowIn),
    chipGlowMid:   l(SUNSET.chipGlowMid, SUNRISE.chipGlowMid),
    chipGlowOut:   l(SUNSET.chipGlowOut, SUNRISE.chipGlowOut),
    chipPin:       l(SUNSET.chipPin,     SUNRISE.chipPin),
    chipPinCap:    l(SUNSET.chipPinCap,  SUNRISE.chipPinCap),
    chipDie0:      l(SUNSET.chipDie0,    SUNRISE.chipDie0),
    chipDie1:      l(SUNSET.chipDie1,    SUNRISE.chipDie1),
    chipDie2:      l(SUNSET.chipDie2,    SUNRISE.chipDie2),
    chipBorder:    l(SUNSET.chipBorder,  SUNRISE.chipBorder),
    chipBody0:     l(SUNSET.chipBody0,   SUNRISE.chipBody0),
    chipBody1:     l(SUNSET.chipBody1,   SUNRISE.chipBody1),
    chipBody2:     l(SUNSET.chipBody2,   SUNRISE.chipBody2),
    hGlowTop:      l(SUNSET.hGlowTop,    SUNRISE.hGlowTop),
    hGlowMid:      l(SUNSET.hGlowMid,    SUNRISE.hGlowMid),
    hLine:         l(SUNSET.hLine,       SUNRISE.hLine),
    silStroke:     l(SUNSET.silStroke,   SUNRISE.silStroke),
    monGlow0:      l(SUNSET.monGlow0,    SUNRISE.monGlow0),
    monGlow1:      l(SUNSET.monGlow1,    SUNRISE.monGlow1),
    sunRiseOffset: lerp(SUNSET.sunRiseOffset, SUNRISE.sunRiseOffset, p),
    sky:           SUNSET.sky.map((s, i) => l(s, SUNRISE.sky[i])),
  };
}

// ─── Silhouette helpers ────────────────────────────────────────────────────────

function drawServerRack(
  ctx: CanvasRenderingContext2D,
  cx: number, baseY: number,
  w: number, h: number,
  t: number, sc: Scene
) {
  const x = cx - w / 2;
  ctx.fillStyle = "#07011a";
  ctx.fillRect(x, baseY - h, w, h);
  const units = Math.max(4, Math.round(h / 12));
  for (let i = 1; i < units; i++) {
    const y = baseY - h + i * (h / units);
    ctx.strokeStyle = rgba(sc.silStroke, 0.10);
    ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(x + 2, y); ctx.lineTo(x + w - 2, y); ctx.stroke();
    if (i % 2 === 1) {
      const on = Math.sin(t * 1.3 + i * 1.4) > 0.4;
      ctx.fillStyle = on ? "rgba(0,255,100,0.90)" : "rgba(0,255,100,0.10)";
      ctx.fillRect(x + w - 6, y + 3, 2, 2);
    }
  }
  ctx.strokeStyle = rgba(sc.silStroke, 0.22);
  ctx.lineWidth = 0.5;
  ctx.strokeRect(x, baseY - h, w, h);
}

function drawCRTMonitor(
  ctx: CanvasRenderingContext2D,
  cx: number, baseY: number,
  w: number, t: number, sc: Scene
) {
  const bezelH = w * 0.80, neckH = w * 0.13, neckW = w * 0.20;
  const standH = w * 0.08, standW = w * 0.58, pad = w * 0.09;
  ctx.fillStyle = "#07011a";
  ctx.fillRect(cx - standW / 2, baseY - standH, standW, standH);
  ctx.fillRect(cx - neckW / 2,  baseY - standH - neckH, neckW, neckH);
  ctx.fillRect(cx - w / 2,      baseY - standH - neckH - bezelH, w, bezelH);
  const sTop = baseY - standH - neckH - bezelH + pad;
  const sH = bezelH - pad * 2, sW = w - pad * 2;
  const pulse = 0.09 + 0.04 * Math.sin(t * 0.9 + cx * 0.01);
  const sg = ctx.createRadialGradient(cx, sTop + sH / 2, 0, cx, sTop + sH / 2, sW * 0.65);
  sg.addColorStop(0,    rgba(sc.monGlow0, pulse));
  sg.addColorStop(0.55, rgba(sc.monGlow1, pulse * 0.55));
  sg.addColorStop(1,    "rgba(0,0,0,0)");
  ctx.fillStyle = sg;
  ctx.fillRect(cx - sW / 2, sTop, sW, sH);
  ctx.strokeStyle = rgba(sc.silStroke, 0.18);
  ctx.lineWidth = 0.5;
  ctx.strokeRect(cx - w / 2, baseY - standH - neckH - bezelH, w, bezelH);
}

function drawDesktopTower(
  ctx: CanvasRenderingContext2D,
  cx: number, baseY: number,
  w: number, h: number, sc: Scene
) {
  const x = cx - w / 2;
  ctx.fillStyle = "#07011a";
  ctx.fillRect(x, baseY - h, w, h);
  ctx.strokeStyle = rgba(sc.silStroke, 0.15);
  ctx.lineWidth = 0.5;
  for (let i = 0; i < 3; i++) {
    const slotH = Math.max(2, w * 0.09);
    ctx.strokeRect(x + 3, baseY - h * 0.88 + i * (slotH + 3), w - 6, slotH);
  }
  ctx.fillStyle = "rgba(80,180,255,0.80)";
  ctx.beginPath();
  ctx.arc(cx, baseY - h * 0.10, Math.max(1.5, w * 0.06), 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = rgba(sc.silStroke, 0.22);
  ctx.lineWidth = 0.5;
  ctx.strokeRect(x, baseY - h, w, h);
}

// ─── CPU chip ─────────────────────────────────────────────────────────────────

function drawChip(
  ctx: CanvasRenderingContext2D,
  cx: number, horizonY: number,
  chipSize: number, t: number,
  sc: Scene, skyGrad: CanvasGradient
) {
  const chipCy = horizonY - chipSize * sc.sunRiseOffset;
  const chipX  = cx - chipSize / 2;
  const chipY  = chipCy - chipSize / 2;
  const pinLen = chipSize * 0.22;
  const PIN_N  = 6;
  const pinStep = chipSize / (PIN_N + 1);
  const pulse  = 0.85 + 0.15 * Math.sin(t * 2.0);

  // Outer ambient glow
  const glow = ctx.createRadialGradient(cx, chipCy, 0, cx, chipCy, chipSize * 2.2);
  glow.addColorStop(0,    rgba(sc.chipGlowIn,  0.30 * pulse));
  glow.addColorStop(0.35, rgba(sc.chipGlowMid, 0.16 * pulse));
  glow.addColorStop(0.70, rgba(sc.chipGlowOut, 0.06 * pulse));
  glow.addColorStop(1,    "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, chipCy, chipSize * 2.2, 0, Math.PI * 2);
  ctx.fill();

  // Pins on all four sides
  const capR = Math.max(1.2, chipSize * 0.014);
  for (let i = 0; i < PIN_N; i++) {
    const off = pinStep + i * pinStep;
    const pins: [number, number, number, number][] = [
      [chipX + off,      chipY,            chipX + off,              chipY - pinLen],
      [chipX + off,      chipY + chipSize, chipX + off,              chipY + chipSize + pinLen],
      [chipX,            chipY + off,      chipX - pinLen,            chipY + off],
      [chipX + chipSize, chipY + off,      chipX + chipSize + pinLen, chipY + off],
    ];
    for (const [fx, fy, tx, ty] of pins) {
      ctx.strokeStyle = rgba(sc.chipPin, 0.60 * pulse);
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.fillStyle = rgba(sc.chipPinCap, 0.80 * pulse);
      ctx.beginPath(); ctx.arc(tx, ty, capR, 0, Math.PI * 2); ctx.fill();
    }
  }

  // Chip body
  const bodyG = ctx.createLinearGradient(chipX, chipY, chipX + chipSize, chipY + chipSize);
  bodyG.addColorStop(0,   rgba(sc.chipBody0, 1));
  bodyG.addColorStop(0.5, rgba(sc.chipBody1, 1));
  bodyG.addColorStop(1,   rgba(sc.chipBody2, 1));
  ctx.fillStyle = bodyG;
  ctx.fillRect(chipX, chipY, chipSize, chipSize);
  ctx.strokeStyle = rgba(sc.chipBorder, 0.65 * pulse);
  ctx.lineWidth = 1.5;
  ctx.strokeRect(chipX, chipY, chipSize, chipSize);

  // Clip body region for die + stripes
  ctx.save();
  ctx.beginPath();
  ctx.rect(chipX, chipY, chipSize, chipSize);
  ctx.clip();

  // Die fill
  const dieSize = chipSize * 0.50;
  const dieX    = cx - dieSize / 2;
  const dieY    = chipCy - dieSize / 2;
  const dieG    = ctx.createLinearGradient(dieX, dieY, dieX + dieSize, dieY + dieSize);
  dieG.addColorStop(0,   rgba(sc.chipDie0, 0.18 * pulse));
  dieG.addColorStop(0.5, rgba(sc.chipDie1, 0.13 * pulse));
  dieG.addColorStop(1,   rgba(sc.chipDie2, 0.07 * pulse));
  ctx.fillStyle = dieG;
  ctx.fillRect(dieX, dieY, dieSize, dieSize);

  // Crosshatch
  ctx.strokeStyle = rgba(sc.chipDie0, 0.14 * pulse);
  ctx.lineWidth = 0.5;
  for (let i = 1; i < 5; i++) {
    const sp = dieSize / 5;
    ctx.beginPath(); ctx.moveTo(dieX, dieY + i*sp); ctx.lineTo(dieX + dieSize, dieY + i*sp); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(dieX + i*sp, dieY); ctx.lineTo(dieX + i*sp, dieY + dieSize); ctx.stroke();
  }
  ctx.strokeStyle = rgba(sc.chipBorder, 0.45 * pulse);
  ctx.lineWidth = 1;
  ctx.strokeRect(dieX, dieY, dieSize, dieSize);

  // Stripe bands: repaint sky gradient over lower half to fake transparent holes
  const stripeTop    = chipCy;
  const stripeBottom = Math.min(chipCy + chipSize * 0.5, horizonY);
  const stripeH      = stripeBottom - stripeTop;
  if (stripeH > 2) {
    ctx.fillStyle = skyGrad;
    const NUM_STRIPES = 9;
    for (let i = 0; i < NUM_STRIPES; i++) {
      const frac  = (i + 0.5) / NUM_STRIPES;
      const y     = stripeTop + frac * stripeH;
      const bandH = (stripeH / NUM_STRIPES) * (0.28 + frac * 0.28);
      ctx.fillRect(chipX - 1, y - bandH / 2, chipSize + 2, bandH);
    }
  }

  ctx.restore();

  // Pin-1 corner notch
  ctx.fillStyle = rgba(sc.chipPinCap, 0.65 * pulse);
  ctx.beginPath();
  ctx.arc(chipX + chipSize * 0.08, chipY + chipSize * 0.08, Math.max(2, chipSize * 0.03), 0, Math.PI * 2);
  ctx.fill();
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroBg() {
  const { resolvedTheme } = useTheme();
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<number>(0);
  const targetRef   = useRef<number>(0);
  const firstLoad   = useRef<boolean>(true);

  useEffect(() => {
    const next = resolvedTheme === "light" ? 1 : 0;
    targetRef.current = next;
    if (firstLoad.current) {
      progressRef.current = next;
      firstLoad.current = false;
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let prevTs: number | null = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (ts: number) => {
      const dt    = prevTs !== null ? (ts - prevTs) / 1000 : 0;
      prevTs = ts;
      const safeDt = Math.min(dt, 0.1);

      progressRef.current += (targetRef.current - progressRef.current) * safeDt * 2.0;
      const p  = Math.max(0, Math.min(1, progressRef.current));
      const sc = buildScene(p);
      const anim = ts / 1000;

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (!W || !H) { rafId = requestAnimationFrame(draw); return; }

      const horizonY = H * 0.52;
      const cx       = W / 2;
      const chipSize = Math.min(W, H) * 0.14;

      // ── 1. Sky ────────────────────────────────────────────────────
      const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY);
      skyGrad.addColorStop(0,    rgba(sc.sky[0], 1));
      skyGrad.addColorStop(0.42, rgba(sc.sky[1], 1));
      skyGrad.addColorStop(0.78, rgba(sc.sky[2], 1));
      skyGrad.addColorStop(1,    rgba(sc.sky[3], 1));
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, horizonY);

      // ── 2. Ground ─────────────────────────────────────────────────
      ctx.fillStyle = rgba(sc.sky[0], 1);
      ctx.fillRect(0, horizonY, W, H - horizonY);

      // ── 3. Chip ───────────────────────────────────────────────────
      drawChip(ctx, cx, horizonY, chipSize, anim, sc, skyGrad);

      // ── 4. Tech silhouettes ───────────────────────────────────────
      drawServerRack(ctx, W * 0.055, horizonY, W * 0.040, H * 0.210, anim, sc);
      drawDesktopTower(ctx, W * 0.125, horizonY, W * 0.030, H * 0.155, sc);
      drawCRTMonitor(ctx, W * 0.205, horizonY, W * 0.082, anim, sc);
      drawCRTMonitor(ctx, W * 0.795, horizonY, W * 0.082, anim, sc);
      drawDesktopTower(ctx, W * 0.875, horizonY, W * 0.030, H * 0.155, sc);
      drawServerRack(ctx, W * 0.945, horizonY, W * 0.040, H * 0.210, anim, sc);

      // ── 5. Grid ───────────────────────────────────────────────────
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, horizonY, W, H - horizonY);
      ctx.clip();

      const VLINES = 14, HLINES = 10, CYCLE = 3.5;
      const scroll = (anim % CYCLE) / CYCLE;

      for (let i = 0; i <= VLINES; i++) {
        const bx   = (i / VLINES) * W;
        const dist = Math.abs(i / VLINES - 0.5) * 2;
        ctx.strokeStyle = rgba(sc.gridRgb, 0.22 * (1 - dist * 0.42));
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx, horizonY); ctx.lineTo(bx, H); ctx.stroke();
      }
      for (let i = 0; i < HLINES + 1; i++) {
        const raw   = ((i / HLINES) + scroll) % 1.0;
        const depth = Math.pow(raw, 1.6);
        const y     = horizonY + depth * (H - horizonY);
        if (y >= H) continue;
        ctx.strokeStyle = rgba(sc.gridRgb, 0.08 + 0.22 * depth);
        ctx.lineWidth   = 0.5 + depth * 1.5;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.restore();

      // ── 6. Horizon glow + line ────────────────────────────────────
      const hg = ctx.createLinearGradient(0, horizonY - 55, 0, horizonY + 35);
      hg.addColorStop(0,    rgba(sc.hGlowTop, 0));
      hg.addColorStop(0.35, rgba(sc.hGlowTop, 0.22));
      hg.addColorStop(0.55, rgba(sc.hGlowMid, 0.14));
      hg.addColorStop(0.80, rgba(sc.hGlowMid, 0.06));
      hg.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.fillStyle = hg;
      ctx.fillRect(0, horizonY - 55, W, 90);

      const lg = ctx.createLinearGradient(0, 0, W, 0);
      lg.addColorStop(0,    rgba(sc.hLine, 0));
      lg.addColorStop(0.12, rgba(sc.hLine, 0.85));
      lg.addColorStop(0.50, rgba(sc.hLine, 1));
      lg.addColorStop(0.88, rgba(sc.hLine, 0.85));
      lg.addColorStop(1,    rgba(sc.hLine, 0));
      ctx.strokeStyle = lg;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, horizonY); ctx.lineTo(W, horizonY); ctx.stroke();

      // ── 7. Vignette ───────────────────────────────────────────────
      const vig = ctx.createRadialGradient(cx, H * 0.5, H * 0.05, cx, H * 0.5, H * 0.88);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.82)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
