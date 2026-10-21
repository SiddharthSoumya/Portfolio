import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <Separator />
      <div className="site-footer__inner">
        <a className="site-footer__name" href="#home">
          Siddharth Soumya
        </a>
        <p>Backend Developer Intern · Emerald Windows</p>
        <div className="site-footer__links" aria-label="Footer links">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Code2 size={17} aria-hidden="true" />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <BriefcaseBusiness size={17} aria-hidden="true" />
            </a>
          )}
          <a href="#home" aria-label="Back to top">
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <small>© {currentYear} Siddharth Soumya</small>
      </div>
    </footer>
  );
}
