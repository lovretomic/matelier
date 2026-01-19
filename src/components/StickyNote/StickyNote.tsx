import StickyNoteBack from "../../assets/images/sticky-note.svg?react";
import c from "./StickyNote.module.scss";

const StickyNote = () => {
  return (
    <div className={c.wrapper}>
      <StickyNoteBack className={c.background} />
      <div className={c.titleWrapper}>
        <h4 className={c.title}>Naslov kartice</h4>
        <p className={c.subtitle}>Podnaslov</p>
      </div>
      <div className={c.contentWrapper}></div>
    </div>
  );
};

export default StickyNote;
