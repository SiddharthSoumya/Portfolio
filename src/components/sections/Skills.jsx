import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="section-shell section section--subtle" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">02 / Tools & technologies</p>
            <h2 id="skills-title">A working set, still growing.</h2>
          </div>
          <p className="section-heading__aside"><Code2 size={17} aria-hidden="true" /> An editable list, not a proficiency ranking.</p>
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
      <p className="content-note">
        Example skills are provided as editable starter content. Keep only tools you’ve actually used, and adjust the
        list in <code>src/data/portfolio.js</code>.
      </p>
    </section>
  );
}
