import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <Card className="project-card">
        <CardContent>
          <div className="project-card__topline">
            <span className="project-card__index">0{index + 1}</span>
            <Badge>{project.status}</Badge>
          </div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-card__description">{project.description}</p>
          <dl className="project-card__details">
            <div><dt>Problem</dt><dd>{project.problem}</dd></div>
            <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
          </dl>
          <ul className="project-card__tags" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => <li key={technology}><Badge>{technology}</Badge></li>)}
          </ul>
          <div className="project-card__links">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer"><Code2 size={15} aria-hidden="true" /> Repository <ArrowUpRight size={13} aria-hidden="true" /></a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} aria-hidden="true" /></a>
            )}
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section-shell section" id="projects" aria-labelledby="projects-title">
      <Reveal>
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">03 / Projects</p>
            <h2 id="projects-title">Projects.</h2>
          </div>
        </div>
      </Reveal>
      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      ) : (
        <p className="projects-empty">No public projects yet.</p>
      )}
    </section>
  );
}
