import type React from "react";
import type { SectionData } from "../../App";
import c from "./MobileMenu.module.scss";

type MobileMenuType = {
  isOpen: boolean;
  sections: SectionData[];
  onNavigate: (id: string) => {};
};

const MobileMenu: React.FC<MobileMenuType> = ({ isOpen }) => {
  return (
    <div
      className={c.mobileMenu}
      style={{ transform: `translateX(${isOpen ? "0%" : "100%"})` }}
    ></div>
  );
};

export default MobileMenu;
