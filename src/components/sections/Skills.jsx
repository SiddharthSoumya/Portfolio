import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="section-shell section section--subtle" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">02 / Skills</p>
          <h2 id="skills-title">Skills & technologies.</h2>
        </div>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="skill-group">
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => <li key={skill}><Badge>{skill}</Badge></li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
