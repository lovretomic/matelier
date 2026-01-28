import type React from "react";
import c from "./MobileMenu.module.scss";

import LogoBig from "../../assets/icons/logo-big.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import { useEffect } from "react";
import { formsLink, type SectionData } from "../../data";

type MobileMenuType = {
  isOpen: boolean;
  sections: SectionData[];
  onClose: () => void;
  onNavigate: (id: string) => void;
};

const MobileMenu: React.FC<MobileMenuType> = ({
  isOpen,
  sections,
  onClose,
  onNavigate,
}) => {
  function handleItemClick(sectionId: string) {
    onClose();
    onNavigate(sectionId);
  }

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div
      className={c.mobileMenu}
      style={{ transform: `translateX(${isOpen ? "0%" : "100%"})` }}
    >
      <button className={c.closeButton} onClick={onClose}>
        <CloseIcon />
      </button>
      <LogoBig
        className={c.logo}
        onClick={() => handleItemClick("section-hero")}
      />
      <nav className={c.navigation}>
        {sections.map((section, index) => (
          <button
            className={c.item}
            onClick={() => handleItemClick(section.id)}
            key={index}
          >
            {section.label}
          </button>
        ))}
        <button
          className="apply-button"
          onClick={() => {
            window.open(formsLink, "_blank");
          }}
        >
          Prijavi se!
        </button>
      </nav>
    </div>
  );
};

export default MobileMenu;
