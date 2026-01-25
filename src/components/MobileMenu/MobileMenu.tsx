import type React from "react";
import { sections, type SectionData } from "../../App";
import c from "./MobileMenu.module.scss";

import LogoBig from "../../assets/icons/logo-big.svg?react";

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

  return (
    <div
      className={c.mobileMenu}
      style={{ transform: `translateX(${isOpen ? "0%" : "100%"})` }}
    >
      <LogoBig className={c.logo} />
      <nav className={c.navigation}>
        {sections.map((section) => (
          <button
            className={c.item}
            onClick={() => handleItemClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
