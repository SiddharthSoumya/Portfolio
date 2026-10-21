import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

function ContactLink({ href, label, icon: Icon }) {
  return href ? (
    <a className="contact-link" href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"}>
      <span className="contact-link__icon"><Icon size={18} aria-hidden="true" /></span>
      <span>{label}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  ) : (
    <div className="contact-link contact-link--missing">
      <span className="contact-link__icon"><Icon size={18} aria-hidden="true" /></span>
      {/* <span>{label} <small>— add your URL in src/data/portfolio.js</small></span> */}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="section-shell section contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <div className="contact-section__copy">
          <p className="eyebrow">06 / Get in touch</p>
          <h2 id="contact-title">Good work starts with a conversation.</h2>
          <p>If you’d like to connect about software, learning, or an opportunity, I’d be glad to hear from you.</p>
        </div>
        <div className="contact-section__links">
          <ContactLink href={profile.email ? `mailto:${profile.email}` : ""} label={profile.email || "Email address not added"} icon={Mail} />
          <ContactLink href={profile.github} label="GitHub" icon={Code2} />
          <ContactLink href={profile.linkedin} label="LinkedIn" icon={BriefcaseBusiness} />
        </div>
      </Reveal>
    </section>
  );
}
