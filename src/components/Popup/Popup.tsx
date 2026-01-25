import type React from "react";
import c from "./Popup.module.scss";
import { useEffect } from "react";
import CloseIcon from "../../assets/icons/close.svg?react";

type PopupProps = {
  id: string;
  openId: string | null;
  onClose: () => void;
  children?: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ children, id, openId, onClose }) => {
  const isOpen = id === openId;

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={c.background} onClick={onClose}>
      <div className={c.popup} onClick={(e) => e.stopPropagation()}>
        <button
          className={c.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          <CloseIcon className={c.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
