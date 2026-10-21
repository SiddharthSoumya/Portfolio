import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="section-shell section" id="about" aria-labelledby="about-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">01 / About</p>
          <h2 id="about-title">Computer Science at VIT. Backend engineering at Emerald Windows.</h2>
        </div>
        <div className="about__body">
          <p className="about__lead">
            I’m pursuing a Computer Science degree at Vellore Institute of Technology and working as a Backend Developer
            Intern at Emerald Windows. I’m a Reliance Foundation Scholar.
          </p>
          <p>
            I work with Java and Spring Boot, and I’m interested in backend systems, cloud technologies, and deployment.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
