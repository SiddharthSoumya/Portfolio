import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

function ContactLink({ href, label, icon: Icon }) {
  if (!href) return null;
  const isEmail = href.startsWith("mailto:");
  return (
    <a className="contact-link" href={href} target={isEmail ? undefined : "_blank"} rel={isEmail ? undefined : "noreferrer"}>
      <span className="contact-link__icon"><Icon size={18} aria-hidden="true" /></span>
      <span>{label}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export default function Contact() {
  return (
    <section className="section-shell section contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <div className="contact-section__copy">
          <p className="eyebrow">06 / Get in touch</p>
          <h2 id="contact-title">Good work starts with a conversation.</h2>
          <p>For backend engineering opportunities and professional connections, reach out on LinkedIn or GitHub.</p>
        </div>
        <div className="contact-section__links">
          <ContactLink href={profile.email ? `mailto:${profile.email}` : ""} label={profile.email} icon={Mail} />
          <ContactLink href={profile.github} label="GitHub" icon={Code2} />
          <ContactLink href={profile.linkedin} label="LinkedIn" icon={BriefcaseBusiness} />
        </div>
      </Reveal>
    </section>
  );
}
