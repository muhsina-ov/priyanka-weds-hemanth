import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Aurora from "@/components/Aurora";
import PetalRain from "@/components/PetalRain";
import { invite } from "@/config";

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* Couple photo — uses the family's uploaded portrait.
   Save the 2nd uploaded picture as public/assets/couple-photo.jpg.
   Falls back to the bundled illustration if not yet added. */
function CouplePhoto() {
  const [src, setSrc] = useState("/assets/couple-photo.jpg");
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      animate="show"
      custom={1.05}
      className="animate-float mt-6 w-72 sm:w-96"
    >
      <div className="card-frame rounded-[2rem] p-2.5">
        <img
          src={src}
          onError={() => {
            if (src !== "/assets/couple.png") setSrc("/assets/couple.png");
          }}
          alt={`${invite.groomFull} and ${invite.brideFull}`}
          className="h-auto w-full rounded-[1.6rem] object-cover"
        />
      </div>
      <p className="mt-3 font-serif-body italic text-sm text-[hsl(var(--foreground)/0.65)]">
        {invite.groomFull} &amp; {invite.brideFull}
      </p>
    </motion.div>
  );
}

/* Lord Ganesha — uses the family's 1st uploaded picture.
   Save it as public/assets/ganesha-photo.jpg (same circle size).
   Falls back to the bundled illustration if not yet added. */
function GaneshaPhoto() {
  const [src, setSrc] = useState("/assets/ganesha-photo.jpg");
  return (
    <div className="animate-glow overflow-hidden rounded-full border-2 border-[hsl(var(--gold)/0.6)] shadow-[0_18px_40px_-12px_rgba(120,62,8,0.4)]">
      <img
        src={src}
        onError={() => {
          if (src !== "/assets/ganesha.svg") setSrc("/assets/ganesha.svg");
        }}
        alt="Lord Ganesha"
        className="h-28 w-28 sm:h-36 sm:w-36 object-cover"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex flex-col">
      {/* Layer 1 — aurora glow (React Bits) */}
      <div className="absolute inset-0 opacity-40">
        <Aurora colorStops={["#F6B93B", "#E0476A", "#7FB069"]} amplitude={1.15} blend={0.6} speed={0.55} />
      </div>
      {/* Layer 2 — ivory paper texture above aurora */}
      <img
        src="/assets/bg-texture.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      {/* Layer 3 — falling petals */}
      <PetalRain count={14} />

      {/* Marigold toran — in flow, spans the full width, content flows below it */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-20 w-full"
      >
        <img src="/assets/toran-top.png" alt="" className="animate-sway block w-full" />
      </motion.div>

      {/* Banana leaves framing the bottom corners */}
      <img
        src="/assets/banana-leaves.png"
        alt=""
        className="pointer-events-none absolute -bottom-3 -left-4 w-48 sm:w-72 z-10"
      />
      <img
        src="/assets/banana-leaves.png"
        alt=""
        className="pointer-events-none absolute -bottom-3 -right-4 w-48 sm:w-72 -scale-x-100 z-10"
      />

      {/* Centre content — fills the space under the toran */}
      <div className="relative z-30 flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-2 text-center">
        {/* Lord Ganesha — first frame, blessings on top */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0.05}
          className="flex flex-col items-center"
        >
          <GaneshaPhoto />
          <p className="mt-2 font-caps text-[10px] sm:text-xs text-[hsl(var(--sindoor))]">
            Sri Ganeshaya Namah
          </p>
        </motion.div>

        <motion.p variants={rise} initial="hidden" animate="show" custom={0.15}
          className="mt-4 font-caps text-[11px] sm:text-sm text-[hsl(var(--leaf))]">
          {invite.greetingTelugu} · {invite.greetingEnglish}
        </motion.p>

        <motion.h1 variants={rise} initial="hidden" animate="show" custom={0.35}
          className="mt-4 font-script text-6xl sm:text-8xl leading-[1.05] text-gradient-sindoor animate-shimmer">
          {invite.groomFirst}
        </motion.h1>

        <motion.div variants={rise} initial="hidden" animate="show" custom={0.5}
          className="ornament-divider my-2">
          <span className="font-script text-3xl sm:text-4xl text-gradient-gold">weds</span>
        </motion.div>

        <motion.h1 variants={rise} initial="hidden" animate="show" custom={0.65}
          className="font-script text-6xl sm:text-8xl leading-[1.05] text-gradient-sindoor animate-shimmer">
          {invite.brideFirst}
        </motion.h1>

        <motion.p variants={rise} initial="hidden" animate="show" custom={0.75}
          className="mt-3 font-serif-body text-base sm:text-lg text-[hsl(var(--foreground)/0.75)]">
          {invite.groomFull} &amp; {invite.brideFull}
        </motion.p>

        <motion.p variants={rise} initial="hidden" animate="show" custom={0.85}
          className="mt-4 font-caps text-xs sm:text-base text-[hsl(var(--foreground))] tracking-[0.35em]">
          02 · 12 · 2026 &nbsp;·&nbsp; 03 · 12 · 2026
        </motion.p>

        {/* Couple anime portrait — after Lord Ganesha */}
        <CouplePhoto />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-[hsl(var(--gold))]"
      >
        <ChevronDown className="animate-scroll-hint" size={26} />
      </motion.div>
    </section>
  );
}
