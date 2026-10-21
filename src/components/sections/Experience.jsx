import { Award, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const icons = {
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
  Scholarship: Award,
};

export default function Experience() {
  return (
    <section className="section-shell section section--subtle" id="experience" aria-labelledby="experience-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">04 / Experience & education</p>
          <h2 id="experience-title">Work and education.</h2>
        </div>
      </Reveal>
      <div className="timeline">
        {experience.map((item, index) => {
          const Icon = icons[item.kind];
          return (
            <Reveal key={`${item.kind}-${item.title}`} delay={index * 0.08}>
              <article className="timeline-item">
                <span className="timeline-item__icon"><Icon size={18} aria-hidden="true" /></span>
                <div className="timeline-item__main">
                  <p className="eyebrow">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-item__organization">{item.organization}</p>
                  {item.detail && <p>{item.detail}</p>}
                </div>
                <span className="timeline-item__date">{item.period}</span>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
