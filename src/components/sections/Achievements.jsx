import { ArrowUpRight, Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section className="section-shell section" id="achievements" aria-labelledby="achievements-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">05 / Milestones</p>
          <h2 id="achievements-title">Achievements & certifications.</h2>
        </div>
      </Reveal>
      {achievements.length ? (
        <div className="achievement-grid">
          {achievements.map((item) => (
            <Card key={item.title}>
              <CardContent className="achievement-card">
                <Award size={20} aria-hidden="true" />
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                {item.url && <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Verify ${item.title}`}><ArrowUpRight size={16} /></a>}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-state__icon"><Award size={20} aria-hidden="true" /></span>
          <div>
            <h3>No verified milestones added yet.</h3>
            <p>Add certifications, awards, contributions, or other verifiable achievements to <code>src/data/portfolio.js</code> when ready.</p>
          </div>
        </div>
      )}
    </section>
  );
}
