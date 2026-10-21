import { Compass, Layers3, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const approach = [
  {
    icon: Wrench,
    title: "Learn by building",
    text: "Turn concepts into small, working implementations and learn from the details.",
  },
  {
    icon: Layers3,
    title: "Look beyond the UI",
    text: "Understand how application architecture, infrastructure, and deployment fit together.",
  },
  {
    icon: Compass,
    title: "Stay curious",
    text: "Ask clear questions, experiment thoughtfully, and improve through iteration.",
  },
];

export default function About() {
  return (
    <section className="section-shell section" id="about" aria-labelledby="about-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">01 / A little context</p>
          <h2 id="about-title">Interested in how the whole system works.</h2>
        </div>
        <div className="about__body">
          <p className="about__lead">
            I’m pursuing a B.Sc. in Computer Science while gaining experience through a software development internship.
            I’m building my foundations in software engineering and exploring backend development, infrastructure, and
            deployment.
          </p>
          <p>
            I learn best by implementing ideas, testing assumptions, and understanding the path from a local change to
            a reliable release. This portfolio is one small part of that process.
          </p>
        </div>
      </Reveal>
      <div className="about__approach">
        {approach.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.08}>
            <article className="approach-item">
              <span className="approach-item__icon"><Icon size={19} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
