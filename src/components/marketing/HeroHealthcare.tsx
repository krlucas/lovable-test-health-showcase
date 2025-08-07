import heroImage from "@/assets/hero-healthcare.jpg";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { Stethoscope, ShieldCheck, ActivitySquare } from "lucide-react";

const HeroHealthcare = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--pointer-x", `${x}px`);
      el.style.setProperty("--pointer-y", `${y}px`);
    };

    const onLeave = () => {
      el.style.setProperty("--glow-opacity", "0");
    };
    const onEnter = () => {
      el.style.setProperty("--glow-opacity", "1");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-hero pointer-glow">
      <nav className="container flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero shadow-glow" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">Horsey WorkFlYo for Healthcare</span>
        </a>
        <div className="flex items-center gap-3">
          <Button variant="ghost">Solutions</Button>
          <Button variant="ghost">Customers</Button>
          <Button variant="hero">Build a WorkFlYo</Button>
        </div>
      </nav>

      <div ref={glowRef} className="container grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10 flex flex-col items-start gap-6">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
            HIPAA-ready • AI-powered workflow design
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Design healthcare workflows in minutes with GenAI
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            From prior authorization to care management, blueprint and launch secure, compliant processes fast—aligned to payer and provider best practices.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg">Build your WorkFlYo</Button>
            <Button variant="outline" size="lg">Watch demo</Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Doctors collaborating on an AI-powered healthcare WorkFlYo interface"
            loading="lazy"
            className="mx-auto w-full max-w-2xl rounded-xl border shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export const FeaturesHealthcare = () => (
  <section className="container py-16 md:py-24">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Supercharge healthcare operations</h2>
      <p className="mt-3 text-muted-foreground">
        Combine clinical expertise with AI to streamline authorization, intake, and utilization review while staying compliant.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <article className="feature-card">
        <div className="feature-icon">
          <Stethoscope />
        </div>
        <h3 className="feature-title">Faster prior authorization</h3>
        <p className="feature-copy">Auto-generate workflows that collect evidence, validate coverage, and route to the right clinicians.</p>
      </article>

      <article className="feature-card">
        <div className="feature-icon">
          <ShieldCheck />
        </div>
        <h3 className="feature-title">Compliance by design</h3>
        <p className="feature-copy">Bake in HIPAA, PHI handling, and audit trails with reusable policy patterns and guardrails.</p>
      </article>

      <article className="feature-card">
        <div className="feature-icon">
          <ActivitySquare />
        </div>
        <h3 className="feature-title">Care management automation</h3>
        <p className="feature-copy">Triage referrals, evaluate risk, and coordinate interventions with AI-supported pathways.</p>
      </article>
    </div>
  </section>
);

export const CTAHealthcare = () => (
  <aside className="container py-16 md:py-24">
    <div className="cta-panel">
      <div>
        <h3 className="text-2xl font-semibold md:text-3xl">Ready to transform member and patient journeys?</h3>
        <p className="mt-2 max-w-2xl text-muted-foreground">Create your first healthcare WorkFlYo and see how fast you can go from idea to governed, production-ready workflows.</p>
      </div>
      <div className="flex gap-3">
        <Button variant="hero" size="lg">Start now</Button>
        <Button variant="outline" size="lg">Talk to an expert</Button>
      </div>
    </div>
  </aside>
);

export default HeroHealthcare;
