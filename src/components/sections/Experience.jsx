import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const icons = {
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
};

export default function Experience() {
  return (
    <section className="section-shell section section--subtle" id="experience" aria-labelledby="experience-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">04 / Experience & education</p>
          <h2 id="experience-title">The starting points.</h2>
        </div>
      </Reveal>
      <div className="timeline">
        {experience.map((item, index) => {
          const Icon = icons[item.kind];
          return (
            <Reveal key={item.kind} delay={index * 0.08}>
              <article className="timeline-item">
                <span className="timeline-item__icon"><Icon size={18} aria-hidden="true" /></span>
                <div className="timeline-item__main">
                  <p className="eyebrow">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-item__organization">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
                <span className="timeline-item__date">{item.period}</span>
              </article>
            </Reveal>
          );
        })}
      </div>
      <p className="content-note">Replace bracketed placeholders in <code>src/data/portfolio.js</code> with verified details.</p>
    </section>
  );
}
