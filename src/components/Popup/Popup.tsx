import type React from "react";
import c from "./Popup.module.scss";

type PopupProps = {
  id: string;
  openId: string | null;
  onClose: () => void;
  children?: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ children, id, openId, onClose }) => {
  if (id !== openId) return null;

  return (
    <div className={c.background}>
      <div className={c.popup} onClick={onClose}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
