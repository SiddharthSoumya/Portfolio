import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";

function SocialLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <span>{label}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <motion.div className="hero__content" {...entrance}>
        <p className="eyebrow"><span className="status-dot" /> Computer Science · Vellore Institute of Technology</p>
        <h1 id="hero-title">
          Backend Developer <span>Intern</span> at Emerald Windows.
        </h1>
        <p className="hero__intro">{profile.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#contact">
            Contact me <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          {profile.resumePath && (
            <a className="button button--quiet" href={profile.resumePath} download>
              Resume PDF
            </a>
          )}
        </div>
        <div className="hero__socials">
          <SocialLink href={profile.github} label="GitHub">
            <Code2 size={16} aria-hidden="true" />
          </SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn">
            <BriefcaseBusiness size={16} aria-hidden="true" />
          </SocialLink>
          <span className="hero__location">{profile.location}</span>
        </div>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
      >
        <div className="hero__image-frame">
          <img
            src="/profile-placeholder.svg"
            alt="Portrait of Siddharth Soumya."
            width="720"
            height="860"
            fetchPriority="high"
          />
          <div className="hero__image-note">
            <span>01 / INTRODUCTION</span>
          </div>
        </div>
      </motion.div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
