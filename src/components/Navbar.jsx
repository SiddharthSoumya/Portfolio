import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
        <span className="wordmark__mark" aria-hidden="true">
          SS
        </span>
        <span className="wordmark__name">Siddharth Soumya</span>
      </a>

      <nav id="primary-navigation" className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a className="nav__link" href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        {profile.resumePath ? (
          <a className="nav__resume" href={profile.resumePath} download>
            Resume
          </a>
        ) : (
          <span className="nav__resume nav__resume--unavailable" title="Add your resume PDF to enable this link">
            Resume soon
          </span>
        )}
      </nav>

      <div className="nav__actions">
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </Button>
        <Button
          ref={menuButtonRef}
          className="nav__menu-button"
          variant="ghost"
          size="icon"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </Button>
      </div>
    </header>
  );
}
